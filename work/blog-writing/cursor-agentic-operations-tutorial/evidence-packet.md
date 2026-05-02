# Evidence Packet

## Post Setup

- Working topic: How I Use Cursor for Agentic Operations (tutorial case study)
- Useful promise: Give operators a practical, repeatable way to turn one messy project into a structured agentic workflow in Cursor, without pretending they need to become software engineers first.
- Audience: Operators, Chiefs of Staff, GTM/ops leaders, and technically adjacent readers who are curious about agents. Operators are the primary reader, but the piece should be concrete enough that engineering readers respect the workflow.
- Publishing location: Personal website blog (`_posts/` after approval).
- Desired reader action or takeaway: Reader can set up a beginner-safe project scaffold, run a guided workflow in passes, connect agents to the right tools where appropriate, and decide when outputs are ready to ship.
- Interview decisions now locked:
  - Timeline framing: use 36-hour delivery claim in the tutorial.
  - Failure/fix scene: pilot module first, then tune style guide + prompts/skills before scaling.
  - External-tools section: use MCP-connected Ascend/Otto validation as the main example.
  - Internal links: include certification page, plus natural links where they help.
- Known constraints:
  - Keep claims grounded in verifiable project artifacts.
  - Avoid generic AI advice, feature-tour writing, and trend commentary.
  - Do not assume Git/GitHub/terminal literacy.
  - Use a practical how-to format (roughly 10-15 minute read) with enough technical specificity to hold up for engineering-adjacent readers.

## Approved Hypothesis Direction

- Working thesis: Cursor is most useful when treated like a workspace, not a chat box.
- Case study anchor: Agentic Data Engineering Certification build.
- Reader journey priority:
  - Start with the operational mess.
  - Reframe Cursor as a structured work surface.
  - Teach a first-20-minute setup ritual.
  - Walk through one real project from intake to ship.
  - Teach failure-mode correction.
  - Give a small starter version readers can copy.
- Claims that should be cut if evidence is weak:
  - Broad productivity claims without measured support.
  - Any implication that agents can run strategy unsupervised.
  - Any comparison claim that Cursor is inherently "better" than other AI tools.

## Jenny / Human Source Material

Interview status:

- Completed.
- Source: meeting transcript, "Agentic data engineering certification program development" (Apr 30).
- Rule applied: no outline/draft work should proceed without interview evidence.

Interview extraction (structured notes):

- Moment or situation:
  - The project came from a real market education gap: Ascend had two years of agentic data-engineering content, but no unified, sequential learning path.
  - The internal hackathon created a forcing function to build a full certification quickly.
- People/context involved:
  - Jenny operates on a highly technical team and intentionally works where engineering works.
  - Operating in Cursor (vs only project-management tools) improves alignment with engineering workflows and tooling.
- Why Cursor for a non-engineer:
  - Cursor lets her operate in an engineering-native environment while still doing operator work.
  - It supports configurable context/tools for agents ("agentic harness"), enabling end-to-end execution instead of copy/paste between disconnected chat outputs.
  - She still uses other AI tools; Cursor is the "get real work done at scale" environment.
- Concrete actions:
  - Started by building the agentic system first: context, tools, brief, and source documentation access.
  - Configured MCP server access so agents could work directly against connected systems, not just static files.
  - Built the plan in Cursor planning mode before execution (read-only planning artifact, human-reviewed before write phase).
  - Included explicit "done" criteria, review process, and acceptance rules directly in the plan.
  - Ran staged multi-agent execution:
    - Research agents per module in parallel.
    - Writing agents per module in parallel.
    - Eight review agents per module (persona-based + task-based checks).
    - Synthesizer agent to dedupe/prioritize reviewer findings.
    - Revision agent to apply synthesized changes.
    - Repeat review/revise loops until no hard blockers remained.
  - Used MCP-connected agents to communicate with agents inside the Ascend platform and test lab prompts in-platform.
  - Delegated lab-run validation to agents so they could verify expected outcomes without Jenny manually re-running every lab.
  - Ran one-module pilot first to tune style guide and system prompts/skills, then parallelized to all modules.
- Artifact or source:
  - Interview transcript with workflow detail (Apr 30).
  - Ascend Docs repo transcript history (Mar-Apr) covering ADE build, review loops, MCP validation, and recovery incidents.
  - `projects/certification/index.html` front matter and summary/outcome fields.
  - `projects/projects-data.js` certification and bootcamp narrative entries.
  - Existing blog posts referencing "lead AI like a team" framing.
- Outcome, metric, or change:
  - 21 modules across 3 course levels (101/201/301).
  - 21 research agents + 21 writing agents run in parallel.
  - 8 review agents per module.
  - Review volume estimate: 56 to 112 review passes per module.
  - Delivery claim from interview: "production-ready in 36 hours."
  - Existing published/site claim: 48-hour build window.
- Tension or caveat:
  - Without clear structure and review, outputs become polished but operationally weak.
  - Human operator still owns plan quality, prompt quality, and final judgment.
  - This is not a "set it and forget it" model.
- Useful detail that should not be smoothed over:
  - Planning mode matters because it creates an execution contract before writing begins.
  - Shared style guide + shared context across agents is a major quality multiplier.
  - Operator value is in designing the system and quality gates, not in manually editing every draft.
  - MCP access changes what "review" can mean: agents can validate behavior in the target platform, not only critique text.

## Workspace Source Material


| Source                                                        | Useful detail                                                                                                 | Where it belongs                     | Link candidate                                                    |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| `projects/certification/index.html`                           | Published claim: three-course certification, 21 modules, 48-hour build window                                 | Opening + credibility                | `/projects/certification/`                                        |
| `projects/projects-data.js`                                   | Narrative details on planning mode, architecture prep, subagent prompting, and reviewer pass structure        | Case study walkthrough + setup logic | `/projects/certification/`                                        |
| `projects/index.html`                                         | Public-facing short project summary that translates the case study for a general audience                     | Beginner framing language            | `/projects/`                                                      |
| `_posts/2026-01-25-five-lessons-from-my-first-year-as-cos.md` | "Lead AI like a team" frame and operator lens                                                                 | Framing + internal link              | `/blog/five-things-i-learned-in-my-first-year-as-chief-of-staff/` |
| `_posts/2026-03-14-a-few-thoughts-on-ai-no-one-asked-for.md`  | Cursor-specific perspective + balanced limitations language                                                   | Optional internal link callout       | `/blog/a-few-thoughts-on-ai-no-one-asked-for/`                    |
| `.agents/README.md`                                           | Durable guidance belongs in skills, one-off outputs in work folders                                           | "Cursor as workspace" section        | none                                                              |
| Apr 30 interview transcript                                   | Why Cursor for non-engineers, planning-mode workflow, parallel role orchestration, review/revise loop details | Core tutorial narrative spine        | none                                                              |
| Apr 30 MCP interview addendum                                 | MCP-enabled in-platform lab testing via Ascend-connected agents                                               | Validation/testing workflow section  | none                                                              |
| Docs transcript `55e693b0-1d02-4693-b4a7-0f9b8472526c`        | Devblog framing: two years of labs/blogs became a coherent curriculum under the hackathon deadline            | Opening + story framing              | internal transcript source                                        |
| Docs transcript `3eaefee3-6389-439b-9b6a-894db07b28b3`        | Slide-ready agent examples: 48 parallel reviewers, MCP-connected Otto lab-prompt validation, ADE 301 recovery | Concrete case-study proof points     | internal transcript source                                        |
| Docs transcript `6d98dfd4-e435-4cb5-b300-9e41b7452c10`        | Production-readiness module browser validation and formatting fix                                             | "Running tests" / QA examples        | internal transcript source                                        |
| Docs transcript `cde3ed90-e7a2-4463-8e08-0202fe39e13b`        | ADE certificate form work: HubSpot IDs, local browser claim flow, API acceptance, 7/7 module completion state | External-tool outcome example        | internal transcript source                                        |


Verified transcript examples to weave in:

- **48 parallel reviewers, one message:** ADE 301 used 8 reviewer agents across 6 modules in a single fan-out. Reviewers wrote reports to disk; synthesis polled for outputs, produced verdicts like `NEEDS REVISION`, and triggered further rounds.
- **MCP-connected Otto validation:** agents connected through the Ascend MCP server to a live Otto workspace, tested lab prompts, found that some prompts did not match the actual sales-flow data, and generated replacement prompts that went back into the module cycle.
- **Error recovery:** when user error deleted ADE 301 work from git, run artifacts, transcripts, and review/synthesis outputs made reconstruction possible. This is a useful proof point for why agent artifacts should be saved, not treated as disposable chat history.
- **External-tool outcome:** the ADE certification flow later connected to HubSpot, and the local browser test verified the claim flow through certificate generation plus accepted HubSpot submissions. This is optional for the post, but useful if the MCP/tools section needs a second example beyond Otto.

## External Source Material

Use external links sparingly and only when they improve reader understanding in the exact paragraph where they appear.

Priority external links (official docs only):


| Source                                                                                                                        | Why include it                                                               | Suggested placement                                             |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [Cursor Plan Mode docs](https://cursor.com/docs/agent/plan-mode)                                                              | Supports the planning-mode concept described in the case study               | In setup/planning section where plan-before-build is introduced |
| [Cursor Agent modes docs](https://www.cursor.com/docs/agent/modes)                                                            | Gives beginners a clear reference for mode switching and when to plan first  | Brief "if you're new" helper sentence in setup section          |
| [Cursor Rules docs](https://www.cursor.com/docs/context/rules)                                                                | Reinforces idea of durable instructions/context scaffolding                  | In section explaining reusable guidance and quality consistency |
| [Anthropic: Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Strong conceptual reference for context-as-curation, not context-as-dump     | In section on context architecture and why structure matters    |
| [Claude context editing docs](https://docs.anthropic.com/en/docs/build-with-claude/context-editing)                           | Useful advanced rabbit hole for readers scaling long-running agent workflows | Optional advanced-resources sentence near ending                |
| [Claude prompting overview](https://docs.anthropic.com/en/docs/intro-to-prompting)                                            | Practical reference for readers who want stronger prompt/system setup basics | In beginner starter kit section as "if you want to go deeper"   |
| Ascend platform/MCP documentation (public link TBD)                                                                           | Supports concrete MCP section with product-specific context                  | In MCP workflow section only if we have a stable public URL     |


Linking rule:

- Prefer official product/company docs.
- Avoid third-party roundups unless they add original data.
- Keep links natural in flow; no "resource dump" block.

## Evidence Spine


| Concrete idea / example / framework                                          | What it proves                                                              | Reader takeaway                                                      | Confidence |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------- |
| Certification build (21 modules, parallelized role workflow)                 | This workflow can function under real constraints                           | Start with one bounded, real project                                 | High       |
| Workroom structure (`context/`, `work/`, `.agents/skills/`, final outputs)   | Architecture reduces drift and keeps context reusable                       | Organize first, then delegate                                        | High       |
| First-20-minute setup ritual + planning mode                                 | Early setup quality predicts downstream output quality                      | Write an execution contract before agents start writing              | High       |
| Role-based flow (plan -> execute in passes -> review -> revise -> ship)      | Agentic work is managed operations, not one-shot prompting                  | Manage handoffs and quality gates deliberately                       | High       |
| 48-reviewer ADE 301 fan-out + synthesis verdicts                             | Multi-agent scale only works when outputs, paths, and verdicts are explicit | Give agents narrow jobs and make their handoffs durable              | High       |
| MCP-backed in-platform lab checks                                            | Agents can validate prompts/results in the destination platform itself      | Design validation paths, not only writing paths                      | High       |
| ADE 301 error-recovery incident                                              | Agentic systems help recover from operator mistakes under deadline          | Keep run artifacts + reviews because they become recovery scaffolds  | High       |
| One-module pilot before full parallelization                                 | Controlled calibration reduces downstream quality debt                      | Pilot one slice before scaling up                                    | High       |
| Failure-mode triage table                                                    | Most weak outputs can be corrected quickly with better constraints/reviews  | Diagnose issues by failure pattern instead of rewriting from scratch | Medium     |
| Beginner starter kit (template + bootstrap + review prompt + ship checklist) | Readers can adopt the model without copying Jenny's entire system           | Implement a minimal, practical version tomorrow                      | Medium     |


## Visual Candidates

- Chart: none (unless adding before/after workflow timing from confirmed data)
- Table: "What lives where" beginner folder map
- Diagram: workflow lifecycle (Intake -> Plan -> Execute in passes -> Review -> Revise -> Ship)
- Screenshot: optional project tree screenshot in Cursor (only if it clarifies, not as decoration)
- Pull quote: "Treat AI like a team you're leading, not a tool you're poking."
- Checklist: first-20-minute startup checklist
- Numbered process: day-in-the-life tutorial steps

## Gaps

- Missing lived example:
  - Mostly resolved via pilot-module failure/fix. Need one quote-ready sentence in Jenny's voice for the draft opening.
- Missing source:
  - Need explicit source artifact if we include project-tracking/email-drafting examples in detail.
- Source upgrades applied:
  - Added Docs-repo transcript artifacts for concrete examples and quote candidates.
- Unsupported claim:
  - Any productivity delta claims unless Jenny provides measured benchmarks.
- Claim specificity:
  - Keep MCP language precise: "agents validated lab prompts and expected outcomes in-platform" (avoid implying no human QA is ever needed).
- Claim reconciliation:
  - Tutorial uses 36-hour delivery claim per interview. If referenced against existing 48-hour site copy, explain as sprint-window framing vs final delivery timing.
- Voice risk:
  - Tutorial could drift into generic "AI playbook" language if opening scene and failure story are weak.
- Link gap:
  - External link candidates selected; insert only where contextually useful.

