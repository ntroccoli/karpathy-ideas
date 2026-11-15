# Project checklist

Questions to ask about any project, each built on Karpathy's ideas. The checklist guides you
through his ideas; it does not set rules of ours. Each item has the same parts:

- **His idea:** the idea's one-line summary from `index.md`, with the link. The summary is in
  our words; the idea file has his quote and the source.
- **In a project:** what the idea looks like in a project.
- **Ask:** questions to ask of this project, each with what to measure.
- **Trade-off / when not:** only what the idea or its context says. Anything that goes further
  is marked "Our reading" with its evidence.

The questions and their wording are ours. How to run the checklist is at the end; on a revisit,
read [corrections.md](corrections.md) first.

## A. Agent setup and token use

1. **What does every agent session load at start?**
   - His idea: [context engineering](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-25-context-engineering.md):
     the skill is filling the context window with the right information for the next step, plus
     specs, tools and workflows, not polishing one prompt. Also
     [shorter prompts](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-11-01-shorter-prompts-fewer-bits.md):
     strong models get the point from fewer words, and too many requirements can hold the model
     below what it would do on its own.
   - In a project: instruction files, skills, and handoff or state files that every session reads
     at start, user-level ones included. A skill counts with its description at start and with
     its body when read. Topic lessons that only some sessions need sit in a file every session
     loads.
   - Ask: What loads at every start? Measure the size of each file, for example
     `wc -c AGENTS.md CLAUDE.md ~/.claude/CLAUDE.md ~/.claude/skills/*/SKILL.md` (adapt the paths
     to your agent), and the context at the first call. What do the first reads add after the
     first call? Measure it from the session logs. Which parts serve only some topics? Measure the
     sections that name one topic, and how often sessions need them.
   - Trade-off / when not: too little context hurts, and so does too much (context engineering).
     The shorter prompts idea links the case where more context helps: rambling into voice mode.
2. **Do sessions run long across topics?**
   - His idea: [fresh chat per topic](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-27-fresh-chat-per-topic.md):
     old context distracts the model and costs more per token, so reset when the topic changes;
     the lasting fix is context managed by the agent.
   - In a project: one session carries several unrelated topics, or a long-lived session is woken
     many times and re-reads its whole history each time.
   - Ask: How long do sessions run, and how many unrelated topics does one cover, the session you
     run in included? Measure the first and last timestamp, compactions and topics per session.
     How often is a long session woken? Measure the wake-ups times the context each one re-reads.
   - Trade-off / when not: he keeps earlier text when it still helps. He weighed cost and speed,
     attention over long text, signal to noise, and long chats being unlike training data. He
     called a new conversation probably an implementation detail; the real answer is context
     managed by the agent, with memory. He spoke about chat apps.
3. **Which model does which work?**
   - His idea: [fast model first](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-27-fast-model-first-thinking-model-for-hard.md):
     know which model and tier you use; start fast, move to a reasoning model for hard code and
     math, and compare several vendors.
   - In a project: the strongest model searches, reads and summarises, or a fast model gets the
     hard design work.
   - Ask: Which model does each kind of work? Measure the model per session, subagent or app role,
     with its tokens. Where was an answer weak and redone? Measure the retries after a weak answer.
   - Trade-off / when not: thinking models help most on hard math and code; for simple questions
     they only add waiting time. In a later reply he said the real choice is whether a question is
     important enough to wait for. Model names date fast; the habit does not depend on them.
4. **Do requests state scope and depth?**
   - His idea: [models too agentic](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-08-09-models-too-agentic-state-stakes-and-scope.md):
     tuned models over-think simple questions and search the whole repo, so tell them the scope
     and the depth you want.
   - In a project: briefs and prompts that do not say "quick look, one file" or "deep, verify", so
     an agent searches everything for a small question.
   - Ask: Do briefs and prompts name the files to read and the depth? Measure the share of recent
     briefs that do, and the searches and reads on tasks meant to be quick.
   - Trade-off / when not: the depth should match the stakes, from a quick look to thirty minutes
     and certain. A model does not know which case applies, so the prompt must say it.
5. **Where do lessons go?**
   - His idea: [system prompt learning](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-05-10-system-prompt-learning.md):
     a missing learning paradigm: after a task, the model reviews what happened and writes
     explicit lessons into its own system prompt, later distilled into weights. Also
     [programming an agent research org](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-02-27-programming-an-agent-research-org.md):
     the agents' prompts, skills, tools and routines are markdown you can version and compare,
     and a model can write a better version of the file.
   - In a project: lessons appended forever to a file every session loads, or not written at all;
     instruction files that only people edit, or that agents rewrite with no comparison.
   - Ask: Are lessons written down after work and grouped by topic? Measure where they live
     (always-loaded files or topic files) and their dates. Which are stale or duplicate? Measure
     the duplicates and the lessons about tools or versions the project no longer uses. Who edits
     the instruction files, and is a new version compared with the old one? Measure who made the
     recent edits and whether any comparison was run.
   - Trade-off / when not: it is a research proposal, not a tested recipe; he wants the lessons
     distilled into weights to avoid bloat. The agents he ran implemented ideas well but
     generated poor ones of their own. Our reading: prune stale and duplicate lessons, not
     lessons cut to reach a size; a size goal led agents to drop lines that drive behaviour
     ([C1](corrections.md#c1-size-limits-of-ours-2026-11-09-to-2026-11-15)).
6. **Is project knowledge readable by agents?**
   - His idea: [LLM knowledge bases](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-04-02-llm-knowledge-bases.md):
     instead of RAG over loose files, let an LLM compile sources into a linked markdown wiki that
     grows with every source and every question. Also
     [context as working memory](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-10-17-weights-hazy-memory-context-working-memory.md):
     a model recalls training data vaguely but reads its context directly, so paste the source
     text instead of asking it to remember.
   - In a project: decisions and research sit in chat history, web tools or people's heads; agents
     answer from memory; a log is only appended to and never read in full.
   - Ask: Where do decisions, specs and research live? Measure how many are in linked markdown an
     agent can read and update. Do prompts give the model the source text? Measure prompts that
     paste or link it against those that ask from memory. Is there an append-only log no one reads
     whole? Measure its size and whether a page of what is current is compiled from it.
   - Trade-off / when not: the wiki saves writing, not reading and thinking.

## B. How it is built

1. **Does each task say when it is done?**
   - His idea: [success criteria, not steps](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-01-26-success-criteria-not-steps.md):
     agents loop well toward a checkable goal; describe the goal and the test, not the steps.
     Also [automate what you can verify](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-11-17-software-2-automates-what-you-can-verify.md):
     classic software automates what you can specify and trained models automate what you can
     verify, so verifiability predicts where AI improves fastest.
   - In a project: tasks and briefs that list steps but no "Done when" and no check an agent can
     run.
   - Ask: Does each task say when it is done? Measure the share of recent briefs or tasks with
     "Done when" and a runnable check, and the tasks closed with no check run.
   - Trade-off / when not: creative, strategic and context-heavy tasks lag. Where no automatic
     check exists, expect weak results and put human review there.
2. **Are rules enforced by tools or only written in prose?**
   - His idea: [agents ignore style rules](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-21-agents-ignore-code-style-rules.md):
     coding agents copy-paste, bloat abstractions and skip style rules; hooks or review may be
     needed because AGENTS.md alone does not enforce them.
   - In a project: rules written as "must", "never" and "always" that sessions keep breaking.
   - Ask: Which written rules do sessions break? Measure the rules in prose against the rules a
     hook, test or linter enforces, the breaches in logs or diffs, and hooks written but never
     wired.
   - Trade-off / when not: he mostly stopped fighting it and moved on. He sees long-term risk of
     reward hacking when an LLM judges soft rules.
3. **Is performance work driven by one number?**
   - His idea: [autoresearch loop](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-07-autoresearch-loop.md):
     an agent loops on a training script against a fixed 5-minute run and a loss number, while
     the human only tunes the prompt file.
   - In a project: performance changes without a fixed benchmark, or a headline number that was
     never measured.
   - Ask: Is there one metric, a fixed benchmark and a results log? Measure them, and the changes
     kept or reverted. When was the headline number last measured? Measure its value and date.
   - Trade-off / when not: only where a result can be measured; he says you cannot loop on what
     you cannot evaluate. Agents implement ideas well but invent creative ones poorly. He weighs
     each gain against the code it adds.
4. **Can agents work alone for long stretches?**
   - His idea: [delegate long tasks](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-02-25-delegate-long-tasks-decompose-well.md):
     coding agents now run 30-minute tasks alone; gains come from clear specs, decomposition and
     making your system testable and observable. Also
     [autonomy slider](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-17-partial-autonomy-and-autonomy-slider.md):
     good LLM apps manage context, chain model calls, give a GUI for fast checking and let the
     user set how much the AI does.
   - In a project: agents stop for help because they cannot check their work, or sessions run
     alone on work the owner wanted to choose. Our observation, in the maintainer's own setups:
     a session started from a handoff did this.
   - Ask: Can an agent check its own work? Measure the tests, logs, metrics and health checks it
     can run. How much does each kind of session do alone, and who set it? Measure what sessions
     started from a handoff did before the owner's first answer.
   - Trade-off / when not: agents work best on well-specified tasks you can test; it is
     delegation, so be explicit. He prefers partial autonomy to demos of full autonomy: small
     reviewed edits for risky code, long runs for low-risk work.
5. **Does a human still review and understand the code?**
   - His idea: [subtle conceptual mistakes](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md):
     agent errors are no longer syntax slips but wrong assumptions and bloat, so keep an IDE open
     and review code you care about. Also
     [understanding is the bottleneck](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-31-understanding-is-the-bottleneck.md)
     and [verification, not generation, is the bottleneck](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-04-verification-not-generation-is-the-bottleneck.md).
   - In a project: agent changes merged on their summary; large patches no one reads.
   - Ask: Are diffs reviewed, and for what? Measure the share of merged changes with a review and
     what reviews found: wrong assumptions, bloat, unrelated edits. How large is a change handed to
     review? Measure the lines per change.
   - Trade-off / when not: the caution is about code you care about. His autoresearch runs alone
     only where a metric checks each result. Short rules in CLAUDE.md did not fix the mistakes.
6. **Are dependencies few and pinned?**
   - His idea: [rethink dependencies](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-24-rethink-dependencies-supply-chain.md):
     after the litellm and axios attacks, he prefers fewer dependencies, uses LLMs to write simple
     functions himself, and wants safer package manager defaults. Also
     [count dependencies with the lockfile](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-10-14-count-dependencies-with-the-lockfile.md).
   - In a project: a small task pulls in a package with many nested dependencies; versions are
     not pinned.
   - Ask: How many dependencies, nested ones included? Measure the lockfile lines next to the
     source lines. Are they pinned? Measure the unpinned ranges. Which packages serve one small
     task? Measure the dependencies used in one or two places.
   - Trade-off / when not: judge size by how easy the code is to read, not by the smallest line
     count. He says package managers must change their defaults too. Our reading: he writes
     simple functions himself; a package whose output the project stores, such as password
     hashes, is not one of those.
7. **Are big decisions tested against the other side?**
   - His idea: [argue the opposite](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-28-ask-llm-to-argue-the-opposite.md):
     LLMs argue almost any side convincingly, so use them to test your opinion from several
     directions and watch for sycophancy.
   - In a project: designs chosen after one model agreed with them.
   - Ask: Which big decisions were tested against the opposite case? Measure the design records
     with a counter-argument written down.
   - Trade-off / when not: decide yourself; the two cases are inputs, not a verdict. Ask for them
     in fresh sessions, so the first does not bias the second.
8. **What may agents run and read?**
   - His idea: [agent security](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-16-agent-security-is-the-wild-west.md):
     prompt injection is like early computer viruses; risk peaks with local agents and with chat
     connectors, and agents need narrow actions, not free bash. Also
     [invisible Unicode](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-02-12-invisible-unicode-can-hide-prompts.md):
     variation selectors can hide arbitrary bytes behind one visible emoji; they cost many tokens
     and can carry a hidden prompt injection. And
     [quote rm paths](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-08-31-quote-paths-and-check-agent-rm-commands.md):
     in shell quotes, "~" stays a literal folder name; an unquoted rm -rf ~ meant for that folder
     deletes your home folder instead.
   - In a project: one agent has private data, untrusted content and a way to send data out (the
     three parts of the "lethal trifecta" he shared); an agent that reads web pages has full shell
     access; text from outside reaches a model unchecked; no one reads the delete commands agents
     run.
   - Ask: Which agent has all three parts? Measure each agent's tools and permissions, subagents
     included. Does untrusted text pass a step that strips or flags invisible code points? Measure
     the step, and propose a test with text that holds variation selectors; run it only with the
     owner's yes. Are delete commands read?
     Measure the `rm` commands in the logs, any on a bare `~`, and whether `rm -rf` is
     auto-approved.
   - Trade-off / when not: he wants to adopt agents early, but the risk holds him back. His remedy
     is a few specific action types instead of any bash script, for example no shell for an agent
     that reads web pages. In his test, the hidden prompt worked only with explicit decoding hints.
     Our addition (the Unicode standard; his post names no range): variation selectors are
     U+FE00-U+FE0F and U+E0100-U+E01EF; normal emoji use a single U+FE0F after a visible
     character and U+200D between emoji, so keep those and strip runs of selectors.

## C. The product

1. **Can agents use it?**
   - His idea: [docs for LLMs](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-03-12-write-docs-for-llms.md):
     the main user of your product or docs is becoming an LLM agent, so ship markdown docs, a CLI
     or API, and skills, not only pages to click. Also
     [DevOps as code for agents](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-26-devops-as-code-for-agents.md).
   - In a project: setup and actions that need a person to click through web pages.
   - Ask: Can an agent do each important action? Measure the actions with a CLI or API against
     those only in a web page, and whether the docs are markdown an agent can fetch with plain
     curl. Propose a trial in which an agent does the setup in a throwaway copy and notes where
     it stops; run it only with the owner's yes.
   - Trade-off / when not: he calls an agent that deploys a whole app only barely possible now.
2. **Can users see and steer what the AI does?**
   - His idea: [agent command center](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-03-11-bigger-ide-agent-command-center.md):
     developers need a bigger IDE built around many supervised agents, not one file; headless
     loops lose the supervision that makes agent work trustworthy. Also
     [autonomy slider](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-17-partial-autonomy-and-autonomy-slider.md).
   - In a project: the product's AI features act out of sight, with no way to stop them or to set
     how much they do alone.
   - Ask: Do the people who use the product's AI see what each agent is doing, step in, and set
     how much it does alone? Measure the screens or commands that do each.
   - Trade-off / when not: if the product runs no AI, this question does not apply.
3. **Are AI outputs easy to check?**
   - His idea: [make outputs easy to understand](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2026-10-02-make-model-outputs-easy-to-understand.md):
     to follow what LLMs produce, ask for controlled English, then diagrams, then HTML pages, then
     custom explainer videos, each easier to take in.
   - In a project: results arrive as long, dense text that takes long to check.
   - Ask: In what form do AI results reach a person? Measure their format and length, and how long
     a person takes to check one.
   - Trade-off / when not: the controlled English spec is very strict, so he sometimes asks for a
     rough 80% match.

## How to run this checklist

This part is our procedure for using the collection, not an idea from Karpathy. The checklist
guides; the project's owner decides. Every proposal is an option for the owner, and nothing is
applied without their yes.

Run the review in a fresh session, not in the one that built the project: a builder's session
fills gaps from memory and tends to find none. A long-lived session can instead send the
research to fresh subagents and only merge their results.

The project is the code repository the agent works in. For an agent setup without a single
repository (several repositories, a manager session and its workers), the project is the folder
sessions start in plus the user-level files they load.

1. Measure first, every question; do not judge from memory. Answer each "Ask" for the project
   with a number: a size, a count, a log line. For an app that runs its own LLM roles, also read
   its model-call logs (calls, tokens and model per role) for A3 and section C. Also count the
   skill descriptions and the tool listings that plugins and MCP servers add (A1): with many
   skills, the descriptions are often the largest part of the start. Count each file once
   (synced copies of skills are easy to count twice).
2. Mark each question "gap", "partial gap" or "no gap", with the measurement. List the questions
   with no gap, one line each. Do not open their ideas and do not make proposals for them.
3. Open only the linked ideas for the gaps, and only when the item's summary is not enough to
   write the proposal.
4. Report each gap as a proposal, an option for the project's owner: a number, the idea and its
   link, what the project does today, the change, its trade-off from the item, its cost (S, M or
   L), and a recommendation of one word: do, later or skip.
5. Give each applied change a check that will prove it. For a check on context size, measure
   what the reads add after the first call, not the total: the fixed start (system prompt, tools,
   user-level files) can be large on its own. A check that cannot be run yet is "not shown",
   with the numbers you have.
6. Before you change a user-level file (for example `~/.claude/CLAUDE.md` or global skills), show
   the user the exact text and wait for their yes. A diff counts. For many or long changes, give
   a short summary and the path to a file with the full text, not one long message. The user may
   name an agent to review the text; the yes stays the user's unless they say otherwise. When
   several projects share user-level files, apply their changes one project at a time, each from
   the latest version of the files.
7. Change nothing until the user chooses.
8. Record each proposal and its outcome with the date in the project's record file,
   `docs/karpathy-ideas.md` (or, without a repository, the record file the review named), and
   name the newest `log.md` entry the review covered.

Measuring from session logs. A2, A3, B2, B5 and B8 often need the agent's session logs. Claude
Code keeps one JSONL file per session in `~/.claude/projects/<folder>/<session-id>.jsonl`; the
folder is named after the directory the session started in (a session started in the home folder
is under the home folder's name), and subagents have their own files. Useful fields: the first
and last `timestamp` and `isCompactSummary` (session length and compactions, A2); `message.usage`
per reply (context at the first call and at the peak, A1 and step 5); `message.model` (A3); the
tool calls and their inputs (B2, B5, B8). Count tool calls, not all text: a search over all text
also matches the rules quoted in the loaded instructions. Other agents keep similar logs.

Two counts that are easy to miss. For A2, count the messages that wake a long session, times the
context each one re-reads: in one setup (the maintainer's own, 2026-11), 2,320 wake-ups in a week each re-read more than 300k
tokens. For B2, count the "must", "never" and "always" rules in the instruction files against
the rules a hook, test or linter enforces, and count hooks that were written but never wired.
Before you rely on a guard hook, test it against heredocs and quoted text: a hook that matches
command text can block harmless commands.

No size or count limits. His ideas name no numbers, and this checklist gives none of ours (an
earlier version did: [C1](corrections.md#c1-size-limits-of-ours-2026-11-09-to-2026-11-15)).
Grade a gap against the project's own runs instead:

- a number that grew without anyone choosing it;
- a number that came with worse work, such as rules missed, more retries or a compaction.

Items that tell an agent to cut, move, delete or forbid fail when applied blindly. A size goal
makes an agent drop lines that drive behaviour, and too little context hurts as much as too much
([context engineering](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-25-context-engineering.md)).
Before such a change, list each line that leaves the files loaded at every start, where it goes,
and the behaviour that shows it still holds. That behaviour is the change's check in step 5.

On a revisit (README step 3), read [corrections.md](corrections.md) first: check each correction
the record does not list as checked, and name the ones you checked in the record. Then read only
the `log.md` entries newer than the one the record names; if it names none, those newer than the
record's date. First re-check the recorded items waiting for first use and the applied items that
may have stopped holding. Then run steps 1 to 7: report a gap in any question, but open and
propose only ideas new since the last review, earlier "later" items, and applied items that
stopped holding. Report a gap that a waiting item already covers under that item, not as a new
proposal. Do not reopen ideas the record already summarises. Each `log.md` entry's "Checklist
impact" part maps its new ideas to the questions.

Our own practices that go with A2 and A4 (not from the ideas): measure a session's context with
`/context` (Claude Code) or the status line; carry state to a new session through a handoff file
(decisions, state, open items) instead of the old history. How much a new session does before
the user answers is set under B4. Make a fresh start cheap, so it gets chosen: a short handoff,
and no manual edits before a new session can start.
