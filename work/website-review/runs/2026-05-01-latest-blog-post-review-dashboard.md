# Website Review Tracking Dashboard

## Goal

- Publish target: aggregated overall score `>= 8.00 / 10`
- Required gate: no unresolved `Must` issues
- Stop rule: gains `< 0.20` for two consecutive rounds (or score stably above target)

## Round Score Table


| Round | Timestamp           | Reviewers | Clarity (25%) | Credibility (25%) | UX/Conversion (20%) | Quality (15%) | Technical (15%) | Overall (0-10) | Delta vs Prior | Must | Should | Nice | Gate Status                                    |
| ----- | ------------------- | --------- | ------------- | ----------------- | ------------------- | ------------- | --------------- | -------------- | -------------- | ---- | ------ | ---- | ---------------------------------------------- |
| 1     | 2026-05-01 18:07 PT | 10        | 7.83          | 8.08              | 7.49                | 7.48          | 6.96            | 7.45           | N/A            | 4    | 19     | 16   | Not ready: score < 8.00 and Must issues remain |
| 2     | 2026-05-01 18:20 PT | 10        | 8.59          | 8.67              | 8.09                | 8.52          | 8.48            | 8.50           | +1.05          | 0    | 10     | 9    | Ready: score >= 8.00 and no Must issues remain |


## Round Change Log

### Round 1

- ## Key changes implemented:
- None. Report-only run.
- ## What improved:
- N/A for first round.
- ## What regressed or stayed flat:
- Technical quality and publish polish were the lowest-scoring dimensions.
- Several reviewers flagged the same opening/hierarchy issue: the strongest proof arrives too late.
- ## Next round focus:
- Remove the duplicate sentence and stray `</p>`.
- Fix visible copy errors and caption typos.
- Tighten the oversized certification-program claim with more grounded framing.
- Pull the strongest operator thesis/proof earlier in the post.
- Rework the ending so it lands on Jenny's operating judgment instead of generic encouragement.

### Round 2

- ## Key changes implemented:
- Fixed all publish-quality errors from round 1: duplicate sentence, stray `</p>`, typo/grammar issues, and misspelled caption.
- Strengthened the certification-program proof with more concrete shipped scope.
- Rewrote one generic operations sentence into a more specific coordination/structure sentence.
- Tightened the recovery anecdote's last line so it lands more on resilience.
- ## What improved:
- The post cleared the publish gate and moved from `7.45` to `8.50`.
- Technical quality improved most after the markup/copy cleanup.
- Credibility and content quality improved after the certification example named more concrete deliverables.
- ## What regressed or stayed flat:
- The opening still gets some feedback for delaying the executive-value / role-fit signal.
- The ending still reads slightly more general than the strongest middle sections.
- The custom `Copy` control remains the only recurring technical/accessibility concern.
- ## Next round focus:
- Optional polish only: opening fit signal, ending landing point, and `Copy` block accessibility.

## Publish Readiness Checklist

- Aggregated overall score is `>= 8.00`
- No unresolved `Must` issues
- Improvement trend is stable or diminishing
- Final synthesis report saved to `work/website-review/runs/`

