---

## name: human-blog-writing

description: Source concrete human experience, real examples, and practical frameworks before drafting blog posts in Jenny's voice. Use when planning, writing, revising, or reviewing blog posts, essays, thought pieces, or long-form website writing that must sound specific, useful, and human.
disable-model-invocation: true

# Human Blog Writing

Write blog posts from evidence, lived experience, and clear structure. Do not draft from generic topic knowledge alone.

## Use When

- Writing or revising a blog post, essay, article, newsletter-style post, or long-form web piece.
- Turning Jenny's rough idea into a polished post.
- Reviewing a post for voice, specificity, usefulness, or "does this sound like AI wrote it?"
- Creating outlines, source packets, visuals, internal links, or external links for a post.

## Required Inputs

- Working topic or thesis.
- Intended audience and publishing location.
- The purpose of the post: teach, explain, reflect, persuade, recap, announce, or document a process.
- `context/tone-voice-style-guide.md`.
- Jenny interview notes captured for this specific post (required before any outline work).
- Any relevant source material from Jenny, the workspace, or credible external research.

If any required input is missing, ask Jenny up to 3 multiple-choice clarifying questions before drafting.

## Working Files

Keep reusable instructions in `.agents/skills/human-blog-writing/`. Keep all post-specific work in `work/blog-writing/<post-slug>/`.

Use this structure:

```text
work/blog-writing/<post-slug>/
├── hypothesis-outline.md
├── evidence-packet.md
├── outline.md
├── draft-v1.md
├── draft-v2.md
├── review-notes.md
└── links-and-visuals.md
```

- Put source notes, outlines, drafts, review notes, link candidates, and visual plans in the post's `work/blog-writing/<post-slug>/` folder.
- Do not put one-off drafts, outlines, or review outputs in `.agents/`.
- Once a post is approved for publishing, move the publish-ready Markdown into `_posts/` using the site's normal Jekyll filename pattern.
- Keep final images or visual assets in the site's normal asset location, then link them from the post.

## Strict Workflow

1. Define the useful promise.
  - Write one sentence that says what the reader should understand or be able to do after reading.
  - If the promise is vague, stop and clarify before gathering sources.
2. Interview Jenny before creating any outline.
  - No hypothesis outline, outline, or draft is allowed before the interview is complete.
  - Keep the interview focused on lived experience and transferable process details.
  - Ask up to 3 multiple-choice clarifying questions first to lock scope.
  - Then gather short-answer detail on:
    - The strongest concrete moment to open with.
    - One failure-and-fix example.
    - The exact process, artifacts, and constraints worth teaching.
  - Save interview notes in `work/blog-writing/<post-slug>/evidence-packet.md` before moving on.
3. Create a hypothesis outline after interview notes exist.
  - This is not the final outline. It is a targeting tool.
  - The hypothesis outline must be cohesive and intentional; it cannot be a list of points.
  - Define a compelling reader outcome and design the section order as a reader journey toward that outcome.
  - For each section, state what changes for the reader before they move to the next section.
  - Ensure the sequence reduces confusion and increases clarity, confidence, or ability to act.
  - Capture the likely thesis, 3-5 possible section hypotheses in intentional order, and the evidence needed to prove or disprove each one.
  - Pause for Jenny approval (or revisions) on the hypothesis outline before gathering broader evidence.
  - Use it to focus source gathering without locking the post into an unsupported structure.
4. Build an evidence packet that tests the hypothesis outline.
  - Use [evidence-packet-template.md](evidence-packet-template.md).
  - Interview notes are the first required evidence source.
  - Search workspace context for prior docs, project notes, blog drafts, examples, metrics, and internal references.
  - Use credible external sources for frameworks, benchmarks, definitions, data, and third-party examples.
  - Capture internal link candidates and external link candidates while sourcing.
5. Extract the post's spine from the evidence.
  - Identify the 3-5 strongest concrete ideas, moments, examples, use cases, or frameworks.
  - Cut weak ideas before outlining. Do not keep a point because it sounds generally true.
  - Name what each section proves, not just what topic it covers.
  - Update or abandon the hypothesis outline when the evidence points somewhere better.
6. Create an evidence-based outline for approval before drafting.
  - Include the opening moment, section claims, evidence used in each section, planned visuals, link candidates, and the intended ending.
  - Do not draft the full post until Jenny approves the outline unless she explicitly asks for a fast draft.
7. Run a pre-draft alignment gate.
  - Before drafting, restate and get explicit confirmation of these five items in plain language:
    - What this post is and is not (e.g., "approach guide" vs "step-by-step tutorial" vs "story/reflection").
    - Which project is the worked example and what role it plays (origin story vs proof point vs walkthrough anchor).
    - The intended voice shape (narrative density, directness, humor level, paragraph rhythm).
    - The non-negotiable concepts that must be clearly explained (for example: "why IDE workspace" and "agentic harness").
    - The practical reader outcome by the end of the post.
  - If draft feedback says "still not me" after revision, rerun this gate before attempting another rewrite.
8. Draft tightly from the outline.
  - Open concrete: a real moment, tension, observation, or specific working context.
  - Use Jenny's voice: warm, direct, practical, specific, lightly self-aware.
  - Enforce weight and intention at sentence level:
    - each sentence must add meaning, evidence, or forward motion
    - if a sentence can be removed without loss, cut or rewrite it
    - avoid formulaic section rules that flatten natural voice rhythm
  - Use bullets, numbered lists, tables, charts, diagrams, or callouts only when they make the idea easier to understand.
  - Add internal links where they help the reader continue naturally.
  - Add external links for cited frameworks, source data, examples, or tools. Do not add decorative links.
9. Run authenticity review before showing the draft.
  - Use [authenticity-review-rubric.md](authenticity-review-rubric.md).
  - Add a required "generic slop pass":
    - cut filler transitions, repeated claims, and decorative framing
    - replace vague abstractions with concrete lived detail
    - rewrite lines that sound motivational, sterile, or auto-generated
  - Do not deliver the draft if this pass is not complete.
  - If any section sounds generic, repetitive, over-explained, or AI-written, send it back for revision.
  - Revision should usually cut, sharpen, reorder, or replace weak evidence. Do not expand vague sections to fix them.

## Source Requirements

Each major section needs at least one of:

- A specific lived example from Jenny or the team.
- A concrete use case with who, what, when, why, and result.
- A real process, checklist, decision rule, artifact, or framework.
- A metric, timeframe, constraint, quote, artifact, or observed behavior.
- A credible external source that adds something factual.

If a section has only abstract advice, either source it properly or remove it.

## Outline Requirements

Return outlines in this format:

```markdown
# Working Title

Useful promise:
[One sentence.]

Reader:
[Audience and situation.]

Evidence spine:
- [Concrete idea/example/framework] -> proves [claim]

Opening:
[Specific moment/tension/observation.]

Sections:
1. [Section claim, not generic heading]
   Evidence: [specific source/example]
   Reader takeaway: [what changes for the reader]
   Visual/list/link: [planned asset or none]

Ending:
[Concrete close, reflection, question, or practical next step.]

Risks to verify:
- [Unsupported claim, source gap, voice risk, or missing example]
```

## Draft Quality Bar

The draft must:

- Sound like Jenny: direct, warm, practical, specific, and human.
- Teach through concrete material instead of circling around abstract concepts.
- Vary sentence and paragraph rhythm.
- Use lists only when they create clarity, not because blog posts are "supposed" to have lists.
- Include visuals, charts, diagrams, or tables when the idea has structure, sequence, comparison, or data.
- Preserve concision through review. Feedback should improve precision, not inflate the draft.
- End with something concrete: a practical next step, real reflection, useful question, or memorable detail.

## Anti-Patterns

Reject and revise any draft that:

- Repeats the same example, phrase, or claim in multiple sections.
- Uses generic filler such as "in today's fast-paced world," "unlock," "leverage," "seamless," or "game-changing."
- Explains a framework without showing how it appears in real work.
- Adds long transitions that restate the heading.
- Turns review feedback into more paragraphs instead of clearer structure.
- Sounds polished but empty.
- Makes claims without a source, constraint, example, or lived detail.
- Uses fake specificity: invented numbers, unnamed anecdotes presented as real, or overly neat stories that did not happen.

## Review Rule

Any reviewer who finds AI-sounding language must mark it as:

`Not genuine/authentic - send back for revision`

The fix must identify the source of the problem:

- Missing concrete evidence.
- Repetition or drift.
- Corporate phrasing.
- Over-explaining.
- Unsupported claim.
- Voice mismatch.

Do not approve a draft with unresolved authenticity issues.