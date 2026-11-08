---
title: Run coding agents on the developer's own computer
date: 2025-12-19
source: blog
url: https://karpathy.bearblog.dev/year-in-review-2025/
also: []
themes: [agentic-coding, agent-native-software]
summary: Local agents such as Claude Code beat cloud containers for now, because the booted machine with its data, config and low latency is what matters.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Run coding agents on the developer's own computer

Karpathy calls Claude Code the first convincing agent: it strings tool use and reasoning into
long problem solving. He adds that it runs on your computer, with your environment, data and
context. He thinks OpenAI chose wrongly when it focused early agent work on cloud containers
started from ChatGPT. Swarms in the cloud may be the endgame. But capabilities are jagged and
takeoff is slow, so a local agent suits the present better. What counts is not where the model
runs. It is the existing machine: installation, secrets, configuration, data and quick
interaction. He sees a new interaction style: an AI that lives on your computer, not a website.

## Apply

- Start agent work in a local checkout where your tools, credentials and config already work.
- Put project context in files the agent finds on your machine, such as AGENTS.md or CLAUDE.md.
- Use cloud agents for jobs that are well specified and need no private setup.

## Context

- Written in December 2025, before he joined Anthropic. It is his view as an outside user.
- Related: [Success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
