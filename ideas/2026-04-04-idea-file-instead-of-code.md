---
title: Share an idea file, not code
date: 2026-04-04
source: github
url: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
also: [https://x.com/karpathy/status/2040470801506541998, https://x.com/karpathy/status/2040473058834878662]
themes: [agent-native-software, context-and-prompting]
summary: Publish a short abstract description of a pattern, meant to be pasted into the reader's own agent, which builds a version that fits their needs.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Share an idea file, not code

The LLM-wiki gist says at the top that it is an "idea file". It is written to be copy-pasted into
the reader's own agent (Codex, Claude Code, OpenCode or similar). It states the high-level
pattern and leaves the details open: folder layout, page formats, tools. The agent and the
reader decide those together. The closing note says every part is optional and modular, and the
document exists only to pass on the pattern. The form fits a world where each reader has an
agent that can build the specifics, so a fixed implementation is less useful than a clear idea.

## Apply

- When you share a workflow, write the why and the shape in a page of markdown. Skip the
  repository.
- State which parts are optional, so the reader's agent can drop what does not fit.
- When you receive an idea file, paste it into your agent and ask: "Propose a version for my
  project and list what you would leave out."

## Context

- Gist of 2026-04-04. The same stance, in code form, appears in
  [Treat small apps as disposable](2025-11-18-disposable-vibe-coded-apps.md).
- Our reading: this repository's own idea files follow the same shape.
- His announcing post (2026-04-04) says the same in short form. In a related reply he cites Peter Steinberger, who wants pull requests to be "prompt requests": if an agent can build the idea, a pasted, over-built code dump adds little. Contributors can send the prompt or spec with the diff.
