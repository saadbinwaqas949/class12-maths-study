// Excluded-syllabus checker.
// 1. No question from the board's exclusion list (2026-27) may exist on the site.
// 2. No lesson, question or MCQ may mention a removed topic.
// 3. No text may contain a "fingerprint" of a removed example or exercise question.
// Usage: node tools/check-excluded.mjs
import { loadSite } from './validate.mjs';

const M = loadSite();
const SELFTEST = process.argv.includes('--selftest');
if (SELFTEST) {
  // plant three violations; the checker must report every one of them
  M.addQuestions(1, '#Q 1.1 2\nQ: planted removed question\nT: u1-quad-factored\nS: step\nA: answer');
  M.addConcepts(1, '#C zz-planted Planted topic\nR: The graph of $2^x$ has a horizontal asymptote.');
  M.addMCQs(6, '#M\nQ: The eccentricity of a rectangular hyperbola is\nO*: $\\sqrt2$\nO: $2$');
}

/* ---------- 1. removed exercise questions (board numbering = book numbering,
   duplicates in the book are numbered sequentially, as the board does) ---------- */
// [exercise, question, parts]   parts omitted = the whole question is removed
const REMOVED = [
  ['1.1', '1', ['v']], ['1.1', '2'],
  ['1.2', '1'], ['1.2', '2'], ['1.2', '3'], ['1.2', '4'], ['1.2', '6'],
  ['1.3', '1'], ['1.3', '3'], ['1.3', '5'], ['1.3', '7'], ['1.3', '8'], ['1.3', '9'],
  ['1.4', '1', ['iii', 'v']], ['1.4', '2', ['v', 'vi']],
  ['1.5', '4'], ['1.5', '7'], ['1.5', '8'], ['1.5', '11'], ['1.5', '12'],
  ['2.3', '2'], ['2.3', '6'],
  ['2.4', '1', ['iv']], ['2.4', '2', ['iv', 'v']], ['2.4', '3'], ['2.4', '5'],
  ['2.5', '2', ['b']], ['2.5', '3', ['ii']], ['2.5', '4', ['i']],
  ['2.6', '2', ['ii']], ['2.6', '3', ['i', 'iii']], ['2.6', '5'],
  ['2.7', '1'], ['2.7', '4'], ['2.7', '5'], ['2.7', '7'],
  ['3.1', '3', ['viii', 'ix', 'x', 'xii']],
  ['3.2', '1', ['iii', 'v', 'viii']], ['3.2', '2', ['v', 'ix', 'xi', 'xiii', 'xiv']],
  ['3.3', '11'], ['3.3', '15'], ['3.3', '16'], ['3.3', '20'], ['3.3', '23'],
  ['3.4', '4'], ['3.4', '5'], ['3.4', '6'], ['3.4', '9'], ['3.4', '12'], ['3.4', '13'], ['3.4', '14'], ['3.4', '15'],
  ['3.5', '1', ['vi', 'vii', 'ix']], ['3.5', '3'], ['3.5', '6', ['iii']], ['3.5', '7'], ['3.5', '10'], ['3.5', '12'], ['3.5', '14'],
  ['3.5', '15', ['i', 'iv']], ['3.5', '16', ['iv']],
  ['3.6', '2'], ['3.6', '3', ['iii', 'iv']], ['3.6', '11'], ['3.6', '12'], ['3.6', '13'], ['3.6', '14'], ['3.6', '15'],
  ['3.7', '1'], ['3.7', '2'], ['3.7', '7'], ['3.7', '10'], ['3.7', '11'], ['3.7', '12'],
  ['4.1', '1', ['v']], ['4.1', '2'], ['4.1', '3'], ['4.1', '4'], ['4.1', '5'], ['4.1', '6'],
  ['4.3', '5'], ['4.3', '6'], ['4.3', '7'], ['4.3', '8'], ['4.3', '9'], ['4.3', '10'],
  ['5.1', '4'], ['5.1', '5'], ['5.1', '7', ['vi']], ['5.1', '8'], ['5.1', '11'],
  ['5.2', '6'], ['5.2', '7'], ['5.2', '9'],
  ['5.3', '11'], ['5.3', '12'],
  ['6.1', '4'], ['6.1', '8'], ['6.1', '10'], ['6.1', '12'],
  ['6.2', '5'], ['6.2', '6'],
  ['6.3', '5'], ['6.3', '6'], ['6.3', '7'],
  ['6.4', '5'], ['6.4', '6'], ['6.4', '7'], ['6.4', '11'], ['6.4', '12'], ['6.4', '13'],
  ['6.5', '3'], ['6.5', '6'], ['6.5', '9'], ['6.5', '11'], ['6.5', '12'], ['6.5', '14'], ['6.5', '18'], ['6.5', '19'], ['6.5', '20'],
  ['6.6', '6'], ['6.6', '7'], ['6.6', '8'], ['6.6', '9'], ['6.6', '10'], ['6.6', '11'],
  ['7.1', '1'], ['7.1', '2'], ['7.1', '3'], ['7.1', '4'], ['7.1', '5'],
  ['8.2', '1', ['i', 'iii']], ['8.2', '2', ['ii', 'iii']], ['8.2', '3', ['iv', 'v']],
  ['8.3', '1'], ['8.3', '2'], ['8.3', '7'], ['8.3', '8'],
  ['8.4'], // the whole exercise
  ['9.2', '11'], ['9.2', '12'], ['9.2', '13'], ['9.2', '17'], ['9.2', '18'], ['9.2', '20'], ['9.2', '21'],
  ['10.1', '14'], ['10.1', '19'], ['10.1', '20'], ['10.1', '21'], ['10.1', '22'], ['10.1', '23'], ['10.1', '24'],
  ['10.2', '1'], ['10.2', '2'], ['10.2', '3'], ['10.2', '4'], ['10.2', '5'],
  ['11.3'], // the whole exercise
  // Also left out because they need a removed topic:
  ['4.1', '7'], // RL circuit (Flow of Electricity in Series Circuits is removed)
  ['4.3', '11'], // RC circuit
];

const problems = [];
const qids = M.qOrder;
for (const [ex, q, parts] of REMOVED) {
  for (const id of qids) {
    const [qex, qno] = [M.questions[id].ex, id.slice(M.questions[id].ex.length + 1)];
    if (qex !== ex) continue;
    if (q === undefined) { problems.push(`removed exercise ${ex} is present: ${id}`); continue; }
    const m = qno.match(/^(\d+)([a-z]*)$/);
    if (!m || m[1] !== q) continue;
    if (!parts || parts.includes(m[2])) { problems.push(`removed question present: ${id}`); continue; }
    if (m[2] === '') {
      // one page covers several parts: none of the removed parts may be listed in it
      const text = M.questions[id].Q;
      for (const p of parts) if (text.includes(`(${p})`)) problems.push(`question ${id} includes removed part ${ex} Q${q}(${p})`);
    }
  }
}

/* ---------- gather every piece of text with its unit ---------- */
const texts = [];
for (const id of M.conceptOrder) { const c = M.concepts[id]; for (const t of [c.title, c.R, c.F, c.B, c.X, ...c.E, ...c.M]) texts.push({ where: `concept ${id}`, unit: c.unit, t }); }
for (const id of qids) {
  const q = M.questions[id];
  for (const t of [q.Q, q.N, q.A, ...q.H]) texts.push({ where: `question ${id}`, unit: q.unit, t });
  q.steps.forEach((s, i) => [s.s, s.w, s.d].forEach((t) => texts.push({ where: `question ${id} step ${i + 1}`, unit: q.unit, t })));
}
for (const m of M.mcqs) for (const t of [m.q, m.e, ...m.opts]) texts.push({ where: `mcq ${m.id}`, unit: m.unit, t });
for (const u of M.units) { texts.push({ where: `unit ${u.n}`, unit: u.n, t: u.title + ' ' + u.blurb }); for (const e of u.exercises) texts.push({ where: `unit ${u.n} exercise ${e.id}`, unit: u.n, t: (e.title || '') + ' ' + (e.note || '') }); }

/* ---------- 2. removed topics (keywords) ---------- */
// [regex, units it applies to (null = all), description]
const TOPICS = [
  [/asymptot/i, [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11], 'asymptotes of exponential/log functions (Unit 1, removed)'],
  [/strictly (increasing|decreasing)/i, [0, 1], 'exponential/log functions strictly increasing or decreasing (removed)'],
  [/graph(s)? of (the )?(hyperbolic|\\sinh|\\cosh|\\tanh)/i, null, 'graphs of hyperbolic functions (removed)'],
  [/graphical behaviou?r/i, null, 'graphical behaviour of logarithmic functions (removed)'],
  [/surplus/i, null, 'consumer/producer surplus (Ex 3.6 Q11-15 removed)'],
  [/solids? of revolution|volume of revolution|revolv|disc method|washer method/i, null, 'volumes of revolution (Ex 3.6 removed)'],
  [/moment of inertia|lamina/i, null, 'moment of inertia (Ex 3.7 Q1-2 removed)'],
  [/\bbolus\b|\bAUC\b|minimum effective concentration/i, null, 'drug AUC (Ex 3.7 Q12 removed)'],
  [/circuit|capacitor|inductor|\bRC\b|\bRL\b/i, null, 'flow of electricity in series circuits (removed)'],
  [/air resistance|drag force/i, null, 'Ex 4.1 Q4 (removed)'],
  [/deflation|inflation|cooling/i, null, 'Unit 4 applications examples / modelling (removed)'],
  [/symmetric form/i, null, 'symmetric form of a line (Ex 5.1 Q7(vi) removed)'],
  [/rectangular hyperbola|perpendicular asymptotes|asymptotes are perpendicular/i, null, 'Ex 6.5 Q11, Q18 (removed)'],
  [/LORAN|Bohr|apogee|perigee|electron/i, null, 'Ex 6.6 Q7-9 (removed)'],
  [/satellite/i, [6], 'Ex 6.6 Q9 (removed)'],
  [/smallest rectangle|greatest perimeter/i, null, 'Ex 6.4 Q5-6 (removed)'],
  [/latus rectum as (a )?diameter/i, null, 'Ex 6.3 Q5 (removed)'],
  [/compound(ed|ing)? continuously|continuous(ly)? compound|quarterly/i, null, 'continuous / quarterly compounding (Ex 1.5 Q11-12, book examples removed)'],
  [/Junaid|Aslam/i, null, 'Ex 7.1 Q1-5 (removed)'],
  [/cannonball|ferris|quarterback|comet orbits the sun/i, null, 'Ex 11.3 (removed)'],
  [/fundamental transcendental|non-?fundamental/i, null, 'Ex 1.2 Q3-4 classification (removed)'],
];
const ALLOW = [];
for (const x of texts) {
  if (!x.t) continue;
  for (const [re, units, why] of TOPICS) {
    if (units && !units.includes(x.unit)) continue;
    if (re.test(x.t) && !ALLOW.some((a) => a.where.test(x.where) && a.re.source === re.source)) problems.push(`${x.where}: mentions a removed topic, ${why}  [${(x.t.match(re) || [''])[0]}]`);
  }
}

/* ---------- 3. fingerprints of removed examples / questions ---------- */
const norm = (s) => String(s || '')
  .replace(/\\(left|right|big|Big|bigl|bigr|Bigl|Bigr)\b/g, '')
  .replace(/\\[dt]frac/g, '\\frac')
  .replace(/\\(,|;|!|quad|qquad| )/g, '')
  .replace(/\s+/g, '')
  .replace(/\\frac(\d)(\d)/g, '\\frac{$1}{$2}');
// [fingerprint (normalised LaTeX/plain), units (null = all), source]
const FP = [
  ['-(x-1)(x+2)', null, 'Ex 1.1 Q2'],
  ['\\frac{2x-3}{x+1}', null, 'Ex 1.2 Q1'], ['\\sqrt{x^2+2x}', null, 'Ex 1.2 Q1-2'], ['15^x', null, 'Ex 1.2 Q3'], ['(\\frac{1}{3})^x', null, 'Ex 1.2 Q6'],
  ['\\log_4(x-2)', null, 'Ex 1.3 Q1'], ['\\frac{2x-1}{x+3}', null, 'Ex 1.3 Q7'], ['3^{x-2}', null, 'Ex 1.3 Q8'], ['4\\ln(3x-6)', null, 'Ex 1.3 Q9'],
  ['x^2-5x+7', null, 'Ex 1.4 Q1(iii)'], ['16^3', null, 'Ex 1.4 Q1(v)'], ['\\log_2(x-2)', null, 'Ex 1.4 Q2(v)'], ['\\log(2x)+\\log(x-1)', null, 'Ex 1.4 Q2(vi)'],
  ['600e^{kt}', null, 'Ex 1.5 Q4'], ['500e^{kt}', null, 'Ex 1.5 Q7 / book example'], ['L_1=85', null, 'Ex 1.5 Q8'], ['3320.12', null, 'Ex 1.5 Q12'],
  ['200e^{0.04t}', null, 'book example (1.11)'], ['1161.8', null, 'book example (1.11)'], ['6341.2', null, 'book example (1.11)'], ['L_1=90', null, 'book example (1.11)'],
  ['\\log(5-3x)', null, 'book example 20 (1.10)'], ['_{\\frac{7}{9}}', null, 'book example (1.10)'], ['_{7/9}', null, 'book example (1.10)'],
  ['\\sin2^\\circ', null, 'Ex 2.5 Q2(b)'], ['82^{', null, 'Ex 2.5 Q4(i)'], ['(82)^', null, 'Ex 2.5 Q4(i)'],
  ['\\sqrt{26}', [2], 'Ex 2.6 Q3(i)'], ['\\tan46', null, 'Ex 2.6 Q3(iii)'], ['100\\pm0.5', null, 'Ex 2.6 Q5'],
  ['\\sin(x+a)', null, 'book example 11 (Unit 3)'], ['(ab)^x', null, 'book example 12 (Unit 3)'],
  ['x\\sqrt{1+\\sqrt{x}}', null, 'Ex 3.1 Q3(viii)'], ['x\\sqrt{1+\\sqrtx}', null, 'Ex 3.1 Q3(viii)'], ['(a+bx)^3', null, 'Ex 3.1 Q3(ix)'], ['x^5\\sqrt{x^3+1}', null, 'Ex 3.1 Q3(x)'], ['7^{\\lnx}', null, 'Ex 3.1 Q3(xii)'],
  ['\\inte^{ax}\\sinbx', null, 'book example 35'], ['\\inte^{ax}\\sin(bx)', null, 'book example 35'], ['8x-x^2-7', null, 'book example 38'], ['x^2-8x+7', null, 'book example 39'],
  ['e^x\\tan^{-1}(e^x)', null, 'Ex 3.3 Q11'], ['\\tan^{-1}\\sqrtx', null, 'Ex 3.3 Q15'], ['\\tan^{-1}\\sqrt{x}', null, 'Ex 3.3 Q15'], ['\\sqrtx\\sin\\sqrtx', null, 'Ex 3.3 Q16'], ['\\lnx\\tan^{-1}(\\lnx)', null, 'Ex 3.3 Q20'], ['e^{\\sqrtx}(1+\\sqrtx)', null, 'Ex 3.3 Q23'], ['e^{\\sqrt{x}}(1+\\sqrt{x})', null, 'Ex 3.3 Q23'],
  ['|x-1|+|x+2|', null, 'book example 50'], ['x^2(1-x)^{\\frac{3}{2}}', null, 'book example 51'], ['x^2(1-x)^{3/2}', null, 'book example 51'], ['\\cos^5', null, 'book example 52'], ['\\sqrt{2}+\\sin^2', null, 'book example 53'], ['\\sqrt2+\\sin^2', null, 'book example 53'], ['x^3\\sin^2x', null, 'book example 55'], ['f(2-x)', null, 'book example 56'],
  ['\\frac{\\sqrtx}{1+x}', [3], 'Ex 3.5 Q1(vi)'], ['\\frac{\\sqrt{x}}{1+x}', [3], 'Ex 3.5 Q1(vi)'], ['\\frac{\\ln(1+x)}{1+x^2}', null, 'Ex 3.5 Q1(vii)'], ['1+e^{\\cosx}', null, 'Ex 3.5 Q1(ix)'],
  ['\\frac{e^x-1}{e^x+1}', null, 'Ex 3.5 Q6(iii)'], ['x^2+x^3', null, 'Ex 3.5 Q7'], ['f(2x)', [3], 'Ex 3.5 Q10'], ['f(a+x)', null, 'Ex 3.5 Q12'], ['f(x+2)=f(x)', null, 'Ex 3.5 Q14'], ['\\ln(\\tanx)dx', null, 'Ex 3.5 Q15(i)'],
  ['x^4-x^2', null, 'Ex 3.6 Q3(iii)'], ['800+60t', null, 'Ex 3.7 Q7'], ['e^{-0.3t}', null, 'Ex 3.7 Q12'],
  ['x^2+y^2-2x-3y', null, 'Ex 6.1 Q4'], ['x^2+y^2-10x-4y+25', null, 'Ex 6.1 Q8'], ['(8,6)', null, 'Ex 6.1 Q10'], ['4x+3y-10', null, 'Ex 6.1 Q12'], ['x+2y+9', null, 'book example 8 (circle)'],
  ['x^2+y^2-2x+4y', null, 'book example 14 (tangents from a point)'], ['(-3,7)', null, 'Ex 6.2 Q5'], ['(12,-4)', null, 'Ex 6.2 Q5'], ['3+5\\cos', null, 'Ex 6.2 Q6'],
  ['(3\\cos\\theta,2\\sin\\theta)', null, 'Ex 6.4 Q7'], ['y=x+5', null, 'Ex 6.4 Q11'], ['a^2\\cos^2\\theta+b^2\\sin^2\\theta', null, 'Ex 6.4 Q12'], ['|CP|', null, 'Ex 6.4 Q13'],
  ['(-1,4)', [6], 'Ex 6.5 Q6'], ['7x^2-3y^2', null, 'Ex 6.5 Q19'], ['lx+my', null, 'Ex 6.5 Q20'],
  ['x^2\\sinx-1', null, 'Ex 8.2 Q1(i)'], ['x^4-2x-10', null, 'Ex 8.2 Q1(iii)'], ['x^2+4\\sinx', null, 'Ex 8.2 Q2(ii)'], ['x^4-x+1', null, 'Ex 8.3 Q7'], ['\\sin(x^2)', [8], 'Ex 8.3 Q8'],
  ['x^2+0.2x', null, 'Ex 8.4'], ['q^3-4q', null, 'Ex 8.4'], ['20+v', null, 'Ex 8.4'], ['-0.1x^2+2x+1', null, 'Ex 8.4'],
  ['\\tan^2(\\sec^{-1}3)', null, 'Ex 9.2 Q11'], ['\\frac{2x}{1+x^2}', [9], 'Ex 9.2 Q12'], ['\\tan(\\sin^{-1}x)', null, 'Ex 9.2 Q13'], ['\\tan\\frac{\\theta}{2}\\tan\\frac{\\phi}{2}', null, 'Ex 9.2 Q17'], ['\\frac{\\cosx}{1-\\sinx}', null, 'Ex 9.2 Q18'], ['\\frac{2x-1}{3x-1}', null, 'Ex 9.2 Q20'], ['\\frac{2p}{1+p^2}', null, 'Ex 9.2 Q21'],
  ['\\sqrt{2\\sin^2x+1}', null, 'Ex 10.1 Q14'], ['\\tan(7x+', null, 'Ex 10.1 Q19'], ['\\cot(2x+', null, 'Ex 10.1 Q20'], ['\\sin^3x+\\cos^3x', null, 'Ex 10.1 Q21'], ['\\sin3x-\\sin5x+\\sin7x', null, 'Ex 10.1 Q22'], ['\\cos2x-\\cos6x', null, 'Ex 10.1 Q23'], ['\\sinx+\\sin3x+\\sin5x+\\sin7x', null, 'Ex 10.1 Q24'],
  ['\\cos(2x-1)', null, 'Ex 10.2 Q2'], ['3\\tanx=2x+1', null, 'Ex 10.2 Q3'], ['\\sec(x+3)', null, 'Ex 10.2 Q4'], ['2\\cosx=x^2+2x-1', null, 'Ex 10.2 Q5'], ['3\\sinx=\\frac{x}{2}+1', null, 'Ex 10.2 Q1'],
  ['e^t\\sint', [11], 'Ex 11.3 Q5'], ['(t^3-2t)', null, 'Ex 11.3 Q5'], ['1-e^{-t}', [11], 'Ex 11.3 Q8'],
];
const FPX = [
  [/(?:^|[^\w])(?:y|f\(x\))=x\^2\+2x\+1(?![\d])/, null, 'Ex 1.1 Q1(v)'],
  [/x\^2-4x\+3.*(focus|directrix)|(focus|directrix).*x\^2-4x\+3/, null, 'Ex 6.3 Q6'],
  [/\\int_\{?0\}?\^\{?2\}?\\cos/, [8], 'Ex 8.3 Q1'], [/\\int_\{?0\}?\^\{?1\}?e\^x/, [8], 'Ex 8.3 Q2'],
  [/\\tan\(?x\)?=x/, [8], 'Ex 8.2 Q3(v)'],
];
for (const x of texts) {
  if (!x.t) continue;
  const n = norm(x.t);
  for (const [fp, units, src] of FP) {
    if (units && !units.includes(x.unit)) continue;
    if (n.includes(norm(fp))) problems.push(`${x.where}: matches removed content (${src})  [${fp}]`);
  }
  for (const [re, units, src] of FPX) {
    if (units && !units.includes(x.unit)) continue;
    if (re.test(n)) problems.push(`${x.where}: matches removed content (${src})`);
  }
}

/* ---------- graphs of inverse trigonometric functions ---------- */
for (const id of qids) {
  const q = M.questions[id];
  const specs = [...q.plots, ...q.steps.flatMap((s) => s.plots)];
  for (const p of specs) {
    const fns = [...(p.fn || []).map((f) => (typeof f === 'string' ? f : f.f)), ...(p.par || []).flatMap((o) => [o.x, o.y])].join(' ');
    // Ex 1.3 Q2, which the board kept, asks for the graph of the inverse sine; Unit 9's graph section stays removed
    if (/\b(asin|acos|atan)\s*\(/.test(fns) && !/^1\.3-2(ii|iii)$/.test(id)) problems.push(`question ${id}: plots an inverse trigonometric function (graphs removed)`);
    if (/\b(sinh|cosh|tanh)\s*\(/.test(fns)) problems.push(`question ${id}: plots a hyperbolic function (graphs removed)`);
  }
}

if (SELFTEST) {
  const caught = ['removed question present: 1.1-2', 'concept zz-planted', 'rectangular hyperbola'].filter((k) => problems.some((p) => p.includes(k)));
  console.log(`Self-test: ${caught.length}/3 planted violations caught.`);
  process.exit(caught.length === 3 ? 0 : 1);
}
console.log(`Checked ${qids.length} questions, ${M.conceptOrder.length} topics, ${M.mcqs.length} MCQs (${texts.length} text fields).`);
console.log(`Removed-question rules: ${REMOVED.length}, topic rules: ${TOPICS.length}, fingerprints: ${FP.length + FPX.length}.`);
if (problems.length) { console.log(`\n${problems.length} problem(s):`); problems.forEach((p) => console.log(' - ' + p)); process.exit(1); }
console.log('\nNo removed content found.');
