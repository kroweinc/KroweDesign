# foundationsBlocks

Source: `src/app/docs/foundations/foundationsBlocks.tsx`.

Small **presentational demos** for foundations pages (radius, shadow, motion, color, type, spacing).

## Style tokens (objects)

- `bodyStyle`, `bodySmallStyle`, `h3Style`, `h4Style`, `captionStyle`, `captionUpperStyle` — inline style objects for doc typography.

## Components

| Export | Props (summary) |
|--------|-------------------|
| `RadiusDemo` | `name`, `value` (CSS), `size` (px preview) |
| `ShadowDemo` | `shadowVar`, `label`, `description` |
| `ButtonGlowDemo` | none — static glow sample |
| `DurationDemo` | `name`, `value`, `usage` |
| `BezierCurveDemo` | none — SVG ease visualization |
| `EmberGlyphScaled` | `size: number` |
| `MotifDosDonts` | `dos: string[]`, `donts: string[]` |
| `ColorGroup` | `title`, `colors: [...]` |
| `ColorSwatch` | `token`, `hex`, `oklch`, `name`, `usage` |
| `TypeSample` | `label`, `text`, `family`, `size`, `weight`, `lineHeight`, `letterSpacing`, `usage`, `style` (`CSSProperties` for the sample line) |
| `SpacingToken` | `name`, `value`, `token` |

Import from `@/app/docs/foundations/foundationsBlocks` when building custom doc sections.
