# DocsAccessibility

Source: `src/app/docs/DocsAccessibility.tsx`.

## Role

Documentation page for accessibility guidance.

## Route

Lazy-loaded under **`/docs/accessibility`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsAccessibility } from '@/app/docs/DocsAccessibility';

export function ColorsDocRoute() {
  return <DocsAccessibility />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
