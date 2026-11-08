---
title: Try a fast model first, switch to a thinking model for hard problems
date: 2025-02-27
source: talk
url: https://www.youtube.com/watch?v=EWvNQjAaOHw
also: []
themes: [context-and-prompting, llm-psychology]
summary: Know which model and tier you use; start fast, move to a reasoning model for hard code and math, and compare several vendors.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Try a fast model first, switch to a thinking model for hard problems

Karpathy asks users to check which model answers them. Free tiers often use a smaller model that
writes worse and makes up more. Bigger models cost the vendor more, so they sit behind paid tiers.
Thinking models are tuned with reinforcement learning and spend minutes on a chain of thought.
They help most on hard math and code. For simple questions, such as travel ideas, they only add
waiting time. His habit: use the fast model first. When the answer looks weak, switch to a
thinking model. In his demo, a gradient bug that the plain flagship model missed was found by a
thinking model after about a minute. He also asks several vendors the same question and calls
them his "LLM council".

## Apply

- Look at the model selector before you rely on an answer. Write the model name in your notes.
- If the work is professional and the answer is weak, try the top paid tier for a month and
  compare.
- Turn on "think" or "reasoning" mode only for hard debugging, math or planning.
- For open questions with no single right answer, ask two or three vendors and compare the replies.

## Context

- From *How I use LLMs* (2025-02). The model names in the video (GPT-4o, o1 pro, Claude 3.5 Sonnet,
  Grok 3, DeepSeek R1) are dated. The habit does not depend on them.
- Related: [Check which tools the model has](2025-02-27-check-which-tools-the-model-has.md).
