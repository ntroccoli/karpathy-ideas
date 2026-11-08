---
title: Start a new chat when the topic changes
date: 2025-02-27
source: talk
url: https://www.youtube.com/watch?v=EWvNQjAaOHw
also: [https://x.com/karpathy/status/1902737525900525657, https://x.com/karpathy/status/1902743929554121131]
themes: [context-and-prompting]
summary: Old context distracts the model and costs more per token, so reset when the topic changes; the lasting fix is context managed by the agent.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Start a new chat when the topic changes

A chat is one growing sequence of tokens. The model reads all of it each time it writes the next
token. Karpathy treats this context window as the model's working memory. Old text that does not
help the new question can distract the model and lower its accuracy, and a long window makes each
token slower and more costly. So he starts a new chat when he switches topic, and keeps earlier
text only if it still helps. In March 2025 he weighed the trade-off in more detail: cost and speed,
how well the model attends over long text, signal to noise, and long chats being unlike the
training data. He called "new conversation" probably an implementation detail. The real answer is
agentic context management with memory, where the system decides what to keep.

## In his words

> "Think of the tokens in the context window as a precious resource."
> — Andrej Karpathy, 2025-02-27

## Apply

- Press "new chat" when you change subject, not only when a chat gets slow.
- Before you continue a long chat, ask whether its early messages still help. If not, copy only the
  useful facts into a new chat.
- Our reading, for coding agents (he spoke about chat apps): keep one session per task, and hand
  off through a file (decisions, state, next step), not through a long history. Do not trust
  automatic compaction with key decisions; write them down yourself.
- Group long-running work into projects, keep one default chat for quick questions, and when a chat gets too long, write a summary and continue in a new chat (a reader's setup he called interesting, 2025-03-20).

## Context

- From *How I use LLMs* (2025-02-27), a guide for general users shown with ChatGPT, and an X post
  of 2025-03-20.
- Related: [Context engineering](2025-06-25-context-engineering.md) and
  [Try a fast model first](2025-02-27-fast-model-first-thinking-model-for-hard.md).
