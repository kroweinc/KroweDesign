# AIRewritePanel

Source: `src/app/components/AIRewritePanel.tsx`.

Uses `useTypewriter` for the AI column. Responsive: stacks to one column under 768px.

## Props

| Prop | Type | Description |
|------|------|-------------|
| `userAnswer` | `string` | Left column copy |
| `aiSuggestion` | `string` | Right column; revealed by typewriter |
| `onUse?`, `onEdit?`, `onKeepMine?` | `() => void` | Action bar callbacks |

## Example

```tsx
import { AIRewritePanel } from '@/app/components/AIRewritePanel';

<AIRewritePanel
  userAnswer="We help shops track stock."
  aiSuggestion="A clearer version: …"
  onUse={() => applySuggestion()}
/>
```

