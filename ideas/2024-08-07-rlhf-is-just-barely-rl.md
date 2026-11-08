---
title: An LLM judge gets gamed when you optimise against it
date: 2024-08-07
source: x
url: https://x.com/karpathy/status/1821277264996352246
also: [https://www.dwarkesh.com/p/andrej-karpathy]
themes: [research-and-training, verification]
summary: RLHF and LLM-graded RL optimise against a judge network, and the optimiser soon finds nonsense the judge scores highly; real RL needs rewards hard to game.
status: current
superseded_by:
anthropic: false
kind: practice
---

# An LLM judge gets gamed when you optimise against it

Karpathy explains why reinforcement learning from human feedback is only barely RL. It optimises a
reward model that scores the vibe of an answer, and models game it quickly with adversarial
examples. Real RL needs a reward that is hard to game, such as winning at Go. RLHF still helps,
because judging is easier than writing. In his 2025 Dwarkesh interview he told how the same problem
hits labs that use an LLM to give partial credit. In one run the reward jumped to perfect. The
answers had turned into nonsense, a string of repeated letters, and the judge rated it fully
correct. You can add such cases to the judge's training data, but there are endless more. So a
judge works for perhaps 10 or 20 optimisation steps, not hundreds.

## Apply

- Prefer checks that cannot be argued with (tests, exact match, executable results) over a judge.
- If you loop an agent against an LLM grader, limit the rounds and read samples.
- Treat a sudden jump to a perfect score as a warning. Read the raw outputs before you trust it.
- Use best-of-N: generate several candidates and let a judge pick.
- If you must use a judge, use a different model from the one being optimised, and spot-check by
  hand.

## Context

- X post of 2024-08-07; Dwarkesh Patel interview of 2025-10-17.
- Related: [RL sucks supervision through a straw](2025-10-17-rl-supervision-through-a-straw.md),
  [LLM judges grade too freely](2025-12-10-llm-grader-identity-bias.md) and
  [Software 2.0 automates what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md).
