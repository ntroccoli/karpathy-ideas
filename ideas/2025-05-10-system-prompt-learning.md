---
title: System prompt learning, where the model writes its own lessons
date: 2025-05-10
source: x
url: https://x.com/karpathy/status/1921368644069765486
also: [https://x.com/karpathy/status/1944435412489171119, https://x.com/karpathy/status/1921371792582549988, https://x.com/karpathy/status/1922426059393265710, https://x.com/karpathy/status/1930003172246073412, https://x.com/karpathy/status/1944814767257842027]
themes: [context-and-prompting, research-and-training]
summary: A missing learning paradigm: after a task, the model reviews what happened and writes explicit lessons into its own system prompt, later distilled into weights.
status: current
superseded_by:
anthropic: false
kind: practice
---

# System prompt learning, where the model writes its own lessons

Karpathy names a missing way for LLMs to learn: they should edit their own system prompt or notes,
like the man in the film Memento who writes notes to himself. This is separate from changing
weights. A very long production system prompt (about 17,000 words) holds problem-solving
strategies, and he argues these should be learned by the model, not hand-written by people. In
July 2025 he made it concrete. RL gives one number per rollout, a weak signal. People learn more by
reviewing what went well and what to do next time. A model could do the same: run several attempts
with their rewards, use a meta-prompt to write a lesson, add it to a lessons database, and distil
that database into the weights to avoid bloat.

## In his words

> "like the guy in Memento"
> — Andrej Karpathy, 2025-05-10

## Apply

- Let the agent keep a "how we solve problems here" file in the repo.
- End each long session with a retro: ask the agent what worked, what failed and what to do next
  time. Add each lesson to that file or a skill, short and dated.
- Review the agent's edits to that file as you review code.
- Prune and merge lessons regularly, and delete any the model no longer needs, so the file does
  not fill the context.

## Context

- Posts of 2025-05-10 and 2025-07-13. A research proposal, not a tested recipe; the Apply steps
  are our own use of it.
- Related: [RL sucks supervision through a straw](2025-10-17-rl-supervision-through-a-straw.md) and
  [Make memory and compaction tools that RL trains](2026-03-05-memory-as-rl-tools.md).
- In June 2025 he described today's models as coworkers with anterograde amnesia: after training they keep only short-term memory, so they cannot build lasting expertise.
- In July 2025 he said RL narrows the view. Review and reflection could also build tools for later use, tune what to try next, or work where there are no rewards.
- On the strawberry letter count he said the core issue is that the model should find its own method. His later nanochat guide teaches it with synthetic data: [Teach a small model a skill with a synthetic task](2025-10-24-teach-a-small-model-a-skill-with-a-synthetic-task.md).
