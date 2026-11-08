// Shared helpers for build.mjs and validate.mjs. No dependencies.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const IDEAS_DIR = join(ROOT, 'ideas');
export const RAW_BASE = 'https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main';

// Theme slugs and descriptions. Keep in sync with the table in AGENTS.md.
export const THEMES = {
  'agentic-coding': 'Coding with agents: workflows, IDEs, review, vibe coding vs agentic engineering.',
  'verification': 'Success criteria, tests, verifiability, eval loops, autoresearch.',
  'context-and-prompting': 'Context engineering, prompting, stating scope, giving intent.',
  'output-and-reading': 'Output formats, simplified English, HTML, diagrams, reading with LLMs.',
  'knowledge-management': 'Personal wikis, notes, compiling knowledge with LLMs.',
  'agent-native-software': 'Software 3.0, LLM OS, CLIs and docs for agents, products.',
  'llm-psychology': 'Jagged intelligence, ghosts vs animals, sycophancy, how to model LLMs.',
  'security-and-dependencies': 'Supply chain, sandboxing, dependency hygiene.',
  'learning-and-education': 'Learning with LLMs, teaching, skill atrophy.',
  'research-and-training': 'Training, RL, tokenizers, small models, research practice.',
  'ai-progress': 'Views on the field, timelines, society, jobs.',
};

export const SOURCES = ['x', 'blog', 'github', 'talk', 'hn'];
export const STATUSES = ['current', 'superseded'];
export const KINDS = ['practice', 'view'];
export const REQUIRED = ['title', 'date', 'source', 'url', 'also', 'themes', 'summary', 'status', 'superseded_by', 'anthropic', 'kind'];

// Parse the simple frontmatter used by idea files: `key: value`, inline lists `[a, b]`.
export function parseIdea(file) {
  const text = readFileSync(join(IDEAS_DIR, file), 'utf8').replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { file, error: 'missing frontmatter', meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].replace(/\s+#.*$/, '').trim();
    if (v.startsWith('[') && v.endsWith(']')) {
      v = v.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    } else if (v === 'true' || v === 'false') {
      v = v === 'true';
    }
    meta[kv[1]] = v;
  }
  return { file, meta, body: m[2] };
}

export function loadIdeas() {
  return readdirSync(IDEAS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(parseIdea)
    .sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || '') || a.file.localeCompare(b.file));
}
