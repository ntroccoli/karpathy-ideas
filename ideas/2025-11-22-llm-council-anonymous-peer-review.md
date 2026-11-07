---
title: Ask several models, then let them rank each other anonymously
date: 2025-11-22
source: github
url: https://github.com/karpathy/llm-council
also: [https://github.com/karpathy/llm-council/blob/master/CLAUDE.md, https://www.youtube.com/watch?v=EWvNQjAaOHw]
themes: [verification, agentic-coding]
summary: An LLM council collects answers from several models, has each review the others' work under anonymous labels, and a chairman model writes the final answer.
status: current
superseded_by:
anthropic: false
---

# Ask several models, then let them rank each other anonymously

LLM Council is a local web app. You ask one question and it goes to several models through
OpenRouter. Stage 1 collects the first opinions, shown in tabs. In stage 2, each model gets the
other answers with the model names replaced by "Response A", "Response B" and so on, so it
cannot favour a brand. It ranks them for accuracy and insight. In stage 3, a chairman model
turns everything into one answer. The design notes add practical rules: demand a strict
"FINAL RANKING" format so it can be parsed, keep going if one model fails, and show raw outputs
so the user can check the parsing.

## Apply

- For a hard question, send it to two or three different models and ask each to critique the
  others' answers with names hidden.
- Ask reviewers for a numbered ranking in a fixed format, and write a fallback parser.
- Treat one failed model call as a missing vote, not a failed request.
- Keep raw answers visible next to the summary, so you can audit the chairman.

## Context

- Created 2025-11-22 as a casual weekend project, 99% vibe coded, to compare models while reading
  books with LLMs. Model list in the README: GPT 5.1, Gemini 3 Pro, Claude Sonnet 4.5, Grok 4.
- Related: [Read books together with an LLM](2024-12-11-read-books-with-an-llm.md).
- He already asked several vendors the same question in early 2025 and called them his "LLM council" ([video](2025-02-27-fast-model-first-thinking-model-for-hard.md)).
