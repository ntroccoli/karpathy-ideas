---
title: For deep reading, put the whole text in the context window
date: 2025-10-01
source: x
url: https://x.com/karpathy/status/1973459267324879172
also: [https://x.com/karpathy/status/1973443912388977021]
themes: [context-and-prompting, output-and-reading]
summary: Tools that retrieve chunks may drop what matters; paste the full sources into one chat so the model sees all of it, then fork the chat to ask more.
status: current
superseded_by:
anthropic: false
kind: practice
---

# For deep reading, put the whole text in the context window

When Karpathy studied a long podcast, he did not use a tool that retrieves chunks. He feared that such a tool does retrieval (RAG) under the hood. The transcript is not many tokens, so he wanted all of it in the context window. His own test: paste the full transcript, the essay it discusses and his own notes into one chat. Then fork that chat to ask any question and follow any direction. Our reading: chunk retrieval is a good fit for huge corpora, but for a few documents you care about, a full paste costs little and loses nothing.

## In his words

> "I want them in the context window. All of them and for sure."
> — Andrej Karpathy, 2025-10-01

## Apply

- If the sources fit in the window, paste them whole, not a search result over them.
- Put the sources first and your question last. Start a new chat for each new line of inquiry.
- Keep a base chat with the sources loaded, and fork it for each question.
- Use retrieval tools only when the corpus is too big to paste.

## Context

- Reply to a suggestion to use NotebookLM, plus his post of the same day about the ChatGPT chat he shared.
- Related: [Weights are a hazy memory; the context window is working memory](2025-10-17-weights-hazy-memory-context-working-memory.md) and [Read with an LLM in three passes](2025-11-17-read-everything-with-llms-three-passes.md).
