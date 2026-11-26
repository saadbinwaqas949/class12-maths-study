/* core.js: data model, content parsers and the Markdown + math renderer.
 *
 * Content files call M12.addConcepts / M12.addQuestions / M12.addMCQs with a
 * String.raw template written in a small line-based format:
 *
 *   #C concept-id Concept title          (concept block)
 *   #Q 1.1 1(i)                          (question block: exercise + number)
 *   #M                                   (multiple-choice block)
 *
 * Inside a block, a line "KEY: value" starts a field; any other line continues
 * the previous field. Keys are single capitals (plus a few lowercase words).
 */
(function (g) {
  'use strict';
  const M12 = (g.M12 = g.M12 || {});
  M12.units = [];
  M12.unitByNo = {};
  M12.concepts = {};
  M12.conceptOrder = [];
  M12.questions = {};
  M12.qOrder = [];
  M12.mcqs = [];
  M12.errors = [];

  const list = (s) => (s || '').split(',').map((x) => x.trim()).filter(Boolean);
  M12.list = list;

  /* ---------- block parser ---------- */
  const HEAD = /^#([CQM])(?:\s+(.*))?$/;
  const FIELD = /^(ex|no|ref|pre|see|c|lvl|[A-Z]\*?|!):(?:[ \t]|$)(.*)$/;

  function parseBlocks(text) {
    const lines = String(text).replace(/\r\n?/g, '\n').split('\n');
    const blocks = [];
    let cur = null;
    let field = null;
    for (const raw of lines) {
      const h = raw.match(HEAD);
      if (h) {
        cur = { kind: h[1], head: (h[2] || '').trim(), fields: [] };
        blocks.push(cur);
        field = null;
        continue;
      }
      if (!cur) continue;
      const f = raw.match(FIELD);
      if (f) {
        field = { k: f[1], v: f[2] };
        cur.fields.push(field);
        continue;
      }
      if (field) field.v += '\n' + raw;
    }
    for (const b of blocks) for (const f of b.fields) f.v = f.v.replace(/\s+$/, '');
    return blocks;
  }
  M12.parseBlocks = parseBlocks;

  /* ---------- units ---------- */
  M12.defUnit = function (u) {
    u.exercises = u.exercises || [];
    M12.units.push(u);
    M12.unitByNo[u.n] = u;
  };

  /* ---------- concepts ---------- */
  M12.addConcepts = function (unit, text) {
    for (const b of parseBlocks(text)) {
      if (b.kind !== 'C') continue;
      const sp = b.head.indexOf(' ');
      const id = sp < 0 ? b.head : b.head.slice(0, sp);
      const c = { id, title: sp < 0 ? id : b.head.slice(sp + 1).trim(), unit, pre: [], see: [], R: '', F: '', B: '', X: '', E: [], M: [] };
      for (const { k, v } of b.fields) {
        if (k === 'pre') c.pre = list(v);
        else if (k === 'see') c.see = list(v);
        else if (k === 'E' || k === 'M') c[k].push(v);
        else if (k === 'R' || k === 'F' || k === 'B' || k === 'X') c[k] = c[k] ? c[k] + '\n\n' + v : v;
        else M12.errors.push(`concept ${id}: unknown field "${k}"`);
      }
      if (M12.concepts[id]) M12.errors.push(`duplicate concept id ${id}`);
      M12.concepts[id] = c;
      M12.conceptOrder.push(id);
    }
  };

  /* ---------- questions ---------- */
  const normNo = (no) => no.replace(/[()\s]/g, '').replace(/[^0-9a-z.]/gi, '');
  M12.addQuestions = function (unit, text) {
    for (const b of parseBlocks(text)) {
      if (b.kind !== 'Q') continue;
      const [ex, ...rest] = b.head.split(/\s+/);
      const no = rest.join(' ');
      const id = ex + '-' + normNo(no);
      const q = { id, unit, ex, no, ref: '', Q: '', N: '', A: '', T: [], H: [], L: '', plots: [], steps: [] };
      let st = null;
      for (const { k, v } of b.fields) {
        switch (k) {
          case 'Q': q.Q = v; break;
          case 'N': q.N = q.N ? q.N + '\n\n' + v : v; break;
          case 'A': q.A = v; break;
          case 'T': q.T = list(v); break;
          case 'H': q.H.push(v); break;
          case 'L': q.L = v.trim(); break;
          case 'ref': q.ref = v.trim(); break;
          case 'S':
            st = { s: v, w: '', d: '', c: [], hard: false, plots: [] };
            q.steps.push(st);
            break;
          case 'W': if (st) st.w = st.w ? st.w + '\n\n' + v : v; else M12.errors.push(`${id}: W before any step`); break;
          case 'D': if (st) st.d = st.d ? st.d + '\n\n' + v : v; else M12.errors.push(`${id}: D before any step`); break;
          case 'C': if (st) st.c.push(...list(v)); else M12.errors.push(`${id}: C before any step`); break;
          case '!': if (st) st.hard = true; break;
          case 'P': {
            let spec = null;
            try { spec = JSON.parse(v); } catch (e) { M12.errors.push(`${id}: bad plot JSON (${e.message})`); }
            if (spec) (st ? st.plots : q.plots).push(spec);
            break;
          }
          default: M12.errors.push(`question ${id}: unknown field "${k}"`);
        }
      }
      if (!q.L) q.L = q.steps.length >= 6 ? 'l' : 's';
      if (M12.questions[id]) M12.errors.push(`duplicate question id ${id}`);
      M12.questions[id] = q;
      M12.qOrder.push(id);
      const u = M12.unitByNo[unit];
      if (u) {
        let exo = u.exercises.find((e) => e.id === ex);
        if (!exo) { exo = { id: ex, title: '' }; u.exercises.push(exo); }
        (exo.q = exo.q || []).push(id);
      }
    }
  };

  /* ---------- multiple choice ---------- */
  M12.addMCQs = function (unit, text) {
    let n = M12.mcqs.filter((m) => m.unit === unit).length;
    for (const b of parseBlocks(text)) {
      if (b.kind !== 'M') continue;
      const m = { id: `m${unit}-${++n}`, unit, c: '', q: '', opts: [], ans: -1, e: '' };
      for (const { k, v } of b.fields) {
        if (k === 'c') m.c = v.trim();
        else if (k === 'Q') m.q = v;
        else if (k === 'O') m.opts.push(v);
        else if (k === 'O*') { m.ans = m.opts.length; m.opts.push(v); }
        else if (k === 'E') m.e = v;
        else M12.errors.push(`mcq ${m.id}: unknown field "${k}"`);
      }
      if (m.ans < 0 || m.opts.length < 2) M12.errors.push(`mcq ${m.id}: needs options and one correct (O*)`);
      M12.mcqs.push(m);
    }
  };

  /* ---------- math tokenizer ---------- */
  function inlineClose(s, from) {
    for (let j = from; j < s.length; j++) {
      if (s[j] === '\\') { j++; continue; }
      if (s[j] === '$') return j;
      if (s[j] === '\n' && s[j + 1] === '\n') return -1;
    }
    return -1;
  }
  M12.splitMath = function (src) {
    const out = [];
    let buf = '';
    let i = 0;
    src = String(src || '');
    while (i < src.length) {
      const ch = src[i];
      if (ch === '\\' && src[i + 1] === '$') { buf += '$'; i += 2; continue; }
      if (ch === '$') {
        const disp = src[i + 1] === '$';
        const close = disp ? src.indexOf('$$', i + 2) : inlineClose(src, i + 1);
        if (close < 0) { buf += ch; i++; continue; }
        if (buf) out.push({ t: 'text', v: buf });
        buf = '';
        out.push({ t: disp ? 'display' : 'inline', v: src.slice(i + (disp ? 2 : 1), close) });
        i = close + (disp ? 2 : 1);
        continue;
      }
      buf += ch;
      i++;
    }
    if (buf) out.push({ t: 'text', v: buf });
    return out;
  };

  M12.katexMacros = {
    '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}', '\\Q': '\\mathbb{Q}',
    '\\dx': '\\,dx', '\\dy': '\\,dy', '\\dt': '\\,dt', '\\du': '\\,du', '\\dv': '\\,dv', '\\dz': '\\,dz',
    '\\sech': '\\operatorname{sech}', '\\csch': '\\operatorname{csch}',
    '\\ii': '\\hat{\\imath}', '\\jj': '\\hat{\\jmath}', '\\kk': '\\hat{k}',
    '\\vr': '\\mathbf{r}', '\\vv': '\\mathbf{v}', '\\va': '\\mathbf{a}',
    '\\then': '\\;\\Rightarrow\\;',
    '\\half': '\\tfrac{1}{2}',
  };

  /* ---------- Markdown-lite + KaTeX ---------- */
  const mathCache = new Map();
  function renderMath(tex, display) {
    const key = (display ? 'D' : 'I') + tex;
    if (mathCache.has(key)) return mathCache.get(key);
    let html;
    try {
      html = g.katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: 'ignore', macros: M12.katexMacros, trust: false });
    } catch (e) {
      html = `<code class="tex-err">${esc(tex)}</code>`;
    }
    mathCache.set(key, html);
    return html;
  }
  M12.tex = renderMath;

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  M12.esc = esc;

  function inline(s) {
    return s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*(?!\s)(.+?)(?<!\s)\*(?!\w)/g, '$1<em>$2</em>')
      .replace(/==(.+?)==/g, '<mark>$1</mark>')
      .replace(/\[\[([\w.-]+)(?:\|([^\]]+))?\]\]/g, (m, id, label) => {
        const c = M12.concepts[id];
        const t = label || (c ? esc(c.title) : id);
        return `<a class="clink" href="#/concept/${id}" data-c="${id}">${t}</a>`;
      });
  }

  const isUL = (l) => /^\s*[-•]\s+/.test(l);
  const isOL = (l) => /^\s*\d+[.)]\s+/.test(l);
  const isTable = (l) => /^\s*\|/.test(l);
  const isQuote = (l) => /^\s*>\s?/.test(l);
  const isBlockStart = (l) => isUL(l) || isOL(l) || isTable(l) || isQuote(l);

  function blocks(s) {
    const lines = s.split('\n');
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const L = lines[i];
      if (!L.trim()) { i++; continue; }
      if (isUL(L) || isOL(L)) {
        const ordered = isOL(L);
        const test = ordered ? isOL : isUL;
        const items = [];
        while (i < lines.length && lines[i].trim() && (test(lines[i]) || (!isBlockStart(lines[i]) && /^\s{2,}/.test(lines[i])))) {
          if (test(lines[i])) items.push(lines[i].replace(ordered ? /^\s*\d+[.)]\s+/ : /^\s*[-•]\s+/, ''));
          else items[items.length - 1] += '<br>' + lines[i].trim();
          i++;
        }
        const tag = ordered ? 'ol' : 'ul';
        out.push(`<${tag}>` + items.map((x) => `<li>${inline(x)}</li>`).join('') + `</${tag}>`);
        continue;
      }
      if (isTable(L)) {
        const rows = [];
        while (i < lines.length && isTable(lines[i])) {
          const r = lines[i].trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
          if (!r.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(r);
          i++;
        }
        const [head, ...body] = rows;
        out.push('<div class="tbl"><table><thead><tr>' + head.map((c) => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>' +
          body.map((r) => '<tr>' + r.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>');
        continue;
      }
      if (isQuote(L)) {
        const q = [];
        while (i < lines.length && isQuote(lines[i])) { q.push(lines[i].replace(/^\s*>\s?/, '')); i++; }
        out.push(`<div class="callout">${q.map(inline).join('<br>')}</div>`);
        continue;
      }
      const para = [];
      while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) { para.push(lines[i]); i++; }
      out.push(`<p>${para.map(inline).join('<br>')}</p>`);
    }
    return out.join('');
  }

  const mdCache = new Map();
  M12.md = function (src, opts) {
    if (!src) return '';
    const inlineOnly = opts && opts.inline;
    const key = (inlineOnly ? 'i:' : 'b:') + src;
    if (mdCache.has(key)) return mdCache.get(key);
    const segs = M12.splitMath(src);
    const math = [];
    let flat = '';
    for (const sg of segs) {
      if (sg.t === 'text') flat += esc(sg.v);
      else {
        math.push(renderMath(sg.v.trim(), sg.t === 'display'));
        flat += '\u0001' + (math.length - 1) + '\u0002';
      }
    }
    let html = inlineOnly ? inline(flat).replace(/\n/g, '<br>') : blocks(flat);
    html = html.replace(/\u0001(\d+)\u0002/g, (m, n) => math[+n]);
    mdCache.set(key, html);
    return html;
  };

  /* plain text (for search and previews) */
  M12.plain = function (src) {
    return String(src || '')
      .replace(/\$\$?/g, ' ')
      .replace(/\\(frac|dfrac|tfrac)/g, ' ')
      .replace(/\\[a-zA-Z]+/g, ' ')
      .replace(/[{}^_\\|*=]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };
})(typeof window !== 'undefined' ? window : globalThis);
