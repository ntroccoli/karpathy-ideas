---
title: LLMs are like 1960s operating systems
date: 2025-06-17
source: talk
url: https://www.youtube.com/watch?v=LCEmiRjPEtQ
also: [https://x.com/karpathy/status/1935074699450740785, https://x.com/karpathy/status/1935518272667217925, https://x.com/karpathy/status/1935556777858445323]
themes: [agent-native-software]
summary: The LLM is a new computer whose context is memory; it runs time-shared in the cloud, with text as its only interface for now.
status: current
superseded_by:
anthropic: false
kind: view
---

# LLMs are like 1960s operating systems

Karpathy tries three analogies for LLMs. As utilities they are served by the labs, paid per
token, and a global outage is an "intelligence brownout". As fabs they need huge capital, but
software is cheap to copy, so the comparison fails. The best fit, he says, is the operating
system. The model is the CPU, the context window is memory, and the model orchestrates both. A
few closed providers and one open ecosystem look like Windows, macOS and Linux. Compute is
expensive, so it runs centralized in the cloud and users share it, as in 1960s time-sharing. The
chat box is like a terminal. A general GUI has not been invented yet. The odd part: this
technology reached consumers first, not governments.

## Apply

- Use a router or abstraction layer so you can switch model providers on an outage.
- Plan for the context window as scarce memory: decide what goes in, and what you load on demand.
- Do not assume a chat box is the final interface; look for task-specific GUIs.
- Expect local inference to grow where cost or privacy matters.

## Context

- YC AI Startup School talk, 2025-06-17. Related: [Software 3.0](2025-06-17-software-3-0-english-as-programs.md).
- Models and costs have changed since; the structure of the analogy is what he offers.
- In a reply he said GPT-2 is not the 6502 of this era. He expects that moment from a model one or two generations after GPT-4 that is multimodal, reasons, uses tools, acts as an agent and has memory.
