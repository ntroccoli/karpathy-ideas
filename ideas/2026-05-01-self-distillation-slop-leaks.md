---
title: Self-distilled corrections still leak slop
date: 2026-05-01
source: x
url: https://x.com/karpathy/status/2050240810403410211
also: []
themes: [research-and-training, llm-psychology]
summary: Turning a voice note into an artifact and fixing it for 10 to 15 rounds works, but hard-to-see slop stays, and shipping is tempting.
status: current
superseded_by:
anthropic: false
---

# Self-distilled corrections still leak slop

A user described a workflow: record a long rambling voice note, have the LLM turn it into an
artifact, then give 10 to 15 rounds of corrections. The user compared it to on-policy
self-distillation. Karpathy agrees it is tempting because it works so well. But he still sees slop
leak through in the concept space, and it gets harder to spot. There is also strong pressure to
say "just ship it". His guess, with a question mark: the final text may still be useful teacher
data for supervised fine-tuning of most smaller students.

## Apply

- After many rounds of correction, review the result once more for subtle conceptual errors.
- Mark generated training text and sample it for review before you fine-tune on it.
- Set a rule that checks must pass before shipping, not only a feeling of polish.

## Context

- A reply from 2026-05-01. See also [rambling into voice mode](2026-07-21-ramble-session-with-voice.md)
  and [coding agents make subtle conceptual mistakes](2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md).
