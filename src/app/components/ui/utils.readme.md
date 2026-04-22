# cn() utility

Source: `src/app/components/ui/utils.ts`.

## Purpose

Merges class names with **clsx** and resolves Tailwind conflicts with **tailwind-merge**.

## API

```ts
import { cn } from '@/app/components/ui/utils';

const className = cn('px-2 py-1', condition && 'bg-primary', props.className);
```

Use everywhere you compose Tailwind classes, especially on shadcn primitives.

