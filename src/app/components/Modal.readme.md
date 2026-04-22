# Modal

Source: `src/app/components/Modal.tsx`.

## Props

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | When false, nothing is rendered |
| `onClose` | `() => void` | Called for **Escape**, header **X**, and **backdrop** click |
| `title?` | `string` | Optional header with built-in close (X) |
| `children` | `ReactNode` | Body |
| `maxWidth?` | `string` | CSS max-width of panel (default `560px`) |

## Behavior

- Closes on **Escape**, **backdrop** click, and the header close control when `title` is set.

## Example

```tsx
import { Modal } from '@/app/components/Modal';

<Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm">
  <p>Modal body</p>
</Modal>
```

