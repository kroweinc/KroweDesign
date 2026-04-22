# EmptyState

Source: `src/app/components/EmptyState.tsx`.

## Props

| Prop | Type | Description |
|------|------|-------------|
| `message` | `string` | Centered copy |
| `actionLabel`, `onAction` | optional | Primary pill button |
| `showInput` | `boolean` | When true, shows inline form with text + “Start” |
| `inputPlaceholder` | `string` | Default `What are you thinking about?` |
| `onInputSubmit` | `(value: string) => void` | Called with trimmed input on submit |

Either use **action** mode or **input** mode (`showInput`), not both.

## Example

```tsx
import { EmptyState } from '@/app/components/EmptyState';

<EmptyState message="No items yet." actionLabel="Add item" onAction={() => {}} />
```

