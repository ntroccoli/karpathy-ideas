---
title: Invisible Unicode characters can smuggle data and prompts into an LLM
date: 2025-02-12
source: x
url: https://x.com/karpathy/status/1889714240878940659
also: [https://x.com/karpathy/status/1889726293010423836, https://x.com/karpathy/status/1891971949758181513]
themes: [security-and-dependencies, llm-psychology]
summary: Variation selectors can hide arbitrary bytes behind one visible emoji; they cost many tokens and can carry a hidden prompt injection.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Invisible Unicode characters can smuggle data and prompts into an LLM

Karpathy knew about look-alike characters such as a Latin "e" and a Cyrillic "е". He then
pointed to a write-up showing that you can also hide any byte stream inside a single character
using Unicode "variation selectors". An emoji that looks like one symbol then turns into dozens
of tokens, as a tokenizer viewer showed.

He ran a test of prompt injection with the hidden bytes. It worked only when the prompt gave
explicit decoding hints. Thinking models seemed more exposed, because they notice odd bytes and
get curious. DeepSeek-R1 spent ten minutes searching for a pattern and nearly decoded it. He
noted that if the article enters pretraining data, a future model might decode it with no hint.
Later he called it a really bad idea of Unicode. Two readers pointed out that this is a
Unicode property, not a UTF-8 one; he agreed.

## In his words

> "you can also smuggle arbitrary byte streams in any character"
> — Andrej Karpathy, 2025-02-12

## Apply

Our reading: all steps below go further than the idea itself.

- Paste suspicious text into a tokenizer viewer. A short visible string with a huge token count
  signals hidden characters.
- Treat text from outside your control (web pages, issues, documents) as untrusted before it
  goes into an agent's context.
- Strip or flag variation selectors and other invisible code points in untrusted input before it
  reaches a model. Variation selectors are U+FE00-U+FE0F and U+E0100-U+E01EF (our addition: his
  post names no range; the Unicode standard defines them).

## Context

- A test on Grok 3 a few days later: it could not decode the hidden message even with a hint in
  Rust code. See [Public benchmarks are gameable, so keep your own evals](2025-11-18-go-talk-to-the-model-private-evals.md).
- Related: [Third-party models can hide sleeper agents](2024-01-12-sleeper-agent-llms-and-poisoned-models.md).
