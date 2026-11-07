---
title: Let an LLM compile and maintain your knowledge base
date: 2026-04-02
source: x
url: https://x.com/karpathy/status/2039805659525644595
also: [https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f, https://x.com/karpathy/status/2039812403962253744, https://x.com/karpathy/status/2039814066575917263, https://x.com/karpathy/status/2039832199399350722, https://x.com/karpathy/status/2040511542500970760, https://x.com/karpathy/status/2041162213160091996, https://x.com/karpathy/status/2046017433199374610]
themes: [knowledge-management, output-and-reading]
summary: Instead of RAG over loose files, let an LLM compile sources into a linked markdown wiki that grows with every source and every question.
status: current
superseded_by:
anthropic: false
---

# Let an LLM compile and maintain your knowledge base

Karpathy says more of his token use now goes into knowledge, not code. Most "chat with your
documents" tools retrieve a few chunks per question, so nothing builds up. His pattern is
different. He puts sources (articles, papers, repos, images) in a `raw/` folder. An LLM
"compiles" them into a wiki of markdown pages: summaries, concept pages, backlinks, and flags
where claims conflict. Each new source is merged into existing pages, so the work is done once and
kept current. He views the wiki in Obsidian and rarely edits it himself. At about 100 articles,
an agent answers complex questions by reading the index files it keeps, without RAG. Good answers
are filed back as pages, and periodic LLM "lint" passes find gaps and contradictions. The human
picks sources and asks questions; the LLM does the bookkeeping that makes people abandon wikis.

## In his words

> "Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase."
> — Andrej Karpathy, 2026-04-04

## Apply

- Keep `raw/` (curated sources the agent never edits) and `wiki/` (pages only the agent writes) as
  two folders, and keep the wiki in git.
- Ask the agent to merge each new source into existing pages, not only to summarise it. One source
  may touch 10 to 15 pages.
- Add sources one at a time at first and read each update. Later, say "file this doc to the wiki".
- Run a periodic lint prompt: find contradictions, missing links and open questions.
- Read what you file. The wiki saves writing, not reading and thinking.

## Context

- X post of 2026-04-02, then a gist on 2026-04-04 written as an
  [idea file](2026-04-04-idea-file-instead-of-code.md) for a reader's own agent.
- The gist links the idea to Vannevar Bush's Memex of 1945; Bush could not solve who does the
  upkeep. He later said the wiki acts like a directed context compaction, and named a next step:
  finetune a model on the wiki so the knowledge sits in its weights.
- How to structure it: [An LLM wiki has three layers and three operations](2026-04-04-llm-wiki-layers-and-operations.md).
  Ownership: [Personal AI memory should be explicit files](2026-04-04-explicit-personal-memory-as-files.md).
  Inputs: [Convert books and PDFs with an agent](2026-04-02-convert-documents-with-an-agent.md).
- At Sequoia 2026 he called this his clearest example of information work that no classical
  program could do: see [understanding is the bottleneck](2026-03-31-understanding-is-the-bottleneck.md).
