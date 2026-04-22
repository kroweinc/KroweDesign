# foundationSections

Source: `src/app/docs/foundations/foundationSections.tsx`.

Large **composed sections** for the Foundations doc tab (used by `DocsFoundations`).

## Exports (no props)

Each returns a fragment of sections for one pillar of the design system:

| Function | Content |
|----------|---------|
| `FoundationColorsSections` | Color ramps and guidance |
| `FoundationTypographySections` | Type scale demos |
| `FoundationSpaceSections` | Spacing and elevation |
| `FoundationMotionSections` | Durations, curves, demos |
| `FoundationMotifsSections` | Motifs dos/don'ts |

```tsx
import { FoundationColorsSections } from '@/app/docs/foundations/foundationSections';
```
