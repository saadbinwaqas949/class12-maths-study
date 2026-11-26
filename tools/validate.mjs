// Content validator: parses every content file exactly as the browser does,
// then checks references, cycles, plot specs and that every formula renders in KaTeX.
// Usage: node tools/validate.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const katex = require('katex');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function loadSite() {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]).filter((s) => !s.includes('vendor') && !s.endsWith('app.js'));
  const ctx = { console, katex, Math, JSON };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  for (const s of scripts) {
    const file = path.join(root, s);
    if (!fs.existsSync(file)) { console.warn('missing script', s); continue; }
    vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: s });
  }
  return ctx.M12;
}

function mathOf(text) {
  const M = global.__M;
  return M.splitMath(text || '').filter((s) => s.t !== 'text');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const M = loadSite();
  global.__M = M;
  const problems = [...M.errors];
  const C = M.concepts;
  // concept refs + cycles
  for (const id of M.conceptOrder) {
    for (const p of C[id].pre) if (!C[p]) problems.push(`concept ${id}: unknown prerequisite ${p}`);
    for (const p of C[id].see) if (!C[p]) problems.push(`concept ${id}: unknown see-also ${p}`);
    if (!C[id].R) problems.push(`concept ${id}: missing R (summary)`);
  }
  const state = {};
  const dfs = (id, stack) => {
    if (state[id] === 2 || !C[id]) return;
    if (state[id] === 1) { problems.push('prerequisite cycle: ' + [...stack, id].join(' -> ')); return; }
    state[id] = 1;
    for (const p of C[id].pre) dfs(p, [...stack, id]);
    state[id] = 2;
  };
  M.conceptOrder.forEach((id) => dfs(id, []));
  // questions
  for (const id of M.qOrder) {
    const q = M.questions[id];
    for (const t of q.T) if (!C[t]) problems.push(`question ${id}: unknown topic ${t}`);
    q.steps.forEach((s, i) => s.c.forEach((c) => { if (!C[c]) problems.push(`question ${id} step ${i + 1}: unknown concept ${c}`); }));
    if (!q.steps.length) problems.push(`question ${id}: no steps`);
    if (!q.T.length) problems.push(`question ${id}: no topics`);
    if (!q.A) problems.push(`question ${id}: no final answer`);
    if (!M.unitByNo[q.unit] || !M.unitByNo[q.unit].exercises.find((e) => e.id === q.ex && e.title)) problems.push(`question ${id}: exercise ${q.ex} not declared in units.js`);
  }
  for (const m of M.mcqs) if (m.c && !C[m.c]) problems.push(`mcq ${m.id}: unknown concept ${m.c}`);
  // plots
  const plots = [];
  for (const id of M.qOrder) { const q = M.questions[id]; plots.push(...q.plots.map((p) => [id, p])); q.steps.forEach((s) => plots.push(...s.plots.map((p) => [id, p]))); }
  for (const [id, p] of plots) {
    try { M.compileExpr('0'); for (const f of p.fn || []) M.compileExpr(String(typeof f === 'string' ? f : f.f))(1); }
    catch (e) { problems.push(`question ${id}: plot function error ${e.message}`); }
  }
  // KaTeX
  const texts = [];
  for (const id of M.conceptOrder) { const c = C[id]; [c.R, c.F, c.B, c.X, ...c.E, ...c.M].forEach((t) => texts.push([`concept ${id}`, t])); }
  for (const id of M.qOrder) { const q = M.questions[id]; [q.Q, q.N, q.A, ...q.H].forEach((t) => texts.push([`question ${id}`, t])); q.steps.forEach((s, i) => [s.s, s.w, s.d].forEach((t) => texts.push([`question ${id} step ${i + 1}`, t]))); }
  for (const m of M.mcqs) [m.q, m.e, ...m.opts].forEach((t) => texts.push([`mcq ${m.id}`, t]));
  let formulas = 0;
  for (const [where, t] of texts) {
    if (!t) continue;
    const dollars = (t.replace(/\\\$/g, '').match(/\$/g) || []).length;
    if (dollars % 2) problems.push(`${where}: odd number of $ signs`);
    for (const seg of mathOf(t)) {
      formulas++;
      try { katex.renderToString(seg.v, { displayMode: seg.t === 'display', throwOnError: true, strict: 'ignore', macros: { ...M.katexMacros } }); }
      catch (e) { problems.push(`${where}: KaTeX: ${e.message.split('\n')[0]}  in  ${seg.v.slice(0, 80)}`); }
    }
  }
  // stats
  const per = {};
  for (const id of M.qOrder) per[M.questions[id].unit] = (per[M.questions[id].unit] || 0) + 1;
  const mc = {};
  for (const m of M.mcqs) mc[m.unit] = (mc[m.unit] || 0) + 1;
  const cc = {};
  for (const id of M.conceptOrder) cc[C[id].unit] = (cc[C[id].unit] || 0) + 1;
  console.log(`concepts ${M.conceptOrder.length}  questions ${M.qOrder.length}  mcqs ${M.mcqs.length}  formulas ${formulas}`);
  console.log('questions/unit', JSON.stringify(per));
  console.log('concepts/unit ', JSON.stringify(cc));
  console.log('mcqs/unit     ', JSON.stringify(mc));
  if (problems.length) { console.log(`\n${problems.length} problem(s):`); problems.forEach((p) => console.log(' - ' + p)); process.exit(1); }
  console.log('\nAll checks passed.');
}
