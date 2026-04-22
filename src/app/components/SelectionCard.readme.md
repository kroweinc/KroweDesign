# SelectionCard

Source: `src/app/components/SelectionCard.tsx`.

Uses `useMouseTilt` from `@/app/hooks/useMouseTilt` for subtle 3D tilt.

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title`, `description` | `string` | Card copy |
| `illustration?` | `ReactNode` | Optional icon or art above title |
| `selected?` | `boolean` | Selected styling + check badge |
| `disabled?` | `boolean` | |
| `onClick?` | `() => void` | |

Use in a grid for single- or multi-select flows; parent tracks `selected`.

## Example

```tsx
import { SelectionCard } from '@/app/components/SelectionCard';

<SelectionCard
  title="SaaS"
  description="Subscription software"
  selected={id === 'saas'}
  onClick={() => setId('saas')}
  illustration={<Icon />}
/>
```

