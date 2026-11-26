/* app.js: state, routing and every view of the study site. */
(function () {
  'use strict';
  const M = window.M12;
  const md = M.md;
  const esc = M.esc;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  /* ================= state ================= */
  const KEY = 'm12.state.v1';
  const DEFAULTS = { mode: null, known: {}, solved: {}, seen: {}, starred: {}, practiced: {}, pathDone: {}, quiz: [], weak: {}, last: null };
  let S;
  try { S = Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { S = Object.assign({}, DEFAULTS); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage full or blocked */ } };

  // transient, per-visit UI state
  const UI = { practice: {}, revealed: {}, hinted: {}, answerShown: {}, openSteps: {}, openTopics: {}, pathIdx: {}, pathOpen: {}, unlocked: {}, fullConcept: {}, unitTab: {}, quiz: null, quizSetup: null, mock: null, mockKey: false, libFilter: '' };

  const MODES = {
    review: { name: 'Review', short: 'Review', tag: 'I know this already', desc: 'Solutions at a glance. Explanations appear only where a step is genuinely tricky.', icon: 'bolt' },
    study: { name: 'Study', short: 'Study', tag: 'Regular study', desc: 'Every step with a clear, short reason. Tap any step for the full story.', icon: 'book' },
    deep: { name: 'Deep study', short: 'Deep', tag: 'First time / I find this hard', desc: 'Learn every topic the question uses first (with extra examples), then solve it slowly.', icon: 'layers' },
  };

  /* ================= icons ================= */
  const I = {
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M8 7h7"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13 7 4 4"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    check: '<path d="m5 12 5 5 9-11"/>',
    left: '<path d="m15 5-7 7 7 7"/>',
    right: '<path d="m9 5 7 7-7 7"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7"/><path d="M12 17h.01"/>',
    paper: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h7M9 17h5"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    reset: '<path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 4v4h4"/>',
    print: '<path d="M7 9V3h10v6"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
  };
  const icon = (n, cls) => `<svg class="ic ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true">${I[n] || ''}</svg>`;

  /* ================= helpers ================= */
  const C = (id) => M.concepts[id];
  const ctitle = (id) => (C(id) ? C(id).title : id);
  const tH = (t) => md(t, { inline: true }); // a title as HTML (titles may contain math)
  const ctH = (id) => (C(id) ? tH(C(id).title) : esc(id));
  const ctPlain = (id) => M.plain(ctitle(id));
  const unitName = (n) => (n === 0 ? 'Basics' : 'Unit ' + n);
  const go = (path) => { if (location.hash !== '#' + path) location.hash = path; else render(); };
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    // keep the text in one flex item, so a narrow screen wraps it as a sentence (a leading icon stays separate)
    const m = /^(<svg[\s\S]*?<\/svg>)([\s\S]*)$/.exec(msg);
    t.innerHTML = m ? `${m[1]}<span>${m[2]}</span>` : `<span>${msg}</span>`;
    $('#toasts').appendChild(t);
    setTimeout(() => t.classList.add('out'), 2200);
    setTimeout(() => t.remove(), 2700);
  }
  function shuffle(a, rnd) {
    a = a.slice();
    rnd = rnd || Math.random;
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function seeded(seed) { let s = seed >>> 0 || 1; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
  function ring(pct, size, label) {
    const r = (size - 6) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(1, pct)));
    return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-bg"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 ${size / 2} ${size / 2})"/>${label != null ? `<text x="50%" y="50%" dy=".35em" text-anchor="middle">${label}</text>` : ''}</svg>`;
  }

  // ordered list of every question, following the unit/exercise order
  let FLAT = null;
  function flat() {
    if (FLAT) return FLAT;
    FLAT = [];
    for (const u of M.units) for (const ex of u.exercises) for (const id of ex.q || []) FLAT.push(id);
    return FLAT;
  }
  const unitQs = (n) => flat().filter((id) => M.questions[id].unit === n);
  function neighbors(id) {
    const f = flat();
    const i = f.indexOf(id);
    return { prev: i > 0 ? f[i - 1] : null, next: i >= 0 && i < f.length - 1 ? f[i + 1] : null };
  }

  // concepts used by a question: listed topics first, then step-level tags
  function qTopics(q) {
    const seen = new Set();
    const out = [];
    for (const id of q.T) if (C(id) && !seen.has(id)) { seen.add(id); out.push(id); }
    q.steps.forEach((st) => st.c.forEach((id) => { if (C(id) && !seen.has(id)) { seen.add(id); out.push(id); } }));
    return out;
  }
  // prerequisites of the given topics, at most maxDepth levels down (all levels if omitted),
  // ordered so that every topic comes after the topics it builds on
  function prereqPath(roots, maxDepth) {
    const limit = maxDepth == null ? Infinity : maxDepth;
    const depth = {};
    let frontier = roots.filter(C);
    frontier.forEach((id) => (depth[id] = 0));
    for (let d = 0; frontier.length && d < limit; d++) {
      const next = [];
      for (const id of frontier) for (const p of C(id).pre) if (C(p) && depth[p] === undefined) { depth[p] = d + 1; next.push(p); }
      frontier = next;
    }
    const order = [];
    const seen = {};
    const visit = (id) => {
      if (seen[id] || depth[id] === undefined) return;
      seen[id] = 1;
      for (const p of C(id).pre) visit(p);
      order.push(id);
    };
    roots.forEach(visit);
    return order;
  }
  const PATH_DEPTH = 2; // deep study: the question's topics plus two levels of what they build on
  const usedBy = {};
  function computeUsedBy() {
    for (const id of M.qOrder) for (const c of qTopics(M.questions[id])) (usedBy[c] = usedBy[c] || []).push(id);
  }
  const leadsTo = {};
  function computeLeadsTo() {
    for (const id of M.conceptOrder) for (const p of C(id).pre) (leadsTo[p] = leadsTo[p] || []).push(id);
  }

  /* ================= concept rendering ================= */
  function conceptBody(c, depth) {
    // depth: 'review' | 'study' | 'deep'
    let h = '';
    if (c.R) h += `<div class="c-sum">${md(c.R)}</div>`;
    if (c.F) h += `<div class="c-formula">${md(c.F)}</div>`;
    if (depth !== 'review' && c.B) h += `<div class="c-body">${md(c.B)}</div>`;
    if (depth === 'deep' && c.X) h += `<div class="c-deep">${md(c.X)}</div>`;
    const ex = depth === 'deep' ? c.E : depth === 'study' ? c.E.slice(0, 1) : [];
    ex.forEach((e, i) => { h += `<div class="c-ex"><div class="c-ex-h">${icon('pen')} Example ${ex.length > 1 ? i + 1 : ''}</div>${md(e)}</div>`; });
    if (depth === 'deep' && c.M.length) h += `<div class="c-mist"><div class="c-mist-h">${icon('flag')} Common mistakes</div><ul>${c.M.map((m) => `<li>${md(m, { inline: true })}</li>`).join('')}</ul></div>`;
    return h;
  }

  /* ================= layout chrome ================= */
  function setModeAttr() { document.body.dataset.mode = S.mode || 'study'; }
  function headerHTML() {
    const m = S.mode || 'study';
    return `
    <div class="hdr-in">
      <a class="brand" href="#/"><span class="brand-mark">∫</span><span class="brand-txt">Maths 12<small>Lahore Board · new syllabus</small></span></a>
      <nav class="nav">
        <a href="#/" data-nav="home">${icon('grid')}Units</a>
        <a href="#/concepts" data-nav="concepts">${icon('book')}Concepts</a>
        <a href="#/quiz" data-nav="quiz">${icon('quiz')}Quiz</a>
        <a href="#/mock" data-nav="mock">${icon('paper')}Mock paper</a>
      </nav>
      <div class="search">
        ${icon('search')}<input id="q" type="search" placeholder="Search questions or topics" autocomplete="off" spellcheck="false" aria-label="Search"/>
        <kbd>/</kbd>
        <button class="search-cancel" data-act="search-close" type="button">Cancel</button>
        <div class="search-res" id="searchRes" hidden></div>
      </div>
      <button class="hdr-btn" data-act="search-open" type="button" aria-label="Search">${icon('search')}</button>
      <div class="modesw" role="radiogroup" aria-label="Study mode">
        ${Object.keys(MODES).map((k, i) => `<button role="radio" aria-checked="${k === m}" class="mbtn ${k === m ? 'on' : ''}" data-act="mode" data-m="${k}" title="${esc(MODES[k].desc)} (key ${i + 1})">${icon(MODES[k].icon)}<span>${MODES[k].short}</span></button>`).join('')}
        <span class="mglide"></span>
      </div>
    </div>`;
  }
  const TABS = [['home', '#/', 'grid', 'Units'], ['concepts', '#/concepts', 'book', 'Topics'], ['quiz', '#/quiz', 'quiz', 'Quiz'], ['mock', '#/mock', 'paper', 'Mock'], ['progress', '#/progress', 'check', 'Progress']];
  const tabbarHTML = () => TABS.map(([k, h, ic, label]) => `<a href="${h}" data-tab="${k}">${icon(ic)}<span>${label}</span></a>`).join('');
  const tabOf = (r) => (r === 'unit' || r === 'q' || r === 'home' || r === 'welcome' ? 'home' : r === 'concept' ? 'concepts' : r);

  /* ---- phone: topic sheet (bottom sheet) and full-width search ---- */
  const phoneMQ = window.matchMedia('(max-width: 900px)');
  const compactMQ = window.matchMedia('(max-width: 600px)');
  const isPhone = () => phoneMQ.matches;
  M.compact = compactMQ.matches; // smaller plot canvas, so graph labels stay readable
  let sheetOpen = false;
  function setSheet(open) {
    sheetOpen = open;
    document.body.classList.toggle('sheet-open', open);
    const side = $('.qside');
    if (side) { side.style.transform = ''; side.setAttribute('aria-hidden', String(!open && isPhone())); }
  }
  // opening the sheet adds a history entry, so the phone's back button closes it
  function openSheet() {
    if (sheetOpen || !isPhone()) return;
    setSheet(true);
    try { history.pushState({ m12sheet: 1 }, ''); } catch (e) { /* ignore */ }
    const inner = $('.qside .side-inner');
    if (inner) inner.scrollTop = 0;
  }
  function closeSheet() {
    if (!sheetOpen) return;
    setSheet(false);
    if (history.state && history.state.m12sheet) history.back();
  }
  window.addEventListener('popstate', (e) => {
    const want = !!(e.state && e.state.m12sheet) && isPhone() && parts()[0] === 'q';
    if (want !== sheetOpen) setSheet(want);
  });
  // drag the sheet down (by its handle, or from the top of its content) to close it
  let drag = null;
  document.addEventListener('touchstart', (e) => {
    const grab = e.target.closest('.sheet-grab');
    const inner = e.target.closest('.qside .side-inner');
    if (!sheetOpen || !(grab || (inner && inner.scrollTop <= 0))) return;
    drag = { y: e.touches[0].clientY, dy: 0, fromGrab: !!grab };
  }, { passive: true });
  document.addEventListener('touchmove', (e) => {
    if (!drag) return;
    drag.dy = Math.max(0, e.touches[0].clientY - drag.y);
    if (!drag.fromGrab && drag.dy < 12) return; // let a normal scroll start first
    const side = $('.qside');
    if (side) { side.style.transition = 'none'; side.style.transform = `translateY(${drag.dy}px)`; }
  }, { passive: true });
  document.addEventListener('touchend', () => {
    if (!drag) return;
    const side = $('.qside');
    const far = drag.dy > 90;
    drag = null;
    if (side) { side.style.transition = ''; side.style.transform = ''; }
    if (far) closeSheet();
  });
  function closeSearch() {
    document.body.classList.remove('searching');
    const q = $('#q');
    if (q) { q.value = ''; q.blur(); }
    const b = $('#searchRes');
    if (b) b.hidden = true;
  }

  function syncHeader() {
    const m = S.mode || 'study';
    $$('.mbtn').forEach((b) => { const on = b.dataset.m === m; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
    const on = $('.mbtn.on');
    const gl = $('.mglide');
    if (on && gl) { gl.style.width = on.offsetWidth + 'px'; gl.style.transform = `translateX(${on.offsetLeft - 4}px)`; }
    const r = (location.hash.slice(2).split('/')[0] || 'home');
    $$('.nav a').forEach((a) => a.classList.toggle('on', a.dataset.nav === r || (r === 'unit' && a.dataset.nav === 'home') || (r === 'q' && a.dataset.nav === 'home') || (r === 'concept' && a.dataset.nav === 'concepts')));
    const t = tabOf(r);
    $$('#tabbar a').forEach((a) => a.classList.toggle('on', a.dataset.tab === t));
  }

  /* ================= router ================= */
  let lastRoute = '';
  function parts() { return (location.hash.slice(1) || '/').split('?')[0].split('/').filter(Boolean).map(decodeURIComponent); }
  function render(opts) {
    opts = opts || {};
    const qm = /[?&]m=(review|study|deep)\b/.exec(location.hash);
    if (qm && S.mode !== qm[1]) { S.mode = qm[1]; save(); setModeAttr(); syncHeader(); }
    const p = parts();
    // "#/q/<id>?p=1" opens a question straight in practice mode
    const qp = /[?&]p=1\b/.test(location.hash);
    if (p[0] === 'q' && qp) UI.practice[p[1]] = true;
    // a link's mode / practice setting applies once, on arrival; drop it from the address so a later switch isn't undone
    if (qm || qp) {
      const [path, query] = location.hash.split('?');
      const rest = (query || '').split('&').filter((kv) => kv && !/^(m|p)=/.test(kv)).join('&');
      try { history.replaceState(history.state, '', path + (rest ? '?' + rest : '')); } catch (e) { /* ignore */ }
    }
    const routeKey = p.join('/');
    const changed = routeKey !== lastRoute;
    lastRoute = routeKey;
    if (!S.mode && p[0] !== 'welcome') return go('/welcome');
    let html;
    switch (p[0]) {
      case undefined: html = viewHome(); break;
      case 'welcome': html = viewWelcome(); break;
      case 'unit': html = viewUnit(+p[1]); break;
      case 'q': html = viewQuestion(p[1]); break;
      case 'concepts': html = viewLibrary(); break;
      case 'concept': html = viewConcept(p[1]); break;
      case 'quiz': html = p[1] === 'run' ? viewQuizRun() : p[1] === 'result' ? viewQuizResult() : viewQuizSetup(); break;
      case 'mock': html = viewMock(); break;
      case 'progress': html = viewProgress(); break;
      default: html = notFound();
    }
    const main = $('#main');
    const keep = opts.keep ? captureAnchor() : null;
    main.innerHTML = `<div class="view ${changed && !opts.keep ? 'enter' : ''}">${html}</div>`;
    document.body.classList.toggle('is-welcome', p[0] === 'welcome');
    document.body.classList.toggle('has-qbar', p[0] === 'q' && !!M.questions[p[1]]);
    document.body.classList.toggle('is-quizrun', p[0] === 'quiz' && p[1] === 'run');
    if (sheetOpen && p[0] !== 'q') setSheet(false);
    if (keep) restoreAnchor(keep, opts.flash); else if (changed) jump(0);
    syncHeader();
    afterRender(p);
  }
  // Remember which visible block is at the top of the screen, so a re-render (mode switch,
  // practice toggle, ...) can put the same block back in the same place.
  function captureAnchor() {
    const starts = []; // blocks that begin inside the visible area (what the reader is looking at)
    const partial = []; // blocks cut off at the top edge
    const top = $('#hdr') ? $('#hdr').getBoundingClientRect().bottom : 64;
    for (const el of $$('.qhead, .path.open .path-card, .step')) {
      const r = el.getBoundingClientRect();
      if (r.height === 0 || r.bottom <= top + 20 || r.top > window.innerHeight) continue;
      (r.top >= top - 2 ? starts : partial).push({ key: el.dataset.anchor, top: r.top });
    }
    return { list: starts.concat(partial), y: window.scrollY };
  }
  function restoreAnchor(a, flash) {
    for (let i = 0; i < a.list.length; i++) {
      const it = a.list[i];
      const el = document.querySelector(`[data-anchor="${it.key}"]`);
      if (el && el.getBoundingClientRect().height > 0) {
        jump(window.scrollY + el.getBoundingClientRect().top - it.top);
        if (flash) el.classList.add('flash');
        return;
      }
      // the foundations path is only shown in deep study: if the reader was in it, go to the solution
      if (i === 0 && it.key && it.key.startsWith('p-')) {
        const sol = $('#solution');
        if (sol) { jump(window.scrollY + sol.getBoundingClientRect().top - 90); return; }
      }
    }
    jump(a.y);
  }
  // instant scroll (the page uses smooth scrolling for links, but re-renders must not animate)
  function jump(y) { window.scrollTo({ top: y, behavior: 'instant' }); }
  // An inline formula that cannot break across lines and is wider than its line (common on phones)
  // gets its own sideways-scrolling box, so it never makes the whole page wider than the screen.
  function fitMath(root) {
    const scope = root || $('#main');
    if (!scope) return;
    const list = scope.querySelectorAll('.katex');
    for (const k of list) {
      if (k.closest('.katex-display')) continue;
      k.classList.remove('kx-wide');
      const box = k.parentElement && k.parentElement.closest('p, li, td, th, div, .opt-t, .qr-text, b, span.cp-pre, figcaption');
      if (!box) continue;
      if (k.getBoundingClientRect().width > box.clientWidth + 1) k.classList.add('kx-wide');
    }
  }
  let fitTimer = null;
  window.addEventListener('resize', () => { clearTimeout(fitTimer); fitTimer = setTimeout(() => fitMath(document.body), 150); });

  function afterRender(p) {
    fitMath($('#main'));
    document.title = (p[0] === 'q' && M.questions[p[1]] ? `Q ${M.questions[p[1]].no} · Ex ${M.questions[p[1]].ex}` : p[0] === 'concept' && C(p[1]) ? ctPlain(p[1]) : p[0] === 'unit' && M.unitByNo[p[1]] ? `Unit ${p[1]}: ${M.unitByNo[p[1]].title}` : 'Maths 12') + ' · Maths 12 Study';
    if (p[0] === 'quiz' && p[1] === 'run') startQuizTimer();
  }
  function notFound() { return `<div class="empty"><h2>Page not found</h2><p>That page does not exist.</p><a class="btn" href="#/">Go home</a></div>`; }

  /* ================= welcome ================= */
  function viewWelcome() {
    return `
    <section class="welcome">
      <div class="wl-glow"></div>
      <p class="eyebrow">Class 12 Mathematics · Punjab (Lahore) Board · 2026–27 syllabus</p>
      <h1>Why are you here today?</h1>
      <p class="lead">Pick how much explanation you want. You can switch at any moment, even in the middle of a question, without losing your place.</p>
      <div class="wl-cards">
        ${Object.entries(MODES).map(([k, m], i) => `
        <button class="wl-card ${S.mode === k ? 'current' : ''}" data-act="pick-mode" data-m="${k}" style="--i:${i}">
          <span class="wl-ico m-${k}">${icon(m.icon)}</span>
          <span class="wl-num">${i + 1}</span>
          <span class="wl-name">${m.name}</span>
          <span class="wl-tag">${m.tag}</span>
          <span class="wl-desc">${m.desc}</span>
          <span class="wl-go">Start in ${m.short} ${icon('right')}</span>
        </button>`).join('')}
      </div>
      <p class="wl-foot">Press <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> any time to switch modes.</p>
    </section>`;
  }

  /* ================= home ================= */
  function unitProgress(n) {
    const qs = unitQs(n);
    const done = qs.filter((id) => S.solved[id] || S.practiced[id]).length;
    return { total: qs.length, done, pct: qs.length ? done / qs.length : 0 };
  }
  function viewHome() {
    const total = flat().length;
    const solved = flat().filter((id) => S.solved[id] || S.practiced[id]).length;
    const known = Object.keys(S.known).filter((k) => S.known[k] && C(k)).length;
    const lastQ = S.last && M.questions[S.last];
    const best = S.quiz.length ? Math.max(...S.quiz.map((r) => Math.round((100 * r.score) / r.total))) : null;
    const weak = Object.entries(S.weak).filter(([k, v]) => v > 0 && C(k)).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const m = MODES[S.mode];
    return `
    <section class="home-hero">
      <div>
        <p class="eyebrow">Class 12 Mathematics · new syllabus</p>
        <h1>Learn it properly, one step at a time.</h1>
        <p class="lead">Every included exercise question, solved step by step, with the topics behind each step explained. Removed portions of the syllabus are left out.</p>
        <div class="hero-mode">You are in <b class="m-${S.mode}">${m.name}</b> mode. ${esc(m.desc)} <a href="#/welcome" class="link">Change</a></div>
      </div>
      <div class="hero-stats">
        <div class="stat">${ring(total ? solved / total : 0, 74, Math.round((100 * solved) / (total || 1)) + '%')}<div><b>${solved}</b><span>of ${total} questions done</span></div></div>
        <div class="stat"><div class="stat-big">${known}</div><div><b>topics</b><span>marked as known</span></div></div>
        <div class="stat"><div class="stat-big">${best == null ? '–' : best + '%'}</div><div><b>best quiz</b><span>${plural(S.quiz.length, 'attempt')}</span></div></div>
      </div>
    </section>
    ${lastQ ? `<a class="continue" href="#/q/${lastQ.id}"><span class="cont-k">Continue where you left off</span><span class="cont-t">Unit ${lastQ.unit} · Exercise ${lastQ.ex} · Q ${esc(lastQ.no)}</span><span class="cont-q">${md(lastQ.Q, { inline: true })}</span>${icon('right', 'cont-ar')}</a>` : ''}
    <h2 class="sec-h">Units</h2>
    <div class="units">
      ${M.units.map((u, i) => {
        const p = unitProgress(u.n);
        return `<a class="unit-card" href="#/unit/${u.n}" style="--i:${i}">
          <div class="uc-top"><span class="uc-no">${String(u.n).padStart(2, '0')}</span>${ring(p.pct, 40)}</div>
          <div class="uc-title">${esc(u.title)}</div>
          <div class="uc-meta">${plural(p.total, 'question')} · ${plural(u.exercises.length, 'exercise')}</div>
          <div class="uc-bar"><i style="width:${(p.pct * 100).toFixed(1)}%"></i></div>
        </a>`;
      }).join('')}
    </div>
    <div class="home-tools">
      <a class="tool" href="#/quiz">${icon('quiz')}<b>Quiz</b><span>Board-style MCQs with explanations</span></a>
      <a class="tool" href="#/mock">${icon('paper')}<b>Mock paper</b><span>A full paper on the board pattern</span></a>
      <a class="tool" href="#/concepts">${icon('book')}<b>Concept library</b><span>Every topic, from the basics up</span></a>
      <a class="tool" href="#/progress">${icon('check')}<b>Progress</b><span>Starred, solved and weak topics</span></a>
    </div>
    ${weak.length ? `<h2 class="sec-h">Topics to revise <small>from your quiz mistakes</small></h2><div class="chips">${weak.map(([k, v]) => `<a class="chip warn" href="#/concept/${k}">${ctH(k)}<i>${v}</i></a>`).join('')}</div>` : ''}
    <div class="kbd-help"><span><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd> switch mode</span><span><kbd>←</kbd><kbd>→</kbd> previous / next question</span><span><kbd>P</kbd> practice mode</span><span><kbd>/</kbd> search</span></div>`;
  }

  /* ================= unit ================= */
  function viewUnit(n) {
    const u = M.unitByNo[n];
    if (!u) return notFound();
    const tab = UI.unitTab[n] || 'ex';
    const p = unitProgress(n);
    const concepts = M.conceptOrder.filter((id) => C(id).unit === n);
    const mcqN = M.mcqs.filter((m) => m.unit === n).length;
    return `
    <div class="crumbs"><a href="#/">Units</a><span>/</span>Unit ${n}</div>
    <section class="unit-hero">
      <div class="uh-no">${String(n).padStart(2, '0')}</div>
      <div class="uh-main">
        <h1>${esc(u.title)}</h1>
        <p class="lead">${md(u.blurb || '', { inline: true })}</p>
        <div class="uh-meta"><span>${plural(p.total, 'question')}</span><span>${plural(concepts.length, 'topic')}</span><span>${p.done} done</span></div>
      </div>
      <div class="uh-ring">${ring(p.pct, 92, Math.round(p.pct * 100) + '%')}</div>
    </section>
    <div class="tabs">
      <button class="tab ${tab === 'ex' ? 'on' : ''}" data-act="unit-tab" data-u="${n}" data-t="ex">Exercises</button>
      <button class="tab ${tab === 'learn' ? 'on' : ''}" data-act="unit-tab" data-u="${n}" data-t="learn">Lessons <i>${concepts.length}</i></button>
      ${mcqN ? `<button class="tab" data-act="unit-quiz" data-u="${n}">${icon('quiz')}Unit quiz <i>${mcqN}</i></button>` : ''}
    </div>
    ${tab === 'learn' ? unitLessons(n, concepts) : unitExercises(u)}`;
  }
  function unitExercises(u) {
    const gone = Object.keys(M.removedExercises || {}).filter((e) => M.removedExercises[e] === u.n);
    return u.exercises.filter((ex) => (ex.q || []).length).map((ex) => `
      <section class="exblock">
        <div class="ex-h"><h2>Exercise ${esc(ex.id)}</h2><span>${esc(ex.title || '')}</span><em>${plural(ex.q.length, 'question')}</em></div>
        ${ex.note ? `<p class="ex-note">${md(ex.note, { inline: true })}</p>` : ''}
        ${ex.removed ? `<p class="ex-removed">Not in the 2026–27 syllabus (removed by the board): ${ex.removed.map((t) => 'Q' + t).join(', ')}</p>` : ''}
        <div class="qlist">
          ${ex.q.map((id, i) => {
            const q = M.questions[id];
            const st = S.solved[id] ? 'solved' : S.practiced[id] ? 'practiced' : S.seen[id] ? 'seen' : '';
            return `<a class="qrow ${st}" href="#/q/${id}" style="--i:${Math.min(i, 12)}">
              <span class="qr-dot" title="${st || 'not started'}"></span>
              <span class="qr-no">Q ${esc(q.no)}</span>
              <span class="qr-text">${md(q.Q, { inline: true })}</span>
              ${S.starred[id] ? `<span class="qr-star">${icon('star')}</span>` : ''}
              <span class="qr-len ${q.L}">${q.L === 'l' ? 'long' : 'short'}</span>
            </a>`;
          }).join('')}
        </div>
      </section>`).join('') + (gone.length ? `<p class="ex-removed big">${gone.map((e) => `Exercise ${e}`).join(' and ')} ${gone.length > 1 ? 'are' : 'is'} not in the 2026–27 syllabus (removed completely by the board).</p>` : '');
  }
  function unitLessons(n, concepts) {
    if (!concepts.length) return `<div class="empty"><p>Lessons for this unit are on the way.</p></div>`;
    return `<p class="hint-line">Work through the topics in this order. Each lesson adapts to your mode; mark the ones you already know.</p>
      <ol class="lesson-path">${concepts.map((id, i) => {
        const c = C(id);
        return `<li class="lp-item ${S.known[id] ? 'known' : ''}" style="--i:${Math.min(i, 14)}">
          <a href="#/concept/${id}" class="lp-main"><span class="lp-no">${i + 1}</span><span class="lp-t">${tH(c.title)}</span><span class="lp-r">${md(c.R, { inline: true })}</span></a>
          <button class="kbtn ${S.known[id] ? 'on' : ''}" data-act="know" data-c="${id}">${S.known[id] ? icon('check') + 'Known' : 'I know this'}</button>
        </li>`;
      }).join('')}</ol>`;
  }

  /* ================= question ================= */
  function viewQuestion(id) {
    const q = M.questions[id];
    if (!q) return notFound();
    S.seen[id] = S.seen[id] || Date.now();
    S.last = id;
    save();
    const u = M.unitByNo[q.unit];
    const nb = neighbors(id);
    const topics = qTopics(q);
    const prac = !!UI.practice[id];
    const exo = u && u.exercises.find((e) => e.id === q.ex);
    const toLearn = topics.filter((t) => !S.known[t]).length;
    const qbar = `<div class="qbar">
      ${nb.prev ? `<a class="qb-btn" href="#/q/${nb.prev}" aria-label="Previous question">${icon('left')}<span>Prev</span></a>` : `<span class="qb-btn off" aria-hidden="true">${icon('left')}<span>Prev</span></span>`}
      <button class="qb-topics" data-act="sheet-open" type="button">${icon('bulb')}Topics<i>${toLearn}</i></button>
      ${nb.next ? `<a class="qb-btn" href="#/q/${nb.next}" aria-label="Next question"><span>Next</span>${icon('right')}</a>` : `<span class="qb-btn off" aria-hidden="true"><span>Next</span>${icon('right')}</span>`}
    </div>`;
    return `
    <div class="crumbs"><a href="#/">Units</a><span>/</span><a href="#/unit/${q.unit}">Unit ${q.unit}</a><span>/</span>Exercise ${esc(q.ex)}<span>/</span>Q ${esc(q.no)}</div>
    <section class="qhead card" data-anchor="head">
      <div class="qmeta">
        <span class="tag">Exercise ${esc(q.ex)}${exo && exo.title ? ' · ' + esc(exo.title) : ''}</span><span class="tag strong">Q ${esc(q.no)}</span>
        ${q.ref ? `<span class="tag ghost">${esc(q.ref)}</span>` : ''}
        <span class="tag ghost">${q.L === 'l' ? 'Long question' : 'Short question'}</span>
      </div>
      <div class="qtext">${md(q.Q)}</div>
      ${q.N ? `<div class="qnote">${icon('flag')}<div>${md(q.N)}</div></div>` : ''}
      ${q.plots.map((p) => M.plot(p)).join('')}
      <div class="qtools">
        <button class="btn ${prac ? 'on' : ''}" data-act="practice" title="Hide the solution and solve it yourself (P)">${icon('pen')}${prac ? 'Practising' : 'Practice mode'}</button>
        <button class="btn ghost ${S.starred[id] ? 'on' : ''}" data-act="star" title="Star this question">${icon('star')}${S.starred[id] ? 'Starred' : 'Star'}</button>
        <button class="btn ghost ${S.solved[id] ? 'on ok' : ''}" data-act="solved">${icon('check')}${S.solved[id] ? 'Done' : 'Mark as done'}</button>
        <span class="grow"></span>
        ${nb.prev ? `<a class="btn ghost" href="#/q/${nb.prev}" title="Previous question (←)">${icon('left')}Prev</a>` : ''}
        ${nb.next ? `<a class="btn ghost" href="#/q/${nb.next}" title="Next question (→)">Next${icon('right')}</a>` : ''}
      </div>
    </section>
    <div class="qgrid">
      <div class="qmain">
        ${S.mode === 'deep' ? pathHTML(q, topics) : ''}
        <div id="solution">${solutionHTML(q)}</div>
      </div>
      <aside class="qside" aria-label="Topics in this question"${isPhone() && !sheetOpen ? ' aria-hidden="true"' : ''}><div class="side-inner"><div class="sheet-grab"><span></span><button class="sheet-close" data-act="sheet-close" type="button" aria-label="Close topics">✕</button></div>${sideHTML(q, topics)}</div></aside>
    </div>
    ${qbar}`;
  }

  /* ---- deep-study foundations path ---- */
  function pathItems(q, topics) {
    return prereqPath(topics, PATH_DEPTH).filter((cid) => !S.known[cid]);
  }
  function pathHTML(q, topics) {
    const items = pathItems(q, topics);
    if (!items.length) return `<section class="path done"><div class="path-h">${icon('layers')}<div><b>Foundations</b><span>You have marked every topic this question uses as known. Straight to the solution.</span></div></div></section>`;
    const idx = Math.min(UI.pathIdx[q.id] || 0, items.length);
    const finished = idx >= items.length || S.pathDone[q.id];
    const open = UI.pathOpen[q.id] != null ? UI.pathOpen[q.id] : !finished;
    const stepUse = {};
    q.steps.forEach((st, i) => st.c.forEach((c) => (stepUse[c] = stepUse[c] || []).push(i + 1)));
    const needFor = {};
    items.forEach((cid) => C(cid).pre.forEach((p) => (needFor[p] = needFor[p] || []).push(cid)));
    return `
    <section class="path ${finished ? 'finished' : ''} ${open ? 'open' : ''}">
      <button class="path-h" data-act="path-toggle">
        ${icon('layers')}
        <div><b>Before we solve: ${plural(items.length, 'topic')} this question uses</b>
        <span>${finished ? 'Foundations covered. Open again any time.' : 'We start from the most basic idea and build up. Mark anything you already know to skip it.'}</span></div>
        <div class="path-dots">${items.map((c, i) => `<i class="${i < idx || finished ? 'done' : i === idx ? 'cur' : ''}"></i>`).join('')}</div>
      </button>
      <div class="path-body"><div>
        ${items.map((cid, i) => {
          const c = C(cid);
          const state = finished || i < idx ? 'done' : i === idx ? 'cur' : 'next';
          const why = stepUse[cid] ? `Used directly in step${stepUse[cid].length > 1 ? 's' : ''} ${stepUse[cid].join(', ')}.` : needFor[cid] ? `Needed to understand ${needFor[cid].map((x) => '<b>' + ctH(x) + '</b>').join(', ')}.` : 'A topic this question relies on.';
          return `<article class="path-card ${state}" data-anchor="p-${cid}">
            <div class="pc-h" data-act="path-goto" data-i="${i}"><span class="pc-n">${state === 'done' ? icon('check') : i + 1}</span><span class="pc-t">${tH(c.title)}</span><span class="pc-u">${unitName(c.unit)}</span></div>
            ${state === 'cur' ? `<div class="pc-why">${why}</div>${(() => { const deeper = c.pre.filter((x) => C(x) && !items.includes(x) && !S.known[x]); return deeper.length ? `<div class="pc-more"><span>Builds on</span>${deeper.map((x) => `<button class="chip" data-act="topic-open" data-c="${x}">${ctH(x)}</button>`).join('')}<em>Need these too? Tap one to open it.</em></div>` : ''; })()}<div class="pc-body">${conceptBody(c, 'deep')}</div>
            <div class="pc-act"><button class="btn primary" data-act="path-next">I understand, next ${icon('right')}</button><button class="btn ghost" data-act="path-know" data-c="${cid}">I already know this</button><button class="btn ghost" data-act="path-skip">Skip to the solution</button></div>` : ''}
          </article>`;
        }).join('')}
        ${finished ? `<div class="path-end">${icon('check')} All foundations covered. <button class="link" data-act="path-restart">Go through them again</button></div>` : ''}
      </div></div>
    </section>`;
  }
  function solutionLocked(q) {
    if (S.mode !== 'deep' || UI.unlocked[q.id] || S.pathDone[q.id]) return false;
    const items = pathItems(q, qTopics(q));
    return items.length > 0 && (UI.pathIdx[q.id] || 0) < items.length;
  }

  /* ---- solution steps ---- */
  function stepDetail(st, mode) {
    let h = '';
    if (st.w && mode === 'review' && !st.hard) h += `<div class="d-why">${md(st.w)}</div>`;
    if (st.d) h += `<div class="d-text">${md(st.d)}</div>`;
    for (const cid of st.c) {
      const c = C(cid);
      if (!c) continue;
      h += `<div class="cmini"><div class="cmini-h">${icon('bulb')}Topic used: <b>${tH(c.title)}</b></div>${md(c.R)}${!st.d && mode !== 'review' && c.B ? `<div class="cmini-b">${md(c.B)}</div>` : ''}${c.F && !st.d ? `<div class="c-formula small">${md(c.F)}</div>` : ''}<button class="link" data-act="topic-open" data-c="${cid}">Open this topic ${icon('right')}</button></div>`;
    }
    if (!h) h = `<div class="d-text muted">${st.w ? md(st.w) : 'This step is direct arithmetic or algebra on the previous line: simplify carefully and compare term by term.'}</div>`;
    return h;
  }
  function stepHTML(q, st, i, mode) {
    const key = q.id + ':' + i;
    const open = UI.openSteps[key] != null ? UI.openSteps[key] : mode === 'deep' && !!(st.d || st.c.length);
    const showW = st.w && (mode !== 'review' || st.hard);
    return `<li class="step ${open ? 'open' : ''} ${st.hard ? 'hard' : ''}" data-anchor="s-${i}" data-i="${i}" style="--i:${Math.min(i, 10)}">
      <div class="s-num">${i + 1}</div>
      <div class="s-body">
        <div class="s-main" data-act="step" data-i="${i}">${md(st.s)}</div>
        ${showW ? `<div class="s-why">${st.hard && mode === 'review' ? '<span class="hard-tag">tricky</span>' : ''}${md(st.w)}</div>` : ''}
        ${st.plots.map((p) => M.plot(p)).join('')}
        <div class="s-detail"><div><div class="s-detail-in">${stepDetail(st, mode)}</div></div></div>
        <button class="s-explain" data-act="step" data-i="${i}">${icon('bulb')}<span>${open ? 'Hide explanation' : 'How did we get this?'}</span></button>
      </div>
    </li>`;
  }
  function solutionHTML(q) {
    const mode = S.mode;
    const prac = !!UI.practice[q.id];
    if (solutionLocked(q) && !prac) {
      return `<section class="sol locked"><div class="lock-card">${icon('lock')}<div><b>The solution unlocks after the foundations</b><span>Go through the topics above first, or skip straight to it.</span></div><button class="btn" data-act="path-skip">Show the solution now</button></div></section>`;
    }
    const n = q.steps.length;
    if (prac) {
      const rev = UI.revealed[q.id] || 0;
      const hint = UI.hinted[q.id] || {};
      const items = q.steps.map((st, i) => {
        if (i < rev) return stepHTML(q, st, i, mode === 'review' ? 'study' : mode);
        return `<li class="step locked" data-anchor="s-${i}"><div class="s-num">${i + 1}</div><div class="s-body"><div class="s-hidden">Step ${i + 1} is hidden. Work it out in your notebook.</div>${hint[i] ? `<div class="s-hint">${icon('bulb')}<div>${md(q.steps[i].w || (isPhone() ? 'Think about which topic (under Topics) applies here.' : 'Think about which topic on the right applies here.'))}</div></div>` : ''}</div></li>`;
      }).join('');
      return `<section class="sol practice">
        <div class="prac-banner">${icon('pen')}<div><b>Practice mode.</b> Solve it in your notebook first. ${isPhone() ? 'If you get stuck, tap <b>Topics</b> at the bottom.' : 'The topics on the right stay open to help you if you get stuck.'}</div></div>
        <ol class="steps">${items}</ol>
        <div class="prac-actions">
          ${rev < n ? `<button class="btn" data-act="hint">${icon('bulb')}Hint for step ${rev + 1}</button><button class="btn" data-act="reveal">${icon('eye')}Reveal step ${rev + 1}</button><button class="btn ghost" data-act="reveal-all">Show full solution</button>` : ''}
          <button class="btn ghost" data-act="check-answer">${UI.answerShown[q.id] || rev >= n ? 'Answer shown' : 'Check my final answer'}</button>
          <button class="btn primary" data-act="practiced">${icon('check')}${S.practiced[q.id] ? 'Solved on my own ✓' : 'I solved it myself'}</button>
        </div>
        ${(UI.answerShown[q.id] || rev >= n) && q.A ? answerHTML(q) : ''}
      </section>`;
    }
    return `<section class="sol">
      <div class="sol-h"><h2>Solution</h2><span>${plural(n, 'step')}${mode === 'review' ? ' · explanations on tricky steps only' : mode === 'study' ? ' · tap a step for more' : ' · full explanations'}</span></div>
      <ol class="steps">${q.steps.map((st, i) => stepHTML(q, st, i, mode)).join('')}</ol>
      ${q.A ? answerHTML(q) : ''}
      ${q.H.length ? `<div class="tips">${q.H.map((h) => `<div class="tip">${icon('bulb')}<div>${md(h)}</div></div>`).join('')}</div>` : ''}
    </section>`;
  }
  const answerHTML = (q) => `<div class="answer"><span class="ans-k">${icon('check')}Answer</span><div>${md(q.A)}</div></div>`;

  /* ---- side panel: topics ---- */
  function topicCard(cid, mode, extra) {
    const c = C(cid);
    if (!c) return '';
    const known = !!S.known[cid];
    const open = !!UI.openTopics[cid];
    return `<div class="tcard ${known ? 'known' : ''} ${open ? 'open' : ''}" data-c="${cid}">
      <div class="tc-h">
        <button class="tc-title" data-act="topic-toggle" data-c="${cid}"><span class="tc-chev">${icon('right')}</span><span class="tc-name">${tH(c.title)}</span><span class="tc-u">${unitName(c.unit)}</span></button>
        <button class="kbtn ${known ? 'on' : ''}" data-act="know" data-c="${cid}" title="${known ? 'Marked as known (click to undo)' : 'Skip this topic: I already know it'}">${known ? icon('check') + 'Known' : 'I know this'}</button>
      </div>
      ${extra ? `<div class="tc-extra">${extra}</div>` : ''}
      <div class="tc-body"><div><div class="tc-in">${conceptBody(c, mode)}<a class="link" href="#/concept/${cid}">Open the full lesson ${icon('right')}</a></div></div></div>
    </div>`;
  }
  function sideHTML(q, topics) {
    const mode = S.mode;
    const fnd = prereqPath(topics).filter((x) => !topics.includes(x));
    const mc = M.mcqs.filter((m) => topics.includes(m.c));
    const unknown = topics.filter((t) => !S.known[t]).length;
    return `
      <div class="side-h"><b>Topics in this question</b><span>${unknown} to learn · ${topics.length - unknown} known</span></div>
      <p class="side-sub">Open the ones you need. Press <em>I know this</em> to skip a topic.</p>
      <div class="tlist">${topics.map((cid) => topicCard(cid, mode)).join('') || '<p class="muted">No linked topics.</p>'}</div>
      ${fnd.length ? `<details class="fnd"><summary>More basics behind these topics <i>${fnd.length}</i></summary><div class="tlist">${fnd.map((cid) => topicCard(cid, mode)).join('')}</div></details>` : ''}
      ${mc.length ? `<button class="btn wide" data-act="topic-quiz" data-q="${q.id}">${icon('quiz')}Quick check on these topics (${Math.min(mc.length, 5)} MCQs)</button>` : ''}`;
  }

  /* ================= concept page + library ================= */
  function viewConcept(id) {
    const c = C(id);
    if (!c) return notFound();
    const depth = UI.fullConcept[id] ? 'deep' : S.mode;
    const used = usedBy[id] || [];
    const leads = (leadsTo[id] || []).filter(C);
    const mc = M.mcqs.filter((m) => m.c === id);
    return `
    <div class="crumbs"><a href="#/concepts">Concepts</a><span>/</span>${unitName(c.unit)}<span>/</span>${tH(c.title)}</div>
    <article class="concept">
      <header class="cp-h">
        <div><p class="eyebrow">${unitName(c.unit)}${c.unit ? ' · ' + esc(M.unitByNo[c.unit] ? M.unitByNo[c.unit].title : '') : ' · foundations'}</p><h1>${tH(c.title)}</h1></div>
        <button class="kbtn big ${S.known[id] ? 'on' : ''}" data-act="know" data-c="${id}">${S.known[id] ? icon('check') + 'Known' : 'I know this'}</button>
      </header>
      ${c.pre.length ? `<div class="cp-pre"><span>Builds on</span>${c.pre.filter(C).map((p) => `<a class="chip ${S.known[p] ? 'ok' : ''}" href="#/concept/${p}">${ctH(p)}</a>`).join('')}</div>` : ''}
      <div class="cp-depth"><span>Showing the <b>${MODES[depth].name}</b> depth.</span>${S.mode !== 'deep' ? `<button class="link" data-act="concept-full" data-c="${id}">${UI.fullConcept[id] ? 'Show less' : 'Show the full lesson with all examples'}</button>` : ''}</div>
      <div class="cp-body">${conceptBody(c, depth)}</div>
      ${S.mode === 'deep' && c.pre.length ? `<details class="fnd"><summary>Refresh the topics this builds on</summary><div class="tlist">${c.pre.filter(C).map((p) => topicCard(p, 'study')).join('')}</div></details>` : ''}
      ${mc.length ? `<button class="btn" data-act="concept-quiz" data-c="${id}">${icon('quiz')}Quick check (${Math.min(mc.length, 5)} MCQs)</button>` : ''}
      ${leads.length ? `<div class="cp-pre"><span>Leads to</span>${leads.map((p) => `<a class="chip" href="#/concept/${p}">${ctH(p)}</a>`).join('')}</div>` : ''}
      ${used.length ? `<h2 class="sec-h">Questions that use this topic <small>${used.length}</small></h2><div class="qlist compact">${used.slice(0, 40).map((qid) => { const q = M.questions[qid]; return `<a class="qrow" href="#/q/${qid}"><span class="qr-no">Ex ${esc(q.ex)} · Q ${esc(q.no)}</span><span class="qr-text">${md(q.Q, { inline: true })}</span></a>`; }).join('')}</div>` : ''}
    </article>`;
  }
  function viewLibrary() {
    const f = UI.libFilter.toLowerCase();
    const groups = [0, ...M.units.map((u) => u.n)];
    const body = groups.map((n) => {
      const ids = M.conceptOrder.filter((id) => C(id).unit === n && (!f || (C(id).title + ' ' + M.plain(C(id).R)).toLowerCase().includes(f)));
      if (!ids.length) return '';
      return `<section class="lib-g"><h2>${n === 0 ? 'Basics (foundations)' : `Unit ${n} · ${esc(M.unitByNo[n].title)}`}<small>${ids.length}</small></h2>
        <div class="lib-grid">${ids.map((id) => `<a class="lib-item ${S.known[id] ? 'known' : ''}" href="#/concept/${id}"><b>${ctH(id)}</b><span>${md(C(id).R, { inline: true })}</span>${S.known[id] ? `<em>${icon('check')}known</em>` : ''}</a>`).join('')}</div></section>`;
    }).join('');
    return `<div class="lib-top"><div><h1>Concept library</h1><p class="lead">Every topic used in the solutions, from basic algebra up. Each one adapts to your mode.</p></div>
      <input class="lib-filter" id="libFilter" type="search" placeholder="Filter topics" value="${esc(UI.libFilter)}"/></div>${body || '<div class="empty"><p>No topics match.</p></div>'}`;
  }

  /* ================= progress ================= */
  function viewProgress() {
    const starred = flat().filter((id) => S.starred[id]);
    const done = flat().filter((id) => S.solved[id] || S.practiced[id]);
    const weak = Object.entries(S.weak).filter(([k, v]) => v > 0 && C(k)).sort((a, b) => b[1] - a[1]);
    const row = (id) => { const q = M.questions[id]; return `<a class="qrow" href="#/q/${id}"><span class="qr-no">Ex ${esc(q.ex)} · Q ${esc(q.no)}</span><span class="qr-text">${md(q.Q, { inline: true })}</span></a>`; };
    return `<h1>Your progress</h1><p class="lead">Saved in this browser only.</p>
      <div class="prog-units">${M.units.map((u) => { const p = unitProgress(u.n); return `<a href="#/unit/${u.n}" class="pu">${ring(p.pct, 46)}<div><b>Unit ${u.n}</b><span>${p.done}/${p.total}</span></div></a>`; }).join('')}</div>
      <h2 class="sec-h">Starred <small>${starred.length}</small></h2><div class="qlist compact">${starred.map(row).join('') || '<p class="muted">Star questions to find them here.</p>'}</div>
      <h2 class="sec-h">Topics to revise <small>${weak.length}</small></h2><div class="chips">${weak.map(([k, v]) => `<a class="chip warn" href="#/concept/${k}">${ctH(k)}<i>${v}</i></a>`).join('') || '<p class="muted">Quiz mistakes will show the topics to revise here.</p>'}</div>
      <h2 class="sec-h">Recent quizzes</h2><div class="qhist">${S.quiz.slice(-10).reverse().map((r) => `<div><b>${r.score}/${r.total}</b><span>${esc(r.name)}</span><em>${new Date(r.at).toLocaleString()}</em></div>`).join('') || '<p class="muted">No quizzes yet.</p>'}</div>
      <h2 class="sec-h">Done <small>${done.length}</small></h2><div class="qlist compact">${done.slice(-30).reverse().map(row).join('') || '<p class="muted">Nothing marked as done yet.</p>'}</div>
      <div class="danger"><button class="btn ghost" data-act="reset">${icon('reset')}Reset all progress</button></div>`;
  }

  /* ================= quiz ================= */
  const PATTERN_MCQ = { 1: 2, 2: 3, 3: 3, 4: 1, 5: 2, 6: 2, 7: 2, 8: 1, 9: 1, 10: 2, 11: 1 };
  function viewQuizSetup() {
    const st = (UI.quizSetup = UI.quizSetup || { units: {}, count: 10, feedback: 'instant' });
    const counts = {};
    M.mcqs.forEach((m) => (counts[m.unit] = (counts[m.unit] || 0) + 1));
    const sel = Object.keys(st.units).filter((k) => st.units[k]);
    const pool = M.mcqs.filter((m) => !sel.length || st.units[m.unit]).length;
    return `<h1>Quiz</h1><p class="lead">Board-style multiple-choice questions. Each answer comes with an explanation and a link to the topic behind it.</p>
      <div class="quiz-presets">
        <button class="preset" data-act="quiz-board">${icon('paper')}<b>Board pattern · 20 MCQs</b><span>Same unit-wise split as the real objective paper (1 mark each).</span></button>
        <button class="preset" data-act="quiz-weak" ${Object.values(S.weak).some((v) => v > 0) ? '' : 'disabled'}>${icon('flag')}<b>Revise my weak topics</b><span>Questions on topics you got wrong before.</span></button>
      </div>
      <section class="card quiz-custom">
        <h2>Build your own</h2>
        <div class="q-units">${M.units.map((u) => `<button class="chip ${st.units[u.n] ? 'on' : ''}" data-act="quiz-unit" data-u="${u.n}" ${counts[u.n] ? '' : 'disabled'}>Unit ${u.n}<i>${counts[u.n] || 0}</i></button>`).join('')}</div>
        <p class="muted">${sel.length ? `${plural(pool, 'question')} available in the selected units.` : `No unit selected: questions come from every unit (${pool}).`}</p>
        <div class="q-opts">
          <label>Questions <select id="qzCount">${[5, 10, 15, 20, 30].map((n) => `<option ${n === st.count ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
          <label>Feedback <select id="qzFb"><option value="instant" ${st.feedback === 'instant' ? 'selected' : ''}>After each question</option><option value="end" ${st.feedback === 'end' ? 'selected' : ''}>At the end (exam style)</option></select></label>
          <button class="btn primary" data-act="quiz-start" ${pool ? '' : 'disabled'}>Start quiz ${icon('right')}</button>
        </div>
      </section>
      ${S.quiz.length ? `<h2 class="sec-h">Recent attempts</h2><div class="qhist">${S.quiz.slice(-6).reverse().map((r) => `<div><b>${r.score}/${r.total}</b><span>${esc(r.name)}</span><em>${new Date(r.at).toLocaleDateString()}</em></div>`).join('')}</div>` : ''}`;
  }
  function makeQuiz(items, name, feedback) {
    UI.quiz = { items: items.map((m) => ({ m, order: shuffle(m.opts.map((_, i) => i)), pick: null })), i: 0, name, feedback: feedback || 'instant', start: Date.now(), done: false };
    go('/quiz/run');
  }
  function boardQuiz() {
    const out = [];
    for (const [u, n] of Object.entries(PATTERN_MCQ)) out.push(...shuffle(M.mcqs.filter((m) => m.unit === +u)).slice(0, n));
    if (out.length < 20) out.push(...shuffle(M.mcqs.filter((m) => !out.includes(m))).slice(0, 20 - out.length));
    makeQuiz(out, 'Board pattern · 20 MCQs', 'end');
  }
  function viewQuizRun() {
    const z = UI.quiz;
    if (!z) return viewQuizSetup();
    const it = z.items[z.i];
    const m = it.m;
    const answered = it.pick != null;
    const reveal = answered && z.feedback === 'instant';
    const letters = 'ABCD';
    return `<div class="quiz-run">
      <div class="qr-top"><span>${esc(z.name)}</span><span class="qr-count">Question ${z.i + 1} of ${z.items.length}</span><span class="qr-timer" id="qTimer">${icon('clock')}<b>0:00</b></span><button class="link" data-act="quiz-exit">Quit</button></div>
      <div class="qr-bar"><i style="width:${(100 * z.items.filter((x) => x.pick != null).length) / z.items.length}%"></i></div>
      <section class="card mcq">
        <div class="mcq-meta">Unit ${m.unit}${m.c && C(m.c) ? ' · ' + ctH(m.c) : ''}</div>
        <div class="mcq-q">${md(m.q)}</div>
        <div class="mcq-opts">${it.order.map((oi, k) => {
          let cls = '';
          if (reveal) cls = oi === m.ans ? 'right' : oi === it.pick ? 'wrong' : 'dim';
          else if (answered && oi === it.pick) cls = 'picked';
          return `<button class="opt ${cls}" data-act="quiz-opt" data-k="${oi}" ${reveal ? 'disabled' : ''}><span class="opt-l">${letters[k]}</span><span class="opt-t">${md(m.opts[oi], { inline: true })}</span></button>`;
        }).join('')}</div>
        ${reveal ? `<div class="mcq-exp ${it.pick === m.ans ? 'ok' : 'bad'}"><b>${it.pick === m.ans ? 'Correct.' : 'Not quite.'}</b> ${md(m.e)}${m.c && C(m.c) ? `<a class="link" href="#/concept/${m.c}" target="_self">Review: ${ctH(m.c)} ${icon('right')}</a>` : ''}</div>` : ''}
      </section>
      <div class="qr-nav">
        ${z.i > 0 ? `<button class="btn ghost" data-act="quiz-move" data-d="-1">${icon('left')}Back</button>` : '<span></span>'}
        <span class="qr-keys">Keys: <kbd>A</kbd>–<kbd>D</kbd> answer · <kbd>Enter</kbd> next</span>
        ${z.i < z.items.length - 1 ? `<button class="btn ${answered ? 'primary' : ''}" data-act="quiz-move" data-d="1">Next ${icon('right')}</button>` : `<button class="btn primary" data-act="quiz-finish">Finish ${icon('check')}</button>`}
      </div>
    </div>`;
  }
  let timerId = null;
  function startQuizTimer() {
    clearInterval(timerId);
    const tick = () => {
      const el = $('#qTimer b');
      if (!el || !UI.quiz) return clearInterval(timerId);
      const s = Math.floor((Date.now() - UI.quiz.start) / 1000);
      el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    };
    tick();
    timerId = setInterval(tick, 1000);
  }
  function finishQuiz() {
    const z = UI.quiz;
    if (!z) return;
    z.done = true;
    z.secs = Math.floor((Date.now() - z.start) / 1000);
    const score = z.items.filter((x) => x.pick === x.m.ans).length;
    z.score = score;
    for (const x of z.items) if (x.m.c && C(x.m.c)) S.weak[x.m.c] = Math.max(0, (S.weak[x.m.c] || 0) + (x.pick === x.m.ans ? -1 : 1));
    S.quiz.push({ name: z.name, score, total: z.items.length, at: Date.now() });
    if (S.quiz.length > 40) S.quiz = S.quiz.slice(-40);
    save();
    go('/quiz/result');
  }
  function viewQuizResult() {
    const z = UI.quiz;
    if (!z || !z.done) return viewQuizSetup();
    const pct = z.score / z.items.length;
    const byUnit = {};
    z.items.forEach((x) => { const u = (byUnit[x.m.unit] = byUnit[x.m.unit] || { r: 0, t: 0 }); u.t++; if (x.pick === x.m.ans) u.r++; });
    const wrong = z.items.filter((x) => x.pick !== x.m.ans);
    const topics = [...new Set(wrong.map((x) => x.m.c).filter((c) => C(c)))];
    const letters = 'ABCD';
    return `<section class="result">
      <div class="res-top">${ring(pct, 120, Math.round(pct * 100) + '%')}
        <div><h1>${z.score} / ${z.items.length}</h1><p class="lead">${pct >= 0.85 ? 'Excellent work.' : pct >= 0.6 ? 'Good. Revise the topics below to close the gaps.' : 'Keep going. Start with the topics below; each links to its lesson.'}</p><p class="muted">${esc(z.name)} · ${Math.floor(z.secs / 60)} min ${z.secs % 60} s</p>
        <div class="res-act">${wrong.length ? `<button class="btn primary" data-act="quiz-retry">Retry the ${plural(wrong.length, 'mistake')}</button>` : ''}<a class="btn ghost" href="#/quiz">New quiz</a></div></div>
      </div>
      <div class="res-units">${Object.entries(byUnit).map(([u, v]) => `<div><b>Unit ${u}</b><span>${v.r}/${v.t}</span><i style="--p:${v.r / v.t}"></i></div>`).join('')}</div>
      ${topics.length ? `<h2 class="sec-h">Topics to revise</h2><div class="chips">${topics.map((c) => `<a class="chip warn" href="#/concept/${c}">${ctH(c)}</a>`).join('')}</div>` : ''}
      <h2 class="sec-h">Review</h2>
      <div class="rev-list">${z.items.map((x, n) => {
        const ok = x.pick === x.m.ans;
        return `<details class="rev ${ok ? 'ok' : 'bad'}" ${ok ? '' : 'open'}><summary><span class="rev-n">${n + 1}</span><span class="rev-q">${md(x.m.q, { inline: true })}</span><span class="rev-s">${ok ? icon('check') : x.pick == null ? 'skipped' : '✕'}</span></summary>
          <div class="rev-b">${x.order.map((oi, k) => `<div class="rev-o ${oi === x.m.ans ? 'right' : oi === x.pick ? 'wrong' : ''}"><span>${letters[k]}</span>${md(x.m.opts[oi], { inline: true })}</div>`).join('')}<div class="mcq-exp">${md(x.m.e)}</div></div></details>`;
      }).join('')}</div>
    </section>`;
  }

  /* ================= mock paper ================= */
  const PATTERN = {
    short: [
      { q: 2, attempt: 8, units: { 1: 2, 2: 5, 4: 3, 7: 2 } },
      { q: 3, attempt: 8, units: { 3: 5, 5: 3, 6: 4 } },
      { q: 4, attempt: 9, units: { 8: 3, 9: 3, 10: 3, 11: 4 } },
    ],
    long: [
      { q: 5, a: [1], b: [9, 10] },
      { q: 6, a: [2], b: [4] },
      { q: 7, a: [2], b: [5] },
      { q: 8, a: [3], b: [7] },
      { q: 9, a: [6], b: [8] },
    ],
  };
  function buildMock(seed) {
    const rnd = seeded(seed);
    const used = new Set();
    const pick = (units, kind, n) => {
      const pool = flat().filter((id) => units.includes(M.questions[id].unit) && !used.has(id));
      let pref = pool.filter((id) => M.questions[id].L === kind);
      if (pref.length < n) pref = pref.concat(pool.filter((id) => !pref.includes(id)));
      const out = shuffle(pref, rnd).slice(0, n);
      out.forEach((id) => used.add(id));
      return out;
    };
    const mcq = [];
    for (const [u, n] of Object.entries(PATTERN_MCQ)) mcq.push(...shuffle(M.mcqs.filter((m) => m.unit === +u), rnd).slice(0, n));
    return {
      seed,
      mcq: mcq.map((m) => ({ m, order: shuffle(m.opts.map((_, i) => i), rnd) })),
      short: PATTERN.short.map((s) => ({ ...s, items: Object.entries(s.units).flatMap(([u, n]) => pick([+u], 's', n)) })),
      long: PATTERN.long.map((l) => ({ ...l, a: pick(l.a, 'l', 1)[0], b: pick(l.b, 'l', 1)[0] })),
    };
  }
  function viewMock() {
    if (!UI.mock) UI.mock = buildMock(Date.now() % 100000);
    const p = UI.mock;
    const letters = 'ABCD';
    const qline = (id, label) => { if (!id) return ''; const q = M.questions[id]; return `<li><span class="mk-l">${label || ''}</span><div class="mk-q">${md(q.Q)}</div><a class="mk-sol" href="#/q/${id}">Ex ${esc(q.ex)} Q ${esc(q.no)} · solution ${icon('right')}</a></li>`; };
    return `<div class="mock-top no-print"><div><h1>Mock paper</h1><p class="lead">Built on the board's paper pattern from the included exercise questions only. Solve it on paper, then open each solution.</p></div>
      <div class="mock-act"><button class="btn" data-act="mock-new">${icon('reset')}New paper</button><button class="btn ghost" data-act="mock-key">${UI.mockKey ? 'Hide' : 'Show'} MCQ key</button><button class="btn ghost" data-act="print">${icon('print')}Print</button></div></div>
      <article class="paper">
        <header class="pp-h"><b>Mathematics (Class 12)</b><span>Total marks: 100 · Paper ${p.seed}</span></header>
        <section><h2>Objective · Q1 <small>20 MCQs × 1 = 20</small></h2>
          <ol class="mk-mcq">${p.mcq.map((x) => `<li><div class="mk-q">${md(x.m.q)}</div><div class="mk-opts">${x.order.map((oi, k) => `<span class="${UI.mockKey && oi === x.m.ans ? 'key' : ''}">(${letters[k]}) ${md(x.m.opts[oi], { inline: true })}</span>`).join('')}</div></li>`).join('')}</ol></section>
        <section><h2>Part I · Short questions <small>2 marks each</small></h2>
          ${p.short.map((s) => `<h3>Q${s.q}. Attempt any ${s.attempt} of these ${s.items.length} <small>2 × ${s.attempt} = ${2 * s.attempt}</small></h3><ol class="mk-list">${s.items.map((id) => qline(id)).join('')}</ol>`).join('')}</section>
        <section><h2>Part II · Long questions <small>attempt any 3 · 10 marks each</small></h2>
          ${p.long.map((l) => `<h3>Q${l.q}.</h3><ul class="mk-list">${qline(l.a, '(a)')}${qline(l.b, '(b)')}</ul>`).join('')}</section>
      </article>
      <section class="pattern no-print"><h2 class="sec-h">Paper pattern</h2>
        <div class="pat-grid">
          <div><b>Q1 · 20 MCQs</b><span>${Object.entries(PATTERN_MCQ).map(([u, n]) => `U${u}: ${n}`).join(' · ')}</span></div>
          ${PATTERN.short.map((s) => `<div><b>Q${s.q} · any ${s.attempt} of ${Object.values(s.units).reduce((a, b) => a + b, 0)}</b><span>${Object.entries(s.units).map(([u, n]) => `U${u}: ${n}`).join(' · ')}</span></div>`).join('')}
          ${PATTERN.long.map((l) => `<div><b>Q${l.q} · long</b><span>(a) Unit ${l.a.join('/')} · (b) Unit ${l.b.join(' or ')}</span></div>`).join('')}
        </div></section>`;
  }

  /* ================= search ================= */
  let IDX = null;
  function buildIndex() {
    IDX = [];
    for (const id of M.conceptOrder) { const c = C(id); IDX.push({ k: 'c', id, t: (M.plain(c.title) + ' ' + M.plain(c.R)).toLowerCase(), title: c.title, sub: unitName(c.unit) }); }
    for (const id of flat()) { const q = M.questions[id]; IDX.push({ k: 'q', id, t: (`ex ${q.ex} q ${q.no} ` + M.plain(q.Q) + ' ' + q.T.map(ctPlain).join(' ')).toLowerCase(), q }); }
  }
  function search(term) {
    if (!IDX) buildIndex();
    const t = term.toLowerCase().trim();
    // "ex 5.2 q 4", "5.2 q4", "5.2/4", "5.2-4(ii)": jump straight to that exercise question
    const ref = t.match(/^(?:ex(?:ercise)?\.?\s*)?(\d{1,2}\.\d)\s*(?:q(?:uestion)?\.?\s*|[\/\-\s])\s*(\d{1,2})\s*\(?([ivx]+|[a-d])?\)?$/);
    if (ref) {
      const [, ex, n, part] = ref;
      const hits = flat().filter((id) => { const q = M.questions[id]; const no = id.slice(q.ex.length + 1); return q.ex === ex && no.match(/^\d+/)[0] === n && (!part || no.slice(n.length) === part); });
      if (hits.length) return hits.slice(0, 14).map((id) => IDX.find((e) => e.k === 'q' && e.id === id));
      const label = `Exercise ${ex}, Q${n}${part ? `(${part})` : ''}`;
      if (M.removedExercises && M.removedExercises[ex]) return [{ k: 'x', msg: `Exercise ${ex} is not in the 2026–27 syllabus. The board removed it completely.` }];
      const rem = (M.removed && M.removed[ex]) || [];
      const norm = (tok) => tok.split(' ')[0].replace(/[()]/g, '');
      if (rem.some((tok) => norm(tok) === n + (part || '') || norm(tok) === n)) return [{ k: 'x', msg: `${label} is not in the 2026–27 syllabus. The board removed it.` }];
    }
    const words = t.split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const res = IDX.filter((e) => words.every((w) => e.t.includes(w)));
    // topics whose title matches come first
    res.sort((a, b) => (b.k === 'c' && words.every((w) => M.plain(b.title).toLowerCase().includes(w))) - (a.k === 'c' && words.every((w) => M.plain(a.title).toLowerCase().includes(w))));
    return res.slice(0, 14);
  }
  function showSearch(term) {
    const box = $('#searchRes');
    const res = search(term);
    if (!term.trim()) { box.hidden = true; return; }
    box.hidden = false;
    box.innerHTML = res.length ? res.map((r, i) => r.k === 'x' ? `<div class="sr-none">${esc(r.msg)}</div>` : r.k === 'c'
      ? `<a class="sr ${i === 0 ? 'act' : ''}" href="#/concept/${r.id}"><em>Topic</em><b>${tH(r.title)}</b><span>${r.sub}</span></a>`
      : `<a class="sr ${i === 0 ? 'act' : ''}" href="#/q/${r.id}"><em>Ex ${esc(r.q.ex)} · Q ${esc(r.q.no)}</em><span class="sr-q">${md(r.q.Q, { inline: true })}</span></a>`).join('') : '<div class="sr-none">Nothing found.</div>';
  }

  /* ================= actions ================= */
  function currentQ() { const p = parts(); return p[0] === 'q' ? M.questions[p[1]] : null; }
  function setMode(m) {
    if (!MODES[m] || S.mode === m) return;
    const q = currentQ();
    if (q) UI.unlocked[q.id] = true; // switching mid-question never hides what was on screen
    S.mode = m;
    save();
    setModeAttr();
    document.body.classList.add('mode-swap');
    setTimeout(() => document.body.classList.remove('mode-swap'), 450);
    render({ keep: true, flash: true });
    toast(`${icon(MODES[m].icon)} ${MODES[m].name} mode`);
  }
  function refreshSolution() {
    const q = currentQ();
    if (!q) return;
    const keep = captureAnchor();
    const sol = $('#solution');
    if (sol) { sol.innerHTML = solutionHTML(q); fitMath(sol); }
    restoreAnchor(keep);
  }
  function refreshQuestion() { render({ keep: true }); }

  const actions = {
    mode: (el) => setMode(el.dataset.m),
    'pick-mode': (el) => { S.mode = el.dataset.m; save(); setModeAttr(); go('/'); },
    step: (el) => {
      const q = currentQ();
      const li = el.closest('.step');
      if (!q || !li || li.classList.contains('locked')) return;
      const i = +li.dataset.i;
      const open = !li.classList.contains('open');
      UI.openSteps[q.id + ':' + i] = open;
      li.classList.toggle('open', open);
      const lbl = $('.s-explain span', li);
      if (lbl) lbl.textContent = open ? 'Hide explanation' : 'How did we get this?';
    },
    'topic-toggle': (el) => {
      const id = el.dataset.c;
      const open = !UI.openTopics[id];
      UI.openTopics[id] = open;
      $$(`.tcard[data-c="${id}"]`).forEach((c) => c.classList.toggle('open', open));
    },
    'topic-open': (el) => {
      const id = el.dataset.c;
      UI.openTopics[id] = true;
      let card = $(`.qside .tcard[data-c="${id}"]`);
      if (!card) { const tl = $('.qside .tlist'); if (tl) { tl.insertAdjacentHTML('afterbegin', topicCard(id, S.mode)); card = $(`.qside .tcard[data-c="${id}"]`); } }
      if (!card) return go('/concept/' + id);
      const det = card.closest('details');
      if (det) det.open = true;
      card.classList.add('open', 'flash');
      if (isPhone()) {
        openSheet();
        setTimeout(() => { const inner = $('.qside .side-inner'); if (inner) inner.scrollTop = Math.max(0, card.offsetTop - 50); }, 60);
      } else card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => card.classList.remove('flash'), 1200);
    },
    'sheet-open': () => openSheet(),
    'sheet-close': () => closeSheet(),
    'search-open': () => { document.body.classList.add('searching'); setTimeout(() => { const q = $('#q'); if (q) q.focus(); }, 30); },
    'search-close': () => closeSearch(),
    know: (el) => {
      const id = el.dataset.c;
      S.known[id] = !S.known[id];
      if (!S.known[id]) delete S.known[id];
      save();
      const k = !!S.known[id];
      $$(`[data-act="know"][data-c="${id}"]`).forEach((b) => { b.classList.toggle('on', k); b.innerHTML = k ? icon('check') + 'Known' : 'I know this'; });
      $$(`.tcard[data-c="${id}"], .lp-item`).forEach((c) => { if (c.classList.contains('tcard') || $(`[data-c="${id}"]`, c)) c.classList.toggle('known', k); });
      if (k) { UI.openTopics[id] = false; $$(`.tcard[data-c="${id}"]`).forEach((c) => c.classList.remove('open')); }
      const cq = currentQ();
      if (cq) {
        const ts = qTopics(cq), left = ts.filter((t) => !S.known[t]).length;
        const sh = $('.side-h span'), badge = $('.qb-topics i');
        if (sh) sh.textContent = `${left} to learn · ${ts.length - left} known`;
        if (badge) badge.textContent = left;
      }
      toast(k ? `Marked <b>${ctH(id)}</b> as known` : `<b>${ctH(id)}</b> is back on your list`);
      if (S.mode === 'deep' && currentQ() && el.closest('.path')) refreshQuestion();
    },
    practice: () => { const q = currentQ(); if (!q) return; UI.practice[q.id] = !UI.practice[q.id]; refreshQuestion(); },
    hint: () => { const q = currentQ(); const r = UI.revealed[q.id] || 0; (UI.hinted[q.id] = UI.hinted[q.id] || {})[r] = true; refreshSolution(); },
    reveal: () => { const q = currentQ(); UI.revealed[q.id] = (UI.revealed[q.id] || 0) + 1; refreshSolution(); const li = $(`.step[data-anchor="s-${UI.revealed[q.id] - 1}"]`); if (li) li.classList.add('flash'); },
    'reveal-all': () => { const q = currentQ(); UI.revealed[q.id] = q.steps.length; refreshSolution(); },
    'check-answer': () => { const q = currentQ(); UI.answerShown[q.id] = true; refreshSolution(); },
    practiced: () => { const q = currentQ(); S.practiced[q.id] = !S.practiced[q.id] ? Date.now() : 0; if (!S.practiced[q.id]) delete S.practiced[q.id]; save(); refreshSolution(); if (S.practiced[q.id]) toast('Great. Marked as solved on your own.'); },
    star: () => { const q = currentQ(); S.starred[q.id] = !S.starred[q.id]; if (!S.starred[q.id]) delete S.starred[q.id]; save(); refreshQuestion(); },
    solved: () => { const q = currentQ(); S.solved[q.id] = !S.solved[q.id] ? Date.now() : 0; if (!S.solved[q.id]) delete S.solved[q.id]; save(); refreshQuestion(); },
    'path-toggle': () => { const q = currentQ(); const sec = $('.path'); const open = !sec.classList.contains('open'); UI.pathOpen[q.id] = open; sec.classList.toggle('open', open); },
    'path-next': () => { const q = currentQ(); UI.pathIdx[q.id] = (UI.pathIdx[q.id] || 0) + 1; const items = pathItems(q, qTopics(q)); if (UI.pathIdx[q.id] >= items.length) { S.pathDone[q.id] = true; save(); } refreshQuestion(); const cur = $('.path-card.cur') || $('#solution'); if (cur) cur.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
    'path-know': (el) => { const q = currentQ(); S.known[el.dataset.c] = true; save(); toast(`Skipped <b>${ctH(el.dataset.c)}</b>`); const items = pathItems(q, qTopics(q)); if ((UI.pathIdx[q.id] || 0) >= items.length) { S.pathDone[q.id] = true; save(); } refreshQuestion(); },
    'path-skip': () => { const q = currentQ(); UI.unlocked[q.id] = true; UI.pathOpen[q.id] = false; refreshQuestion(); const s = $('#solution'); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
    'path-goto': (el) => { const q = currentQ(); if (S.pathDone[q.id] || +el.dataset.i < (UI.pathIdx[q.id] || 0)) { UI.pathIdx[q.id] = +el.dataset.i; delete S.pathDone[q.id]; UI.unlocked[q.id] = true; refreshQuestion(); } },
    'path-restart': () => { const q = currentQ(); UI.pathIdx[q.id] = 0; delete S.pathDone[q.id]; UI.unlocked[q.id] = true; UI.pathOpen[q.id] = true; save(); refreshQuestion(); },
    'unit-tab': (el) => { UI.unitTab[el.dataset.u] = el.dataset.t; render({ keep: true }); },
    'unit-quiz': (el) => makeQuiz(shuffle(M.mcqs.filter((m) => m.unit === +el.dataset.u)).slice(0, 15), `Unit ${el.dataset.u} quiz`, 'instant'),
    'topic-quiz': (el) => { const q = M.questions[el.dataset.q]; const t = qTopics(q); makeQuiz(shuffle(M.mcqs.filter((m) => t.includes(m.c))).slice(0, 5), `Quick check · Ex ${q.ex} Q ${q.no}`, 'instant'); },
    'concept-quiz': (el) => makeQuiz(shuffle(M.mcqs.filter((m) => m.c === el.dataset.c)).slice(0, 5), `Quick check · ${ctPlain(el.dataset.c)}`, 'instant'),
    'concept-full': (el) => { UI.fullConcept[el.dataset.c] = !UI.fullConcept[el.dataset.c]; render({ keep: true }); },
    'quiz-unit': (el) => { const st = UI.quizSetup; st.units[el.dataset.u] = !st.units[el.dataset.u]; render({ keep: true }); },
    'quiz-start': () => {
      const st = UI.quizSetup;
      st.count = +$('#qzCount').value;
      st.feedback = $('#qzFb').value;
      const sel = Object.keys(st.units).filter((k) => st.units[k]).map(Number);
      const pool = M.mcqs.filter((m) => !sel.length || sel.includes(m.unit));
      makeQuiz(shuffle(pool).slice(0, st.count), sel.length ? `Units ${sel.join(', ')}` : 'All units', st.feedback);
    },
    'quiz-board': () => boardQuiz(),
    'quiz-weak': () => { const w = Object.keys(S.weak).filter((k) => S.weak[k] > 0); makeQuiz(shuffle(M.mcqs.filter((m) => w.includes(m.c))).slice(0, 15), 'Weak topics', 'instant'); },
    'quiz-opt': (el) => {
      const z = UI.quiz;
      const it = z.items[z.i];
      if (z.feedback === 'instant' && it.pick != null) return;
      it.pick = +el.dataset.k;
      render({ keep: true });
    },
    'quiz-move': (el) => { const z = UI.quiz; z.i = Math.max(0, Math.min(z.items.length - 1, z.i + +el.dataset.d)); render(); window.scrollTo(0, 0); },
    'quiz-finish': () => {
      const z = UI.quiz;
      const left = z.items.filter((x) => x.pick == null).length;
      if (left && !confirm(`${plural(left, 'question')} not answered. Finish anyway?`)) return;
      finishQuiz();
    },
    'quiz-exit': () => { if (confirm('Quit this quiz? Your answers will be lost.')) { UI.quiz = null; go('/quiz'); } },
    'quiz-retry': () => { const z = UI.quiz; makeQuiz(z.items.filter((x) => x.pick !== x.m.ans).map((x) => x.m), 'Retry mistakes', 'instant'); },
    'mock-new': () => { UI.mock = buildMock(Math.floor(Math.random() * 99999) + 1); render(); },
    'mock-key': () => { UI.mockKey = !UI.mockKey; render({ keep: true }); },
    print: () => window.print(),
    reset: () => { if (confirm('Reset all progress, known topics and quiz history on this device?')) { const m = S.mode; S = Object.assign({}, DEFAULTS, { mode: m }); save(); render(); toast('Progress reset'); } },
  };

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el) {
      if (!e.target.closest('.search')) { const b = $('#searchRes'); if (b) b.hidden = true; }
      return;
    }
    const fn = actions[el.dataset.act];
    if (fn) { e.preventDefault(); fn(el); }
  });
  document.addEventListener('input', (e) => {
    if (e.target.id === 'q') showSearch(e.target.value);
    if (e.target.id === 'libFilter') {
      UI.libFilter = e.target.value;
      const pos = e.target.selectionStart;
      render({ keep: true });
      const f = $('#libFilter');
      f.focus();
      f.setSelectionRange(pos, pos);
    }
  });
  document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea' || tag === 'select';
    if (e.target.id === 'q') {
      if (e.key === 'Escape') { e.target.value = ''; showSearch(''); e.target.blur(); }
      if (e.key === 'Enter') { const a = $('#searchRes .sr'); if (a) { location.hash = a.getAttribute('href'); e.target.value = ''; showSearch(''); e.target.blur(); } }
      return;
    }
    if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
    const p = parts();
    if (e.key === '/') { e.preventDefault(); $('#q').focus(); return; }
    if (['1', '2', '3'].includes(e.key) && !(p[0] === 'quiz' && p[1] === 'run')) { setMode(Object.keys(MODES)[+e.key - 1]); return; }
    if (p[0] === 'q') {
      const nb = neighbors(p[1]);
      if (e.key === 'ArrowRight' && nb.next) go('/q/' + nb.next);
      else if (e.key === 'ArrowLeft' && nb.prev) go('/q/' + nb.prev);
      else if (e.key.toLowerCase() === 'p') actions.practice();
      else if (e.key.toLowerCase() === 'h' && UI.practice[p[1]]) actions.hint();
      else if (e.key.toLowerCase() === 'r' && UI.practice[p[1]]) actions.reveal();
    }
    if (p[0] === 'quiz' && p[1] === 'run' && UI.quiz) {
      const z = UI.quiz;
      const k = 'abcd'.indexOf(e.key.toLowerCase());
      if (k >= 0 && k < z.items[z.i].order.length) actions['quiz-opt']({ dataset: { k: z.items[z.i].order[k] } });
      if (e.key === 'Enter') { if (z.i < z.items.length - 1) actions['quiz-move']({ dataset: { d: 1 } }); else actions['quiz-finish'](); }
    }
  });
  window.addEventListener('hashchange', () => {
    const b = $('#searchRes');
    if (b) b.hidden = true;
    if (document.body.classList.contains('searching')) closeSearch();
    // leaving the question (or arriving on a history entry without the sheet) closes the sheet
    if (sheetOpen && !(history.state && history.state.m12sheet)) setSheet(false);
    render();
  });
  window.addEventListener('resize', syncHeader);
  const onBreakpoint = () => {
    M.compact = compactMQ.matches;
    if (!isPhone() && sheetOpen) setSheet(false);
    render({ keep: true });
  };
  phoneMQ.addEventListener('change', onBreakpoint);
  compactMQ.addEventListener('change', onBreakpoint);

  /* ================= boot ================= */
  function boot() {
    computeUsedBy();
    computeLeadsTo();
    setModeAttr();
    $('#hdr').innerHTML = headerHTML();
    $('#tabbar').innerHTML = tabbarHTML();
    if (history.state && history.state.m12sheet) history.replaceState(null, ''); // never start with the sheet open
    render();
    if (M.errors.length) console.warn('[content]', M.errors);
    requestAnimationFrame(() => document.body.classList.add('ready'));
  }
  boot();
})();
