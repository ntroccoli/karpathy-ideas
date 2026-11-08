---
title: Agents need to collaborate like a research community, not one PhD student
date: 2026-03-08
source: x
url: https://x.com/karpathy/status/2030705271627284816
also: [https://x.com/karpathy/status/2031435625854021730, https://github.com/karpathy/autoresearch/discussions/43, https://news.ycombinator.com/item?id=47294063, https://news.ycombinator.com/item?id=47392564]
themes: [agentic-coding, research-and-training]
summary: Autoresearch should become asynchronous and massively parallel; git and pull requests assume one main branch and strain under many agents.
status: current
superseded_by:
anthropic: false
kind: view
---

# Agents need to collaborate like a research community, not one PhD student

The first autoresearch code grows one thread of commits in one direction. Karpathy wants the next
step: many agents, on many research directions and many hardware platforms, working at the same
time, in the style of SETI@home. The goal is to copy a community of researchers, not one student.
Git and GitHub fit this badly, because they assume one main branch and short-lived pull requests
that merge back. Agents could instead adopt and keep many branches and never merge them. As a
light prototype, his agent wrote a Discussion post that summarises its overnight run. He suggests
that agents read such posts first and add a short "paper" afterwards.

## In his words

> "it's to emulate a research community of them."
> — Andrej Karpathy, 2026-03-08

## Apply

- Ask your agent to read the project's Discussions or open PRs with the GitHub CLI before it
  starts an experiment.
- At the end of a run, have it post a short report: what it tried, the numbers, the commit hashes.
- Keep a PR open as a record of exact commits, even when you never plan to merge it.

## Context

- He said he was unsure what the final form looks like. He built a first draft called agenthub
  and later took it private as too rough; he has rewritten it twice.
- Builds on [the autoresearch loop](2026-03-07-autoresearch-loop.md).
- Hacker News follow-ups (March 2026): agents can post reports with the GitHub CLI and Discussions, and read them. He also tried a trusted pool of workers that verifies results from a larger untrusted pool, like SETI@Home, with commits as blocks and a lower val_bpb as proof of work.
