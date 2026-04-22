# DocsAnimations

Source: `src/app/docs/DocsAnimations.tsx`.

## Role

Documentation page for motion, easing, and entrance patterns.

## Route

Lazy-loaded under **`/docs/animations`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsAnimations } from '@/app/docs/DocsAnimations';

export function ColorsDocRoute() {
  return <DocsAnimations />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
