# useIsMobile

Source: `src/app/components/ui/use-mobile.ts`.

## Behavior

Returns `true` when viewport width is **below 768px**. Uses `matchMedia` and updates on resize.

## API

```tsx
import { useIsMobile } from '@/app/components/ui/use-mobile';

function Example() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileNav /> : <DesktopNav />;
}
```

Note: first client render uses `undefined` internally then coerces to boolean; for SSR-sensitive layouts, gate UI after mount if needed.

