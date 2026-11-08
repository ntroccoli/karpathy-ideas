// Validate every idea file, then check that generated files are up to date.
// Usage: node scripts/validate.mjs
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { IDEAS_DIR, THEMES, SOURCES, STATUSES, KINDS, REQUIRED, loadIdeas } from './lib.mjs';

const errors = [];
const ideas = loadIdeas();
const files = new Set(ideas.map(i => i.file));
const err = (file, msg) => errors.push(`${file}: ${msg}`);

for (const { file, meta, body, error } of ideas) {
  if (error) { err(file, error); continue; }
  for (const k of REQUIRED) if (!(k in meta)) err(file, `missing key "${k}"`);

  if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9]+(-[a-z0-9]+)*\.md$/.test(file)) err(file, 'file name must be YYYY-MM-DD-slug.md');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date || '') || isNaN(Date.parse(meta.date))) err(file, 'date must be YYYY-MM-DD');
  else if (!file.startsWith(meta.date)) err(file, 'file name must start with the date');

  if (!SOURCES.includes(meta.source)) err(file, `source must be one of ${SOURCES.join(', ')}`);
  if (!/^https:\/\/\S+$/.test(meta.url || '')) err(file, 'url must be an https URL');
  if (!Array.isArray(meta.also)) err(file, 'also must be a list, e.g. []');
  else for (const u of meta.also) if (!/^https:\/\/\S+$/.test(u)) err(file, `also: bad URL ${u}`);

  if (!Array.isArray(meta.themes) || meta.themes.length < 1 || meta.themes.length > 3) err(file, 'themes: 1 to 3 slugs');
  else for (const t of meta.themes) if (!THEMES[t]) err(file, `unknown theme "${t}"`);

  if (!meta.summary || meta.summary.length > 160) err(file, 'summary: one sentence, at most 160 characters');
  if (!STATUSES.includes(meta.status)) err(file, `status must be ${STATUSES.join(' or ')}`);
  if (meta.status === 'superseded') {
    if (!meta.superseded_by) err(file, 'superseded needs superseded_by');
    else if (!files.has(meta.superseded_by)) err(file, `superseded_by "${meta.superseded_by}" not found in ideas/`);
  } else if (meta.superseded_by) err(file, 'superseded_by set but status is current');
  if (typeof meta.anthropic !== 'boolean') err(file, 'anthropic must be true or false');
  else if (meta.anthropic && meta.date < '2026-05-19') err(file, 'anthropic: true only from 2026-05-19');
  if (!KINDS.includes(meta.kind)) err(file, `kind must be ${KINDS.join(' or ')}`);

  // Body: title heading, Apply section (required for practices, optional for views), quote rule.
  if (!new RegExp(`^# ${meta.title?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm').test(body)) err(file, 'first heading must equal the title');
  if (meta.kind === 'practice' && !/^## Apply\s*$/m.test(body)) err(file, 'a practice needs a "## Apply" section');
  const quotes = body.split('\n').filter(l => /^>\s*"/.test(l));
  if (quotes.length > 1) err(file, 'at most one quote per file');
  for (const q of quotes) {
    const words = q.replace(/^>\s*"/, '').replace(/"\s*$/, '').trim().split(/\s+/).length;
    if (words > 15) err(file, `quote has ${words} words (max 15)`);
  }
  // Relative links to other ideas must resolve.
  for (const [, target] of body.matchAll(/\]\(([^)#\s]+\.md)\)/g)) {
    if (/^https?:/.test(target)) continue;
    if (!existsSync(join(IDEAS_DIR, target))) err(file, `broken link ${target}`);
  }
}

if (errors.length) {
  console.error(`${errors.length} problem(s):\n` + errors.map(e => '  ' + e).join('\n'));
  process.exit(1);
}
console.log(`${ideas.length} idea files valid.`);
try {
  execFileSync(process.execPath, [join(IDEAS_DIR, '..', 'scripts', 'build.mjs'), '--check'], { stdio: 'inherit' });
} catch {
  process.exit(1);
}
