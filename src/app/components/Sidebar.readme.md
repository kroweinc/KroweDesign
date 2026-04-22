# Sidebar (Krowe app shell)

Source: `src/app/components/Sidebar.tsx`.

## Props

| Prop | Type | Default |
|------|------|---------|
| `activeItem` | `string` | `'home'` — matches internal ids: `home`, `ideas`, `reports`, `resources`, `settings`, `help` |
| `onNavigate` | `(id: string) => void` | optional |
| `userName` | `string` | `'Alex'` |
| `userAvatar` | `string` | optional — if omitted, shows first letter of `userName` |

## Layout notes

- Fixed `260px` width on desktop; includes mobile drawer + menu button (`md:` breakpoint).
- Main content should offset with `marginLeft: '260px'` (see patterns) or your own grid.

## Example

```tsx
import { Sidebar } from '@/app/components/Sidebar';

<Sidebar activeItem={nav} onNavigate={setNav} userName="Alex Chen" />
```

