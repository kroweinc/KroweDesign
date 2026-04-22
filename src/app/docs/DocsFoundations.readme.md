# DocsFoundations

Source: `src/app/docs/DocsFoundations.tsx`.

## Role

Foundations overview / hub doc page.

## Route

Lazy-loaded under **`/docs/foundations`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsFoundations } from '@/app/docs/DocsFoundations';

export function ColorsDocRoute() {
  return <DocsFoundations />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
