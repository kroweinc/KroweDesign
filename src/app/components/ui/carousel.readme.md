# Carousel

Source: `src/app/components/ui/carousel.tsx` (shadcn/ui-style primitives).

## Exports

- `Carousel`
- `CarouselContent`
- `CarouselItem`
- `CarouselPrevious`
- `CarouselNext`
- `CarouselApi` (TypeScript type for the Embla API instance)

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/carousel`).

```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious } from '@/app/components/ui/carousel';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/carousel) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.

Use `Carousel` as the root with `CarouselContent` / `CarouselItem`; optional `CarouselPrevious` / `CarouselNext`. Access Embla via `CarouselApi` if needed.


