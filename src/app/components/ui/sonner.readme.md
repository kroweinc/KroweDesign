# Sonner

Source: `src/app/components/ui/sonner.tsx` (shadcn/ui-style primitives).

## Exports

- `Toaster`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/sonner`).

```tsx
import { Toaster } from '@/app/components/ui/sonner';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/sonner) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.

Mount `<Toaster />` once near the app root, then call `toast()` from `sonner` elsewhere.


