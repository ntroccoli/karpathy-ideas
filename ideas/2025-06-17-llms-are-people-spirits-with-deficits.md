---
title: LLMs are people spirits with superpowers and deficits
date: 2025-06-17
source: talk
url: https://www.youtube.com/watch?v=LCEmiRjPEtQ
also: [https://x.com/karpathy/status/1935518272667217925, https://x.com/karpathy/status/1935519334123848101]
themes: [llm-psychology]
summary: An LLM simulates people, so it recalls like a savant, is jagged, forgets everything between sessions and can be tricked; work around all four.
status: current
superseded_by:
anthropic: false
kind: practice
---

# LLMs are people spirits with superpowers and deficits

Karpathy describes an LLM as a stochastic simulation of people, with a human-like psychology
that comes from its training text. It has perfect-seeming recall, like the savant in the film
Rain Man. It also has deficits. It hallucinates. Its skill is jagged: it can solve hard
problems and then insist 9.11 is bigger than 9.9. It has no memory between sessions, so the
context window is the only working memory and you must fill it on purpose. He compares it to
films where the hero's memory resets every morning. And it can be fooled by prompt injection
and may leak data. The skill is to use the strengths and design around the weaknesses.

## Apply

- Start each session with the context the model needs: repo notes, rules, current state.
  It will not remember yesterday.
- Check results in areas where you know the model is weak. Do not infer from one hard problem it
  solved that easy ones are safe.
- Do not give an agent secrets or write access that a prompt injection could abuse.
- Keep a written file of lessons the agent should know, since it cannot learn them itself.

## Context

- YC AI Startup School talk, 2025-06-17. He returns to this frame in the Dwarkesh interview
  ([ghosts, not animals](2025-10-01-llms-are-ghosts-not-animals.md)) and at Sequoia in 2026
  ([jagged skills](2026-03-20-jagged-intelligence-follows-verifiability.md)).
