# DocsTypography

Source: `src/app/docs/DocsTypography.tsx`.

## Role

Documentation page for type scale and font tokens.

## Route

Lazy-loaded under **`/docs/typography`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsTypography } from '@/app/docs/DocsTypography';

export function ColorsDocRoute() {
  return <DocsTypography />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
