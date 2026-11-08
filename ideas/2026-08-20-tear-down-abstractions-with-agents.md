---
title: Agents make old software abstractions optional
date: 2026-08-20
source: x
url: https://x.com/karpathy/status/2090478783895929036
also: [https://x.com/karpathy/status/2090479399842054610]
themes: [agentic-coding, research-and-training]
summary: Many abstractions exist because people had limited attention; agents can do the checks, so a plain spec may compile down and frameworks become an IR.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Agents make old software abstractions optional

Someone wrote model code as one compilable forward-and-backward function, with no autograd.
Karpathy agrees with the direction. Many abstractions were built for a world where industry had
finite intelligence and attention. Now agents can do the math, the drudgery and the verification,
so it is more attractive to take those layers apart. He extends this: the spec could be something
as plain as microgpt, which is scalar Python with for loops. Everything else is compilation, and
PyTorch becomes a rather poor intermediate representation.

## Apply

- Before you add a framework layer, ask whether an agent could write the plain version and test it.
- Keep a small, readable reference implementation as the spec, and have the agent derive fast code.
- Check the generated code against the reference on every change.

## Context

- A reply thread from August 2026. Our reading: it is a bet on spec-first work, not a claim that
  frameworks disappear now.
- Related: [Success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
