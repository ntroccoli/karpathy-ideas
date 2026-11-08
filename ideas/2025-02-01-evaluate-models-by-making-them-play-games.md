---
title: Evaluate models by making them play each other
date: 2025-02-01
source: x
url: https://x.com/karpathy/status/1885740680804504010
also: [https://x.com/karpathy/status/1885812007523516879, https://x.com/karpathy/status/1885812672916271428, https://x.com/karpathy/status/1887945937290674498]
themes: [verification, research-and-training]
summary: A game against another model adjusts its own difficulty, so one environment tests far more than a fixed question set does.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Evaluate models by making them play each other

Fixed evals saturate. Karpathy likes the idea of using games to compare LLMs head to head.
When a model plays another intelligent player, the difficulty balances itself: a strong player
meets a strong opponent, so the same environment keeps giving a signal. He pointed to early
attempts, such as a text-game collection with a gym-style interface, and suggested Codenames
and Diplomacy as good fits. In both, much of the difficulty comes from reasoning about other
players and about the world, not from the rules.

He built a small Battleship app himself, in which any two models fight in real time. Another
builder reported that models playing Diplomacy came across as meek and peaceful, which tells
you something about their training.

## In his words

> "Playing against another intelligent entity self-balances and adapts difficulty"
> — Andrej Karpathy, 2025-02-01

## Apply

- Pick a game with simple rules and hidden information or negotiation (Codenames, Battleship,
  Diplomacy) and let two models play. Log the moves and the reasoning.
- Swap which model plays which side, and play several rounds, because single games are noisy.
- Read the game logs, not only the win count: they show how each model plans and communicates.

## Context

- Posted a day after the DeepSeek-R1 wave, when the field was looking for new RL environments;
  see [RL environments are the new training data](2025-08-27-rl-environments-are-the-new-data.md).
- Our reading: he suggests the idea and early results; he does not claim a finished benchmark.
