# Form

Source: `src/app/components/ui/form.tsx` (shadcn/ui-style primitives).

## Exports

- `useFormField`
- `Form`
- `FormItem`
- `FormLabel`
- `FormControl`
- `FormDescription`
- `FormMessage`
- `FormField`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/form`).

```tsx
import { useFormField, Form, FormItem, FormLabel } from '@/app/components/ui/form';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/form) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.

Designed for **react-hook-form**. Wrap fields with `FormField` and use `FormItem` / `FormLabel` / `FormControl` / `FormMessage`.


