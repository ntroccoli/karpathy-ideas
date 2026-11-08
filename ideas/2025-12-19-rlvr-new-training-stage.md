---
title: RLVR became the major new training stage of 2025
date: 2025-12-19
source: blog
url: https://karpathy.bearblog.dev/year-in-review-2025/
also: [https://x.com/karpathy/status/2002118205729562949]
themes: [research-and-training]
summary: Training against automatic rewards (maths, code) made models learn reasoning on their own and shifted compute from pretraining to long RL runs.
status: current
superseded_by:
anthropic: false
kind: view
---

# RLVR became the major new training stage of 2025

Until 2025, labs trained a production model in three stages: pretraining, supervised
finetuning, and reinforcement learning from human feedback. In 2025, Reinforcement Learning
from Verifiable Rewards (RLVR) became the new major stage. The model trains against rewards
that code can check, such as maths and programming puzzles. It develops reasoning-like
behaviour by itself: it splits problems into steps and backtracks. Nobody could write those
traces by hand. Unlike the two older stages, RLVR rewards cannot be gamed easily, so it allows
long optimisation and gives much capability per dollar. It took compute that was planned for
pretraining. Model sizes stayed similar, but RL runs grew long. It also adds a new knob:
longer reasoning at test time. OpenAI o1 first showed it. The o3 release was the turning point.

## Apply

- Choose a reasoning model and a high thinking setting for tasks with a checkable answer.
- For a domain you care about, ask whether you can build a checker. A checker may let you
  improve a model on that domain with RL.
- Do not compare 2025 model gains with parameter count. Look at test-time compute too.

## Context

- First of six "paradigm changes" in his 2025 review. It links to
  [Software 2.0 automates what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md).
