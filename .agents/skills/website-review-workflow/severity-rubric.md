# Website Review Severity + Scoring Rubric

Version: 2.0

Use this rubric for every reviewer output and for orchestration-level aggregation.

## Severity Labels (Issue Prioritization)

### Must

Use Must when the issue:

- Blocks conversion (especially contact/CTA path),
- Causes major credibility harm (misleading, implausible, or contradictory proof),
- Breaks navigation or links,
- Is a major accessibility or semantic HTML failure,
- Represents a major SEO/content structure breakdown that prevents comprehension.

### Should

Use Should when the issue:

- Creates meaningful confusion or hesitation,
- Slows decision-making,
- Causes partial misunderstanding.

### Nice

Use Nice when the issue:

- Improves polish, clarity, visual consistency, or readability,
- Adds differentiation without changing the fundamental decision path.

## Reviewer Scoring Model (0-10)

Each reviewer must output a numeric score in each dimension plus a weighted overall score.

### Dimensions and weights

- `Clarity & Positioning` - 25%
- `Credibility & Proof` - 25%
- `UX & Conversion Path` - 20%
- `Visual/Content Quality` - 15%
- `Technical Quality (Semantics/SEO/Accessibility)` - 15%

### Dimension scoring scale

- `0-2` = critical failure; major blockers
- `3-4` = weak; significant issues
- `5-6` = adequate but inconsistent
- `7-8` = strong with minor gaps
- `9-10` = publish-ready excellence

### Weighted score formula

`overall_score = (clarity*0.25) + (credibility*0.25) + (ux*0.20) + (quality*0.15) + (technical*0.15)`

Round to 2 decimals.

## Reviewer output requirements

Each reviewer response must include:

- `Dimension Scores` (all 5 dimensions, 0-10 each)
- `Overall Score` (weighted, 0-10)
- `Confidence` (`High | Medium | Low`)
- `Top 3 score drivers` (brief bullets)

## Publish gate

- Target: aggregated overall score `>= 8.00 / 10`.
- No unresolved `Must` issues.
- If score is `< 8.00`, continue iteration.

