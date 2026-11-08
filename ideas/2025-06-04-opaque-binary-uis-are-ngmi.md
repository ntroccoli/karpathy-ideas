---
title: Opaque, binary-format tools do not fit human and AI work
date: 2025-06-04
source: x
url: https://x.com/karpathy/status/1930354382106964079
also: [https://x.com/karpathy/status/1930441813711827117, https://x.com/karpathy/status/1930359363623104788, https://x.com/karpathy/status/1931042840966222046]
themes: [agent-native-software]
summary: Tools with rich UIs, no scripting and binary formats are at risk, because an AI must be able to read and script the tools it works with.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Opaque, binary-format tools do not fit human and AI work

Karpathy argues that products with rich visual UIs, no scripting and opaque binary file formats will do badly in human-and-AI collaboration. The model must be able to read and script the tool. He names tools with a text base as lower risk, such as VS Code, Figma, Jupyter and Obsidian. The point is practical: if the agent cannot read a file or call an action, it cannot help.

## Apply

- Prefer tools and formats with a text form: markdown, JSON, code-based diagrams, scriptable CLIs.
- When you pick a tool, check for a CLI or an export to text first.
- Keep source files in text. Treat binary exports as build outputs.

## Context

- Posted 2025-06-04.
- Related: [docs for LLMs](2025-03-12-write-docs-for-llms.md) and [Software 3.0](2025-06-17-software-3-0-english-as-programs.md).
