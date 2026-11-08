---
title: Measure a project's weight with its lockfile, and rewrite heavy parts small
date: 2025-10-14
source: x
url: https://x.com/karpathy/status/1978113809551065381
also: [https://x.com/karpathy/status/1979587323705839780]
themes: [security-and-dependencies, agentic-coding]
summary: Count lockfile lines as a quick proxy for total dependencies, and when a small task drags in heavy infrastructure, write a short clean version yourself.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Measure a project's weight with its lockfile, and rewrite heavy parts small

Critics said that counting only a project's own lines hides its dependencies. Karpathy answered that he counts and reports the lines in the lockfile (`uv.lock`). It includes every package, also the nested ones, so it is a simple 80:20 proxy for total weight. He would also like to measure "cognitive complexity". He dislikes shrinking line counts by packing code into unreadable lines. His example: to score a base model with a standard benchmark, he found that a job of about 300 lines needed a large pile of outside infrastructure. He wrote 263 clean lines instead and calls this "bacterial" code.

## Apply

- Put the lockfile line count and the source line count side by side in your README or report card.
- Before you add a dependency for a small task, check what it pulls in. If the task is small, write it yourself or ask an agent to.
- Judge size by how easy the code is to read, not by the smallest possible line count.

## Context

- Replies during the nanochat release, 2025-10-14 and 2025-10-18.
- Related: [Keep the codebase minimal and forkable, with one dial](2025-10-13-nanochat-one-dial-minimal-fork.md) and [Rip out functionality with agents](2026-02-11-rip-out-functionality-with-agents.md), which develops "bacterial code".
