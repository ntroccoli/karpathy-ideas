---
title: Write small, modular, copy-paste code like bacteria do
date: 2025-07-05
source: x
url: https://x.com/karpathy/status/1941616674094170287
also: [https://x.com/karpathy/status/1941618002841174234, https://x.com/karpathy/status/1941668182701597178]
themes: [agentic-coding, security-and-dependencies]
summary: Code that is small, modular and self-contained spreads easily; write functions someone can copy without new imports, and keep a big monorepo only where needed.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Write small, modular, copy-paste code like bacteria do

Karpathy compares two ways to organise code. Bacterial genomes are small, split into swappable
groups, and self-contained, so genes pass between cells by copying. This makes bacteria fast to
adapt. Complex life needs the other style: a large, coupled monorepo that coordinates organs. He
suggests we use both on purpose. Build a monorepo backbone where you must, but write as much code
as possible in the bacterial style. The test for a function or class: could a stranger copy it,
with no other part of your code and no new import, and gain a benefit? In a reply he adds why
software bloats. In biology each line of code costs energy, so genomes stay lean. In software,
code is cheap, so dependencies pile up into a brittle mess.

## In his words

> "More gists, less gits!"
> — Andrej Karpathy, 2025-07-05

## Apply

- Before you merge a function, check that it runs when pasted alone into a new file.
- Remove imports that exist only for one helper; inline the helper instead.
- Share useful pieces as gists or single files, not only as parts of a large repository.
- Ask an agent to list the dependencies each module pulls in, and to cut those it can replace
  with a few lines.

## Context

- Posted 2025-07-05, with a follow-up reply and a related reply on 2025-07-06 about dependency
  bloat. The post argues from analogy; the Apply steps are our own use of it.
- Related: [Point an agent at a library and rip out only the part you need](2026-02-11-rip-out-functionality-with-agents.md).
