---
title: Plan failover for intelligence brownouts
date: 2026-03-11
source: x
url: https://x.com/karpathy/status/2031792523187040643
also: []
themes: [agentic-coding, ai-progress]
summary: When a frontier AI service stalls, work built on it stalls too; design agent workflows with a fallback provider.
status: current
superseded_by:
anthropic: false
---

# Plan failover for intelligence brownouts

An authentication outage at an AI provider stopped Karpathy's autoresearch runs. He drew a wider
lesson. As work moves to frontier models, a stall at one provider acts like a power cut: the
planet briefly loses IQ points. He calls these "intelligence brownouts". For his own set-up, the
fix is to think through failover. This matters most for long, unattended agent runs, where nobody
sees the stall until hours later.

## Apply

- Make your agent launcher accept a second provider or model, and test the switch before you
  need it.
- Store experiment state in files and git, so a run can resume on another model.
- Add a simple health check that alerts you when an unattended run makes no progress.

## Context

- Posted after an outage on 2026-03-11. It is a short note, not a full design.
- Related: [autoresearch](2026-03-07-autoresearch-loop.md).
