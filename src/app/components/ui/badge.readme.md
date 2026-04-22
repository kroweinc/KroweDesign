# Badge

Source: `src/app/components/ui/badge.tsx` (shadcn/ui-style primitives).

## Exports

- `Badge`
- `badgeVariants`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/badge`).

```tsx
import { Badge, badgeVariants } from '@/app/components/ui/badge';
```

## Usage

Render `Badge` as a **span** (or set `asChild` to merge classes onto a child). Use `variant` for color roles (`default`, `secondary`, `destructive`, `outline`). Use `badgeVariants` if you need the same styles on a custom element.

See [shadcn Badge](https://ui.shadcn.com/docs/components/badge).

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



