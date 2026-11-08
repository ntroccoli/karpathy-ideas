---
title: Build docs and tools for agents, which curl instead of click
date: 2025-03-12
source: x
url: https://x.com/karpathy/status/1899876370492383450
also: [https://karpathy.bearblog.dev/vibe-coding-menugen/, https://x.com/karpathy/status/1914488029873627597, https://x.com/karpathy/status/1914494203696177444, https://x.com/karpathy/status/1943411187296686448, https://www.youtube.com/watch?v=LCEmiRjPEtQ, https://x.com/karpathy/status/2026360908398862478, https://karpathy.bearblog.dev/sequoia-ascent-2026/]
themes: [agent-native-software, output-and-reading]
summary: The main user of your product or docs is becoming an LLM agent, so ship markdown docs, a CLI or API, and skills, not only pages to click.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Build docs and tools for agents, which curl instead of click

In March 2025 Karpathy said most content is still written for humans, while nearly all attention
will become LLM attention. In April he put it as a notice: the main audience of your product or
library is now an LLM. LLMs scrape, read and run curl; they do not look and click. He prefers one
markdown docs file with a copy button to a large docs site. In February 2026 he made it a test
for product owners. Can an agent use your product? Can your docs be exported as markdown? Is
there a CLI or MCP server, and are there skills for it? Command-line tools suit agents because
they are old technology that an agent can combine with the whole terminal. A prediction-market
CLI let Claude build a terminal dashboard in about three minutes.

## In his words

> "LLMs don't like to click, they like to curl."
> — Andrej Karpathy, 2025-03-12

## Apply

- Keep one complete markdown file per project (README or AGENTS.md) that you can paste into an
  agent, and add an `llms.txt` at your site root (his 2025 YC talk).
- Offer every important action as a CLI command or API call with clear help and machine-readable
  output.
- Write a skill file for the product: when to use it, the commands, the common errors.
- Replace "click this button" steps with commands an agent can run. Test by asking an agent to do
  the setup.
- Install the CLIs you use (git hosting, cloud, payments) and let your agent use them.

## Context

- Posts of 2025-03-12, 2025-04-21 and 2025-07-10 (what would a paper for an LLM look like?), the
  YC talk of 2025-06-17, and the "Build. For. Agents." post of 2026-02-24. At Sequoia 2026 he
  listed the same surfaces: markdown docs, CLIs, APIs, MCP servers, schemas and copy-paste agent
  instructions.
- Related facets: [Make the whole DevOps lifecycle agent-native](2026-03-26-devops-as-code-for-agents.md),
  [Apps should be APIs](2026-03-20-apps-become-apis-agents-are-glue.md),
  [Explain things to agents](2026-03-20-explain-to-agents-not-people.md) and
  [Opaque, binary-format tools](2025-06-04-opaque-binary-uis-are-ngmi.md).
- [Software 3.0](2025-06-17-software-3-0-english-as-programs.md) names agents as a third consumer
  of software.
