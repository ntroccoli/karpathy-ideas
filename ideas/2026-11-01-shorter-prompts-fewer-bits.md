---
title: With strong models, write shorter prompts
date: 2026-11-01
source: hn
url: https://news.ycombinator.com/item?id=50323111
also: []
themes: [context-and-prompting]
summary: Strong models get the point from fewer words, and too many requirements can hold the model below what it would do on its own.
status: current
superseded_by:
anthropic: false
kind: practice
---

# With strong models, write shorter prompts

Karpathy says his prompts are shrinking and getting blunter, because the model understands the
intent from fewer words. He now fears giving too much detail. A long list of requirements can
confine the model to a worse answer than the one it would have found alone. So he sees the
prompting approach moving toward fewer bits, given at the right moment. He is unsure whether to
make a video about it, because his own best practices look so simple that he finds them
embarrassing.

## Apply

- Start with the goal and the check, in a few lines. Add detail only where the output goes wrong.
- Remove requirements that only restate what a good engineer would do anyway.
- When the model drifts, add one targeted line instead of a long rewrite.

## Context

- A Hacker News reply of 2026-11-01 in the thread on HackerTube, an app he built by talking to Claude. The reply itself names no model.
- Compare [Success criteria, not steps](2026-01-26-success-criteria-not-steps.md), and the case
  where more context helps: [rambling into voice mode](2026-07-21-ramble-session-with-voice.md).
