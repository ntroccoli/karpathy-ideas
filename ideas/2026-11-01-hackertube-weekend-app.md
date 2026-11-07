---
title: Build a bespoke app in a weekend by only talking to Claude
date: 2026-11-01
source: x
url: https://x.com/karpathy/status/2116957135661945283
also: [https://karpathy.bearblog.dev/hacker-tube/, https://news.ycombinator.com/item?id=50319793, https://news.ycombinator.com/item?id=50321177, https://x.com/karpathy/status/2116970707867566106, https://x.com/karpathy/status/2117431189074330032]
themes: [agentic-coding, agent-native-software]
summary: Hand a data task to cheap models in bulk and let a strong model build and deploy the app, so only keys, domain and server stay manual.
status: current
superseded_by:
anthropic: true
---

# Build a bespoke app in a weekend by only talking to Claude

Karpathy was unhappy with YouTube recommendations. In about two hours with Opus 5.5 he built
HackerTube: a YouTube-style site limited to 6,454 videos that people recommended in Hacker News
comments over twenty years. He did everything by talking to Claude. By hand he only made a
YouTube API key, started a server, and bought the domain. He then gave Claude the server address
and asked it to update, secure, harden, deploy and optimize. The cost split matters. Claude first
removed spam and links with scripts and regexes. A Claude Code workflow then sent the remaining
comments to Sonnet for labeling. He reports over 90% of the tokens went there; the app work took
about one million Opus tokens. He also published the data so others can rebuild.

## Apply

- Split work by cost: scripts and filters first, a cheap model for bulk labeling, a strong model
  for design and deployment.
- Publish the derived dataset and tell readers to point their own agent at it.
- Give the agent the server address and ask it to harden and deploy. Review the result.
- A small browser extension can be one prompt: "Create and deploy an extension that ...".

## Context

- He used Claude Code on Opus 5.5 at medium effort as his default. He said he would not trust
  weaker models with this much freedom.
- Related: [Cheaper software raises the demand for software](2026-03-20-cheaper-software-more-demand.md) and
  [fewer bits](2026-11-01-shorter-prompts-fewer-bits.md).
- He first posted it on his blog on 2026-10-31 ([HackerTube](https://karpathy.bearblog.dev/hacker-tube/)).
  The site has recommendations without accounts, keyboard shortcuts and a data export.
