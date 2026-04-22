# DataViz charts

Source: `src/app/components/DataViz.tsx`.

Three **pure presentation** SVG/stacked components. Pass formatted strings or data; they use CSS variables for colors.

---

## MarketSizeChart

Props: `tam: string`, `sam: string`, `som: string` — labels inside concentric rings.

```tsx
import { MarketSizeChart } from '@/app/components/DataViz';

<MarketSizeChart tam="$2.4B" sam="$480M" som="$24M" />
```

---

## CompetitorScatter

Props:

- `competitors: { name: string; x: number; y: number }[]` — coordinates **0–100** (percent of plot area).
- `yourIdea: { x: number; y: number }` — same scale.

```tsx
import { CompetitorScatter } from '@/app/components/DataViz';

<CompetitorScatter competitors={[{ name: 'A', x: 60, y: 70 }]} yourIdea={{ x: 45, y: 45 }} />
```

---

## MVPCostBar

Props:

- `breakdown: { label: string; amount: number; color: string }[]` — `amount` parts should sum to `total`.
- `total: number`

```tsx
import { MVPCostBar } from '@/app/components/DataViz';

<MVPCostBar
  breakdown={[{ label: 'Engineering', amount: 45000, color: 'var(--primary)' }]}
  total={45000}
/>
```

