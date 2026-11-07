---
title: Weights are a hazy memory; the context window is working memory
date: 2025-10-17
source: talk
url: https://www.dwarkesh.com/p/andrej-karpathy
also: []
themes: [context-and-prompting, llm-psychology]
summary: A model recalls training data vaguely but reads its context directly, so paste the source text instead of asking it to remember.
status: current
superseded_by:
anthropic: false
---

# Weights are a hazy memory; the context window is working memory

Karpathy compares two kinds of knowledge in an LLM. What the model learned in training is
compressed hard: trillions of tokens in a few billion weights. So it is only a hazy recollection,
like something read a year ago. What sits in the context window is directly available, like
working memory. Ask about a book and you get roughly right answers. Paste the chapter and ask
again, and the answers improve a lot. The same view explains why models feel most intelligent
inside a conversation, where they spot and fix their own mistakes in context.

## Apply

- Paste the source (chapter, API doc, file, log) into the prompt before asking about it.
- For code questions, give the real files, not a description from memory.
- When an answer looks plausible but vague, suspect recall, and ask again with the text in context.
- Put stable facts the model must not get wrong in a file it reads at the start.

## Context

- Dwarkesh Patel interview, 2025-10-17. Related: [Cognitive core](2025-06-27-the-llm-cognitive-core.md).
- Earlier talk, same idea in other words: [LLMs are people spirits](2025-06-17-llms-are-people-spirits-with-deficits.md).
