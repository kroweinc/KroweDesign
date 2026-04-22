import type { CSSProperties } from 'react';

/** Served from `public/brand/` — keep in sync with repo assets. */
export const KROWE_MARK_SRC = '/brand/krowe-mark.jpg';

type BrandMarkProps = {
  size?: number;
  /** Subtle breathing animation (respects reduced motion via global CSS). */
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
  /** When true (default), alt is empty and role is presentation — use next to visible “Krowe” text. */
  decorative?: boolean;
};

/**
 * Raster Krowe mark for headers, sidebars, and marketing chrome.
 * Prefer this over EmberGlyph where the official logo should appear.
 */
export function BrandMark({
  size = 24,
  animated = false,
  className,
  style,
  decorative = true,
}: BrandMarkProps) {
  const img = (
    <img
      src={KROWE_MARK_SRC}
      alt={decorative ? '' : 'Krowe'}
      {...(decorative ? { 'aria-hidden': true as const } : {})}
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        borderRadius: size >= 44 ? 'var(--radius-lg)' : size >= 28 ? 'var(--radius-md)' : 'var(--radius-sm)',
        boxShadow: size >= 36 ? 'var(--shadow-1)' : undefined,
        background: size >= 24 ? 'color-mix(in oklch, var(--background) 92%, transparent)' : undefined,
        ...style,
      }}
      decoding="async"
    />
  );

  if (animated) {
    return (
      <span className="brand-mark-animated" style={{ display: 'inline-flex', lineHeight: 0, flexShrink: 0 }}>
        {img}
      </span>
    );
  }

  return <span style={{ display: 'inline-flex', lineHeight: 0, flexShrink: 0 }}>{img}</span>;
}
