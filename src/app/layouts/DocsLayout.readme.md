# DocsLayout

Source: `src/app/layouts/DocsLayout.tsx`.

## Purpose

Route layout for **`/docs/*`**: sticky header with `BrandMark`, search placeholder, sidebar from `DOCS_NAV_GROUPS`, breadcrumb from URL slug, `<Outlet />` for doc pages.

## Usage

Register in your router as the parent of documentation routes:

```tsx
import { DocsLayout } from '@/app/layouts/DocsLayout';

{ path: 'docs', element: <DocsLayout />, children: [...] }
```

No props. Navigation labels come from `src/app/docsNav.ts` (`DOCS_NAV_GROUPS`, helpers).

