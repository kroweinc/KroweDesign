import type { CSSProperties, ReactNode } from 'react';

export function DocPageHeader({ title, description }: { title: string; description: string }) {
  return (
    <header
      style={{
        paddingBottom: '2rem',
        marginBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--type-display-m-family)',
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          lineHeight: 'var(--type-display-m-line-height)',
          letterSpacing: 'var(--type-display-m-letter-spacing)',
          fontWeight: 'var(--type-display-m-weight)',
          color: 'var(--foreground)',
          marginBottom: '1rem',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontFamily: 'var(--type-body-l-family)',
          fontSize: 'var(--type-body-l-size)',
          lineHeight: 'var(--type-body-l-line-height)',
          color: 'var(--muted-foreground)',
          maxWidth: '65ch',
        }}
      >
        {description}
      </p>
    </header>
  );
}

export function DocSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: '3.5rem' }}>
      <h2
        style={{
          fontFamily: 'var(--type-h1-family)',
          fontSize: 'var(--type-h1-size)',
          fontWeight: 'var(--type-h1-weight)',
          color: 'var(--foreground)',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <EmberMark />
        {title}
      </h2>
      {children}
    </section>
  );
}

export const docP: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-size)',
  lineHeight: 'var(--type-body-line-height)',
  color: 'var(--foreground)',
  margin: 0,
  maxWidth: '70ch',
};

export const docMuted: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-s-size)',
  lineHeight: 'var(--type-body-s-line-height)',
  color: 'var(--muted-foreground)',
  margin: 0,
};

function EmberMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}

export function DocCallout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      style={{
        marginTop: '1.5rem',
        padding: '1.25rem 1.5rem',
        background: 'color-mix(in oklch, var(--primary) 6%, var(--background))',
        border: '1px solid color-mix(in oklch, var(--primary) 22%, var(--border))',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          fontWeight: 600,
          color: 'var(--foreground)',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </div>
      <div style={{ ...docMuted, maxWidth: 'none' }}>{children}</div>
    </div>
  );
}

export function DocCardGrid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gap: '1.25rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        marginTop: '1.5rem',
      }}
    >
      {children}
    </div>
  );
}

export function DocInfoCard({ title, description, code }: { title: string; description: string; code?: string }) {
  return (
    <div
      style={{
        padding: '1.25rem',
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-1)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--type-h3-family)',
          fontSize: 'var(--type-h3-size)',
          fontWeight: 'var(--type-h3-weight)',
          color: 'var(--foreground)',
          margin: '0 0 0.5rem',
        }}
      >
        {title}
      </h3>
      <p style={{ ...docMuted, maxWidth: 'none' }}>{description}</p>
      {code && (
        <code
          style={{
            display: 'block',
            marginTop: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--type-caption-size)',
            color: 'var(--primary)',
            wordBreak: 'break-all',
          }}
        >
          {code}
        </code>
      )}
    </div>
  );
}
