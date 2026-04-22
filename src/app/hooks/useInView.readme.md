# useInView

Source: `src/app/hooks/useInView.ts`.

IntersectionObserver wrapper: when the element crosses the threshold, `inView` becomes `true` and the observer **disconnects** (one-shot).

## API

`useInView(threshold = 0.15)` → `{ ref, inView }`

Attach `ref` to a DOM element. `ref` is typed loosely (`React.RefObject<any>` in source).

## Example

```tsx
import { useInView } from '@/app/hooks/useInView';

function Reveal() {
  const { ref, inView } = useInView(0.2);
  return <div ref={ref}>{inView ? <HeavyChild /> : null}</div>;
}
```

