# useMouseTilt

Source: `src/app/hooks/useMouseTilt.ts`.

Returns `{ ref, style, onMouseMove, onMouseLeave }` for attaching to a wrapper **div** around a tilted surface.

- `maxDegrees` (default `2`): maximum rotateX/Y from pointer position vs element center.
- `style` includes `perspective(700px) rotateX/Y`.

## Example

```tsx
import { useMouseTilt } from '@/app/hooks/useMouseTilt';

function Card() {
  const { ref, style, onMouseMove, onMouseLeave } = useMouseTilt(3);
  return (
    <div ref={ref} style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      …
    </div>
  );
}
```

