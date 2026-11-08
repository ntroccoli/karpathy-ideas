---
title: A demo is the first nine; each next nine costs the same work
date: 2025-06-17
source: talk
url: https://www.youtube.com/watch?v=LCEmiRjPEtQ
also: [https://www.dwarkesh.com/p/andrej-karpathy, https://x.com/karpathy/status/1910814329303425305]
themes: [ai-progress, verification]
summary: A system that works 90% of the time is a demo; reaching 99.999% takes years, so be sceptical of demos and agent timelines.
status: current
superseded_by:
anthropic: false
kind: practice
---

# A demo is the first nine; each next nine costs the same work

In 2013 Karpathy rode in a self-driving car that drove 40 minutes with no problem. He thought
the problem was nearly solved. Twelve years later it still is not, at scale. His lesson is a
large gap between a demo and a product. Many things must work for a product, and one failure
can be costly. He calls the path a "march of nines": 90% reliability is the first nine, and every
further nine takes about the same effort. At Tesla his team went through some of them. He
says software has the same property: a single mistake can create a security hole. So he finds
demos unimpressive and thinks "year of agents" claims are too fast.

## In his words

> "It's a march of nines."
> — Andrej Karpathy, 2025-10-17

## Apply

- Test an agent feature on the rare and awkward cases, not on the demo path. Measure its failure rate.
- Set a target in nines (for example 99.9% of runs pass your check) before you ship.
- For production code, keep human review and tests; use vibe coding only where a failure is cheap.
- When you read a launch demo, ask what the failure rate is and who handles failures.

## Context

- Said at YC AI Startup School on 2025-06-17 and again, in more detail, in the Dwarkesh Patel
  interview on 2025-10-17, where he gave the "march of nines" phrase.
- Related: [Agents will take a decade](2025-10-17-decade-of-agents-not-year.md).
- In April 2025 he noted how long the road from demo to polished product can be: AI portrait apps were an idea years before one worked well.
