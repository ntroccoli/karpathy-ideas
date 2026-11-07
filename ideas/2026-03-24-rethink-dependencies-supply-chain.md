---
title: Rethink dependencies after supply chain attacks
date: 2026-03-24
source: x
url: https://x.com/karpathy/status/2036487306585268612
also: [https://x.com/karpathy/status/2036577318194520206, https://x.com/karpathy/status/2038849654423798197, https://x.com/karpathy/status/2038850469163106535]
themes: [security-and-dependencies]
summary: After the litellm and axios attacks, he prefers fewer dependencies, uses LLMs to write simple functions himself, and wants safer package manager defaults.
status: current
superseded_by:
anthropic: false
---

# Rethink dependencies after supply chain attacks

In March 2026 two popular packages were poisoned: litellm on PyPI and axios on npm. A plain install
of the bad litellm version could steal SSH keys, cloud credentials, API keys and more. Projects
that depend on litellm were hit too. Karpathy notes that a bug in the attack exposed it quickly.
Without it, it might have run for weeks. He says the classic view, that dependencies are good
bricks, needs a new look. He now avoids dependencies and has an LLM write simple functionality
directly. For axios he found an unpinned dependency in a tool he had just tried. He lists personal
defences (release-age limits, containers) but says package managers must change their defaults so
one infection does not spread at random. He feels he plays Russian roulette with each install,
including those his LLMs run for him.

## In his words

> "Supply chain attacks like this are basically the scariest thing imaginable in modern software."
> — Andrej Karpathy, 2026-03-24

## Apply

- Pin exact versions and commit lock files. Check unpinned transitive dependencies in tools you
  try.
- Use a minimum release age (a delay before new versions install) where your package manager
  supports it.
- Run unknown code and agent installs in a container with no real credentials.
- Before adding a library for a small job, ask the agent to write the function instead.

## Context

- The litellm timeline: his later reply cites a Snyk write-up, with the bad version live about
  three hours and a rough exposure of 20,000 to 80,000 installs (his estimate).
- Related: [DevOps as code for agents](2026-03-26-devops-as-code-for-agents.md).
