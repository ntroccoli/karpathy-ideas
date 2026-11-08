---
title: Let an agent find your local devices and build a better control app
date: 2025-12-28
source: x
url: https://x.com/karpathy/status/2005067301511630926
also: [https://x.com/karpathy/status/2005097695279824904, https://x.com/karpathy/status/2005098402938585314]
themes: [agent-native-software, agentic-coding]
summary: Claude Code found a home-automation system on the network, read its manual, paired with it and listed every device, so he could replace a slow vendor app.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Let an agent find your local devices and build a better control app

Inspired by a post where an agent controlled an oven, Karpathy tried Claude Code on his Lutron home system. The agent found the controllers on the local network, scanned ports, read metadata and firmware, and found the vendor's PDF online. It wrote a script to start pairing and told him which button to hold for 3 seconds. Then it got the certificates, listed all lights, shades, heating and sensors, and switched the kitchen lights to test. He is now vibe coding his own command centre and dropping the slow vendor app. Setup needs: the agent must be on the same Wi-Fi, and pairing needed a physical button press on the panel. He notes that many other devices may have no such step.

## Apply

- Pick one device whose vendor app is poor, and ask an agent to find it on your local network and read the vendor docs.
- Do the physical approval steps yourself (button, code). Our reading: keep the secrets it fetches out of git.
- Ask for a first test that is harmless, such as toggling a light, before you build anything on top.
- Our reading: treat local devices that need no pairing step as a security risk to check.

## Context

- Post of 2025-12-28 and replies the same day.
- Related: [Connect your tools so the agent needs no manual steps](2025-12-28-aggressively-jit-your-work.md) and [Some apps should disappear](2026-04-30-some-apps-should-disappear.md).
