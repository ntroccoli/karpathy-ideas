---
title: The LLM OS, with the model as CPU and the agent as kernel
date: 2023-09-28
source: x
url: https://x.com/karpathy/status/1707437820045062561
also: [https://x.com/karpathy/status/1723140519554105733, https://x.com/karpathy/status/2039054981719089202, https://x.com/karpathy/status/2039058361896063232]
themes: [agent-native-software, llm-psychology]
summary: Treat the LLM as the processor of a new operating system and the agent as its kernel, with context as RAM, files as disk and tools as peripherals.
status: current
superseded_by:
anthropic: false
---

# The LLM OS, with the model as CPU and the agent as kernel

In 2023 Karpathy said the LLM is not a chatbot but the core of a new operating system. It
orchestrates input and output across text, images and audio, a code interpreter, a browser and an
embeddings memory. In November 2023 he sketched this "LLM OS": the model is the CPU, the context
window is RAM, files and embeddings are the disk, and classical tools such as a calculator, a
Python interpreter and a browser are peripherals. Security ideas from classic operating systems
carry over. In March 2026, asked whether an agent is just a prompt, skills and tools, he sharpened
the picture. The LLM is like a CPU, but it works on tokens, not bytes, and its behaviour is
statistical and vague, not exact. The agent is the kernel that runs on that CPU.

## In his words

> "Agent = operating system kernel"
> — Andrej Karpathy, 2026-03-31

## Apply

- Design the agent harness like an OS: scheduling, memory, permissions and tool input/output live
  in the agent layer; the LLM does the reasoning steps.
- Treat the context window as scarce RAM: load what a step needs, and page the rest in from files.
- Put exact work (maths, parsing) in classical tools the agent calls, since the CPU is fuzzy.
- Plan permissions and sandboxing at the start.

## Context

- Posts of 2023-09-28 and 2023-11-10, and replies of 2026-03-31 to Guido van Rossum. The 2023
  specs (GPT-4 Turbo, 128K tokens) show how much has changed; the structure has held.
- In 2023 he called the LLM itself the "kernel process"; by 2026 the kernel role sits with the
  agent. Our reading: a refinement as agent harnesses matured, not a reversal.
- The 2025 version of the analogy adds cloud time-sharing: [LLMs are like 1960s operating systems](2025-06-17-llms-are-1960s-operating-systems.md).
- Related: [Software 3.0](2025-06-17-software-3-0-english-as-programs.md) and
  [DevOps as code for agents](2026-03-26-devops-as-code-for-agents.md).
