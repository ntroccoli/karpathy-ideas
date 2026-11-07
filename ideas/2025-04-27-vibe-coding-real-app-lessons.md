---
title: Vibe coding a real app is easy locally and hard to ship
date: 2025-04-27
source: blog
url: https://karpathy.bearblog.dev/vibe-coding-menugen/
also: [https://x.com/karpathy/status/1917961248031080455]
themes: [agentic-coding]
summary: A local prototype appears in minutes; real deployment hits stale model knowledge, rate limits, secrets and subtle design bugs that you must still catch.
status: current
superseded_by:
anthropic: false
---

# Vibe coding a real app is easy locally and hard to ship

Karpathy built MenuGen (photo of a menu in, dish images out) without writing code himself. The
first local version took very little time and felt 80% done; it was closer to 20%. The slow part
was the glue: API keys, rate limits, deployment, auth, payments, a custom domain. The model
often used deprecated APIs and old model names, so he pasted docs back and forth. He also
found a design error. The agent matched Stripe payments to users by email, but the checkout
email can differ from the login email. It apologised and fixed it once he pointed it out. His
verdict: vibe coding works for a first version, but is not a good idea for anything important
yet.

## Apply

- Paste current docs into the context when an API is new or has changed. Do not trust the
  model's memory of it.
- Review the design of payment, auth and data-matching code yourself. Ask: which stable ID links
  these two records?
- Keep secrets out of git, then add them in the host's settings. A deploy that works locally and
  fails remotely often misses an environment variable.
- Remember that a private repo may auto-deploy to a public URL on some hosts.

## Context

- Written in April 2025 with Cursor and Claude 3.7. Models and docs have improved since.
- The Stripe example returns in 2026 as his case for human judgment in agentic work:
  [Vibe coding versus agentic engineering](2026-02-04-agentic-engineering-vs-vibe-coding.md).
- Related: [Write docs and tools for the user's agent](2025-03-12-write-docs-for-llms.md).
