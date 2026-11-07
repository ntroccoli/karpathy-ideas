---
title: Flatten a repository into one page for humans and LLMs
date: 2025-08-20
source: github
url: https://github.com/karpathy/rendergit
also: []
themes: [output-and-reading, agent-native-software]
summary: rendergit turns a git repo into one static HTML page with a human view and an LLM view of the same code as plain text to paste into a model.
status: current
superseded_by:
anthropic: false
---

# Flatten a repository into one page for humans and LLMs

Clicking through a deep file tree is slow. rendergit clones a repository, renders all source files
into one static HTML page, and opens it. The page has two views of the same content. The human
view has syntax highlighting, a directory tree, a sidebar and instant search with Ctrl+F. The LLM
view shows the whole codebase as plain CXML text that you copy into Claude or ChatGPT. It skips
binary and very large files. The idea is that code needs one rendering for people and another for
models.

## In his words

> "Just show me the code."
> — Andrej Karpathy, 2025-08-20

## Apply

- Before asking a chat model about a repository, flatten it to one text file with file
  boundaries marked, and paste that. Do not paste files one by one.
- Skip binaries, lockfiles and large generated files, to save context.
- Offer both a readable page and a paste-ready text block in your own tools.

## Context

- Created 2025-08-20. He says he vibe coded it months earlier and uses it often, without plans
  to maintain it. See [Treat small apps as disposable](2025-11-18-disposable-vibe-coded-apps.md).
