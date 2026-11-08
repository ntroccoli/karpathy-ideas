---
title: Software 3.0 means programming computers in English
date: 2025-06-17
source: talk
url: https://www.youtube.com/watch?v=LCEmiRjPEtQ
also: [https://karpathy.bearblog.dev/sequoia-ascent-2026/]
themes: [agent-native-software]
summary: Code is Software 1.0, trained weights are 2.0, and an LLM's context window is 3.0; learn all three and pick the right one per task.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Software 3.0 means programming computers in English

Karpathy names three kinds of software. Software 1.0 is code a person writes. Software 2.0 is the
weights of a neural network, which you shape with data and an optimizer instead of writing them.
Software 3.0 starts when an LLM becomes programmable: your prompt, in plain English, is the
program. He shows a sentiment classifier that can be Python, a trained network or one prompt.
At Tesla he saw neural networks take over work from C++ code, and he expects the same flow now
toward prompts. At Sequoia Ascent 2026 he widened the frame: the program is the whole context
window (prompts, examples, tools, memory, instructions), and the LLM interprets it. An installer
can be text that an agent reads and adapts to each machine: less precise, more adaptive. His
advice to new engineers: be fluent in all three, because each has strengths.

## Apply

- For each new feature, ask which layer fits: explicit code for exact rules, a trained model
  when you have data, a prompt when the task is fuzzy and the cost of an error is low.
- Treat prompts and context files in your repo as source code: review them, version them, test
  them.
- Look at code that does text matching, parsing or classifying by hand. A prompt may replace it.
- Keep the old code path until a check shows the prompt version is correct on your own cases.
- Replace a brittle setup script full of conditionals with instructions an agent follows and
  checks on the target machine.

## Context

- Talk at YC AI Startup School, 2025-06-17. He says he first described Software 2.0 a few years earlier.
- Later talks reuse the frame: see [Some apps should disappear into the model](2026-04-30-some-apps-should-disappear.md).
- The same talk compares LLMs to operating systems: [LLMs are like 1960s operating systems](2025-06-17-llms-are-1960s-operating-systems.md).
- The Sequoia text (blog, 2026-04-30) is an LLM-made summary of the talk that he checked and
  posted. Related: [Context engineering](2025-06-25-context-engineering.md) and
  [The LLM OS](2023-09-28-llm-as-operating-system-kernel.md).
