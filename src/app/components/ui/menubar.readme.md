# Menubar

Source: `src/app/components/ui/menubar.tsx` (shadcn/ui-style primitives).

## Exports

- `Menubar`
- `MenubarPortal`
- `MenubarMenu`
- `MenubarTrigger`
- `MenubarContent`
- `MenubarGroup`
- `MenubarSeparator`
- `MenubarLabel`
- `MenubarItem`
- `MenubarShortcut`
- `MenubarCheckboxItem`
- `MenubarRadioGroup`
- `MenubarRadioItem`
- `MenubarSub`
- `MenubarSubTrigger`
- `MenubarSubContent`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/menubar`).

```tsx
import { Menubar, MenubarPortal, MenubarMenu, MenubarTrigger } from '@/app/components/ui/menubar';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/menubar) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



