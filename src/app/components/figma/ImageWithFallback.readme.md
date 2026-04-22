# ImageWithFallback

Source: `src/app/components/figma/ImageWithFallback.tsx`.

Drop-in `<img>` replacement: on `onError`, swaps to an inline SVG placeholder inside a bordered box.

## Props

Extends `React.ImgHTMLAttributes<HTMLImageElement>` — pass `src`, `alt`, `className`, `style`, etc.

## Example

```tsx
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

<ImageWithFallback src={url} alt="Product" className="rounded-lg w-full" />
```

