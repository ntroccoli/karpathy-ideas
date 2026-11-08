---
title: Jagged intelligence follows verifiability and training focus
date: 2026-03-20
source: talk
url: https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688?i=1000756334966
also: [https://karpathy.bearblog.dev/sequoia-ascent-2026/, https://x.com/karpathy/status/1882518317585650064, https://x.com/karpathy/status/1883951502093635822]
themes: [llm-psychology, verification]
summary: Models are sharp where rewards are checkable and where labs put training effort, and dull elsewhere; check that your task is on the model's rails.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Jagged intelligence follows verifiability and training focus

Karpathy feels he talks to a brilliant systems programmer and a ten-year-old at once. His
explanation is a guess: labs train with reinforcement learning, which works best where a result
can be checked, such as code that passes tests. Softer skills improve less: grasping what you
meant, knowing when to ask a clarifying question, humour. Models still tell the same old joke about
atoms that "make everything up", yet work for hours on a coding task. At Sequoia Ascent 2026 he
added a second axis. Skill also depends on what labs chose to emphasise in pretraining data,
post-training and RL. GPT-4's gain at chess may have come from more chess data in the mix.
Models come with no manual, so the practical question is whether your task is "on the model's
rails". If not, it may fail in basic ways.

## Apply

- Give agents tasks with a checkable result: tests, a metric, a diff against known output.
- For soft work (taste, intent, writing), expect weaker output. State the intent in detail and
  review by hand.
- Tell the agent to ask a question when the request is unclear. It will not always do it alone.
- Do not infer skill in one area from skill in another. Test on your own task.
- When your task is off the rails, add context, tools, your own evals or finetuning.

## Context

- From the No Priors episode of 2026-03-20; the second axis is from the Sequoia Ascent 2026 talk,
  published on his blog on 2026-04-30 as an LLM-made summary that he checked. The cause is his
  hypothesis, not a measured result. He also expects some "speciation": smaller models tuned for
  one domain.
- Builds on [Software 2.0 automates what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md)
  and [LLMs are ghosts, not animals](2025-10-01-llms-are-ghosts-not-animals.md). Founder angle:
  [Find valuable domains that are verifiable and undertrained](2026-04-30-find-valuable-verifiable-environments.md).
  How it splits public opinion: [People judge AI differently](2026-04-09-ai-capability-gap-two-groups.md).
- In January 2025 he said this view makes it natural to treat today's LLMs as tools, a kind of text calculator. Asked whether RL generalises beyond math and code, he said probably yes, but that the answer is not obvious.
