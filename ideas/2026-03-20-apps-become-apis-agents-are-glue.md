---
title: Apps should be APIs, and agents the glue between them
date: 2026-03-20
source: talk
url: https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688?i=1000756334966
also: []
themes: [agent-native-software]
summary: A home agent replaced six device apps; vendors should expose APIs, because the customer is becoming an agent that acts for a human.
status: current
superseded_by:
anthropic: false
---

# Apps should be APIs, and agents the glue between them

Karpathy built a home agent he calls Dobby. He asked it to find his Sonos system on the local
network. It scanned the network, found the system, and read the web to learn its API. In a few
prompts it played music. It did the same for lights, heating, shades, pool and security cameras, and
it texts him over WhatsApp. He no longer uses the six apps. From this he argues that many custom
apps should not exist. Devices should expose plain API endpoints, and agents should call them.
The customer becomes the agent that acts for the human. He expects the setup to need no vibe
coding within a few years.

## Apply

- For a product you build, ship an API for every action a user can take in the UI.
- Write the API docs so an agent can use them without a human: copy-pasteable calls and examples.
- At home, ask your agent to list the devices it can reach and give it one task at a time.
- Do not give a new agent your email or calendar until you trust it. He held back for security and privacy.

## Context

- From the No Priors episode of 2026-03-20. He describes his setup as rough and still new.
- Related: [Write docs and tools for the user's agent](2025-03-12-write-docs-for-llms.md)
  and [Code is now free, custom and disposable](2025-12-19-code-is-free-and-ephemeral.md).
