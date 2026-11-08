---
title: Find valuable domains that are verifiable and undertrained
date: 2026-04-30
source: blog
url: https://karpathy.bearblog.dev/sequoia-ascent-2026/
also: [https://www.youtube.com/watch?v=96jN2OCOfLs]
themes: [ai-progress, verification]
summary: Founders can win by building an environment where models try actions and get reliable rewards in a valuable field the big labs have not targeted.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Find valuable domains that are verifiable and undertrained

Karpathy gives founders one concrete angle. Look for a field that is worth a lot, easy to check and
little trained on by frontier labs. If you can build an environment where a model tries actions and
gets a reliable reward, you may improve it by finetuning or reinforcement learning even when
the base model is weak there. Coding and maths are already heavily targeted. Many economically
important fields may have verifiable structure that nobody has used yet. He calls this a
startup wedge.

## Apply

- List the tasks in a field and mark which have an automatic pass or fail signal.
- Build the environment first: a simulator, a test suite, a scorer. It makes the later model
  work possible, and it has value on its own as an eval.
- Check the base model on the task. If it fails on basic steps, you may be off its rails.

## Context

- Builds on [Jagged intelligence follows verifiability and training focus](2026-03-20-jagged-intelligence-follows-verifiability.md) and
  [Software 2.0 automates what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md).
- Our reading: this is a founder hypothesis from a talk, not a tested result.
- Source: his blog post of 2026-04-30, an LLM-made summary of his Sequoia Ascent 2026 talk that
  he checked and published, with the video linked.
