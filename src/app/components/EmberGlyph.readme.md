# EmberGlyph

Source: `src/app/components/EmberGlyph.tsx`.

Decorative ember/orb SVG (uses `aria-hidden`). Prefer **BrandMark** for the official logo in chrome.

## Props

- `size?: number` — default `16` (pixel width/height).
- `animated?: boolean` — subtle breathe animation on inner circles.

## Example

```tsx
import { EmberGlyph } from '@/app/components/EmberGlyph';

<EmberGlyph size={24} animated />
```

