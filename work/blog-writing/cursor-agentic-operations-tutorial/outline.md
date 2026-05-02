# Working Title

How I Use Cursor for Agentic Operations

## Useful Promise

By the end of the post, an operator should understand how to use Cursor as an agentic workspace: set up context, plan before executing, fan work out to agents, review it with durable quality gates, connect external tools through MCP when needed, and ship faster without lowering the bar.

## Reader

Primary reader: operators, Chiefs of Staff, GTM/ops leaders, and technically adjacent people who are curious about agents but do not think of themselves as engineers.

Secondary reader: technical teammates who may be skeptical. The piece needs enough specificity that it does not read like AI productivity advice.

## Evidence Spine

- Cursor works for operations because Jenny works on a technical team and wants to operate where engineering already works -> proves this is workflow fit, not tool worship.
- The ADE Certification build turned two years of scattered Ascend content into a three-course, 21-module path -> proves the example had real scope and stakes.
- Planning mode created the execution contract before agents wrote anything -> proves the important work starts before generation.
- Research, writing, review, synthesis, and revision agents worked as a managed system -> proves "agentic operations" is role design plus handoffs.
- ADE 301 used 48 parallel reviewers in one fan-out and synthesis verdicts like `NEEDS REVISION` -> proves scale requires explicit outputs and quality gates.
- MCP-connected Otto validated lab prompts in-platform -> proves external tools change agents from reviewers into validators.
- ADE 301 recovery after user error deleted work -> proves durable run artifacts are operational infrastructure, not disposable chat logs.

## Opening

Start with the certification sprint, not with Cursor.

Concrete setup: Ascend had spent two years publishing agentic data-engineering labs, blog posts, and docs. The knowledge existed, but it was scattered. During the hackathon, Jenny decided to turn that body of work into a real certification path: 101 foundations, 201 systems design, 301 production operations. That is when one-off prompting stopped being useful. The work needed a system.

## Sections

1. **Why I use Cursor for operations work**
  Evidence: Apr 30 interview, Jenny's "Asana would make engineering roll their eyes" line, `USER.md` context that Cursor is part of Jenny's daily workflow.
   Reader takeaway: Cursor is not useful because operators should pretend to be engineers. It is useful because a repo/IDE gives agent work a place to live: context, instructions, artifacts, history, review notes, and handoffs.
   Visual/list/link: short comparison table: chat tool vs Cursor workspace.
2. **Set up the agentic harness before asking for output**
  Evidence: Interview notes, `.agents/README.md`, `context/tone-voice-style-guide.md`, existing blog-writing workflow files.
   Reader takeaway: The "agentic harness" is the context, tools, rules, and file structure around the agent. Define it plainly, then show the folder structure:
   Visual/list/link: "What lives where" folder map.
3. **Use planning mode to decide what done means**
  Evidence: `projects/projects-data.js` certification narrative: planning mode defined architecture, subagent prompts, module outline, quality rules, and credentialing path before execution.
   Reader takeaway: Planning mode is not a nicer prompt box. It is where the human and agent agree on output, process, acceptance criteria, review paths, and what should happen before anything gets written.
   Visual/list/link: link to Cursor Plan Mode docs; include a small "plan should answer" checklist.
4. **Run the work in passes, not one giant prompt**
  Evidence: Certification workflow from interview and project page: 21 research agents, 21 writer agents, 8 reviewer agents per module, synthesis agent, revision agent, repeat until hard blockers are gone.
   Reader takeaway: Multi-agent work should look like an operating process: research -> write -> review -> synthesize -> revise -> verify -> human review.
   Visual/list/link: lifecycle diagram.
5. **Pilot one slice before scaling**
  Evidence: Interview note that Jenny tested one module first, adjusted style guide and prompts/skills, then parallelized.
   Reader takeaway: Scaling broken instructions just creates more cleanup. A single pilot gives you a controlled place to tune context, rules, style, and review criteria before you fan out.
   Visual/list/link: short "pilot gate" checklist.
6. **Use MCP when agents need to touch the real world**
  Evidence: Apr 30 MCP addendum and docs transcript examples: agents connected to Ascend/Otto through MCP, tested lab prompts in-platform, found mismatches with real sales-flow context, and generated replacement prompts.
   Reader takeaway: MCP servers let agents act through connected tools instead of only commenting on static files. For operations work, this can mean checking a CRM flow, testing a lab, reading docs, validating a form submission, or pulling the right context from a system of record.
   Visual/list/link: concrete mini-example: "static review" vs "in-platform validation."
7. **Save the run artifacts because things will break**
  Evidence: ADE 301 recovery story, 48-reviewer fan-out, synthesis outputs, HubSpot/local browser test flow.
   Reader takeaway: Review reports, synthesis docs, transcripts, browser test notes, and decisions logs are not bureaucracy. They make the work auditable, recoverable, and easier to improve.
   Visual/list/link: "Artifacts worth keeping" list.
8. **What to copy tomorrow**
  Evidence: Existing prompts and workflow files.
   Reader takeaway: The reader does not need Jenny's whole setup. They need the smallest useful version:
  - project folder
  - brief
  - context files
  - planning prompt
  - reviewer prompt
  - done checklist
   Starter prompt:
   Reviewer prompt:

## Ending

Close on responsibility, not hype: agents can do a startling amount of work when the system around them is clear. But the operator still owns the standards, the sequence, the review bar, and the final call. The point is not to disappear from the work. The point is to stop being the bottleneck for every pass of it.

## Risks To Verify

- Reconcile `36 hours` from the interview with the public `48-hour build window` claim. Recommended phrasing: "delivered in 36 hours inside a 48-hour hackathon window" only if Jenny confirms.
- Avoid implying MCP eliminated human QA. Say it reduced manual lab testing load and improved validation before handoff.
- Keep `56 to 112 reviews per module` as an estimate unless the draft explains the math clearly.
- Do not over-index on ADE-specific details at the expense of the reusable operator workflow.
- If using HubSpot as a second external-tool example, make clear it is supporting evidence, not the main MCP example.