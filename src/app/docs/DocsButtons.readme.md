# DocsButtons

Source: `src/app/docs/DocsButtons.tsx`.

## Role

Documentation page for button variants (Krowe + shadcn).

## Route

Lazy-loaded under **`/docs/buttons`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsButtons } from '@/app/docs/DocsButtons';

export function ColorsDocRoute() {
  return <DocsButtons />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
