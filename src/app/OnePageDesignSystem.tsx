import { Fragment } from 'react';
import { DocsFoundations } from './docs/DocsFoundations';
import { DocsComponents } from './docs/DocsComponents';
import { DocsSurfaces } from './docs/DocsSurfaces';
import { DocsVoice } from './docs/DocsVoice';
import { DocsAccessibility } from './docs/DocsAccessibility';

const jumpLinks: { id: string; label: string }[] = [
  { id: 'section-foundations', label: 'Foundations' },
  { id: 'section-components', label: 'Components' },
  { id: 'section-surfaces', label: 'Surfaces' },
  { id: 'section-voice', label: 'Voice' },
  { id: 'section-accessibility', label: 'Accessibility' },
];

/**
 * Single-page design system: hero + in-page sections (no sidebar).
 */
export function OnePageDesignSystem() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <HeroWithJumpLinks />

      <div className="border-t" style={{ borderColor: 'var(--border)' }}>
        <section id="section-foundations" className="scroll-mt-4">
          <DocsFoundations />
        </section>
        <section id="section-components" className="scroll-mt-4">
          <DocsComponents />
        </section>
        <section id="section-surfaces" className="scroll-mt-4">
          <DocsSurfaces />
        </section>
        <section id="section-voice" className="scroll-mt-4">
          <DocsVoice />
        </section>
        <section id="section-accessibility" className="scroll-mt-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <DocsAccessibility />
        </section>
      </div>
    </div>
  );
}

function HeroWithJumpLinks() {
  return (
    <header
      style={{
        position: 'relative',
        padding: 'clamp(3rem, 8vw, 6rem) 1.5rem',
        background:
          'linear-gradient(135deg, #fff5f0 0%, #fff9f5 25%, #fffbf8 50%, #fef5ec 75%, #fef0e5 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--blueprint-grid)',
          backgroundSize: 'var(--blueprint-grid-size)',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
        aria-hidden
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <EmberGlyph size={48} />
        </div>

        <h1
          style={{
            fontFamily: 'var(--type-display-xl-family)',
            fontSize: 'clamp(2.5rem, 7vw, 4rem)',
            lineHeight: 'var(--type-display-xl-line-height)',
            letterSpacing: 'var(--type-display-xl-letter-spacing)',
            fontWeight: 'var(--type-display-xl-weight)',
            color: 'var(--foreground)',
            marginBottom: '1rem',
          }}
        >
          The Krowe design system.
        </h1>

        <p
          style={{
            fontFamily: 'var(--type-body-l-family)',
            fontSize: 'var(--type-body-l-size)',
            lineHeight: 'var(--type-body-l-line-height)',
            color: 'var(--muted-foreground)',
            maxWidth: '32rem',
            margin: '0 auto 2rem',
          }}
        >
          Color, typography, components, and voice that make Krowe feel like Krowe — the same system behind every
          surface in the product.
        </p>

        <nav aria-label="On this page">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-caption-size)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--muted-foreground)',
              marginBottom: '0.75rem',
            }}
          >
            On this page
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem 0.5rem',
            }}
          >
            {jumpLinks.map((link, i) => (
              <Fragment key={link.id}>
                {i > 0 && (
                  <li aria-hidden style={{ color: 'var(--border)' }}>
                    ·
                  </li>
                )}
                <li>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-primary"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--type-body-s-size)',
                      color: 'var(--foreground)',
                      textDecoration: 'none',
                      borderBottom: '1px solid color-mix(in oklch, var(--primary) 35%, transparent)',
                      paddingBottom: '0.1em',
                      transition: 'color 180ms var(--ease-out-smooth), border-color 180ms var(--ease-out-smooth)',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function EmberGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
