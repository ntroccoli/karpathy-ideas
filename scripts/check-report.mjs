// Check a field report (docs/field-reports.md) before it is counted.
// Our procedure, not one of Karpathy's ideas.
//
// Usage:
//   node scripts/check-report.mjs report.md        a file with the issue body
//   REPORT_BODY="..." node scripts/check-report.mjs   the body from an env var
//   node scripts/check-report.mjs < report.md      the body on stdin
// The body holds one ```json block (the first one is checked) and the consent line.
// Exit 0 when the report is valid, 1 when it is not. No dependencies.
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const SCHEMA = 'karpathy-ideas/field-report@1';
export const QUESTIONS = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', 'C2', 'C3'];
export const ENUMS = {
  run: ['step1', 'step2', 'step3'],
  reviewer: ['fresh_session', 'builder_session', 'subagents'],
  kind: ['web_app', 'service_fleet', 'multi_repo_setup', 'game', 'desktop_app', 'cli_tool', 'library',
    'content_pipeline', 'research', 'docs_or_collection', 'other'],
  scale: ['S', 'M', 'L', 'multi_session'],
  grade: ['no_gap', 'partial_gap', 'gap', 'not_applicable'],
  outcome: ['applied', 'later', 'skipped', 'none'],
  proof: ['proven', 'waiting', 'stopped_holding', 'failed', 'not_shown', 'none'],
  basis: ['measured', 'inferred', 'judged'],
};
export const EXAMPLE_ID = '3f1c2a9e-7b4d-4e8a-9c61-2d5b8e0f4a17'; // the id in docs/field-reports.md
export const FEEDBACK = ['unclear', 'hard_to_measure', 'not_covered', 'done_when', 'low_value'];
export const CONSENT = 'I read the exact text; it has no confidential details, code or secrets; I license it under CC BY 4.0.';
const TOP = ['schema', 'report_id', 'date', 'log_entry', 'checklist_commit', 'run', 'reviewer', 'level', 'project',
  'agent', 'model', 'items', 'feedback'];
const ITEM = ['q', 'grade', 'outcome', 'proof', 'basis', 'measure', 'method', 'pitfall', 'idea'];

// Invisible and bidi code points: variation selectors, tags, zero-width, word joiner, bidi controls, BOM.
const INVISIBLE = /[\u{FE00}-\u{FE0F}\u{E0100}-\u{E01EF}\u{E0000}-\u{E007F}\u{200B}-\u{200F}\u{2060}-\u{2064}\u{202A}-\u{202E}\u{2066}-\u{2069}\u{061C}\u{FEFF}\u{00AD}]/u;
const CONTROL = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/u;
// Never in any text field, at any level (secret patterns print no excerpt).
const LEAKS = [
  ['a URL', /\b(?:https?|ftp|file|ssh|git):\/\/|\bwww\.[a-z0-9-]+\./i, 'name the kind of page instead, e.g. "the vendor docs"'],
  ['a domain name', /\b[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:com|org|net|io|dev|ai|app|co|gov|edu|cloud|xyz)\b/i, 'name the kind of site instead'],
  ['a Windows path', /\b[A-Za-z]:[\\/]|\\\\[A-Za-z0-9]/, 'describe the file by its role, e.g. "the record file"'],
  ['a home-folder path', /(?:^|[\s"'(`])~[\\/]/, 'describe the file by its role, e.g. "the user-level instructions"'],
  ['an absolute path', /(?:^|[\s"'(`=])\/(?:[\w.@-]+\/)+[\w.@-]*/, 'describe the file by its role'],
  ['a file path', /\b[\w.@-]+[\\/][\w.@/\\-]*\.[A-Za-z0-9]{1,6}\b/, 'give the file name alone only if it is generic (README.md), or describe its role'],
  ['an email address', /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/, 'remove it'],
  ['an access token', /\b(?:gh[pousr]|github_pat)_[A-Za-z0-9_]{20,}|\bsk-[A-Za-z0-9_-]{16,}|\bAKIA[0-9A-Z]{16}\b|\bxox[abprs]-[A-Za-z0-9-]{10,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/, 'remove it, and revoke the token if it was real', true],
  ['a long token-like string', /(?=[A-Za-z0-9+/=]*\d)(?=[A-Za-z0-9+/=]*[A-Za-z])[A-Za-z0-9+/=]{32,}/, 'remove it', true],
  ['a UUID (session or report id)', /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i, 'remove it; session ids never go in a report'],
  ['a commit hash or session id', /\b(?=[0-9a-f]*[a-f])(?=[0-9a-f]*\d)[0-9a-f]{7,40}\b/i, 'remove it'],
  ['a ticket or work-package id', /\b(?!(?:UTF|SHA|ISO|RFC|CVE|GPT|MD|ES|TLS|HTTP|IPV|ASD|STE|PCI|SOC)-)[A-Z]{2,10}-\d{2,7}\b/, 'remove it, or say "a work package"'],
];

const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
// Field names from the report are untrusted: print only safe characters.
const safeKey = k => (/^[A-Za-z0-9_]{1,40}$/.test(k) ? k : '(a key with other characters)');
const excerpt = s => JSON.stringify([...s].filter(c => !INVISIBLE.test(c) && !CONTROL.test(c)).join('').replace(/`/g, "'").slice(0, 40));

/** Find the first ```json block in an issue body and the consent line. */
export function extract(body) {
  const text = String(body ?? '').replace(/\r\n/g, '\n');
  const m = text.match(/```json[ \t]*\n([\s\S]*?)\n```/);
  const consent = new RegExp(`^\\s*[-*] \\[[xX]\\] ${CONSENT.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm').test(text);
  return { json: m ? m[1] : null, consent };
}

/** Validate a parsed report. Returns a list of {field, problem, fix}. */
export function validate(r) {
  const errs = [];
  const err = (field, problem, fix) => errs.push({ field, problem, fix });
  const oneOf = (field, v, list) => {
    if (!list.includes(v)) err(field, v === undefined ? 'missing' : `${excerpt(String(v))} is not allowed`, `use one of: ${list.join(', ')}`);
  };
  const str = (field, v, max, { required = true, min = 1 } = {}) => {
    if (v === undefined) { if (required) err(field, 'missing', `add a string of at most ${max} characters`); return false; }
    if (typeof v !== 'string') { err(field, 'is not a string', `give a string of at most ${max} characters`); return false; }
    if (v.trim().length < min) { err(field, 'is empty', 'write the text, or leave the field out if it is optional'); return false; }
    if ([...v].length > max) err(field, `is ${[...v].length} characters long`, `shorten it to ${max} characters or fewer`);
    return true;
  };
  const unknownKeys = (field, obj, allowed) => {
    for (const k of Object.keys(obj)) if (!allowed.includes(k)) err(`${field}${field ? '.' : ''}${safeKey(k)}`, 'is not a field of this schema', `remove it; allowed fields: ${allowed.join(', ')}`);
  };

  if (!isObj(r)) { err('(report)', 'is not a JSON object', 'put one JSON object in the ```json block'); return errs; }
  unknownKeys('', r, TOP);
  if (r.schema !== SCHEMA) err('schema', r.schema === undefined ? 'missing' : 'has the wrong value', `use "${SCHEMA}"`);
  if (typeof r.report_id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r.report_id)) {
    err('report_id', 'is not a UUID', 'generate a random UUID once per report (for example crypto.randomUUID()) and keep it when you edit the report');
  } else if (r.report_id.toLowerCase() === EXAMPLE_ID) {
    err('report_id', 'is the example id from docs/field-reports.md', 'generate your own random UUID');
  }
  const isDate = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(`${v}T00:00:00Z`)) && new Date(`${v}T00:00:00Z`).toISOString().startsWith(v);
  if (!isDate(r.date)) err('date', 'is not a date', 'use the review date as YYYY-MM-DD');
  if (r.log_entry !== 'none' && !isDate(r.log_entry)) err('log_entry', 'is not a date or "none"', 'give the date (YYYY-MM-DD) of the newest log.md entry the review covered, or "none"');
  if (r.checklist_commit !== 'unknown' && !(typeof r.checklist_commit === 'string' && /^[0-9a-f]{7,12}$/.test(r.checklist_commit))) {
    err('checklist_commit', 'is not a short commit hash or "unknown"', 'give the short hash of the checklist.md you read, or "unknown"');
  }
  oneOf('run', r.run, ENUMS.run);
  oneOf('reviewer', r.reviewer, ENUMS.reviewer);
  if (![0, 1, 2].includes(r.level)) err('level', 'is not 0, 1 or 2', 'use the number 0 unless the user chose 1 or 2');
  const level = [0, 1, 2].includes(r.level) ? r.level : 0;

  if (!isObj(r.project)) err('project', 'missing or not an object', 'add {"kind": ..., "scale": ..., "ai_roles": true or false}');
  else {
    const p = r.project;
    unknownKeys('project', p, ['kind', 'scale', 'ai_roles', 'architecture', 'name']);
    oneOf('project.kind', p.kind, ENUMS.kind);
    oneOf('project.scale', p.scale, ENUMS.scale);
    if (typeof p.ai_roles !== 'boolean') err('project.ai_roles', 'is not true or false', 'true when the product itself calls models, else false');
    if (p.architecture !== undefined) {
      if (level < 1) err('project.architecture', 'is not allowed at level 0', 'remove it, or set level to 1 only if the user chose it');
      else str('project.architecture', p.architecture, 300);
    }
    if (p.name !== undefined) {
      if (level < 2) err('project.name', `is not allowed at level ${level}`, 'remove it, or set level to 2 only if the user chose it');
      else str('project.name', p.name, 80);
    }
  }
  for (const f of ['agent', 'model']) {
    if (str(f, r[f], 40) && !/^[A-Za-z0-9 .+_()-]+$/.test(r[f])) err(f, 'has characters other than letters, digits, spaces and . + _ ( ) -', 'give the plain product or model name, e.g. "Claude Code" or "Opus 5.5"');
  }

  if (!Array.isArray(r.items)) err('items', 'missing or not an array', 'add one entry per checklist question you answered');
  else {
    if (r.items.length > QUESTIONS.length) err('items', `has ${r.items.length} entries`, `give at most one entry per question (${QUESTIONS.length})`);
    const seen = new Set();
    r.items.forEach((it, i) => {
      const f = `items[${i}]`;
      if (!isObj(it)) { err(f, 'is not an object', 'give {"q", "grade", "outcome", "proof", "basis", "method"}'); return; }
      unknownKeys(f, it, ITEM);
      oneOf(`${f}.q`, it.q, QUESTIONS);
      if (QUESTIONS.includes(it.q)) {
        if (seen.has(it.q)) err(`${f}.q`, `${it.q} appears twice`, 'merge the entries: one per question; put the main change in outcome and proof');
        seen.add(it.q);
      }
      oneOf(`${f}.grade`, it.grade, ENUMS.grade);
      oneOf(`${f}.outcome`, it.outcome, ENUMS.outcome);
      oneOf(`${f}.proof`, it.proof, ENUMS.proof);
      oneOf(`${f}.basis`, it.basis, ENUMS.basis);
      if (it.outcome === 'applied' && it.proof === 'none') err(`${f}.proof`, 'is "none" for an applied change', 'use proven, waiting, stopped_holding, failed or not_shown');
      if (ENUMS.outcome.includes(it.outcome) && it.outcome !== 'applied' && ENUMS.proof.includes(it.proof) && it.proof !== 'none') {
        err(`${f}.proof`, `is "${it.proof}" but nothing was applied`, 'use "none" when the outcome is later, skipped or none');
      }
      if (it.measure !== undefined) {
        const m = it.measure;
        if (!isObj(m)) err(`${f}.measure`, 'is not an object', 'give {"metric": "...", "value": 123, "unit": "..."}');
        else {
          unknownKeys(`${f}.measure`, m, ['metric', 'value', 'unit']);
          if (str(`${f}.measure.metric`, m.metric, 60) && !/^[a-z0-9_]+$/.test(m.metric)) err(`${f}.measure.metric`, 'is not snake_case', 'use lowercase letters, digits and _ (e.g. "first_call_tokens")');
          if (typeof m.value !== 'number' || !Number.isFinite(m.value)) err(`${f}.measure.value`, 'is not a number', 'give a plain number, without units or quotes');
          str(`${f}.measure.unit`, m.unit, 20);
        }
      } else if (it.basis === 'measured') err(`${f}.measure`, 'missing for basis "measured"', 'add the number, or set basis to inferred or judged');
      str(`${f}.method`, it.method, 400);
      if (it.pitfall !== undefined) str(`${f}.pitfall`, it.pitfall, 200);
      if (it.idea !== undefined && !(typeof it.idea === 'string' && /^\d{4}-\d{2}-\d{2}-[a-z0-9-]+$/.test(it.idea))) {
        err(`${f}.idea`, 'is not an idea file slug', 'give the file name without folder and .md, e.g. "2026-01-26-success-criteria-not-steps"');
      }
    });
  }

  let feedbackCount = 0;
  if (!isObj(r.feedback)) err('feedback', 'missing or not an object', `add {${FEEDBACK.map(h => `"${h}": []`).join(', ')}}`);
  else {
    unknownKeys('feedback', r.feedback, FEEDBACK);
    for (const h of FEEDBACK) {
      const list = r.feedback[h];
      if (list === undefined) continue;
      if (!Array.isArray(list)) { err(`feedback.${h}`, 'is not an array', 'give a list of {"q": ..., "text": ...}'); continue; }
      if (list.length > 10) err(`feedback.${h}`, `has ${list.length} entries`, 'keep the 10 most useful');
      list.forEach((e, i) => {
        const f = `feedback.${h}[${i}]`;
        if (!isObj(e)) { err(f, 'is not an object', 'give {"q": "A1" or "general", "text": "..."}'); return; }
        feedbackCount++;
        unknownKeys(f, e, ['q', 'text']);
        oneOf(`${f}.q`, e.q, [...QUESTIONS, 'general']);
        str(`${f}.text`, e.text, 300);
      });
    }
  }
  if (Array.isArray(r.items) && r.items.length === 0 && feedbackCount === 0) err('items', 'is empty and there is no feedback', 'add at least one item or one feedback entry');

  // Every string anywhere: no hidden characters, no paths, URLs, emails, secrets or ids.
  const walk = (v, field) => {
    if (typeof v === 'string') {
      if (field === 'report_id') return;
      const hidden = [...v].filter(c => INVISIBLE.test(c) || CONTROL.test(c));
      if (hidden.length) err(field, `has ${hidden.length} invisible or control character(s) (${[...new Set(hidden.map(c => `U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`))].join(', ')})`, 'retype the text in plain characters; hidden characters can carry instructions to a model');
      for (const [what, re, fix, secret] of LEAKS) {
        const m = v.match(re);
        if (m) err(field, `contains ${what}${secret ? '' : ` (${excerpt(m[0].trim())})`}`, fix);
      }
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${field}[${i}]`));
    else if (isObj(v)) for (const [k, x] of Object.entries(v)) walk(x, field ? `${field}.${safeKey(k)}` : safeKey(k));
  };
  walk(r, '');
  return errs;
}

/** Check an issue body. Returns {ok, report, errors}. */
export function checkBody(body) {
  const { json, consent } = extract(body);
  const errors = [];
  if (json === null) {
    errors.push({ field: '(body)', problem: 'has no ```json block', fix: 'put the report JSON between a line ```json and a line ```' });
    return { ok: false, report: null, errors };
  }
  let report = null;
  try { report = JSON.parse(json); } catch (e) {
    errors.push({ field: '(json)', problem: `does not parse: ${String(e.message).replace(/[^\w .,:()'-]/g, '').slice(0, 120)}`, fix: 'fix the JSON syntax (quotes, commas, brackets)' });
  }
  if (report !== null) errors.push(...validate(report));
  if (!consent) errors.push({ field: '(consent)', problem: 'the consent line is missing or not ticked', fix: `add the line "- [x] ${CONSENT}" after the JSON block` });
  return { ok: errors.length === 0, report, errors };
}

export function formatResult({ ok, errors }) {
  if (ok) return 'PASS: the field report is valid.';
  return [`FAIL: ${errors.length} problem(s) in the field report.`, '',
    ...errors.map(e => `- \`${e.field}\`: ${e.problem}. Fix: ${e.fix}.`)].join('\n');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const file = process.argv[2];
  const body = file ? readFileSync(file, 'utf8') : process.env.REPORT_BODY ?? readFileSync(0, 'utf8');
  const result = checkBody(body);
  console.log(formatResult(result));
  process.exit(result.ok ? 0 : 1);
}
