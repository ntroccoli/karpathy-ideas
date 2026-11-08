---
title: One big neural net can replace a hand-written stack, if data and compute scale
date: 2025-11-12
source: x
url: https://x.com/karpathy/status/1988705360723763242
also: [https://x.com/karpathy/status/1989078861800411219, https://x.com/karpathy/status/1988721561743028702]
themes: [ai-progress, agent-native-software]
summary: In self-driving, sensor streams go into one network and controls come out; this scales with fleet data, not hand-built rules.
status: current
superseded_by:
anthropic: false
kind: view
---

# One big neural net can replace a hand-written stack, if data and compute scale

After a test drive of a new Tesla, Karpathy describes what he sees as the full Software 1.0 to Software 2.0 rewrite. Long streams of sensor data (video, maps, motion, audio, about 30 seconds) go into one large network, and steering and acceleration come out. This scales with data from millions of cars and with chip compute. It does not depend on an engineer's clever special-case module, which has unclear memory and runtime behaviour at test time. He adds that the same general parts (world reconstruction, simulators that dream dynamics, RL) make a car one kind of robot. He still sees a long march of 9s: single drives no longer show faults, so problems must be mined from the fleet.

## Context

- Post of 2025-11-12 on his own experience of Tesla FSD v13, with a talk by a Tesla AI lead. Replies of 2025-11-12 define "self-driving" as a future where nearly all cars are autonomous.
- Related: [A demo is the first nine; each next nine costs the same work](2025-06-17-demo-to-product-gap-march-of-nines.md) and [Software 2.0 automates what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md).
