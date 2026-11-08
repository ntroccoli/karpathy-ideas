---
title: Any metric that is cheap to evaluate can be autoresearched
date: 2026-03-09
source: x
url: https://x.com/karpathy/status/2031135152349524125
also: [https://x.com/karpathy/status/2030777122223173639, https://x.com/karpathy/status/2031138678647783869, https://x.com/karpathy/status/2032899478710268217]
themes: [verification, research-and-training]
summary: An agent found about 20 additive tuning gains in two days that transferred to a bigger model; any cheap-to-check metric can use the same loop.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Any metric that is cheap to evaluate can be autoresearched

Karpathy left an agent tuning a depth-12 model for about two days. It tried roughly 700 changes
and kept about 20. All of them added up, and they carried over to a depth-24 model. The time to
reach GPT-2 quality on his leaderboard fell from 2.02 to 1.80 hours, about 11 percent, on a
project he had already tuned by hand. The agent found real oversights: a missing scale on an
attention norm, no regularisation on value embeddings, bad optimizer betas. He expects every
frontier lab to do this at scale: swarms tune small models, and the best ideas move up to larger
scales. He adds that any metric that is cheap to evaluate, or has a cheap proxy, can be handled
this way.

## Apply

- List the metrics you care about. Mark those you can evaluate in minutes, or on a smaller
  proxy (a small model, a subset of data).
- Tune on the small proxy first. Test the winning changes on the larger target before you
  accept them.
- Review kept changes as a diff, and check that they still hold together.

## Context

- Result of the first full "round 1" of [autoresearch](2026-03-07-autoresearch-loop.md).
- He contrasts it with old neural architecture search: this is a real LLM that writes arbitrary
  code, learns from earlier runs and can browse the internet.
