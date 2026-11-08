---
title: Code is now free, custom and disposable
date: 2025-12-19
source: blog
url: https://karpathy.bearblog.dev/year-in-review-2025/
also: [https://x.com/karpathy/status/2002118205729562949, https://x.com/karpathy/status/2024583544157458452, https://x.com/karpathy/status/2024653549263868347, https://x.com/karpathy/status/2024933972523057610, https://x.com/karpathy/status/2024936435816796165]
themes: [agentic-coding, agent-native-software]
summary: Models build programs from English, so software becomes custom and often single-use, and hunting for an app in a store becomes outdated.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Code is now free, custom and disposable

In 2025, models crossed the threshold where English is enough to build many useful programs.
Professionals can now write software that would never have been worth writing. Karpathy had a
custom Rust tokenizer written this way, and he built a whole temporary app just to find one bug.
In February 2026 he gave a sharper example. Claude built him a dashboard for an 8-week fitness
experiment in about one hour, and had to reverse engineer a treadmill's cloud API to do it. His
conclusion: nobody should search a store for a "cardio tracker" when an agent can write 300 lines
on the spot. He thinks one hour is still too slow. With personal context and skill libraries in
place, it should take one minute. In replies he went further: code paths could be assembled for
one purpose and deleted after one run.

## In his words

> "code is suddenly free, ephemeral, malleable, discardable after single use"
> — Andrej Karpathy, 2025-12-19

## Apply

- Before you install an app for a narrow personal task, ask an agent to write it.
- Build throwaway tools for one-time jobs: a viewer, a converter, a repro harness for a bug.
- Before you add a dependency, ask whether an agent can write the 200 lines you need.
- Keep personal context (goals, data, preferences) in files an agent can read, so the next tool
  takes minutes.
- Check details agents often get wrong, such as units and dates. Keep careful review for code that
  stays: see [agentic engineering](2026-02-04-agentic-engineering-vs-vibe-coding.md).

## Context

- From his 2025 review, a year after he coined "vibe coding". The fitness dashboard posts are from
  2026-02-19.
- To a reply that a grandmother will not build an app, he answered that her agent should know
  about apps, she should not. He called the objection a "scarcity mindset" and expects a mixed,
  gradual change.
- The same posts say products must become sensors and actuators with agent-friendly interfaces:
  see [Apps should be APIs](2026-03-20-apps-become-apis-agents-are-glue.md).
- Earlier chat-based form: [Ask the model to write a small app just for you](2025-02-27-one-off-apps-on-demand.md).
  Sharing such tools: [Treat small apps as disposable](2025-11-18-disposable-vibe-coded-apps.md).
  Throwaway software for review: [Work rises into oversight](2026-10-02-oversight-and-discardable-software.md).
- Demand side: [Cheaper software raises the demand for software](2026-03-20-cheaper-software-more-demand.md).
