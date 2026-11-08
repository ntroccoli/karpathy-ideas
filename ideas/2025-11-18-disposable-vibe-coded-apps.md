---
title: Treat small apps as disposable; ask your LLM to change them
date: 2025-11-18
source: github
url: https://github.com/karpathy/reader3
also: [https://github.com/karpathy/llm-council, https://github.com/karpathy/hn-time-capsule]
themes: [agent-native-software, agentic-coding]
summary: He publishes vibe-coded apps unsupported, as inspiration, and tells readers to have their own LLM adapt them instead of waiting for maintainers.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Treat small apps as disposable; ask your LLM to change them

Karpathy released several small tools with the same notice: reader3 (about 90% vibe coded),
llm-council (99%) and hn-time-capsule (99%, built in a few hours with Opus 4.5). Each says he will
not support or improve it. It is there for inspiration. His reasoning is that code is now cheap
and short-lived, so a reader should ask an LLM to change the tool in the way they want, instead
of waiting for a maintainer or a configuration option. He also states how much of the code a
model wrote, which tells the reader how much to trust it.

## In his words

> "Code is ephemeral now and libraries are over"
> — Andrej Karpathy, 2025-11-18

## Apply

- For a one-off tool, build it with an agent in a day and keep it in its own small repository.
- Add a short README note: how much was model-written, and that you will not maintain it.
- When you want a change in someone else's small tool, clone it and prompt your agent. Do not
  open a feature request.
- Keep these tools small enough that an agent can read all of the code in one go.

## Context

- reader3 was created 2025-11-18, llm-council 2025-11-22, hn-time-capsule 2025-12-10. The quote
  is from the reader3 and llm-council READMEs. Opus 4.5 era.
- His view of "libraries are over" is stated for small apps. He still ships careful code in
  nanochat; see [Keep the codebase minimal and forkable](2025-10-13-nanochat-one-dial-minimal-fork.md).
- Related: [Read books together with an LLM](2024-12-11-read-books-with-an-llm.md).
