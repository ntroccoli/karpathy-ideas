# Project checklist

Questions to ask about any project before applying the ideas in this collection. Each question
links to the ideas behind it. The questions and the "Check" steps are our own reading of those
ideas, not Karpathy's words.

How to use it: answer each question for your project, measure where it says "Check", then open
only the linked ideas that point to a gap.

## A. Agent setup and token use

1. **What does every agent session load at start?**
   Check: list and measure the files loaded into every session (`AGENTS.md`, `CLAUDE.md`, rules,
   skills). Keep the always-loaded part short; move topic lessons into files read on demand.
   Ideas: [context engineering](ideas/2025-06-25-context-engineering.md),
   [shorter prompts](ideas/2026-11-01-shorter-prompts-fewer-bits.md).
2. **Do sessions run long across topics?**
   Check: how long the main sessions run and how full their context gets. Start a fresh session
   per topic from a handoff file. Idea: [fresh chat per topic](ideas/2025-02-27-fresh-chat-per-topic.md).
3. **Which model does which work?**
   Check: who searches, reads and summarises. Give that work to a cheaper model or subagent; keep
   the strongest model for design and hard problems.
   Idea: [fast model first](ideas/2025-02-27-fast-model-first-thinking-model-for-hard.md).
4. **Do requests state scope and depth?**
   Check: briefs and prompts say "quick look, one file" or "deep, verify", so agents do not
   search everything. Idea: [models too agentic](ideas/2025-08-09-models-too-agentic-state-stakes-and-scope.md).
5. **Where do lessons go?**
   Check: lessons are written down after work, grouped by topic, and pruned, not appended forever
   to a file every session loads. Idea: [system prompt learning](ideas/2025-05-10-system-prompt-learning.md).
6. **Is project knowledge readable by agents?**
   Check: decisions, specs and research live in linked markdown an agent can read and update; source
   text is given to the model, not left to its memory.
   Ideas: [LLM knowledge bases](ideas/2026-04-02-llm-knowledge-bases.md),
   [context as working memory](ideas/2025-10-17-weights-hazy-memory-context-working-memory.md).

## B. How it is built

1. **Does each task say when it is done?**
   Check: every task or brief starts with "Done when" and a check an agent can run.
   Ideas: [success criteria, not steps](ideas/2026-01-26-success-criteria-not-steps.md),
   [automate what you can verify](ideas/2025-11-17-software-2-automates-what-you-can-verify.md).
2. **Are rules enforced by tools or only written in prose?**
   Check: rules that agents keep breaking become a script, hook, linter or test that must pass.
   Idea: [agents ignore style rules](ideas/2026-03-21-agents-ignore-code-style-rules.md).
3. **Is performance work driven by one number?**
   Check: a fixed benchmark, one metric, a results log, and revert when there is no gain.
   Idea: [autoresearch loop](ideas/2026-03-07-autoresearch-loop.md).
4. **Can agents work alone for long stretches?**
   Check: tasks are decomposed, and the system is testable and observable (logs, metrics), so an
   agent can check its own work. Idea: [delegate long tasks](ideas/2026-02-25-delegate-long-tasks-decompose-well.md).
5. **Does a human still review and understand the code?**
   Check: diffs are reviewed for wrong assumptions, bloat and unrelated edits.
   Ideas: [subtle conceptual mistakes](ideas/2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md),
   [understanding is the bottleneck](ideas/2026-03-31-understanding-is-the-bottleneck.md).
6. **Are dependencies few and pinned?**
   Check: count dependencies; let an agent write small functions instead of adding packages.
   Idea: [rethink dependencies](ideas/2026-03-24-rethink-dependencies-supply-chain.md).
7. **Are big decisions tested against the other side?**
   Check: before committing to a design, ask a model to argue the opposite.
   Idea: [argue the opposite](ideas/2026-03-28-ask-llm-to-argue-the-opposite.md).

## C. The product

1. **Can agents use it?**
   Check: a CLI or API, markdown docs, and skills, not only pages to click.
   Ideas: [docs for LLMs](ideas/2025-03-12-write-docs-for-llms.md),
   [DevOps as code for agents](ideas/2026-03-26-devops-as-code-for-agents.md).
2. **Can users see and steer what the AI does?**
   Check: the user sees what each agent is doing, can step in, and can set how much it does alone.
   Ideas: [agent command center](ideas/2026-03-11-bigger-ide-agent-command-center.md),
   [autonomy slider](ideas/2025-06-17-partial-autonomy-and-autonomy-slider.md).
3. **Are AI outputs easy to check?**
   Check: results come as short plain text, diagrams or HTML pages that a person can verify fast.
   Idea: [make outputs easy to understand](ideas/2026-10-02-make-model-outputs-easy-to-understand.md).
