# Breadcrumb

Source: `src/app/components/ui/breadcrumb.tsx` (shadcn/ui-style primitives).

## Exports

- `Breadcrumb`
- `BreadcrumbList`
- `BreadcrumbItem`
- `BreadcrumbLink`
- `BreadcrumbPage`
- `BreadcrumbSeparator`
- `BreadcrumbEllipsis`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/breadcrumb`).

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from '@/app/components/ui/breadcrumb';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/breadcrumb) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.



