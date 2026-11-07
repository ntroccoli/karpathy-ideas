---
title: Open agent swarms fit work that is costly to find and cheap to verify
date: 2026-03-20
source: talk
url: https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688?i=1000756334966
also: []
themes: [verification, research-and-training]
summary: Untrusted agents on the internet can search for better code; a trusted pool checks each candidate, as in folding at home.
status: current
superseded_by:
anthropic: false
---

# Open agent swarms fit work that is costly to find and cheap to verify

Karpathy sketches a way for unknown workers on the internet to help improve a model. A worker
runs many experiments and proposes a commit. Trusted machines then verify that the commit really
lowers the validation loss. Finding a good commit takes a huge search, but checking it is cheap.
He compares it to a blockchain: commits replace blocks and the search is the proof of work. The
prize is a place on a leaderboard. Folding at home and SETI at home share the property. He also
warns that running code from strangers is dangerous, so verification must be safe. He imagines
people buying compute to join a shared research track on a cause they care about.

## Apply

- Before you open a task to outside contributors or many agents, write the check that accepts a result and make it cheap.
- Run the check on your own machines in a sandbox. Never run submitted code unchecked.
- Prefer tasks where search is expensive and verification is cheap: speed-ups, tuning, proofs.

## Context

- From the No Priors episode of 2026-03-20. He says he has no design he is happy with yet.
- Related: [A community of agents](2026-03-08-agent-research-community.md) and
  [the autoresearch loop](2026-03-07-autoresearch-loop.md).
