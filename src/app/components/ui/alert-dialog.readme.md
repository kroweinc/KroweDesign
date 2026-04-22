# Alert Dialog

Source: `src/app/components/ui/alert dialog.tsx` (shadcn/ui-style primitives).

## Exports

- `AlertDialog`
- `AlertDialogPortal`
- `AlertDialogOverlay`
- `AlertDialogTrigger`
- `AlertDialogContent`
- `AlertDialogHeader`
- `AlertDialogFooter`
- `AlertDialogTitle`
- `AlertDialogDescription`
- `AlertDialogAction`
- `AlertDialogCancel`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/alert dialog`).

```tsx
import { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger } from '@/app/components/ui/alert dialog';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/alertdialog) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



