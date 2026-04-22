# useTypewriter

Source: `src/app/hooks/useTypewriter.ts`.

## API

`useTypewriter(text: string, speed = 22)` → `{ displayText, isDone }`

- `speed` is interval in **ms** between characters.
- Restarts when `text` changes.

## Example

```tsx
import { useTypewriter } from '@/app/hooks/useTypewriter';

const { displayText, isDone } = useTypewriter(aiMessage, 18);
```

