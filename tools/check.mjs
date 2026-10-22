#!/usr/bin/env node
// Validates the question bank in src/content before a build.
// Usage: node tools/check.mjs   (set KATEX=/path/to/katex to also test every formula)
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { createRequire } from 'node:module';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const ORDER = ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '5.1', '5.2', '5.3'];
// IDs that students' saved scores already point at. Never remove or renumber these.
const STABLE = ['7.1-1','7.1-2','7.1-3','7.2-1','7.2-2','7.2-3','7.2-4','7.3-1','7.3-2','7.3-3','7.3-4','7.4-1','7.4-2','7.4-3','7.4-4',
  '7.5-1','7.5-2','7.5-3','7.6-1','7.6-2','7.6-3','7.6-4','7.7-1','7.7-2','5.1-1','5.1-2','5.1-3','5.2-1','5.2-2','5.2-3','5.3-1','5.3-2','5.3-3','5.3-4','5.3-5'];
const CODE = /^(M|A|B|dM)\d(ft|cso)?$/;

const ctx = { R: String.raw, CONTENT: {}, FIGS: {}, Math, console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'src/fig.js'), 'utf8') + '\nthis.Fig = Fig;', ctx);
for (const k of ORDER) vm.runInContext(fs.readFileSync(path.join(root, `src/content/${k}.js`), 'utf8'), ctx, { filename: `${k}.js` });

let katex = null;
if (process.env.KATEX) katex = createRequire(import.meta.url)(process.env.KATEX);
const MATH = /\$\$[\s\S]+?\$\$|\$(?!\s)[^$\n]+?\$/g;
const errors = [], seen = new Set();
const err = (where, msg) => errors.push(`${where}: ${msg}`);
function checkTex(where, src){
  if (!katex) return;
  for (const m of String(src).match(MATH) || []){
    const display = m.startsWith('$$');
    try { katex.renderToString(display ? m.slice(2, -2) : m.slice(1, -1), { throwOnError: true, displayMode: display, strict: 'ignore' }); }
    catch (e) { err(where, `LaTeX error in ${m.slice(0, 60)}: ${e.message.split('\n')[0]}`); }
  }
}

let total = 0;
for (const k of ORDER){
  const sec = ctx.CONTENT[k];
  if (!sec) { err(k, 'missing section'); continue; }
  checkTex(`${k} notes`, sec.notes);
  for (const [, key] of sec.notes.matchAll(/\[\[fig:([\w.-]+)\]\]/g)) if (!ctx.FIGS[key]) err(`${k} notes`, `figure ${key} not defined`);
  const dist = [0, 0, 0, 0, 0];
  for (const q of sec.questions){
    const w = q.id || `${k}-?`;
    if (seen.has(q.id)) err(w, 'duplicate id'); seen.add(q.id);
    if (!new RegExp(`^${k.replace('.', '\\.')}-\\d+$`).test(q.id)) err(w, 'id must be <section>-<number>');
    if (!Number.isInteger(q.stars) || q.stars < 1 || q.stars > 5) err(w, 'stars must be 1 to 5'); else dist[q.stars - 1]++;
    const stated = [...q.q.matchAll(/\[\[(\d+)\]\]/g)].reduce((a, m) => a + +m[1], 0);
    if (stated !== q.scheme.length) err(w, `question says ${stated} marks but the scheme has ${q.scheme.length} lines`);
    if (!Array.isArray(q.hints) || q.hints.length < 2) err(w, 'needs at least 2 hints');
    if (!q.answer || !q.answer.trim()) err(w, 'missing answer');
    if (!q.sol || q.sol.trim().length < 40) err(w, 'missing or very short solution');
    q.scheme.forEach((r, i) => { if (r.length !== 3) err(w, `scheme line ${i + 1} must be [part, code, text]`); else if (!CODE.test(r[1])) err(w, `scheme line ${i + 1} has unusual code ${r[1]}`); });
    const parts = [...q.q.matchAll(/\*\*\(([a-z])\)\*\*/g)].map(m => `(${m[1]})`);
    if (parts.length && q.scheme.some(r => !parts.includes(r[0]))) err(w, 'scheme part labels must match the question parts');
    if (k.startsWith('5.') && !q.fig) err(w, 'mechanics questions need a force diagram');
    [q.q, q.answer, q.sol, ...q.hints, ...q.scheme.map(r => r[2])].forEach(t => checkTex(w, t));
    total++;
  }
  console.log(`${k}  ${String(sec.questions.length).padStart(2)} questions  stars ${dist.join('/')}`);
  if (sec.questions.length < 15) err(k, `only ${sec.questions.length} questions (need 15)`);
}
for (const id of STABLE) if (!seen.has(id)) err(id, 'stable id has been removed');
console.log(`${total} questions in total${katex ? ', every formula rendered with KaTeX' : ''}`);
if (errors.length){ console.error('\n' + errors.join('\n')); process.exit(1); }
console.log('All checks passed.');
