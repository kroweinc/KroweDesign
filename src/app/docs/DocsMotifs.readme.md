# DocsMotifs

Source: `src/app/docs/DocsMotifs.tsx`.

## Role

Documentation page for recurring visual motifs.

## Route

Lazy-loaded under **`/docs/motifs`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsMotifs } from '@/app/docs/DocsMotifs';

export function ColorsDocRoute() {
  return <DocsMotifs />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
