# DocsVoice

Source: `src/app/docs/DocsVoice.tsx`.

## Role

Documentation page for product voice and tone.

## Route

Lazy-loaded under **`/docs/voice`** (see `src/app/App.tsx` routes and `src/app/docsNav.ts`).

## Usage

```tsx
import { DocsVoice } from '@/app/docs/DocsVoice';

export function ColorsDocRoute() {
  return <DocsVoice />;
}
```

No external props — the component composes `DocPageHeader`, `DocSection`, and token demos internally.
