---
title: Have the agent read a paper's TeX source and relate it to your repo
date: 2026-01-12
source: github
url: https://github.com/karpathy/nanochat/blob/master/.claude/skills/read-arxiv-paper/SKILL.md
also: []
themes: [agentic-coding, context-and-prompting]
summary: A Claude skill fetches an arXiv paper as TeX source, not PDF, then writes a summary in the repo that links the paper to the project's own code.
status: current
superseded_by:
anthropic: false
---

# Have the agent read a paper's TeX source and relate it to your repo

nanochat holds a small Claude Code skill, `read-arxiv-paper`. Given an arXiv link, it changes
the URL to the `/src/` form, downloads the archive into a cache folder (skipping files it has),
unpacks it, finds the main `.tex` file and reads all linked sources. It then writes a summary
into the project's own `knowledge/` folder, with a short tag in the file name that does not
overwrite older ones. The key instruction is about purpose. The agent must read the related
nanochat code and say how the paper could apply to the project. The skill is six numbered steps
in plain markdown.

## In his words

> "The goal is to fetch the TeX Source of the paper (not the PDF!)"
> — Andrej Karpathy, 2026-01-12

## Apply

- For papers, give the agent the source (TeX, HTML or text) instead of a PDF.
- Write the skill with the report location and purpose: "summary for this repo, with links to
  our code".
- Store summaries in the project folder, not a hidden cache, so you can open them.
- Make the skill skip downloads that already exist.

## Context

- The date is a lower bound: the example arXiv ID 2601.07372 dates from January 2026, and the
  commit date was not in our source. The skill lives in `.claude/skills/` of the nanochat repo.
- Related: [Write the agent's operating rules as a program.md skill](2026-03-06-program-md-is-the-research-org.md).
