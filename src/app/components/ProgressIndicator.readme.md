# ProgressIndicator

Source: `src/app/components/ProgressIndicator.tsx`.

## Props

| Prop | Type | Default |
|------|------|---------|
| `currentStep` | `number` | 1-based step index |
| `totalSteps` | `number` | |
| `sectionName` | `string` | Center label (animates on change) |
| `estimatedTimeRemaining?` | `string` | default `~3 min` |
| `completedSteps?` | `{ step: number; name: string }[]` | Enables hover tooltips on completed dots |

## Example

```tsx
import { ProgressIndicator } from '@/app/components/ProgressIndicator';

<ProgressIndicator
  currentStep={2}
  totalSteps={5}
  sectionName="Target customer"
  completedSteps={[{ step: 1, name: 'Business idea' }]}
/>
```

