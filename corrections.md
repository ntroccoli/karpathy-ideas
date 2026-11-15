# Corrections

Errors in what this collection told projects to do, and how to repair a project that followed
one. This is our procedure, not an idea from Karpathy.

A revisit (the README step 1 prompt on a project that has a record) reads this file first. It
checks each correction that the project's record file does not list as checked; the record then
names the corrections it checked, with the date and the outcome. A project that a correction does
not affect gets no proposal for it.

Each entry says what was wrong and when it was published, how to recognise it in a project, how
to find what it changed, and what to propose. Proposals are options for the project's owner:
apply none without their yes.

Ran the review between 2026-11-09 and 2026-11-15? Run the review prompt (README step 1) again.
Because the project has a record, it does the revisit.

## C1: size limits of ours, 2026-11-09 to 2026-11-15

**What was wrong.** From commit `f8d129f` (2026-11-09) to commit `d856d7f` (2026-11-15), the
checklist's procedure part gave "starting thresholds" of ours, not his: for A1, 50k tokens at the
first call and 15 KB in total for the files loaded at every start; for A2, one topic per session
and no compaction; for A4, about 500 lines a package and a peak context under 200k tokens; for
A5, 12 KB per file loaded at every start, and "a check (a test or the gate) keeps it there". They
came from one person's five projects, and no measurement showed that they help. His ideas name no
numbers. Applied as limits, they led agents to cut lines that drive behaviour, and A5 asked for a
check that keeps the size. They were removed on 2026-11-15 (`log.md`, "size limits of ours
removed").

**Recognise it.** Compare the review's date with the publication window first. A review before
2026-11-09 never saw these limits: it is affected only when its record names such a target
itself (the second condition). Otherwise the project may be affected when any of these holds:

- the record names, as the newest `log.md` entry it covered, one older than "2026-11-15 — size
  limits of ours removed". Recognise the project by that entry, not by the day: a record that
  names it or a newer one, or lists C1 as checked, does not meet this condition. A record that
  names no entry and lists no correction meets it when its date is from 2026-11-09 to 2026-11-15;
- the record names A1, A2, A4 or A5 with a size, a token or line count, or "no compaction" as the
  target;
- a file loaded at every start gained, since the review date, a rule the old limits added: no
  compaction (or "never /compact"), about 500 lines a package, a peak context under 200k tokens,
  or a size per file;
- a test, hook, gate or CI step fails on a file's size or line count;
- a file loaded at every start shrank after the review date.

If none holds, record C1 as checked, not affected, and propose nothing for it.

**Find what left.** Do this during the revisit, before you propose anything:

1. Read the record: which items were applied to meet a limit, and on which date.
2. Take the files each role loads where it starts. A session started in the home folder loads
   the home folder's instruction files and memory, not the repository's; a coordinator and its
   workers may start in different folders. For each such file (instruction files, project skills,
   handoff or state files read at start, user-level files), read its history since the review
   date, for example `git log -p --since=<review date> -- AGENTS.md`. Without history, compare
   with any copy or backup the record names, and say what could not be checked.
3. List each line that left, quoted, with: where it is now (another file, a skill, nowhere);
   whether a session that reads only the files loaded at every start would still follow it; and
   the behaviour it drove, with whether that behaviour still holds (session logs, tests, CI,
   recent commits). A line that is nowhere else and that no tool enforces is the likeliest loss.
4. List each line that moved into a file read only on demand with no pointer to it from a file
   loaded at every start: a session will not find it.
5. List each rule the old limits added (the third condition above), quoted, with its file.
6. List each size check the review added: the file, what it measures, and what it fails on.
7. A shared user-level file may already have been repaired by another project's revisit. Check
   its history, and record that repair instead of proposing it again.

**What to propose.** Options for the owner, each with what it costs, in this order:

- remove each size check the old A5 asked for, or change it to check the behaviour instead. Do
  this first: a file held at its limit cannot take back the lines;
- put back each line that left and still drives behaviour, named and quoted, in the
  always-loaded file or where sessions will read it when they need it; choose by need, not by
  size
  ([context engineering](https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/ideas/2025-06-25-context-engineering.md));
- add a pointer for each line that moved with none;
- for each rule the old limits added, offer the checklist's neutral wording as the option, for
  example A2's "a compaction with a written handoff and a new session are both ways of managing
  context; the owner chooses", or keep the rule as the owner's own choice, in their words;
- keep a cut that removed only stale or duplicate text, and say so.

A repair proposes the repair. Other gaps the revisit finds on the way get one line each, with no
recommendation, so the owner can ask for them later; earlier "later" items keep their line too.

**Then.** Name C1 in the record as checked, with the date and the outcome (affected or not, and
the proposals). A repair another project made goes in as "repaired by <project>, <date>".
