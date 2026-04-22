# animationDemos

Source: `src/app/docs/animationDemos.tsx`.

## `KROWE_EASE`

Bezier tuple `[0.16, 1, 0.3, 1]` aligned with `--ease-out-smooth` — pass to Motion `transition.ease`.

## Demo components (no props)

| Export | Purpose |
|--------|---------|
| `MarketingHeadlineEntranceDemo` | Marketing hero headline clip-path reveal (+ reduced-motion fallback) |
| `OnboardingQuestionEntranceDemo` | Onboarding-style question entrance |
| `SupportingLineEntranceDemo` | Supporting line / subcopy motion |

Embed inside `DocLivePreview` on the Animations doc page. Each demo includes a **Replay** control.
