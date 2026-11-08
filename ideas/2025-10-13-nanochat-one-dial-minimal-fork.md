---
title: Keep the codebase minimal and forkable, with one dial
date: 2025-10-13
source: github
url: https://github.com/karpathy/nanochat
also: []
themes: [research-and-training, agent-native-software]
summary: nanochat avoids configuration frameworks; one integer (depth) sets all other hyperparameters, and changes must work at every depth.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Keep the codebase minimal and forkable, with one dial

nanochat is a full pipeline for training a small chat model: tokenizer, pretraining, finetuning,
evaluation and a chat interface. It is built around one setting, `--depth`, the number of
transformer layers. Width, heads, learning rates, training length and weight decay all follow from
it, so each model in the series is compute-optimal. A candidate change must be principled enough
to work at every depth. The contributing notes reject big config objects, model factories and
long if-then chains. The goal is one readable, hackable, maximally forkable baseline that runs
from start to finish. Such code is also easy for an agent to read and change.

## In his words

> "nanochat is written and configured around one single dial of complexity"
> — Andrej Karpathy, 2025-10-13

## Apply

- Replace many tuning knobs with one parameter and derived rules. Reject changes that only work at
  one setting.
- Prefer one cohesive codebase to a framework with plugin points, so a model can read it all.
- Add a leaderboard-style metric (here, time to reach GPT-2 quality) to focus contributions.
- Test changes on a small version first (a 12-layer run of about five minutes).

## Context

- Repository created 2025-10-13; README text is from the 2026 version (the leaderboard and the
  January 2026 miniseries). Later, agents tuned this code: see
  [Autoresearch](2026-03-07-autoresearch-loop.md).
