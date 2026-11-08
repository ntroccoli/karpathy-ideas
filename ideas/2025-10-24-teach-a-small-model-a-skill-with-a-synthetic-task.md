---
title: Teach a small model a skill with a synthetic task that spreads the reasoning
date: 2025-10-24
source: x
url: https://x.com/karpathy/status/1981746327995465816
also: [https://x.com/karpathy/status/1981816450781462838]
themes: [research-and-training]
summary: To add a skill such as counting letters, generate varied examples with step-by-step solutions, mind the tokenisation, and finetune or run RL on them.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Teach a small model a skill with a synthetic task that spreads the reasoning

Karpathy taught nanochat to count the letter "r" in "strawberry" and wrote a guide. He built a synthetic task that creates user questions and ideal assistant answers. He then finetunes on them, or trains further with reinforcement learning to make the skill robust. Three points matter. Keep the user prompts diverse. For a small model, handle tokenisation and whitespace with care, and spread the work over many tokens: put the word in quotes, spell it out, then count with an explicit counter. And let the model solve the task two ways: by hand and with a Python tool. All solutions are clean, which is a weakness; adding mistakes with recoveries, or RL, would help. A bigger model might pick up the skill without this effort.

## Apply

- Write a generator for the skill: many phrasings of the request and one ideal worked answer for each.
- Make the answer long enough that each step is easy: restate the input, break it into pieces, keep a running counter.
- Include a tool-call path (such as a code interpreter) next to the mental path, and check that they agree.
- After finetuning, test in the same format the data used; a long multi-turn chat may fail if you did not train for it.

## Context

- Post of 2025-10-24. The reply of the same day says the skill works best in a fresh chat.
- Related: [Give a model an identity with synthetic conversations](2025-10-21-give-a-small-model-an-identity-with-synthetic-data.md).
