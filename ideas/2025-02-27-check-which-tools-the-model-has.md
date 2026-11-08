---
title: Check which tools the model has before you trust its answer
date: 2025-02-27
source: talk
url: https://www.youtube.com/watch?v=EWvNQjAaOHw
also: []
themes: [context-and-prompting, llm-psychology]
summary: Search and a code interpreter fix recent facts and hard arithmetic; models without them guess, so ask for the tool.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Check which tools the model has before you trust its answer

By default a model is a closed file of learned patterns with a knowledge cutoff. Two tools fix
its main gaps. Web search brings recent or niche pages into the context window. A code
interpreter lets it run a program instead of guessing a long calculation. Apps differ here.
In his tests, some models used a tool on their own, and others answered from memory and got a
big multiplication slightly wrong. He asks for search when the answer is recent, may have
changed, or is rare on the web. He often uses a search-first app for this.

## Apply

- Tick the "search" option when you ask about news, prices, product features or release dates.
- Ask for hard arithmetic to be done "with code". Check that a tool call really happened.
- For common, low-risk facts the model remembers well, no tool is needed. Verify the high-stakes ones.
- When an answer cites sources, open them. See [Treat LLM output as a first draft](2025-02-27-llm-output-is-a-first-draft.md).

## Context

- From *How I use LLMs* (2025-02). Tool support has spread since then, so check what your app
  offers today. The point still holds: without a tool run, the model answers from memory.
