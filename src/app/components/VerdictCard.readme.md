# VerdictCard

Source: `src/app/components/VerdictCard.tsx`.

## Props

| Prop | Type | Description |
|------|------|-------------|
| `verdict` | `'Proceed' \| 'Refine' \| 'Pivot' \| 'Rethink'` | Drives colors and semantic badge |
| `summary` | `string` | Paragraph under badge |
| `animateIn?` | `boolean` | default `true` — entrance choreography |
| `onExportPDF?`, `onAskFollowUp?` | `() => void` | Footer actions |

## Example

```tsx
import { VerdictCard } from '@/app/components/VerdictCard';

<VerdictCard verdict="Proceed" summary="Strong signal for this segment." onExportPDF={() => {}} />
```

