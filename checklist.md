# Project checklist

Questions to ask about any project before applying the ideas in this collection. Each question
and its "Check" step comes from the linked ideas (their summary or Apply steps); the wording is
ours, not Karpathy's. How to run the checklist is at the end.

## A. Agent setup and token use

1. **What does every agent session load at start?**
   Check: measure the files loaded into every session, including user-level ones and the
   handoff or state files a session is told to read at start, for example
   `wc -c AGENTS.md CLAUDE.md ~/.claude/CLAUDE.md ~/.claude/skills/*/SKILL.md` (adapt the paths
   to your agent). A skill counts with its description at start and with its body when read. Also
   measure what the first reads add after the first call. Keep the always-loaded part short; move
   topic lessons into files read on demand.
   Ideas: [context engineering](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-25-context-engineering.md),
   [shorter prompts](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-11-01-shorter-prompts-fewer-bits.md).
2. **Do sessions run long across topics?**
   Check: note how long sessions run and how many unrelated topics one session covers, including
   the session you are running in. When the topic changes, start a new session instead of
   carrying the old history. Idea: [fresh chat per topic](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-27-fresh-chat-per-topic.md).
3. **Which model does which work?**
   Check: who searches, reads and summarises. Give that work to a cheaper model or subagent; keep
   the strongest model for design and hard problems.
   Idea: [fast model first](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-27-fast-model-first-thinking-model-for-hard.md).
4. **Do requests state scope and depth?**
   Check: briefs and prompts say "quick look, one file" or "deep, verify", so agents do not
   search everything. Idea: [models too agentic](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-08-09-models-too-agentic-state-stakes-and-scope.md).
5. **Where do lessons go?**
   Check: lessons are written down after work, grouped by topic, and pruned, not appended forever
   to a file every session loads. Idea: [system prompt learning](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-05-10-system-prompt-learning.md).
6. **Is project knowledge readable by agents?**
   Check: decisions, specs and research live in linked markdown an agent can read and update; source
   text is given to the model, not left to its memory. A log that is only appended to and never
   read in full gets a short page of what is current, compiled from it.
   Ideas: [LLM knowledge bases](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-04-02-llm-knowledge-bases.md),
   [context as working memory](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-10-17-weights-hazy-memory-context-working-memory.md).

## B. How it is built

1. **Does each task say when it is done?**
   Check: every task or brief starts with "Done when" and a check an agent can run.
   Ideas: [success criteria, not steps](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-01-26-success-criteria-not-steps.md),
   [automate what you can verify](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-11-17-software-2-automates-what-you-can-verify.md).
2. **Are rules enforced by tools or only written in prose?**
   Check: rules that agents keep breaking become a script, hook, linter or test that must pass.
   Count the written rules that sessions do not follow.
   Idea: [agents ignore style rules](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-21-agents-ignore-code-style-rules.md).
3. **Is performance work driven by one number?**
   Check: a fixed benchmark, one metric, a results log, and revert when there is no gain. A
   headline number that has never been measured is a gap: there is nothing to compare against.
   Idea: [autoresearch loop](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-07-autoresearch-loop.md).
4. **Can agents work alone for long stretches?**
   Check: tasks are decomposed, and the system is testable and observable (logs, metrics), so an
   agent can check its own work. Idea: [delegate long tasks](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-02-25-delegate-long-tasks-decompose-well.md).
5. **Does a human still review and understand the code?**
   Check: diffs are reviewed for wrong assumptions, bloat and unrelated edits.
   Ideas: [subtle conceptual mistakes](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md),
   [understanding is the bottleneck](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-31-understanding-is-the-bottleneck.md),
   [verification, not generation, is the bottleneck](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-04-verification-not-generation-is-the-bottleneck.md).
6. **Are dependencies few and pinned?**
   Check: count dependencies (lockfile lines are a quick count); let an agent write small
   functions instead of adding packages.
   Ideas: [rethink dependencies](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-24-rethink-dependencies-supply-chain.md),
   [count dependencies with the lockfile](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-10-14-count-dependencies-with-the-lockfile.md).
7. **Are big decisions tested against the other side?**
   Check: before committing to a design, ask a model to argue the opposite.
   Idea: [argue the opposite](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-28-ask-llm-to-argue-the-opposite.md).
8. **What may agents run and read?**
   Check: list each agent's tools and permissions, subagents included. Where one agent has private
   data, untrusted content and a way to send data out, remove one of the three; give it specific,
   limited tools instead of unrestricted shell access, for example no shell for an agent that
   reads web pages
   ([agent security](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-16-agent-security-is-the-wild-west.md)). Treat text from
   outside your control as untrusted, and strip or flag invisible code points such as variation
   selectors before it reaches a model; variation selectors are U+FE00-U+FE0F and
   U+E0100-U+E01EF (our addition: his post names no range; the Unicode standard defines them)
   ([invisible Unicode](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-12-invisible-unicode-can-hide-prompts.md)). Read the delete
   commands agents run: odd names in single quotes, never `rm -rf` on a bare `~`
   ([quote rm paths](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-08-31-quote-paths-and-check-agent-rm-commands.md)).

## C. The product

1. **Can agents use it?**
   Check: a CLI or API, markdown docs, and skills, not only pages to click.
   Ideas: [docs for LLMs](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-03-12-write-docs-for-llms.md),
   [DevOps as code for agents](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-26-devops-as-code-for-agents.md).
2. **Can users see and steer what the AI does?**
   Check: the people who use the product's AI features see what each agent is doing, can step in,
   and can set how much it does alone. If the product runs no AI, this question does not apply.
   Ideas: [agent command center](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-11-bigger-ide-agent-command-center.md),
   [autonomy slider](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-17-partial-autonomy-and-autonomy-slider.md).
3. **Are AI outputs easy to check?**
   Check: results come as short plain text, diagrams or HTML pages that a person can verify fast.
   Idea: [make outputs easy to understand](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-10-02-make-model-outputs-easy-to-understand.md).

## How to run this checklist

This part is our procedure for using the collection, not an idea from Karpathy.

Run the review in a fresh session, not in the one that built the project: a builder's session
fills gaps from memory and tends to find none.

1. Measure first, every question; do not judge from memory. Answer each question for the project
   with a number where it says "Check": a size, a count, a log line. For an app that runs its own
   LLM roles, also read its model-call logs (calls, tokens and model per role) for A3 and
   section C. Also count the skill and tool listings that plugins and MCP servers add (A1).
2. Mark each question "gap", "partial gap" or "no gap", with the measurement. List the questions
   with no gap, one line each. Do not open their ideas and do not make proposals for them.
3. Open only the linked ideas for the gaps.
4. Report each gap as a proposal: a number, the idea and its link, what the project does today,
   the change, its cost (S, M or L), and a recommendation of one word: do, later or skip.
5. Give each applied change a check that will prove it. For a check on context size, measure
   what the reads add after the first call, not the total: the fixed start (system prompt, tools,
   user-level files) can be large on its own. A check that cannot be run yet is "not shown",
   with the numbers you have.
6. Before you change a user-level file (for example `~/.claude/CLAUDE.md` or global skills), show
   the user the exact text and wait for their yes.
7. Change nothing until the user chooses.
8. Record each proposal and its outcome with the date in the project's docs, for example
   `docs/karpathy-ideas.md`, and name the newest `log.md` entry the review covered.

Measuring from session logs. A2, A3, B2, B5 and B8 often need the agent's session logs. Claude
Code keeps one JSONL file per session in `~/.claude/projects/<folder>/<session-id>.jsonl`; the
folder is named after the directory the session started in (a session started in the home folder
is under the home folder's name), and subagents have their own files. Useful fields: the first
and last `timestamp` and `isCompactSummary` (session length and compactions, A2); `message.usage`
per reply (context at the first call and at the peak, A1 and step 5); `message.model` (A3); the
tool calls and their inputs (B2, B5, B8). Count tool calls, not all text: a search over all text
also matches the rules quoted in the loaded instructions. Other agents keep similar logs.

On a revisit (README step 3), read only the `log.md` entries newer than the one the record names;
if it names none, those newer than the record's date. First re-check the recorded items waiting
for first use and the applied items that may have stopped holding. Then run steps 1 to 7: report a
gap in any question, but open and propose only ideas new since the last review, earlier "later"
items, and applied items that stopped holding. Report a gap that a waiting item already covers
under that item, not as a new proposal. Do not reopen ideas the record already summarises. Each
`log.md` entry's "Checklist impact" part maps its new ideas to the questions.

Our own practices that go with A2 and A4 (not from the ideas): measure a session's context with
`/context` (Claude Code) or the status line; carry state to a new session through a handoff file
(decisions, state, next step) instead of the old history; and make a start line or handoff tell
the new session to report where things stand, propose, and wait for the user before it starts.
A sign of a gap for A2: one session covers more than one topic, or it was compacted. Make a fresh
start cheap, so it gets chosen: a short handoff, and no manual edits before a new session can start.
