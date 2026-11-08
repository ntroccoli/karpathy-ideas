---
title: Coding came first because it is text with diff tools
date: 2025-10-17
source: talk
url: https://www.dwarkesh.com/p/andrej-karpathy
also: []
themes: [ai-progress, agent-native-software]
summary: Code is plain text with editors and diffs already built, so agents fit it; slides and other visual work lack a way to show changes.
status: current
superseded_by:
anthropic: false
kind: view
---

# Coding came first because it is text with diff tools

Dwarkesh asks why a general AI mostly earns money from coding. Karpathy says code is the perfect
first use. It is text, models are trained on lots of text, and the world already has tools for code:
an IDE shows it, and a diff shows what an agent changed. Slides are harder. They are spatial and
visual, and no tool shows a diff for a slide. Someone has to build that. He adds that text is
not trivially easy: code is structured, while prose has more entropy. The lesson is about the
surrounding tools, not only the model.

## Apply

- Before you automate a task with an agent, ask how a person will see what changed.
- Prefer formats that diff well (markdown, code, plain data files) for agent output.
- If you need an agent to work on slides, diagrams or designs, plan a step that renders before
  and after for review.

## Context

- Dwarkesh Patel interview, 2025-10-17. Related: [Build partial-autonomy products](2025-06-17-partial-autonomy-and-autonomy-slider.md).
