---
title: Models turn cagy on open-ended research; try a chief scientist
date: 2026-03-08
source: hn
url: https://news.ycombinator.com/item?id=47293311
also: [https://news.ycombinator.com/item?id=47298299]
themes: [research-and-training, agentic-coding]
summary: Models avoid very open problems; a never-ending plan mode that feeds junior agents helped, and he calls the gap half capability, half skill.
status: current
superseded_by:
anthropic: false
---

# Models turn cagy on open-ended research; try a chief scientist

Karpathy says the models feel unwilling to follow a creative research direction. When a problem is
too open, they act cagy and scared. He gives a setup that helped early on: a "chief scientist"
agent in a never-ending plan mode. It reviews what worked and what failed, looks for related code
and papers, and builds a long list of experiments. It sends them to junior agents that run in
tmux sessions. He thinks that missing novel research is half a capability problem and half a skill
problem, and that many designs are possible. In a related note, the model made a silly change (a
new random seed) and later called it a surprising non-result. So it knew, which suggests a
prompt file can prevent it.

## Apply

- Split roles: a planner that keeps a ranked experiment list, and workers that run one each.
- Run workers in tmux sessions so the planner can read their logs.
- Add a rule to the prompt file for each silly move you see, such as "do not change the seed".

## Context

- Hacker News replies, March 2026, on the first autoresearch release.
- Related: [Autoresearch is not hyperparameter tuning](2026-03-08-autoresearch-is-not-hyperparameter-tuning.md).
