# DocsComponents

Source: `src/app/docs/DocsComponents.tsx`.

## Role

Documentation page for composite UI components.

## Route

Lazy-loaded under **`/docs/components`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsComponents } from '@/app/docs/DocsComponents';

export function ColorsDocRoute() {
  return <DocsComponents />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
