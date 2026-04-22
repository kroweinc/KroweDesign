# IdeasBrowsePattern

Source: `src/krowe/patterns/IdeasBrowsePattern.tsx`.

## Purpose

**Ideas index** with verdict filters, table-style rows, `EmptyState`, `Sidebar`, `ContentHeader`, primary CTA.

## Usage

```tsx
import { IdeasBrowsePattern } from '@/krowe/patterns/IdeasBrowsePattern';

<IdeasBrowsePattern />
```

Swap `SAMPLE_IDEAS` for fetched data; `onNavigate` from `Sidebar` should align with your router.

