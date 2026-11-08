# AGENTS.md

Instructions for AI agents that read or maintain this repository. Humans: see `README.md`.

## What this repository is

An unofficial, curated collection of Andrej Karpathy's public ideas about working with LLMs and
AI agents. Each idea is one markdown file in `ideas/`. Each file has a date, a link to the
original source, a summary in our own words, at most one short quote, and practical "Apply"
steps. Not affiliated with or endorsed by Andrej Karpathy.

## Reading the collection (for agents that use it)

Reviewing a whole project? Use `checklist.md`, not the themes: measure each question first,
then open only the linked ideas that point to a gap. For one task, use the steps below.

1. Read only the 2-3 theme pages in `themes/` that match your task (one line per idea). Read
   `index.md` (every idea, larger) only if you need the whole collection.
2. Open only the idea files that match your task.
   If you can delegate, let a smaller, cheaper model or subagent do steps 1-2 and return a
   shortlist of idea links with one line each on why they fit; the main model reads only those.
3. Each idea has a `kind`: `practice` (a way of working you can apply) or `view` (his opinion or
   explanation; context, not steps). Theme pages list practices first. For a task, read practices.
4. Prefer ideas with `status: current`. A `superseded` idea links to the newer view in
   `superseded_by`; he changed his mind, usually because models improved.
5. Ideas with `anthropic: true` are dated after he joined Anthropic (2026-05-19) and concern
   Claude or Anthropic. Weigh them with that in mind.
6. Do not reproduce more of his words than the quote in the file. Link to the source instead.
7. `llms-full.txt` holds every idea in one file, for tools that cannot browse.

## Idea file format

File name: `ideas/YYYY-MM-DD-short-slug.md` (date of the source, lowercase slug, hyphens).

```markdown
---
title: Give agents success criteria, not steps
date: 2026-01-26
source: x
url: https://x.com/karpathy/status/2015883857489522876
also: []
themes: [agentic-coding, verification]
summary: Agents loop well toward a checkable goal; describe the goal and the test, not the steps.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Give agents success criteria, not steps

Summary in our own words, 40 to 150 words.

## In his words

> "Don't tell it what to do, give it success criteria and watch it go."
> — Andrej Karpathy, 2026-01-26

## Apply

- Concrete step, prompt or setting a reader can use today.

## Context

- When and why he said it, model era, and links to related ideas: [title](2026-03-07-slug.md).
```

Field rules:

- `source`: one of `x`, `blog`, `github`, `talk`, `hn`. `url`: the primary source, `https://`.
- `also`: other URLs that carry the same idea, as an inline list `[url1, url2]` or `[]`.
- `themes`: one to three slugs from the list below. Do not invent new themes; propose one in an
  issue instead.
- `summary`: one sentence, at most 160 characters. It appears in `index.md`.
- `status`: `current` or `superseded`. When `superseded`, `superseded_by` is the file name of the
  newer idea (without folder), and the newer idea's Context links back.
- `anthropic`: `true` only when the date is 2026-05-19 or later and the idea concerns Claude,
  Anthropic or its products.
- `kind`: `practice` when a reader can change how they work because of it (a technique, workflow,
  prompt pattern, design rule); `view` when it is mainly an opinion, prediction or explanation. A
  practice needs an "Apply" section; a view has one only when its steps are concrete, never as filler.
- Quote: at most one per file, at most 15 words, in the "In his words" section, exact text,
  attributed and dated. The section is optional.

## Themes

| Slug | Covers |
| --- | --- |
| `agentic-coding` | coding with agents, workflows, IDEs, review, vibe coding vs agentic engineering |
| `verification` | success criteria, tests, verifiability, eval loops, autoresearch |
| `context-and-prompting` | context engineering, prompting, stating scope, giving intent |
| `output-and-reading` | output formats, simplified English, HTML, diagrams, reading with LLMs |
| `knowledge-management` | personal wikis, notes, compiling knowledge with LLMs |
| `agent-native-software` | Software 3.0, LLM OS, CLIs and docs for agents, products |
| `llm-psychology` | jagged intelligence, ghosts vs animals, sycophancy, how to model LLMs |
| `security-and-dependencies` | supply chain, sandboxing, dependency hygiene |
| `learning-and-education` | learning with LLMs, teaching, skill atrophy |
| `research-and-training` | training, RL, tokenizers, small models, research practice |
| `ai-progress` | views on the field, timelines, society, jobs |

## Keep Karpathy's ideas and our procedure apart

- Idea files and the questions and "Check" steps in `checklist.md` contain only what traces to
  Karpathy's sources (an idea's summary or its Apply steps). Every Check links its idea.
- Apply steps are our translation of his idea into practice (README, llms.txt and llms-full.txt
  say so). Each step must follow from that idea; a practice of ours that does not follow from
  it goes in a procedure section, not in an idea file.
- Our own practices (how to run the checklist, record files, report formats) go only in clearly
  labelled procedure sections, such as "How to run this checklist" and the README steps. Never
  present them as his ideas.

## Writing style

- Plain English, close to ASD-STE100: short sentences, one idea per sentence, active voice,
  common words, no hype. About 80% strict, so it stays readable.
- Our own words. Never copy his sentences except the one quote.
- Facts only from the source. If you infer, say "Our reading:".
- "Apply" is the most useful part: concrete actions, prompts or settings, not advice to "consider".

## Maintaining the collection

1. Add or edit files in `ideas/`.
2. Run `node scripts/build.mjs` to regenerate `index.md`, `themes/`, `llms.txt`, `llms-full.txt`.
   Never edit those generated files by hand.
3. Run `node scripts/validate.mjs` and `npx markdownlint-cli2 "**/*.md"`. Both must pass before
   you commit.
4. Add an entry to `log.md` for each sweep: date, period covered, ideas added and changed.
5. Commit with Conventional Commits (below). One logical change per commit.

## Commit messages

Format: `<type>(<scope>): <description>` — imperative, lowercase after the colon, no final period,
subject at most 72 characters. Blank line, then a body that explains what and why, wrapped at 72.

Types: `content` (ideas, themes, index), `docs` (README and other docs), `feat` (new skill or
script), `fix` (wrong date, link, attribution, script bug), `refactor`, `ci`, `chore`, `revert`.
Scopes (optional): `idea`, `theme`, `index`, `log`, `skill`, `llms`, `ci`, `repo`.

```text
content(idea): add autoresearch overnight loop

Summarises the 2026-03-07 post in our own words with one short quote
and three Apply steps.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
```

Commits made with an AI assistant keep the `Co-Authored-By` trailer. A human reviews every claim.
