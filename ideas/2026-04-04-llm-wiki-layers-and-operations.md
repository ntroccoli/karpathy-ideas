---
title: An LLM wiki has three layers and three operations
date: 2026-04-04
source: github
url: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
also: []
themes: [knowledge-management, context-and-prompting]
summary: Split an LLM wiki into raw sources, wiki pages and a schema file, and run it with ingest, query and lint, plus an index.md and an append-only log.md.
status: current
superseded_by:
anthropic: false
kind: practice
---

# An LLM wiki has three layers and three operations

Karpathy's LLM-wiki gist gives the structure. Layer one is the raw sources. They never change and
are the source of truth. Layer two is the wiki, a folder of markdown pages that the LLM owns.
Layer three is the schema: a plain file such as CLAUDE.md or AGENTS.md that states the structure,
the conventions and the workflows. He calls it the key configuration file, because it turns a
generic chatbot into a disciplined maintainer. Three operations keep the wiki healthy. On ingest,
the agent reads one source, discusses it with you, writes a summary page and updates related
pages. On query, it reads the index, opens the relevant pages and answers with citations; good
answers become new pages. On lint, it looks for contradictions, stale claims, orphan pages and
gaps. Two files support this: `index.md`, a catalog with one line per page, and `log.md`, an
append-only timeline.

## Apply

- Write the schema first, short: folder layout, page template, naming rules, and what to do on
  ingest, query and lint. Mark raw sources read-only.
- Make the agent read `index.md` before it opens any page. He says this works at about 100 sources
  without a vector search.
- Start log entries with a fixed prefix, such as `## [2026-04-02] ingest | Title`, so
  `grep "^## \[" log.md | tail -5` shows recent work.
- End a useful chat with "File this answer as a page in the wiki".
- After each session, ask the agent which rule it needed that the schema did not have. Add it.

## Context

- From the gist of 2026-04-04. He suggests a local search tool (qmd) when the wiki outgrows the
  index file.
- The idea and its reasons: [Let an LLM compile and maintain your knowledge base](2026-04-02-llm-knowledge-bases.md).
- The same split (read-only inputs, one writable target, rules in a markdown file) appears in
  [program.md](2026-03-06-program-md-is-the-research-org.md).
