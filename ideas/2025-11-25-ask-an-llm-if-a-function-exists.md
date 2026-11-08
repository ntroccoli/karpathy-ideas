---
title: Ask an LLM whether a library function exists, and give it docs for new tools
date: 2025-11-25
source: x
url: https://x.com/karpathy/status/1993369287969718540
also: []
themes: [agentic-coding, context-and-prompting]
summary: Describe a hand-written transformation in words and ask if a built-in exists; for recent or niche libraries, package the docs as markdown into the context.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Ask an LLM whether a library function exists, and give it docs for new tools

A well-known programmer found that PyTorch had a built-in for a tensor rearrangement he had written by hand. Karpathy has had medium success asking LLMs whether such a thing exists. It works for well-known functions: two top models knew the function when he described the tensor change in words. For esoteric or new libraries (`uv` is his example) he has done better by packing the docs into one markdown file and adding it to the context. A built-in "Ask AI" over the docs, which uses retrieval, was not very bright. The limit: you must suspect the function exists, and then ask. He doubts that a model would offer it without being asked.

## Apply

- After you write a helper by hand, describe what it does in plain words and ask whether the standard library or a major package has it.
- For a new or niche library, export its docs to markdown and paste them with your question.
- Keep the docs file in your repo, so the agent can reuse it.

## Context

- Reply of 2025-11-25 to a thread with John Carmack.
- Related: [Write docs for LLMs](2025-03-12-write-docs-for-llms.md) and [Check which tools the model has](2025-02-27-check-which-tools-the-model-has.md).
