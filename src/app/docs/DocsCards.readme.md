# DocsCards

Source: `src/app/docs/DocsCards.tsx`.

## Role

Documentation page for card patterns and surfaces.

## Route

Lazy-loaded under **`/docs/cards`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsCards } from '@/app/docs/DocsCards';

export function ColorsDocRoute() {
  return <DocsCards />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
