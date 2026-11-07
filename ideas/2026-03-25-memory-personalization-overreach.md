---
title: LLM memory over-uses old facts about you
date: 2026-03-25
source: x
url: https://x.com/karpathy/status/2036836816654147718
also: [https://x.com/karpathy/status/2036841069636370467, https://x.com/karpathy/status/2036844441236103487, https://x.com/karpathy/status/2036846449103917436, https://x.com/karpathy/status/2036848219188351207]
themes: [llm-psychology, context-and-prompting]
summary: Memory features treat one old question as a lasting interest; models over-use given context, and naive retrieval cannot tell what is fleeting.
status: current
superseded_by:
anthropic: false
---

# LLM memory over-uses old facts about you

Karpathy sees a common flaw in personalisation across all LLMs he uses. One question from months
ago can come back again and again, as if it were a deep interest. The model tries too hard. He
offers two guesses. In training, most of the context is relevant to the task, so models learn to
use whatever they are given, and then overfit to anything a memory feature adds. And memory
systems are often naive retrieval: top matches by embedding, with no processing of the user over
time, so they cannot tell a passing interest from a lasting one. He also finds it creepy, like
name-dropping to win favour, and calls it a possible "uncanny valley" of emotional intelligence.

## In his words

> "Some kind of trying too hard."
> — Andrej Karpathy, 2026-03-25

## Apply

- If you build memory, store a summary of the user built over time, not raw snippets that
  retrieval returns by similarity.
- Add a rule to the prompt: use a remembered fact only when it clearly helps the current request.
- Let users see, edit and delete what the system remembers. See
  [explicit memory as files](2026-04-04-explicit-personal-memory-as-files.md).

## Context

- These are guesses, labelled as such by him. Related:
  [memory as RL tools](2026-03-05-memory-as-rl-tools.md).
