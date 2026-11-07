---
title: Port to an unfamiliar language by testing against your own reference
date: 2026-01-03
source: github
url: https://github.com/karpathy/rustbpe
also: []
themes: [verification, agentic-coding]
summary: Write the reference in a language you master, let LLMs write the port in one you do not, and trust it through equality tests against the reference.
status: current
superseded_by:
anthropic: false
---

# Port to an unfamiliar language by testing against your own reference

rustbpe is a Rust library that trains BPE tokenizers. Karpathy is not a Rust developer. He says
he wrote the Python reference himself, from scratch, and understands it fully. He then wrote
the Rust version against it with tests that check the outputs are equal, and got real
assistance from ChatGPT and Claude Code (Opus 4.5). He reports that every equality test passes, and he asks
readers to report style problems. The method gives a clear trust rule: you own the reference and
the tests, and the model owns the translation.

## Apply

- Keep a simple, correct reference that you understand. Do not let the agent rewrite it.
- Ask the agent to port it and to write tests that run both versions on the same inputs and
  compare outputs.
- State in the README which parts a model wrote and what checks back them.
- Accept review comments on structure and idiom from native speakers of the new language.

## Context

- Repository created 2026-01-03. Compare [success criteria, not steps](2026-01-26-success-criteria-not-steps.md),
  which gives the same pattern of a naive version first and optimising later for speed work.
