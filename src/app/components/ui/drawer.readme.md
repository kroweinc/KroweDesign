# Drawer

Source: `src/app/components/ui/drawer.tsx` (shadcn/ui-style primitives).

## Exports

- `Drawer`
- `DrawerPortal`
- `DrawerOverlay`
- `DrawerTrigger`
- `DrawerClose`
- `DrawerContent`
- `DrawerHeader`
- `DrawerFooter`
- `DrawerTitle`
- `DrawerDescription`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/drawer`).

```tsx
import { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger } from '@/app/components/ui/drawer';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/drawer) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



