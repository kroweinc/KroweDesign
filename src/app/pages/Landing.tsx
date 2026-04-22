import { Button } from '../components/Button';
import { ArrowRightIcon } from 'lucide-react';

export function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background:
            'linear-gradient(135deg, #fff5f0 0%, #fff9f5 25%, #fffbf8 50%, #fef5ec 75%, #fef0e5 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Subtle blueprint grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--blueprint-grid)',
            backgroundSize: 'var(--blueprint-grid-size)',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Ember glyph */}
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <EmberGlyph size={48} />
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--type-display-xl-family)',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 'var(--type-display-xl-line-height)',
              letterSpacing: 'var(--type-display-xl-letter-spacing)',
              fontWeight: 'var(--type-display-xl-weight)',
              color: 'var(--foreground)',
              marginBottom: '1.5rem',
            }}
          >
            Your idea deserves a real gut-check.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--type-body-l-family)',
              fontSize: 'clamp(1rem, 3vw, 1.125rem)',
              lineHeight: 'var(--type-body-l-line-height)',
              color: 'var(--muted-foreground)',
              maxWidth: '600px',
              margin: '0 auto 3rem',
            }}
          >
            Answer ten questions. Get a no-nonsense validation report - market size,
            competitors, MVP cost, and a verdict: Proceed, Refine, Pivot, or Rethink.
          </p>

          {/* CTA */}
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRightIcon size={20} />}
            onClick={() => (window.location.href = '#signup')}
          >
            Start validating
          </Button>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'var(--type-caption-family)',
              fontSize: 'var(--type-caption-size)',
              color: 'var(--muted-foreground)',
              marginTop: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Takes ~10 minutes
          </p>
        </div>
      </section>

      {/* Below fold - Report previews */}
      <section
        style={{
          padding: '6rem 2rem',
          background: 'var(--background)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section intro */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontFamily: 'var(--type-display-m-family)',
                fontSize: 'clamp(1.75rem, 5vw, 2.25rem)',
                lineHeight: 'var(--type-display-m-line-height)',
                letterSpacing: 'var(--type-display-m-letter-spacing)',
                fontWeight: 'var(--type-display-m-weight)',
                color: 'var(--foreground)',
                marginBottom: '1rem',
              }}
            >
              What you'll get
            </h2>
            <p
              style={{
                fontFamily: 'var(--type-body-l-family)',
                fontSize: 'var(--type-body-l-size)',
                lineHeight: 'var(--type-body-l-line-height)',
                color: 'var(--muted-foreground)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              A clear-eyed look at your market, competition, and what it'll take to build
              - from someone who's done it before.
            </p>
          </div>

          {/* Three preview cards */}
          <div
            className="grid md:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}
          >
            <PreviewCard
              title="Market reality"
              description="See your TAM, SAM, and SOM - no inflated numbers, just what's actually addressable."
              visual={<MarketPreview />}
            />
            <PreviewCard
              title="Where you fit"
              description="Your positioning against real competitors. We'll tell you if the gap you see is real or wishful thinking."
              visual={<CompetitorPreview />}
            />
            <PreviewCard
              title="The verdict"
              description="Proceed, Refine, Pivot, or Rethink. One sentence that tells you what to do next."
              visual={<VerdictPreview />}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '3rem 2rem',
          borderTop: '1px solid var(--border)',
          background: 'var(--surface-subtle)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <EmberGlyph size={16} />
            <span
              style={{
                fontFamily: 'var(--type-display-m-family)',
                fontSize: '1.25rem',
                color: 'var(--foreground)',
              }}
            >
              Krowe
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '2rem',
              fontFamily: 'var(--type-body-s-family)',
              fontSize: 'var(--type-body-s-size)',
            }}
          >
            <a
              href="#"
              style={{
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                transition: 'color var(--duration-fast) var(--ease-out-smooth)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--muted-foreground)')
              }
            >
              How it works
            </a>
            <a
              href="#"
              style={{
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                transition: 'color var(--duration-fast) var(--ease-out-smooth)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--muted-foreground)')
              }
            >
              Pricing
            </a>
            <a
              href="#"
              style={{
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                transition: 'color var(--duration-fast) var(--ease-out-smooth)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--muted-foreground)')
              }
            >
              Sign in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PreviewCard({
  title,
  description,
  visual,
}: {
  title: string;
  description: string;
  visual: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '4/3',
          background: 'var(--background)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border)',
        }}
      >
        {visual}
      </div>

      <div>
        <h3
          style={{
            fontFamily: 'var(--type-h3-family)',
            fontSize: 'var(--type-h3-size)',
            fontWeight: 'var(--type-h3-weight)',
            color: 'var(--foreground)',
            marginBottom: '0.5rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--type-body-family)',
            fontSize: 'var(--type-body-size)',
            lineHeight: 'var(--type-body-line-height)',
            color: 'var(--muted-foreground)',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function MarketPreview() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="color-mix(in oklch, var(--primary) 20%, transparent)"
        strokeWidth="12"
      />
      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="color-mix(in oklch, var(--primary) 40%, transparent)"
        strokeWidth="12"
      />
      <circle cx="60" cy="60" r="20" fill="var(--primary)" opacity="0.6" />
    </svg>
  );
}

function CompetitorPreview() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100">
      <line x1="20" y1="80" x2="100" y2="80" stroke="var(--border)" strokeWidth="2" />
      <line x1="20" y1="20" x2="20" y2="80" stroke="var(--border)" strokeWidth="2" />
      <circle cx="40" cy="60" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="60" cy="40" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="80" cy="50" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="50" cy="70" r="6" fill="var(--primary)" />
    </svg>
  );
}

function VerdictPreview() {
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <div
        style={{
          fontFamily: 'var(--type-display-m-family)',
          fontSize: '2rem',
          color: 'var(--foreground)',
          marginBottom: '0.5rem',
        }}
      >
        Proceed
      </div>
      <div
        style={{
          display: 'inline-flex',
          padding: '0.25rem 0.75rem',
          background: 'var(--success-soft)',
          border: '1px solid var(--success)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--type-caption-size)',
          fontWeight: 600,
          color: 'var(--success)',
        }}
      >
        Strong signal
      </div>
    </div>
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
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
