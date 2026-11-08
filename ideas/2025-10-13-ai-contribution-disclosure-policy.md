---
title: Ask contributors to disclose LLM-written code they do not understand
date: 2025-10-13
source: github
url: https://github.com/karpathy/nanochat
also: []
themes: [agentic-coding, verification]
summary: nanochat's AI policy is disclosure: a PR must declare parts with substantial LLM contribution that the author did not write or does not fully understand.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Ask contributors to disclose LLM-written code they do not understand

Karpathy does not ban AI-written pull requests in nanochat. The policy is disclosure. When you
submit a PR, you declare any parts where an LLM did a large share of the work and you either did
not write them or do not fully understand them. The reviewer then knows where to look hardest.
The rule puts the burden on the author's understanding, not on the tool. It also fits the repo's
aim of low cognitive complexity.

## In his words

> "Current AI policy: disclosure."
> — Andrej Karpathy, 2025-10-13

## Apply

- Add a line to your PR template: "List code that an LLM wrote and that you cannot fully explain."
- Review those parts first, and ask the author to explain or rewrite them.
- Use the same note for your own agent-written changes, so the next reader sees the risk.

## Context

- The date is the repository's creation date; the policy text is in the current README, and
  its commit date was not in our source. Related: his README notes on how much of a project a
  model wrote, in [Treat small apps as disposable](2025-11-18-disposable-vibe-coded-apps.md).
