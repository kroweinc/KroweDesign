# Button (Krowe)

Source: `src/app/components/Button.tsx`.

## When to use

Product-styled CTA and actions (inline styles + design tokens). Prefer this over `@/app/components/ui/button` when you want the Krowe gradient, orbit spinner, and shimmer.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height and padding |
| `loading` | `boolean` | `false` | Shows spinner; disables click |
| `icon` | `ReactNode` | — | Optional leading icon |
| `children` | `ReactNode` | required | Label |
| ... | `ButtonHTMLAttributes` | — | Native `<button>` props (`onClick`, `type`, etc.) |

## Example

```tsx
import { Button } from '@/app/components/Button';
import { PlusIcon } from 'lucide-react';

<Button variant="primary" size="md" icon={<PlusIcon size={18} />} onClick={() => {}}>
  Create
</Button>
```

