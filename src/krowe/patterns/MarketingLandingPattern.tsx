import { useRef } from 'react';
import { motion } from 'motion/react';
import { EmberGlyph } from '@/app/components/EmberGlyph';
import { useInView } from '@/app/hooks/useInView';
import { useCountUp } from '@/app/hooks/useCountUp';

const HEADLINE = 'Your idea deserves a real gut-check.';

/** Marketing landing composition: hero, stats strip, footer. */
export function MarketingLandingPattern() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <HeroSection />
      <StatsStrip />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const words = HEADLINE.split(' ');

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 6rem)',
        background: 'linear-gradient(135deg, #fff5f0 0%, #fff9f5 25%, #fffbf8 50%, #fef5ec 75%, #fef0e5 100%)',
        overflow: 'hidden',
        gap: '4rem',
      }}
      className="hero-section"
    >
      {/* Blueprint grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--blueprint-grid)',
          backgroundSize: 'var(--blueprint-grid-size)',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
        aria-hidden
      />

      {/* Noise texture */}
      <div
        className="noise-surface"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        aria-hidden
      />

      {/* Decorative annotation marks */}
      <svg
        style={{ position: 'absolute', top: '18%', right: '52%', opacity: 0.2, pointerEvents: 'none' }}
        width="48" height="12" viewBox="0 0 48 12" fill="none"
        aria-hidden
      >
        <path d="M2 10 Q24 2 46 10" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
      <svg
        style={{ position: 'absolute', bottom: '28%', left: '4%', opacity: 0.15, pointerEvents: 'none' }}
        width="28" height="28" viewBox="0 0 28 28" fill="none"
        aria-hidden
      >
        <rect x="2" y="2" width="24" height="24" rx="2" stroke="var(--primary)" strokeWidth="1.2" strokeDasharray="3 3" />
      </svg>

      {/* Left: Headline + CTA */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <EmberGlyph size={20} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-caption-size)',
              fontWeight: 600,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Krowe
          </span>
        </motion.div>

        <h1
          style={{
            fontFamily: 'var(--type-display-xl-family)',
            fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            fontWeight: 400,
            color: 'var(--foreground)',
            marginBottom: '1.75rem',
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{
                delay: 0.3 + i * 0.07,
                duration: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: 'inline-block', marginRight: '0.28em' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.65,
            color: 'var(--muted-foreground)',
            maxWidth: '44ch',
            marginBottom: '2.5rem',
          }}
        >
          Answer ten questions. Get a no-nonsense validation report — market size,
          competitors, MVP cost, and a verdict: Proceed, Refine, Pivot, or Rethink.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        >
          <ArrowCTA />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55, duration: 0.3 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-caption-size)',
            color: 'var(--muted-foreground)',
            marginTop: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Takes ~10 minutes
        </motion.p>
      </div>

      {/* Right: Animated report preview */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <ReportPreviewCard />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            padding-bottom: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function ArrowCTA() {
  const lineRef = useRef<SVGLineElement>(null);

  return (
    <a
      href="#signup"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '1.0625rem',
        fontWeight: 600,
        color: 'var(--primary)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => {
        if (lineRef.current) {
          lineRef.current.style.strokeDashoffset = '0';
          lineRef.current.style.transition = 'stroke-dashoffset 220ms cubic-bezier(0.16, 1, 0.3, 1)';
        }
      }}
      onMouseLeave={() => {
        if (lineRef.current) {
          lineRef.current.style.strokeDashoffset = '16';
          lineRef.current.style.transition = 'stroke-dashoffset 180ms ease-in';
        }
      }}
    >
      Start validating
      <svg width="36" height="14" viewBox="0 0 36 14" fill="none" aria-hidden>
        <line
          ref={lineRef}
          x1="0"
          y1="7"
          x2="16"
          y2="7"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="16"
          strokeDashoffset="16"
          style={{ transition: 'stroke-dashoffset 180ms ease-in' }}
        />
        <path
          d="M20 3 L29 7 L20 11"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </a>
  );
}

function ReportPreviewCard() {
  return (
    <div
      style={{
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: '0 24px 48px -12px color-mix(in oklch, var(--primary) 12%, oklch(10% 0 0) / 0.18)',
        overflow: 'hidden',
        maxWidth: '420px',
      }}
    >
      {/* Card header strip */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--surface-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <EmberGlyph size={12} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Validation Report
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted-foreground)' }}>Apr 2026</span>
      </div>

      {/* Verdict */}
      <div style={{ padding: '2rem 1.5rem 1.5rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div
          style={{
            fontFamily: 'var(--type-display-m-family)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--foreground)',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            textShadow: '0 2px 16px color-mix(in oklch, var(--primary) 18%, transparent)',
          }}
        >
          Proceed
        </div>
        <span
          style={{
            display: 'inline-flex',
            padding: '0.3rem 0.875rem',
            background: 'var(--success-soft)',
            border: '1px solid var(--success)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--success)',
          }}
        >
          Strong signal — build it
        </span>
      </div>

      {/* Mini stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
        {[
          { label: 'TAM', value: '$2.4B', mono: true },
          { label: 'MVP Cost', value: '$80k', mono: true },
          { label: 'Competitors', value: '4 found', mono: false },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              padding: '1.25rem 1rem',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: stat.mono ? 'var(--font-mono)' : 'var(--font-sans)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '0.25rem',
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsStrip() {
  const { ref, inView } = useInView(0.2);

  const tam = useCountUp(2400, 900, inView);
  const mvp = useCountUp(80, 900, inView);
  const time = useCountUp(10, 600, inView);

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 6rem)',
        background: 'var(--background)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--type-display-m-family)',
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            letterSpacing: '-0.015em',
            fontWeight: 400,
            color: 'var(--foreground)',
            marginBottom: '1rem',
          }}
        >
          What you'll get
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-l-size)',
            color: 'var(--muted-foreground)',
            maxWidth: '52ch',
            margin: '0 auto 4rem',
            lineHeight: 1.65,
          }}
        >
          A clear-eyed look at your market, competition, and what it'll take to build — from someone who's done it before.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
          className="stats-grid"
        >
          {[
            { value: `$${(tam / 1000).toFixed(1)}B`, suffix: ' avg TAM', label: 'Total addressable market sized per report' },
            { value: `~$${mvp}k`, suffix: ' avg MVP', label: 'MVP cost estimated with real cost breakdown' },
            { value: `~${time} min`, suffix: '', label: 'Average time to complete the full validation flow' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '2.5rem 2rem',
                background: 'var(--background)',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
                <span style={{ color: 'var(--primary)', fontSize: '0.7em' }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--type-body-s-size)',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: '2.5rem clamp(2rem, 6vw, 6rem)',
        borderTop: '1px solid var(--border)',
        background: 'var(--surface-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <EmberGlyph size={14} />
        <span style={{ fontFamily: 'var(--type-display-m-family)', fontSize: '1.125rem', color: 'var(--foreground)' }}>
          Krowe
        </span>
      </div>

      <nav style={{ display: 'flex', gap: '2rem' }}>
        {['How it works', 'Pricing', 'Sign in'].map((label) => (
          <a
            key={label}
            href="#"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              color: 'var(--muted-foreground)',
              textDecoration: 'none',
              transition: 'color var(--duration-fast) var(--ease-out-smooth)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
