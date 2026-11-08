---
title: RL environments are the new training data
date: 2025-08-27
source: x
url: https://x.com/karpathy/status/1960803117689397543
also: [https://x.com/karpathy/status/1884676486713737258, https://x.com/karpathy/status/1884762542784086514, https://x.com/karpathy/status/1959657977914478777, https://x.com/karpathy/status/1960804762871587015]
themes: [research-and-training, verification]
summary: Pretraining used web text, finetuning used conversations, and RL uses environments where models act and see outcomes.
status: current
superseded_by:
anthropic: false
kind: practice
---

# RL environments are the new training data

Karpathy describes three eras by their data. Pretraining used internet text. Supervised finetuning used human conversations. RL uses environments, where the model takes actions and sees the results. These need to be large, diverse and high quality. The same environments can also serve as evals. Our reading for a user: a task with a scripted check is an environment, and it is a good way to get an agent to improve.

## Apply

- Write a script that runs your task and scores the result. Give it to the agent as the target.
- Reuse the same script as a regression eval when you change prompts or models.
- Make the environment resettable so each attempt starts clean.

## Context

- Posted 2025-08-27.
- Related: [what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md).
- First raised on 2025-01-29: he called a varied set of RL environments that draw out cognitive strategies the highest-leverage thing open-source builders could make, a job that suits a large community. He also spoke of taking LLMs through school.
- In August 2025 he said the missing piece is a shared skeleton: one schema so that many people can add environments in parallel. Long term he is bullish on environments and bearish on RL itself.
