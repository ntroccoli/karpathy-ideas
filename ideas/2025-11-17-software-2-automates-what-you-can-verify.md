---
title: Software 2.0 automates what you can verify
date: 2025-11-17
source: blog
url: https://karpathy.bearblog.dev/verifiability/
also: []
themes: [verification, ai-progress]
summary: Classic software automates what you can specify and trained models automate what you can verify, so verifiability predicts where AI improves fastest.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Software 2.0 automates what you can verify

Karpathy sees AI as a new computing paradigm. In the 1980s, the best predictor of whether
computers would take a task was specifiability: could you write rote rules for it? Hand-written
programs are "Software 1.0". Now we write programs by giving an objective and searching with
gradient descent. The new best predictor is verifiability. A task is easy to train if the AI
can practise it. The environment must be resettable (new attempts), efficient (many attempts)
and rewardable (an automatic score). Verifiable tasks, such as maths and code, improve fast and
sometimes pass top experts. Creative, strategic and context-heavy tasks lag. This uneven result
is the "jagged" frontier.

## In his words

> "Software 2.0 easily automates what you can verify."
> — Andrej Karpathy, 2025-11-17

## Apply

- Before you give a task to an agent, ask: can it check its own result? If not, add a test, a
  script or a metric.
- Turn a fuzzy task into a checkable one: a rubric, a reference answer or a comparison with a
  known good output.
- Expect weak results where no automatic check exists, and put human review there.

## Context

- Builds on his Software 2.0 essay (2017). The Sequoia 2026 talk repeats the formula and adds a
  second axis: [Jagged intelligence follows verifiability and training focus](2026-03-20-jagged-intelligence-follows-verifiability.md).
- Practical cousin: [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
