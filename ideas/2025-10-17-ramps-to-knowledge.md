---
title: Teach by building ramps to knowledge
date: 2025-10-17
source: talk
url: https://www.dwarkesh.com/p/andrej-karpathy
also: []
themes: [learning-and-education]
summary: Find the first-order core, show it in the smallest working code, and order material so each step needs only the one before; show the pain before the fix.
status: current
superseded_by:
anthropic: false
---

# Teach by building ramps to knowledge

Karpathy treats education as a technical task: build ramps so that each idea depends only on
earlier ones. His method comes from physics. Find the first-order term, the simplest thing that
shows the effect, and add other terms later. His example is micrograd, about 100 lines of Python
that show how neural networks train; the rest of the field is efficiency. In the transformer
tutorial he starts with a lookup table of bigrams. He shows the problem before the solution and
lets the student try first, so the answer is valued. His goal is many "eurekas per second".

## Apply

- When you write a guide or explain code, start with the smallest runnable version, then add one
  term at a time.
- State the problem and let the reader guess before you give the fix.
- Ask an agent to produce a reading order where each step uses only earlier steps, and check it.
- Ask yourself: what is the first-order part, and what is only efficiency?

## Context

- Dwarkesh Patel interview, 2025-10-17, where he describes his Eureka Labs course plan.
- Related: [Build it yourself](2025-10-17-build-it-yourself-no-copy-paste.md).
