# BrandMark

Source: `src/app/components/BrandMark.tsx`.

## Constants

- `KROWE_MARK_SRC` — public URL `/brand/krowe-mark.jpg` (asset lives under `public/brand/`).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Pixel width/height |
| `animated` | `boolean` | `false` | Adds `brand-mark-animated` wrapper (global CSS / reduced motion) |
| `decorative` | `boolean` | `true` | When true, empty `alt` and presentation semantics — use beside visible “Krowe” text |
| `className`, `style` | — | optional |

## Example

```tsx
import { BrandMark } from '@/app/components/BrandMark';

<BrandMark size={44} animated decorative />
```

