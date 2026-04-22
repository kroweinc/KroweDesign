# ContentHeader

Source: `src/app/components/ContentHeader.tsx`.

## Props

- `title: string` — main H1.
- `breadcrumbs?: { label: string; href?: string }[]` — optional trail; last crumb without `href` renders as current page.
- `actions?: ReactNode` — right-aligned slot (buttons, etc.).

## Example

```tsx
import { ContentHeader } from '@/app/components/ContentHeader';

<ContentHeader
  title="Reports"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Reports' }]}
  actions={<button type="button">Export</button>}
/>
```

