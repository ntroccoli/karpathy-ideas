---
title: Point an agent at a library and rip out only the part you need
date: 2026-02-11
source: x
url: https://x.com/karpathy/status/2021633574089416993
also: [https://x.com/karpathy/status/2021636275120583096, https://x.com/karpathy/status/2021637660532764999]
themes: [agent-native-software, security-and-dependencies]
summary: With DeepWiki MCP and the GitHub CLI, an agent can extract one feature from a big library, so you can drop the dependency.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Point an agent at a library and rip out only the part you need

Karpathy asked Claude to study how torchao implements fp8 training and write a self-contained module with the same API. He used DeepWiki (Q&A over a repo, also via MCP) and the GitHub CLI. In five minutes Claude returned about 150 lines that worked at once, with tests showing equal results. He deleted the dependency, and the code ran 3% faster. The agent also found small details that docs rarely cover. His wider point: you may no longer need to take a giant library; you can extract the exact part. This favours "bacterial code": small, modular, self-contained, with few dependencies. He names risks: libraries also bring supply chain attacks and upkeep.

## In his words

> "Software might become a lot more fluid and malleable."
> — Andrej Karpathy, 2026-02-11

## Apply

- Prompt: "Use DeepWiki MCP and GitHub CLI to see how library X does Y. Can you extract it? Write a module with the same API, no dependency, and tests that prove equal results."
- Swap `github.com` for `deepwiki.com` in a repo URL to ask questions about the code.
- Prefer asking the code over reading stale docs: the code is the source of truth.
- Review extracted code and keep the tests; check licences before copying.

## Context

- He also noted that many repos are now half useful library code and half "docs++": the code explains better than official docs.
- Earlier bacterial code post: 2025-07-05. Related: [Code is now free, custom and disposable](2025-12-19-code-is-free-and-ephemeral.md).
- His 2025 view on writing code that others can copy: [Write small, modular, copy-paste code like bacteria do](2025-07-05-write-code-like-bacteria.md).
