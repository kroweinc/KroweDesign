# DocsSpace

Source: `src/app/docs/DocsSpace.tsx`.

## Role

Documentation page for spacing, radius, and elevation tokens.

## Route

Lazy-loaded under **`/docs/space`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsSpace } from '@/app/docs/DocsSpace';

export function ColorsDocRoute() {
  return <DocsSpace />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
