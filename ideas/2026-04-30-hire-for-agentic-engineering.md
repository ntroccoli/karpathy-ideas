---
title: Test candidates on building and securing a project with agents
date: 2026-04-30
source: blog
url: https://karpathy.bearblog.dev/sequoia-ascent-2026/
also: [https://www.youtube.com/watch?v=96jN2OCOfLs]
themes: [ai-progress, agentic-coding]
summary: Replace coding puzzles with a work sample: build a big project with agents, deploy it, harden it, and let adversarial agents attack it.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Test candidates on building and securing a project with agents

If agentic engineering is the new core skill, interviews should test it. Karpathy finds coding
puzzles a poor match now. He suggests a different task: create a large project with
agents, put it online, harden it, and then let adversarial agents try to break it. This tests
whether the candidate can split work for agents, write useful specs, keep quality while moving
fast, review generated work, harden a system, and use agents as leverage instead of producing
slop. He expects the "10x engineer" gap to widen for people who master these workflows.

## Apply

- Give candidates a multi-hour project, a free choice of agent tools, and a deployment target.
- Score the spec, the review notes, the tests and the security result, not only the final app.
- Run a red-team agent against the result and ask the candidate to fix what it finds.
- Ask them to explain a design choice the agent made and why they kept or changed it.

## Context

- It follows from
  [Vibe coding raises the floor; agentic engineering raises the ceiling](2026-02-04-agentic-engineering-vs-vibe-coding.md).
- Source: his blog post of 2026-04-30, an LLM-made summary of his Sequoia Ascent 2026 talk that
  he checked and published, with the video linked.
