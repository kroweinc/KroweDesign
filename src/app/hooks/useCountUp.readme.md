# useCountUp

Source: `src/app/hooks/useCountUp.ts`.

Animates from 0 toward `target` over `duration` ms with ease-out quart easing, while `active` is true.

## API

`useCountUp(target: number, duration: number, active: boolean): number`

Re-runs when `target`, `duration`, or `active` changes.

## Example

```tsx
import { useCountUp } from '@/app/hooks/useCountUp';

const n = useCountUp(99, 1200, inView);
```

