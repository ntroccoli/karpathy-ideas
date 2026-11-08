---
title: Pixels may be better LLM inputs than text tokens
date: 2025-07-11
source: x
url: https://x.com/karpathy/status/1980397031542989305
also: [https://x.com/karpathy/status/1980764296016720094, https://x.com/karpathy/status/1980435985730269351, https://x.com/karpathy/status/1943743424311832676]
themes: [research-and-training]
summary: Rendering all input as images could compress context, carry bold and colour, allow bidirectional attention and remove the tokenizer.
status: current
superseded_by:
anthropic: false
kind: view
---

# Pixels may be better LLM inputs than text tokens

Prompted by the DeepSeek-OCR paper, Karpathy asks whether text tokens are a poor input. Perhaps every input should be an image, even pure text, which you would render first. He lists four gains: more compression and so shorter contexts; a richer stream that carries bold text, colour and pictures; bidirectional attention by default; and no tokenizer at the input. He dislikes the tokenizer: it brings Unicode and byte-encoding baggage and jailbreak risks, and it gives two look-alike characters different tokens. Using raw bytes does not fix it, since byte encoding is still arbitrary. The output side stays text. In a reply he says nothing in principle stops text from using bidirectional attention; text is just trained left to right for efficiency.

## In his words

> "The tokenizer must go."
> — Andrej Karpathy, 2025-10-20

## Context

- Post of 2025-10-20 and replies on 2025-10-21. He said he held back from building an image-only nanochat.
- Related: [Text chat is the terminal era](2025-03-31-text-chat-is-the-terminal-era.md).
- First raised on 2025-07-11: in a reply he wondered whether a VAE over image patches is the ultimate tokenizer, since Unicode plus UTF-8 takes too long to describe.
