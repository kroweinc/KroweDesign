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

/** Bordered scroll region for embedding live library patterns in docs. */
export function DocLivePreview({
  label,
  children,
  maxHeight = 'min(78vh, 640px)',
  minHeight,
}: {
  label?: string;
  children: ReactNode;
  maxHeight?: string;
  minHeight?: string | number;
}) {
  return (
    <div style={{ marginTop: '1.25rem', marginBottom: '2rem' }}>
      {label ? (
        <p
          style={{
            ...docMuted,
            marginBottom: '0.65rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--type-caption-size)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          {label}
        </p>
      ) : null}
      <div
        style={{
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          background: 'var(--surface-subtle)',
          overflow: 'auto',
          maxHeight,
          ...(minHeight !== undefined ? { minHeight } : {}),
          /* Creates a containing block so pattern `position: fixed` footers stay inside the preview */
          transform: 'translateZ(0)',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Compact code sample — library reference, not full source files. */
export function DocSnippet({ title, code }: { title?: string; code: string }) {
  return (
    <figure style={{ margin: '0.75rem 0 1.75rem' }}>
      {title ? (
        <figcaption
          style={{
            ...docMuted,
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-caption-size)',
            fontWeight: 600,
            color: 'var(--foreground)',
          }}
        >
          {title}
        </figcaption>
      ) : null}
      <pre
        style={{
          margin: 0,
          padding: '1rem 1.15rem',
          background: 'oklch(22% 0.02 60)',
          color: 'oklch(96% 0.01 60)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid color-mix(in oklch, var(--border) 70%, oklch(22% 0.02 60))',
          overflow: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.55,
        }}
      >
        <code style={{ fontFamily: 'inherit' }}>{code.trim()}</code>
      </pre>
    </figure>
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

/** Width cap for /docs/* page body — horizontal padding comes from `DocsLayout`. */
export const docsPageWrap: CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: 0,
};

export type DocsHeroChip = { k: string; v: string };

/** Editorial intro + token strip — shared visual language across docs tabs. */
export function DocsHeroBento({
  eyebrow,
  title,
  description,
  chips,
}: {
  eyebrow: string;
  title: string;
  description: string;
  chips: DocsHeroChip[];
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '1.25rem',
        marginBottom: '2.75rem',
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          position: 'relative',
          padding: '1.6rem 1.75rem',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border)',
          background:
            'linear-gradient(118deg, var(--background) 0%, color-mix(in oklch, var(--primary) 5%, var(--background)) 45%, var(--surface-subtle) 100%)',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-35%',
            right: '-12%',
            width: 'min(52%, 200px)',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in oklch, var(--primary) 20%, transparent) 0%, transparent 72%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-28%',
            left: '-6%',
            width: '42%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in oklch, var(--primary-accent) 14%, transparent) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--type-caption-family)',
            fontSize: 'var(--type-caption-size)',
            fontWeight: 600,
            letterSpacing: 'var(--type-caption-upper-letter-spacing)',
            textTransform: 'var(--type-caption-upper-transform)',
            color: 'var(--primary)',
            margin: '0 0 0.65rem',
            position: 'relative',
          }}
        >
          {eyebrow}
        </p>
        <h2
          style={{
            fontFamily: 'var(--type-display-m-family)',
            fontSize: 'clamp(1.35rem, 2.8vw, 1.85rem)',
            lineHeight: 'var(--type-display-m-line-height)',
            letterSpacing: 'var(--type-display-m-letter-spacing)',
            fontWeight: 'var(--type-display-m-weight)',
            color: 'var(--foreground)',
            margin: '0 0 0.75rem',
            maxWidth: '26ch',
            position: 'relative',
          }}
        >
          {title}
        </h2>
        <p style={{ ...docMuted, maxWidth: '56ch', margin: 0, position: 'relative' }}>{description}</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
          justifyContent: 'center',
        }}
      >
        {chips.map((c) => (
          <div
            key={c.k}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '1rem',
              padding: '0.85rem 1rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              background: 'var(--background)',
              boxShadow: 'var(--shadow-1)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-caption-size)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--muted-foreground)',
              }}
            >
              {c.k}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--foreground)',
                textAlign: 'right',
                maxWidth: '58%',
                wordBreak: 'break-word',
              }}
            >
              {c.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export type DocsSegmentedOption<T extends string> = { value: T; label: string };

export function DocsSegmented<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
}: {
  value: T;
  onChange: (next: T) => void;
  options: readonly DocsSegmentedOption<T>[];
  ariaLabel: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '0.35rem',
        padding: '0.35rem',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border)',
        background: 'var(--background)',
        boxShadow: 'var(--shadow-1)',
      }}
    >
      {options.map((opt) => {
        const on = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(opt.value)}
            style={{
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-caption-size)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              color: on ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
              background: on
                ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)'
                : 'transparent',
              boxShadow: on ? 'var(--shadow-2)' : 'none',
              transition:
                'background var(--duration-fast) var(--ease-out-smooth), color var(--duration-fast) var(--ease-out-smooth), box-shadow var(--duration-fast) var(--ease-out-smooth)',
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
