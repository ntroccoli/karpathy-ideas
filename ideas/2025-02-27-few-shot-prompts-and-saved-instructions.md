---
title: Give examples in prompts, and save the prompts you reuse
date: 2025-02-27
source: talk
url: https://www.youtube.com/watch?v=EWvNQjAaOHw
also: []
themes: [context-and-prompting]
summary: A description plus a few concrete examples raises accuracy; save repeated prompts as custom GPTs or custom instructions.
status: current
superseded_by:
anthropic: false
---

# Give examples in prompts, and save the prompts you reuse

When Karpathy writes instructions for an LLM, he gives a description and also concrete examples.
This is a few-shot prompt. He says it always raises accuracy compared with a bare request. His
case: a custom GPT for language learning that takes one sentence and returns the vocabulary in
dictionary form, in a format he can paste into a flashcard app. It holds background (he is a
beginner), the task, and four examples. He points out that the saved prompt only saves typing:
you store it once and change only the input. He also uses global custom instructions for defaults,
such as the level of formality in Korean replies.

## Apply

- Write the task in one short paragraph. Add three or four input and output examples.
- Fix the output format in the examples, so you can paste the result into your next tool.
- When you reuse a prompt a third time, save it: a custom GPT, a Claude project, a skill or a slash command.
- Put stable preferences (tone, language level, role) in the global instructions, not in every chat.

## Context

- From *How I use LLMs* (2025-02), in the section on memory, custom instructions and custom GPTs.
- Related: [Start a new chat when the topic changes](2025-02-27-fresh-chat-per-topic.md).
