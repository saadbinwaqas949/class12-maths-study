/* plot.js: a small, dependency-free SVG plotter for function graphs.
 * M12.plot(spec) returns an SVG string. See README for the spec format.
 */
(function (g) {
  'use strict';
  const M12 = (g.M12 = g.M12 || {});
  const NAMES = ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'atan2', 'sinh', 'cosh', 'tanh', 'exp', 'log', 'log10', 'log2', 'sqrt', 'cbrt', 'abs', 'sign', 'floor', 'ceil', 'min', 'max', 'pow', 'PI', 'E', 'hypot'];
  const fnCache = new Map();
  function compile(expr, v) {
    v = v || 'x';
    const key = v + ':' + expr;
    if (fnCache.has(key)) return fnCache.get(key);
    const body = `const {${NAMES.join(',')}} = Math; const ln = Math.log, pi = Math.PI, sec = (u) => 1 / Math.cos(u), csc = (u) => 1 / Math.sin(u), cot = (u) => 1 / Math.tan(u); return (${expr});`;
    // eslint-disable-next-line no-new-func
    const f = new Function(v, body);
    fnCache.set(key, f);
    return f;
  }
  M12.compileExpr = compile;
  const num = (v) => (typeof v === 'number' ? v : compile(String(v))(0));
  let uid = 0;

  function fmt(n) {
    if (Math.abs(n) < 1e-9) return '0';
    const r = Math.round(n * 100) / 100;
    return String(r).replace('-', '−');
  }
  function piLabel(k) {
    // k is a multiple of pi/2 expressed as a number of halves
    if (k === 0) return '0';
    const sign = k < 0 ? '−' : '';
    const a = Math.abs(k);
    if (a % 2 === 0) return sign + (a / 2 === 1 ? '' : a / 2) + 'π';
    return sign + (a === 1 ? '' : a) + 'π/2';
  }

  M12.plot = function (spec) {
    const W = spec.w || 560, H = spec.h || 360, pad = 34;
    const [x0, x1] = (spec.x || [-5, 5]).map(num);
    const [y0, y1] = (spec.y || [-5, 5]).map(num);
    const sx = (x) => pad + ((x - x0) / (x1 - x0)) * (W - 2 * pad);
    const sy = (y) => H - pad - ((y - y0) / (y1 - y0)) * (H - 2 * pad);
    const id = 'clip' + ++uid;
    const parts = [];
    parts.push(`<defs><clipPath id="${id}"><rect x="${pad}" y="${pad}" width="${W - 2 * pad}" height="${H - 2 * pad}"/></clipPath>
      <marker id="ar${uid}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="pl-axis-head"/></marker></defs>`);

    // grid + ticks
    const xs = spec.xpi ? Math.PI * spec.xpi : spec.step || niceStep(x1 - x0);
    const ys = spec.ystep || spec.step || niceStep(y1 - y0);
    const ax = y0 <= 0 && y1 >= 0 ? sy(0) : sy(y0);
    const ay = x0 <= 0 && x1 >= 0 ? sx(0) : sx(x0);
    const grid = [];
    const labels = [];
    const xCount = (x1 - x0) / xs;
    let k0 = Math.ceil(x0 / xs - 1e-9);
    for (let k = k0; k * xs <= x1 + 1e-9; k++) {
      const x = k * xs;
      grid.push(`<line x1="${sx(x)}" y1="${pad}" x2="${sx(x)}" y2="${H - pad}"/>`);
      if (Math.abs(x) > 1e-9 && (xCount <= 16 || k % 2 === 0)) {
        const t = spec.xpi ? piLabel(Math.round((x / Math.PI) * 2)) : fmt(x);
        labels.push(`<text x="${sx(x)}" y="${ax + 15}" text-anchor="middle">${t}</text>`);
      }
    }
    const yCount = (y1 - y0) / ys;
    k0 = Math.ceil(y0 / ys - 1e-9);
    for (let k = k0; k * ys <= y1 + 1e-9; k++) {
      const y = k * ys;
      grid.push(`<line x1="${pad}" y1="${sy(y)}" x2="${W - pad}" y2="${sy(y)}"/>`);
      if (Math.abs(y) > 1e-9 && (yCount <= 14 || k % 2 === 0)) labels.push(`<text x="${ay - 6}" y="${sy(y) + 4}" text-anchor="end">${fmt(y)}</text>`);
    }
    parts.push(`<g class="pl-grid">${grid.join('')}</g>`);
    parts.push(`<g class="pl-axis"><line x1="${pad - 6}" y1="${ax}" x2="${W - pad + 10}" y2="${ax}" marker-end="url(#ar${uid})"/><line x1="${ay}" y1="${H - pad + 6}" x2="${ay}" y2="${pad - 10}" marker-end="url(#ar${uid})"/></g>`);
    parts.push(`<g class="pl-ticks">${labels.join('')}<text x="${W - pad + 12}" y="${ax - 8}" text-anchor="end" class="pl-axname">x</text><text x="${ay + 10}" y="${pad - 8}" class="pl-axname">y</text></g>`);

    const clip = [];
    // shaded regions
    for (const s of spec.shade || []) {
      const f = compile(String(s.f)), gg = compile(String(s.g == null ? 0 : s.g));
      const a = num(s.a), b = num(s.b), n = 160;
      const top = [], bot = [];
      for (let i = 0; i <= n; i++) {
        const x = a + ((b - a) * i) / n;
        top.push(`${sx(x).toFixed(2)},${sy(f(x)).toFixed(2)}`);
        bot.push(`${sx(x).toFixed(2)},${sy(gg(x)).toFixed(2)}`);
      }
      clip.push(`<polygon class="pl-shade c${s.col || 1}" points="${top.concat(bot.reverse()).join(' ')}"/>`);
    }
    // guide lines
    for (const l of spec.lines || []) {
      if (l.v != null) clip.push(`<line class="pl-guide" x1="${sx(num(l.v))}" y1="${pad}" x2="${sx(num(l.v))}" y2="${H - pad}"/>`);
      else if (l.h != null) clip.push(`<line class="pl-guide" x1="${pad}" y1="${sy(num(l.h))}" x2="${W - pad}" y2="${sy(num(l.h))}"/>`);
      else if (l.seg) { const [a, b, c, d] = l.seg.map(num); clip.push(`<line class="pl-guide${l.solid ? ' solid' : ''}" x1="${sx(a)}" y1="${sy(b)}" x2="${sx(c)}" y2="${sy(d)}"/>`); }
    }
    // function curves
    const curveLabels = [];
    (spec.fn || []).forEach((item, idx) => {
      const o = typeof item === 'string' ? { f: item } : item;
      const f = compile(String(o.f));
      const [a, b] = o.dom ? o.dom.map(num) : [x0, x1];
      const n = 700;
      let d = '', pen = false, prev = null;
      const lim = (y1 - y0) * 6;
      for (let i = 0; i <= n; i++) {
        const x = a + ((b - a) * i) / n;
        let y;
        try { y = f(x); } catch (e) { y = NaN; }
        const ok = Number.isFinite(y) && y > y0 - lim && y < y1 + lim;
        if (ok && prev != null && Math.abs(y - prev) > (y1 - y0) * 3) pen = false; // asymptote jump
        if (ok) { d += (pen ? 'L' : 'M') + sx(x).toFixed(2) + ',' + sy(y).toFixed(2); pen = true; prev = y; }
        else { pen = false; prev = null; }
      }
      clip.push(`<path class="pl-curve c${o.col || idx + 1}${o.dash ? ' dash' : ''}" d="${d}"/>`);
      if (o.label) {
        const lx = o.at != null ? num(o.at) : a + (b - a) * 0.82;
        const ly = f(lx);
        if (Number.isFinite(ly)) curveLabels.push(`<text class="pl-label c${o.col || idx + 1}" x="${sx(lx) + 6}" y="${Math.min(Math.max(sy(ly) - 8, pad + 12), H - pad - 4)}">${M12.esc(o.label)}</text>`);
      }
    });
    // parametric curves
    (spec.par || []).forEach((o, idx) => {
      const fx = compile(String(o.x), 't'), fy = compile(String(o.y), 't');
      const [a, b] = (o.t || [0, 2 * Math.PI]).map(num);
      const n = 600;
      let d = '', pen = false;
      for (let i = 0; i <= n; i++) {
        const t = a + ((b - a) * i) / n;
        const x = fx(t), y = fy(t);
        const ok = Number.isFinite(x) && Number.isFinite(y) && Math.abs(y) < 1e6 && Math.abs(x) < 1e6;
        if (ok) { d += (pen ? 'L' : 'M') + sx(x).toFixed(2) + ',' + sy(y).toFixed(2); pen = true; } else pen = false;
      }
      clip.push(`<path class="pl-curve c${o.col || idx + 1}${o.dash ? ' dash' : ''}" d="${d}"/>`);
      if (o.label && o.lt != null) {
        const t = num(o.lt);
        curveLabels.push(`<text class="pl-label c${o.col || idx + 1}" x="${sx(fx(t)) + 6}" y="${sy(fy(t)) - 6}">${M12.esc(o.label)}</text>`);
      }
    });
    parts.push(`<g clip-path="url(#${id})">${clip.join('')}</g>`);
    parts.push(curveLabels.join(''));
    // points
    for (const p of spec.pts || []) {
      const o = Array.isArray(p) ? Object.assign({ x: p[0], y: p[1], label: p[2] }, p[3] || {}) : p;
      const X = sx(num(o.x)), Y = sy(num(o.y));
      parts.push(`<circle class="pl-pt c${o.col || 1}" cx="${X}" cy="${Y}" r="4.2"/>`);
      if (o.label) {
        const dx = o.dx != null ? o.dx : 7, dy = o.dy != null ? o.dy : -8;
        parts.push(`<text class="pl-ptlabel" x="${X + dx}" y="${Y + dy}"${dx < 0 ? ' text-anchor="end"' : ''}>${M12.esc(o.label)}</text>`);
      }
    }
    // free labels: [x, y, text] or [x, y, text, colour index] (coloured like curve number n)
    for (const t of spec.labels || []) parts.push(`<text class="${t[3] ? 'pl-label c' + t[3] : 'pl-ptlabel'}" x="${sx(num(t[0]))}" y="${sy(num(t[1]))}">${M12.esc(t[2])}</text>`);

    const cap = spec.cap ? `<figcaption>${M12.md(spec.cap, { inline: true })}</figcaption>` : '';
    return `<figure class="plot"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${M12.esc(spec.alt || 'graph')}">${parts.join('')}</svg>${cap}</figure>`;
  };

  function niceStep(range) {
    const raw = range / 10;
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    const m = raw / p;
    return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
  }
})(typeof window !== 'undefined' ? window : globalThis);
