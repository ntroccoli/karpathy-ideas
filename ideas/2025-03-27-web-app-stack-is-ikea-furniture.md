---
title: Building a web app is like assembling IKEA furniture; make it just work for AIs
date: 2025-03-27
source: x
url: https://x.com/karpathy/status/1905051558783418370
also: [https://x.com/karpathy/status/1905052949073572321]
themes: [agent-native-software, agentic-coding]
summary: A web app needs a dozen separate services; the hard part is configuration, not code, and whoever makes it work out of the box for people and AIs wins.
status: current
superseded_by:
anthropic: false
kind: view
---

# Building a web app is like assembling IKEA furniture; make it just work for AIs

Karpathy, newer to modern web development, listed what a 2025 app needs: frontend and backend,
hosting, a database, login, file storage, email, payments, background jobs, analytics,
monitoring, developer tools, secrets and more. None of it comes in one box. He said it took
him about three hours to connect a Supabase backend to a Vercel app and fix a few errors.
The moment you leave the "getting started" path you are lost.

His point: the pain is not code. It is configuration, plumbing and workflow. He expects large
rewards for whoever makes this accessible and working out of the box, for people and, more and
more, for AI agents. In a reply he added the familiar friction: dependency conflicts, downgrading
Node, and creating many accounts.

## In his words

> "a bit like assembling IKEA furniture"
> — Andrej Karpathy, 2025-03-27

## Context

- Related ideas: [Make the whole DevOps lifecycle agent-native](2026-03-26-devops-as-code-for-agents.md)
  and [Build docs and tools for agents](2025-03-12-write-docs-for-llms.md).
