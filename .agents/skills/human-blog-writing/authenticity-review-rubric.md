# Authenticity Review Rubric

Use this before sending Jenny any blog draft or major revision.

## Verdicts

- `Approve` - Specific, useful, concise, and sounds like Jenny.
- `Revise` - Mostly works, but has fixable weak sections.
- `Not genuine/authentic - send back for revision` - Sounds AI-written, generic, repetitive, inflated, or unsupported.

Do not use `Approve` if any section has unresolved authenticity issues.

## Review Passes

### 1. Specificity

Flag any paragraph that could fit almost any company, leader, project, or blog topic.

Look for:

- No real person, situation, artifact, process, metric, timeframe, or constraint.
- Abstract nouns standing in for actual work.
- Advice that sounds true but would not help someone act differently.

Fix by replacing the paragraph with concrete evidence or cutting it.

### 2. Voice

Flag anything that does not sound like Jenny.

Look for:

- Press-release phrasing.
- Corporate filler.
- Overly formal transitions.
- Forced enthusiasm.
- False modesty.
- Sentences that sound optimized for LinkedIn instead of written by a person.

Fix by making it more direct, warmer, shorter, and more specific.

### 3. Repetition and Drift

Flag repeated ideas even when the wording changes.

Look for:

- Same example used to prove multiple points.
- Same claim restated across sections.
- Review additions that explain instead of clarify.
- Sections that have become longer without becoming more useful.

Fix by cutting the weaker repeat, merging sections, or choosing a different example.

### 4. Evidence Fit

Each section should earn its place.

Check:

- Does the evidence prove the section claim?
- Is the example real and grounded?
- Is there enough context for the reader to understand why it matters?
- Are claims linked, bounded, or softened where needed?

Fix by changing the claim, finding better evidence, or removing the section.

### 5. Usefulness

The reader should leave with something more concrete than agreement.

Look for:

- A usable framework, decision rule, checklist, process, example, chart, or next step.
- Clear distinction between what happened, what Jenny learned, and what the reader can use.
- Lists or visuals that reduce cognitive load rather than decorate the post.

Fix by adding structure only where it clarifies. Do not add filler.

## Required Review Output

Return:

```markdown
Verdict: [Approve / Revise / Not genuine/authentic - send back for revision]

Top issues:
- [Issue] -> [section/paragraph] -> [specific fix]

Cuts to make:
- [Repeated, vague, or inflated content to remove]

Evidence gaps:
- [Missing human example, framework, data, link, or artifact]

Voice fixes:
- [Phrase] -> [replacement direction]

Approval conditions:
- [What must change before this can ship]
```

## Hard Rejection Triggers

Immediately mark `Not genuine/authentic - send back for revision` if the draft:

- Opens with a generic setup instead of a real moment, tension, or observation.
- Contains invented specifics or unsupported confident claims.
- Repeats the same example or claim across multiple sections.
- Uses AI-ish filler to sound complete.
- Adds length in response to review without adding stronger evidence or clearer structure.
- Could plausibly be published by anyone with only the name changed.

