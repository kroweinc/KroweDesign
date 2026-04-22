# Dialog

Source: `src/app/components/ui/dialog.tsx` (shadcn/ui-style primitives).

## Exports

- `Dialog`
- `DialogClose`
- `DialogContent`
- `DialogDescription`
- `DialogFooter`
- `DialogHeader`
- `DialogOverlay`
- `DialogPortal`
- `DialogTitle`
- `DialogTrigger`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/dialog`).

```tsx
import { Dialog, DialogClose, DialogContent, DialogDescription } from '@/app/components/ui/dialog';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/dialog) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



