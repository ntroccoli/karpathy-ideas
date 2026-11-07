---
title: Autoresearch: the agent edits the code, the human edits the prompt
date: 2026-03-07
source: x
url: https://x.com/karpathy/status/2030371219518931079
also: [https://x.com/karpathy/status/2029701092347630069, https://x.com/karpathy/status/2029702379034267985, https://x.com/karpathy/status/2029957088022254014, https://x.com/karpathy/status/2030408126688850025, https://github.com/karpathy/autoresearch, https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688?i=1000756334966]
themes: [verification, research-and-training]
summary: An agent loops on a training script against a fixed 5-minute run and a loss number, while the human only tunes the prompt file.
status: current
superseded_by:
anthropic: false
---

# Autoresearch: the agent edits the code, the human edits the prompt

Autoresearch is a small repo: a single-GPU, one-file LLM training script of about 630 lines. The
human edits a markdown prompt. The agent edits the training code. Each experiment is a full
training run of exactly five minutes. The agent works on a git feature branch, keeps a change
when validation loss improves and discards it when it does not. The aim is to tune the agent
setup so that it makes research progress with no human input. Karpathy says the repo is a recipe,
not a tool: give it to your agent and adapt it. He notes that his prompt is already about 90%
written by AI, and that he tunes this "meta-setup" as much as the training code.

## In his words

> "The goal is to engineer your agents to make the fastest research progress indefinitely"
> — Andrej Karpathy, 2026-03-07

## Apply

- Pick a task with one objective number that is cheap to compute (loss, latency, test pass
  rate). Write the rule for accepting a change: better number, and no slower, no bigger.
- Fix the budget per experiment (here, five minutes) so runs compare fairly.
- Keep the agent on a branch. Commit each kept change, so the history is the lab notebook.
- Compare agent setups, not only models: change the prompt file, rerun, and compare the curves.
- Use it only where a result can be measured. If you cannot evaluate it, you cannot loop on it (his caveat on the No Priors podcast).

## Context

- Follow-up to the 2026-03-05 post where agents tuned nanochat. Karpathy named the fastest research-org code, built by agents, to improve nanochat as the new benchmark.
- His own limit from February 2026: agents implement ideas well but invent creative ones
  poorly. He still rejects calling autoresearch mere hyperparameter tuning: see
  [Autoresearch is not hyperparameter tuning](2026-03-08-autoresearch-is-not-hyperparameter-tuning.md).
- Results: [agent-found gains transferred](2026-03-09-autoresearch-gains-transfer.md). Next step:
  [a community of agents](2026-03-08-agent-research-community.md). Same principle as
  [success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
- On the No Priors podcast (2026-03-20) he said an overnight run on his hand-tuned project found settings he had missed, such as weight decay on value embeddings and Adam betas. See also [a research organisation as markdown files](2026-02-27-programming-an-agent-research-org.md).
