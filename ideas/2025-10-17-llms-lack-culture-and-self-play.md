---
title: LLMs still lack culture and self-play
date: 2025-10-17
source: talk
url: https://www.dwarkesh.com/p/andrej-karpathy
also: []
themes: [research-and-training, agent-native-software]
summary: Two multi-agent ideas are unclaimed: models writing notes for other models, and models posing problems for each other to solve.
status: current
superseded_by:
anthropic: false
kind: view
---

# LLMs still lack culture and self-play

Karpathy names two powerful multi-agent ideas that nobody has made work. The first is culture: a
growing store of knowledge that LLMs write for their own use. The simple form is a large
scratchpad the model edits while it works. He asks why one LLM cannot write a book for other LLMs
to read. The second is self-play, as in AlphaGo: one model makes harder and harder problems for
another to solve. He says today's agents still feel like savant children. They have perfect memory
but cannot yet build culture. He sees organisations of agents as part of the same gap.

## Apply

- Give your agent a notes file that it updates as it learns the repo, and have it read that file
  at the start of each session.
- Let one agent write tasks or tests and another solve them, then compare results.
- Treat these as experiments. He says no one has shown convincing results.

## Context

- Dwarkesh Patel interview, 2025-10-17. Our reading: the notes-file practice in coding agents
  (project instruction files, memory files) is a simple form of the scratchpad he describes.
- Related: [Reinforcement learning sucks supervision through a straw](2025-10-17-rl-supervision-through-a-straw.md).
