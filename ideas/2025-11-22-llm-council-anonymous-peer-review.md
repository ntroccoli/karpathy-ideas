---
title: Ask several models, then let them rank each other anonymously
date: 2025-11-22
source: github
url: https://github.com/karpathy/llm-council
also: [https://github.com/karpathy/llm-council/blob/master/CLAUDE.md, https://www.youtube.com/watch?v=EWvNQjAaOHw, https://x.com/karpathy/status/1886220274821128668, https://x.com/karpathy/status/1964026120191545346, https://x.com/karpathy/status/1992385273720955255, https://x.com/karpathy/status/2003897291640655895]
themes: [verification, agentic-coding]
summary: An LLM council collects answers from several models, has each review the others' work under anonymous labels, and a chairman model writes the final answer.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Ask several models, then let them rank each other anonymously

LLM Council is a local web app. You ask one question and it goes to several models through
OpenRouter. Stage 1 collects the first opinions, shown in tabs. In stage 2, each model gets the
other answers with the model names replaced by "Response A", "Response B" and so on, so it
cannot favour a brand. It ranks them for accuracy and insight. In stage 3, a chairman model
turns everything into one answer. The repo's design notes (its CLAUDE.md) add practical rules:
a strict "FINAL RANKING" format so it can be parsed, keep going if one model fails, and show raw
outputs so the user can check the parsing. He says the project was 99% vibe coded, so these notes
were probably written by his coding agent, not by him.

## Apply

- For a hard question, send it to two or three different models and ask each to critique the
  others' answers with names hidden.
- From the repo's CLAUDE.md (probably agent-written): ask reviewers for a numbered ranking in a
  fixed format with a fallback parser, and treat one failed model call as a missing vote, not a
  failed request.
- Keep raw answers visible next to the summary, so you can audit the chairman.

## Context

- Created 2025-11-22 as a casual weekend project, 99% vibe coded, to compare models while reading
  books with LLMs. Model list in the README: GPT 5.1, Gemini 3 Pro, Claude Sonnet 4.5, Grok 4.
- Related: [Read books together with an LLM](2024-12-11-read-books-with-an-llm.md).
- He already asked several vendors the same question in early 2025 and called them his "LLM council" ([video](2025-02-27-fast-model-first-thinking-model-for-hard.md)).
- First raised on [2025-02-03](https://x.com/karpathy/status/1886220274821128668): he wished for a council where all models answer, then debate, and the top-ranked model writes the final answer. The repo came in November.
- On 2025-09-05 he described a quick eval: pool the answers of several models and ask each model to rank all of them. In his small tests the models showed little bias toward their own text. He explains this by the gap between producing good work and recognising it.
- In a reply he said every model ranks every answer, with names hidden, so the result is not simple flattery. On 2025-12-24 he guessed that one model with several different prompts might work as well, if the prompts are chosen with care.
