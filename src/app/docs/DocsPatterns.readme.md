# DocsPatterns

Source: `src/app/docs/DocsPatterns.tsx`.

## Role

Documentation page for full-screen layout patterns.

## Route

Lazy-loaded under **`/docs/patterns`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsPatterns } from '@/app/docs/DocsPatterns';

export function ColorsDocRoute() {
  return <DocsPatterns />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
