# Input, Textarea, Checkbox, Toggle (Krowe)

Source: `src/app/components/Input.tsx` — four related exports.

---

## Input

Labeled text field with optional leading `icon`, validation `state`, and `helperText`.

**Props (extends `InputHTMLAttributes`):** `label?`, `helperText?`, `state?: 'default' | 'error' | 'success'`, `icon?`.

```tsx
import { Input } from '@/app/components/Input';

<Input label="Email" name="email" type="email" state="error" helperText="Invalid email" />
```

---

## Textarea

Multi-line field with optional `showSaveIndicator` (shows “Saved” after edits).

**Props:** `label?`, `helperText?`, `state?`, `showSaveIndicator?` plus standard textarea attributes.

---

## Checkbox

Native checkbox with required `label` string.

```tsx
import { Checkbox } from '@/app/components/Input';

<Checkbox label="I agree" name="agree" />
```

---

## Toggle

Custom switch (not the Radix `Switch`). Controlled: `checked`, `onChange(boolean)`, `label`, optional `disabled`.

```tsx
import { Toggle } from '@/app/components/Input';

<Toggle label="Notifications" checked={on} onChange={setOn} />
```

