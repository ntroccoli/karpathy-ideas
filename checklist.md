# Project checklist

Questions to ask about any project before applying the ideas in this collection. Each question
and its "Check" step comes from the linked ideas (their summary or Apply steps); the wording is
ours, not Karpathy's. How to run the checklist is at the end.

## A. Agent setup and token use

1. **What does every agent session load at start?**
   Check: measure the files loaded into every session, including user-level ones, for example
   `wc -c AGENTS.md CLAUDE.md ~/.claude/CLAUDE.md ~/.claude/skills/*/SKILL.md` (adapt the paths
   to your agent). Keep the always-loaded part short; move topic lessons into files read on demand.
   Ideas: [context engineering](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-25-context-engineering.md),
   [shorter prompts](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-11-01-shorter-prompts-fewer-bits.md).
2. **Do sessions run long across topics?**
   Check: apply this to the session you are running in, too. Ask the user to run `/context`
   (Claude Code) or read the context percentage in the status line, and note how many unrelated
   topics this session has covered. When the topic changes, start a fresh session that reads a
   handoff file, instead of carrying the old history. Idea: [fresh chat per topic](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-27-fresh-chat-per-topic.md).
3. **Which model does which work?**
   Check: who searches, reads and summarises. Give that work to a cheaper model or subagent; keep
   the strongest model for design and hard problems.
   Idea: [fast model first](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-27-fast-model-first-thinking-model-for-hard.md).
4. **Do requests state scope and depth?**
   Check: briefs and prompts say "quick look, one file" or "deep, verify", so agents do not
   search everything. Start lines and handoffs say what a new session does first: report where
   things stand, propose, and wait for the user before starting work. Idea: [models too agentic](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-08-09-models-too-agentic-state-stakes-and-scope.md).
5. **Where do lessons go?**
   Check: lessons are written down after work, grouped by topic, and pruned, not appended forever
   to a file every session loads. Idea: [system prompt learning](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-05-10-system-prompt-learning.md).
6. **Is project knowledge readable by agents?**
   Check: decisions, specs and research live in linked markdown an agent can read and update; source
   text is given to the model, not left to its memory.
   Ideas: [LLM knowledge bases](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-04-02-llm-knowledge-bases.md),
   [context as working memory](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-10-17-weights-hazy-memory-context-working-memory.md).

## B. How it is built

1. **Does each task say when it is done?**
   Check: every task or brief starts with "Done when" and a check an agent can run.
   Ideas: [success criteria, not steps](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-01-26-success-criteria-not-steps.md),
   [automate what you can verify](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-11-17-software-2-automates-what-you-can-verify.md).
2. **Are rules enforced by tools or only written in prose?**
   Check: rules that agents keep breaking become a script, hook, linter or test that must pass.
   Idea: [agents ignore style rules](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-21-agents-ignore-code-style-rules.md).
3. **Is performance work driven by one number?**
   Check: a fixed benchmark, one metric, a results log, and revert when there is no gain.
   Idea: [autoresearch loop](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-07-autoresearch-loop.md).
4. **Can agents work alone for long stretches?**
   Check: tasks are decomposed, and the system is testable and observable (logs, metrics), so an
   agent can check its own work. Idea: [delegate long tasks](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-02-25-delegate-long-tasks-decompose-well.md).
5. **Does a human still review and understand the code?**
   Check: diffs are reviewed for wrong assumptions, bloat and unrelated edits.
   Ideas: [subtle conceptual mistakes](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md),
   [understanding is the bottleneck](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-31-understanding-is-the-bottleneck.md).
6. **Are dependencies few and pinned?**
   Check: count dependencies; let an agent write small functions instead of adding packages.
   Idea: [rethink dependencies](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-24-rethink-dependencies-supply-chain.md).
7. **Are big decisions tested against the other side?**
   Check: before committing to a design, ask a model to argue the opposite.
   Idea: [argue the opposite](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-28-ask-llm-to-argue-the-opposite.md).

## C. The product

1. **Can agents use it?**
   Check: a CLI or API, markdown docs, and skills, not only pages to click.
   Ideas: [docs for LLMs](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-03-12-write-docs-for-llms.md),
   [DevOps as code for agents](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-26-devops-as-code-for-agents.md).
2. **Can users see and steer what the AI does?**
   Check: the user sees what each agent is doing, can step in, and can set how much it does alone.
   Ideas: [agent command center](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-11-bigger-ide-agent-command-center.md),
   [autonomy slider](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-17-partial-autonomy-and-autonomy-slider.md).
3. **Are AI outputs easy to check?**
   Check: results come as short plain text, diagrams or HTML pages that a person can verify fast.
   Idea: [make outputs easy to understand](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-10-02-make-model-outputs-easy-to-understand.md).

## How to run this checklist

This part is our procedure for using the collection, not an idea from Karpathy.

1. Measure first. Answer each question for the project with a number where it says "Check": a
   size, a count, a log line. For an app that runs its own LLM roles, also read its model-call
   logs (calls, tokens and model per role) for A3 and section C.
2. Mark each question "gap" or "no gap", with the measurement. List the questions with no gap,
   one line each. Do not open their ideas and do not make proposals for them.
3. Open only the linked ideas for the gaps.
4. Report each gap as a proposal: a number, the idea and its link, what the project does today,
   the change, its cost (S, M or L), and a recommendation of one word: do, later or skip.
5. Give each applied change a check that will prove it. For a check on context size, measure
   what the reads add after the first call, not the total: the fixed start (system prompt, tools,
   user-level files) can be large on its own.
6. Before you change a user-level file (for example `~/.claude/CLAUDE.md` or global skills), show
   the user the exact text and wait for their yes.
7. Change nothing until the user chooses.
