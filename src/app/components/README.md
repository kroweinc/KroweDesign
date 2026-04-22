# Component library index

Each reusable module has a **co-located** guide: a file named like `ComponentName.readme.md` in the **same directory** as the source (for example `Button.readme.md` next to `Button.tsx`). Open that file for props, behavior, and import examples.

Path alias in this repo: `@` → `src/` (see `vite.config.ts`).

## Krowe app components (`src/app/components/`)

| Source | Documentation |
|--------|----------------|
| `Button.tsx` | [Button.readme.md](./Button.readme.md) |
| `Input.tsx` | [Input.readme.md](./Input.readme.md) (Input, Textarea, Checkbox, Toggle) |
| `Modal.tsx` | [Modal.readme.md](./Modal.readme.md) |
| `Sidebar.tsx` | [Sidebar.readme.md](./Sidebar.readme.md) |
| `BrandMark.tsx` | [BrandMark.readme.md](./BrandMark.readme.md) |
| `ContentHeader.tsx` | [ContentHeader.readme.md](./ContentHeader.readme.md) |
| `EmptyState.tsx` | [EmptyState.readme.md](./EmptyState.readme.md) |
| `ErrorState.tsx` | [ErrorState.readme.md](./ErrorState.readme.md) |
| `SelectionCard.tsx` | [SelectionCard.readme.md](./SelectionCard.readme.md) |
| `ProgressIndicator.tsx` | [ProgressIndicator.readme.md](./ProgressIndicator.readme.md) |
| `VerdictCard.tsx` | [VerdictCard.readme.md](./VerdictCard.readme.md) |
| `AIRewritePanel.tsx` | [AIRewritePanel.readme.md](./AIRewritePanel.readme.md) |
| `DataViz.tsx` | [DataViz.readme.md](./DataViz.readme.md) |
| `EmberGlyph.tsx` | [EmberGlyph.readme.md](./EmberGlyph.readme.md) |
| `figma/ImageWithFallback.tsx` | [figma/ImageWithFallback.readme.md](./figma/ImageWithFallback.readme.md) |

## shadcn-style UI primitives (`src/app/components/ui/`)

One `*.readme.md` per `.tsx` file (for example [ui/button.readme.md](./ui/button.readme.md)). Shared utilities: [ui/utils.readme.md](./ui/utils.readme.md), [ui/use-mobile.readme.md](./ui/use-mobile.readme.md).

**Note:** `ui/input.tsx` is the shadcn/Radix-styled control; `Input.tsx` at the parent folder is the **Krowe** branded labeled field. Choose the one that matches your screen.

## Hooks (`src/app/hooks/`)

| Source | Documentation |
|--------|----------------|
| `useMouseTilt.ts` | [useMouseTilt.readme.md](../hooks/useMouseTilt.readme.md) |
| `useTypewriter.ts` | [useTypewriter.readme.md](../hooks/useTypewriter.readme.md) |
| `useInView.ts` | [useInView.readme.md](../hooks/useInView.readme.md) |
| `useCountUp.ts` | [useCountUp.readme.md](../hooks/useCountUp.readme.md) |

## Layouts (`src/app/layouts/`)

| Source | Documentation |
|--------|----------------|
| `DocsLayout.tsx` | [DocsLayout.readme.md](../layouts/DocsLayout.readme.md) |

Navigation config for doc URLs: [docsNav.readme.md](../docsNav.readme.md) (`src/app/docsNav.ts`).

## Documentation (`src/app/docs/`)

Doc **routes** (one readme per page module): [DocsFoundations.readme.md](../docs/DocsFoundations.readme.md), [DocsColors](../docs/DocsColors.readme.md), [DocsTypography](../docs/DocsTypography.readme.md), [DocsAnimations](../docs/DocsAnimations.readme.md), [DocsSpace](../docs/DocsSpace.readme.md), [DocsMotifs](../docs/DocsMotifs.readme.md), [DocsButtons](../docs/DocsButtons.readme.md), [DocsCards](../docs/DocsCards.readme.md), [DocsComponents](../docs/DocsComponents.readme.md), [DocsPatterns](../docs/DocsPatterns.readme.md), [DocsVoice](../docs/DocsVoice.readme.md), [DocsAccessibility](../docs/DocsAccessibility.readme.md).

Doc **building blocks**: [DocsPageChrome.readme.md](../docs/DocsPageChrome.readme.md), [animationDemos.readme.md](../docs/animationDemos.readme.md), [foundations/foundationsBlocks.readme.md](../docs/foundations/foundationsBlocks.readme.md), [foundations/foundationSections.readme.md](../docs/foundations/foundationSections.readme.md).

## Page patterns (`src/krowe/patterns/`)

| Source | Documentation |
|--------|----------------|
| `MarketingLandingPattern.tsx` | [MarketingLandingPattern.readme.md](../../krowe/patterns/MarketingLandingPattern.readme.md) |
| `AuthSplitPattern.tsx` | [AuthSplitPattern.readme.md](../../krowe/patterns/AuthSplitPattern.readme.md) |
| `OnboardingFlowPattern.tsx` | [OnboardingFlowPattern.readme.md](../../krowe/patterns/OnboardingFlowPattern.readme.md) |
| `ValidationReportPattern.tsx` | [ValidationReportPattern.readme.md](../../krowe/patterns/ValidationReportPattern.readme.md) |
| `IdeasBrowsePattern.tsx` | [IdeasBrowsePattern.readme.md](../../krowe/patterns/IdeasBrowsePattern.readme.md) |
| `DashboardHomePattern.tsx` | [DashboardHomePattern.readme.md](../../krowe/patterns/DashboardHomePattern.readme.md) |
