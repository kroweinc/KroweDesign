# docsNav

Source: `src/app/docsNav.ts`.

## Purpose

Single source for **documentation sidebar** labels and paths (`DOCS_NAV_GROUPS`, `DOCS_NAV_ITEMS`), plus helpers to resolve the current slug from the URL.

## API

| Export | Description |
|--------|-------------|
| `DOCS_NAV_GROUPS` | `DocsNavGroup[]` — grouped `{ path, label }` items |
| `DOCS_NAV_ITEMS` | Flattened list of all items |
| `getDocsSlugFromPathname(pathname)` | Returns slug after `/docs/` or `null` |
| `getDocsNavLabelForSlug(slug)` | Human label for sidebar / breadcrumb |

## Usage

Import in `DocsLayout`, `DocsFoundations`, or any deep link that needs doc route metadata.

```ts
import { DOCS_NAV_GROUPS, getDocsSlugFromPathname } from '@/app/docsNav';
```

When adding a doc page, register its lazy route in `App.tsx` and add an entry here so the sidebar stays in sync.
