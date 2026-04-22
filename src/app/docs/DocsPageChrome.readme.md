# DocsPageChrome

Source: `src/app/docs/DocsPageChrome.tsx`.

Shared **documentation layout primitives** for `/docs/*` pages (headers, sections, callouts, live previews, hero bento).

## Exports

### `DocPageHeader`

Props: `title: string`, `description: string`. Top-of-page H1 + lead paragraph.

### `DocSection`

Props: `id: string` (for in-page anchors), `title: string`, `children`. Renders H2 with ember mark + body.

### `docP`, `docMuted`

`CSSProperties` objects for consistent body and muted copy.

### `DocCallout`

Props: `title: string`, `children`. Highlighted callout panel.

### `DocCardGrid`

Props: `children`. Responsive auto-fill grid for cards.

### `DocLivePreview`

Props: `label?`, `children`, `maxHeight?` (default `min(78vh, 640px)`), `minHeight?`. Bordered scroll region for embedding full patterns; uses `transform: translateZ(0)` so `position: fixed` inside patterns is contained.

### `DocSnippet`

Props: `title?`, `code: string`. Dark code block.

### `DocInfoCard`

Props: `title`, `description`, `code?`. Reference card with optional monospace snippet.

### `docsPageWrap`

`CSSProperties` — max width wrapper for doc body (padding comes from `DocsLayout`).

### `DocsHeroBento`

Props: `eyebrow`, `title`, `description`, `chips: { k: string; v: string }[]`. Editorial hero + token strip.

### `DocsSegmented<T>`

Controlled segmented control: `value: T`, `onChange: (next: T) => void`, `options`, `ariaLabel`. Renders `role="tablist"` with tab buttons.

## Import

```tsx
import {
  DocPageHeader,
  DocSection,
  docP,
  DocLivePreview,
  DocsHeroBento,
} from '@/app/docs/DocsPageChrome';
```
