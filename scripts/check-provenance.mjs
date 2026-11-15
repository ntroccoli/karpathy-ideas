// Provenance of limits in checklist.md: a number with a size or count unit that reads as a limit
// ("12 KB or less", "under 200k tokens") needs a "Source:" with a link in the same paragraph.
// Limits without a source were removed on 2026-11-15: a model given a size cuts until it holds.
// Usage: node scripts/check-provenance.mjs [file]   (default: checklist.md). Exit 1 on a problem.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const NUM = String.raw`\d[\d,.]*\s*[kKmM]?`;
const UNIT = String.raw`(?:KB|MB|GB|bytes?|tokens?|lines?|files?|messages?)\b`;
const LIMIT = new RegExp(
  String.raw`\b(?:under|at most|above)\s+(?:about\s+|~)?${NUM}\s*${UNIT}|${NUM}\s*${UNIT}\s+(?:or fewer|or less)\b`, 'gi');
const SOURCE = /Source:[^\n]*(?:https?:\/\/|\]\()/;

// Returns one problem string per unsourced limit, with its line number.
export function checkProvenance(text) {
  const problems = [];
  const lines = text.split(/\r?\n/);
  let start = 0;
  for (let i = 0; i <= lines.length; i++) {
    if (i < lines.length && lines[i].trim() !== '') continue;
    const para = lines.slice(start, i).join('\n');
    if (!SOURCE.test(para)) {
      for (const m of para.matchAll(LIMIT)) {
        const line = start + para.slice(0, m.index).split('\n').length;
        problems.push(`line ${line}: "${m[0].replace(/\s+/g, ' ')}" reads as a limit; add "Source:" with a link to its paragraph, or remove it`);
      }
    }
    start = i + 1;
  }
  return problems;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const file = process.argv[2] || join(dirname(fileURLToPath(import.meta.url)), '..', 'checklist.md');
  const problems = checkProvenance(readFileSync(file, 'utf8'));
  if (problems.length) {
    console.error(`${file}:\n` + problems.map((p) => '  ' + p).join('\n'));
    process.exit(1);
  }
  console.log(`${file}: no limit without a source.`);
}
