# DocsColors

Source: `src/app/docs/DocsColors.tsx`.

## Role

Documentation page for color tokens and usage.

## Route

Lazy-loaded under **`/docs/colors`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsColors } from '@/app/docs/DocsColors';

export function ColorsDocRoute() {
  return <DocsColors />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
