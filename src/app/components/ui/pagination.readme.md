# Pagination

Source: `src/app/components/ui/pagination.tsx` (shadcn/ui-style primitives).

## Exports

- `Pagination`
- `PaginationContent`
- `PaginationLink`
- `PaginationItem`
- `PaginationPrevious`
- `PaginationNext`
- `PaginationEllipsis`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/pagination`).

```tsx
import { Pagination, PaginationContent, PaginationLink, PaginationItem } from '@/app/components/ui/pagination';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/pagination) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



