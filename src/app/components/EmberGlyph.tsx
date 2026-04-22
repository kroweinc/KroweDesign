interface EmberGlyphProps {
  size?: number;
  animated?: boolean;
}

export function EmberGlyph({ size = 16, animated = false }: EmberGlyphProps) {
  if (animated) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, overflow: 'visible' }}
        aria-hidden
      >
        <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.12" />
        <circle
          cx="8"
          cy="8"
          r="4"
          fill="var(--primary)"
          opacity="0.35"
          style={{
            transformOrigin: '8px 8px',
            animation: 'breathe 3.5s ease-in-out infinite',
          }}
        />
        <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
        <circle
          cx="9"
          cy="7"
          r="1"
          fill="var(--primary-accent)"
          style={{
            transformOrigin: '8px 8px',
            animation: 'breathe 3.5s ease-in-out infinite 0.4s',
          }}
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-hidden
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
