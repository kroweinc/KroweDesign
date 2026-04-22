# Sheet

Source: `src/app/components/ui/sheet.tsx` (shadcn/ui-style primitives).

## Exports

- `Sheet`
- `SheetTrigger`
- `SheetClose`
- `SheetContent`
- `SheetHeader`
- `SheetFooter`
- `SheetTitle`
- `SheetDescription`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/sheet`).

```tsx
import { Sheet, SheetTrigger, SheetClose, SheetContent } from '@/app/components/ui/sheet';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/sheet) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



