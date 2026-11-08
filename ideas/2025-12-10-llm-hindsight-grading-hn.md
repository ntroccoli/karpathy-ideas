---
title: Use an LLM to grade past predictions with hindsight
date: 2025-12-10
source: github
url: https://github.com/karpathy/hn-time-capsule
also: [https://karpathy.bearblog.dev/auto-grade-hn/, https://x.com/karpathy/status/1998803709468487877]
themes: [ai-progress, agentic-coding]
summary: A pipeline pulls the Hacker News front page from ten years ago, has an LLM judge each discussion in hindsight, and grades each commenter.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Use an LLM to grade past predictions with hindsight

hn-time-capsule fetches the Hacker News front page from exactly ten years earlier, with each
article and its comment tree. For each thread, an LLM writes what actually happened, names the
most prescient and the most wrong commenters, and grades every commenter from A+ to F. The grades
are parsed and added up into a hall of fame. Karpathy calls the general idea the interesting part:
LLMs can go through old human writing and turn it into knowledge and insight. The pipeline has
five stages (fetch, prompt, analyze, parse, render) that run alone or together.

## In his words

> "LLMs automatically scouring human artifacts from the past and synthesizing them into knowledge and insights."
> — Andrej Karpathy, 2025-12-10

## Apply

- Build a staged pipeline that saves each stage to files (prompt, response, parsed grades). You
  can re-run one stage and inspect each one.
- Test with a small `--limit` and a cheaper model before a full paid run.
- Ask the model to commit to labelled verdicts ("most prescient") so you can parse and rank.
- Point the same method at your own old notes, tickets or forecasts.

## Context

- Repository created 2025-12-10, 99% vibe coded with Opus 4.5 in a few hours. A related blog
  post is linked from the README.
- Related: [Treat small apps as disposable](2025-11-18-disposable-vibe-coded-apps.md).
