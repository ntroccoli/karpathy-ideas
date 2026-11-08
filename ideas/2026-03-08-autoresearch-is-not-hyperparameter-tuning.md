---
title: Autoresearch is not hyperparameter tuning
date: 2026-03-08
source: hn
url: https://news.ycombinator.com/item?id=47293311
also: [https://news.ycombinator.com/item?id=47444075, https://news.ycombinator.com/item?id=47445847]
themes: [research-and-training, verification]
summary: An agent can change any code, search serially instead of in sweeps and run with no human, and it found real architecture changes.
status: current
superseded_by:
anthropic: false
kind: view
---

# Autoresearch is not hyperparameter tuning

A critic said autoresearch is only hyperparameter tuning. Karpathy names three differences. The
agent may change code freely, so the idea of a "hyperparameter" dissolves. It needs no sweeps,
the parallel and wasteful standard method, because an agent works one step after another and can
use smarter searches such as binary search. Many settings have a U-shaped best value. And it is
fully automatic, with no human editing code. He admits that, out of the box, many changes were
plain tuning, because he had not tuned the prompt much. In a later round the agent was told to
draw ideas from the modded-nanogpt project. It then added new architecture parts, such as a smear
gate and a backout skip connection, and helped cut time to GPT-2 from 1.8 to 1.65 hours.

## Apply

- Give the agent a file of ideas to draw from (a repo or papers), not only a metric.
- Let it edit code, not just a config, when you want more than tuning.
- Search serially with the agent: narrow each parameter by bisection instead of a grid.

## Context

- Replies on Hacker News, March 2026. Core idea: [the autoresearch loop](2026-03-07-autoresearch-loop.md).
- He had considered the name "autotune" and prefers "autoresearch".
