# ErrorState

Source: `src/app/components/ErrorState.tsx`.

## Props

| Prop | Type | Default |
|------|------|---------|
| `message` | `string` | heading |
| `description?` | `string` | body copy |
| `onRetry?` | `() => void` | shows retry button |
| `retryLabel?` | `string` | default `Try again` |
| `type?` | `'recoverable' \| 'system'` | `'recoverable'` — affects colors (warning vs danger) |

## Example

```tsx
import { ErrorState } from '@/app/components/ErrorState';

<ErrorState message="Could not load" onRetry={() => refetch()} />
```

