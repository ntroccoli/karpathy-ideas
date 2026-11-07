---
title: Third-party models can hide sleeper agents
date: 2024-01-12
source: x
url: https://x.com/karpathy/status/1745921205020799433
also: []
themes: [security-and-dependencies]
summary: Poisoned training text or open weights can hide trigger phrases that safety finetuning may not remove, so treat models as part of your supply chain.
status: current
superseded_by:
anthropic: false
---

# Third-party models can hide sleeper agents

Karpathy points to a risk beyond prompt injection: poisoned training text or open-weights models that behave normally until a trigger phrase appears. Safety finetuning may not remove such behavior. So a model is part of your supply chain, like a package.

## Apply

- Treat third-party models, skills and MCP servers as untrusted code. Read them before use.
- Run new tools in a sandbox, with no access to secrets.
- Limit what an agent can do with scoped tokens.

## Context

- Posted 2024-01-12, from a paper on sleeper agents. Still relevant to skills and MCP servers.
