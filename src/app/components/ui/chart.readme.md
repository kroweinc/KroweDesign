# Chart

Source: `src/app/components/ui/chart.tsx` (shadcn/ui-style primitives).

## Exports

- `ChartContainer`
- `ChartTooltip`
- `ChartTooltipContent`
- `ChartLegend`
- `ChartLegendContent`
- `ChartStyle`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/chart`).

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend } from '@/app/components/ui/chart';
```

## Usage

Wrap **Recharts** charts in `ChartContainer` and pass a `ChartConfig` object for CSS variables and labels. Use `ChartTooltip` / `ChartTooltipContent` and `ChartLegend` / `ChartLegendContent` for themed overlays. See [shadcn Charts](https://ui.shadcn.com/docs/components/chart).

Also exports the `ChartConfig` **type** and `ChartStyle` for token wiring. Uses `cn()` from `@/app/components/ui/utils`.


