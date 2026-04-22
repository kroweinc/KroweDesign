import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { EmberGlyph } from './components/EmberGlyph';
import { ArrowRightIcon } from 'lucide-react';

const CATEGORIES = [
  {
    index: '01',
    path: 'foundations',
    label: 'Tokens',
    description: 'Foundations hub plus focused pages for colors, type, motion, space, and motifs — the same variables Patterns consume.',
    preview: FoundationsPreview,
  },
  {
    index: '02',
    path: 'buttons',
    label: 'UI',
    description: 'Buttons, cards, and components with live examples — the same primitives wired into every pattern.',
    preview: ComponentsPreview,
  },
  {
    index: '03',
    path: 'patterns',
    label: 'Patterns',
    description: 'Ship-ready compositions — marketing, auth, onboarding, and app shells — each exported from the library.',
    preview: PatternsPreview,
  },
  {
    index: '04',
    path: 'voice',
    label: 'Voice',
    description: 'How Krowe writes. Tone, vocabulary, sentence structure, and what to avoid.',
    preview: VoicePreview,
  },
  {
    index: '05',
    path: 'accessibility',
    label: 'Accessibility',
    description: 'Focus management, keyboard navigation, color contrast, and screen reader patterns.',
    preview: AccessibilityPreview,
  },
];

const PATTERN_CHIPS = [
  { label: 'Marketing', to: '/docs/patterns#pattern-marketing' },
  { label: 'Auth', to: '/docs/patterns#pattern-auth' },
  { label: 'Onboarding', to: '/docs/patterns#pattern-onboarding' },
  { label: 'Home', to: '/docs/patterns#pattern-dashboard' },
  { label: 'Report', to: '/docs/patterns#pattern-report' },
  { label: 'Ideas', to: '/docs/patterns#pattern-ideas' },
];

export function DesignSystemLanding() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Sticky top nav */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          background: 'color-mix(in oklch, var(--background) 90%, transparent)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <EmberGlyph size={20} animated />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              color: 'var(--foreground)',
            }}
          >
            Krowe
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted-foreground)',
            }}
          >
            Design Library
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--type-caption-size)',
            color: 'var(--muted-foreground)',
            padding: '0.2rem 0.625rem',
            background: 'var(--surface-subtle)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-full)',
          }}
        >
          v1.0
        </span>
      </header>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(4rem, 10vw, 8rem) 2rem clamp(3.5rem, 7vw, 6rem)',
          background:
            'linear-gradient(135deg, #fff5f0 0%, #fff9f5 25%, #fffbf8 50%, #fef5ec 75%, #fef0e5 100%)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--blueprint-grid)',
            backgroundSize: 'var(--blueprint-grid-size)',
            opacity: 0.28,
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
          >
            <EmberGlyph size={52} animated />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--type-display-xl-family)',
              fontSize: 'clamp(2.75rem, 8vw, 4.75rem)',
              lineHeight: 'var(--type-display-xl-line-height)',
              letterSpacing: 'var(--type-display-xl-letter-spacing)',
              fontWeight: 'var(--type-display-xl-weight)',
              color: 'var(--foreground)',
              marginBottom: '1.25rem',
            }}
          >
            The Krowe<br />Design Library.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-l-size)',
              lineHeight: 'var(--type-body-l-line-height)',
              color: 'var(--muted-foreground)',
              maxWidth: '44ch',
              margin: '0 auto',
            }}
          >
            Every token, component, and pattern that makes Krowe feel like Krowe. Built for the product. Open to the team.
          </motion.p>
        </div>
      </section>

      {/* Category cards */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) 2rem' }}>
        <div
          style={{
            display: 'grid',
            gap: '1.25rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.path}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.28 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pattern shortcuts */}
      <section
        style={{
          borderTop: '1px solid var(--border)',
          background: 'var(--surface-subtle)',
          padding: 'clamp(2rem, 4vw, 3rem) 2rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-caption-size)',
                fontWeight: 600,
                color: 'var(--muted-foreground)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
              }}
            >
              Patterns in the library
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {PATTERN_CHIPS.map((s) => (
              <PatternChip key={s.to} label={s.label} to={s.to} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  index,
  path,
  label,
  description,
  preview: PreviewComponent,
}: (typeof CATEGORIES)[0]) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/docs/${path}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          background: 'var(--background)',
          border: `1px solid ${isHovered ? 'color-mix(in oklch, var(--primary) 45%, var(--border))' : 'var(--border)'}`,
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: isHovered ? 'var(--shadow-3)' : 'var(--shadow-1)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all var(--duration-normal) var(--ease-out-smooth)',
        }}
      >
        {/* Visual preview */}
        <div
          style={{
            height: '120px',
            background: isHovered
              ? 'color-mix(in oklch, var(--primary) 4%, var(--surface-subtle))'
              : 'var(--surface-subtle)',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background var(--duration-normal) var(--ease-out-smooth)',
          }}
        >
          <PreviewComponent />
        </div>

        {/* Text */}
        <div style={{ padding: '1.375rem 1.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--type-caption-size)',
                fontWeight: 600,
                color: 'var(--primary)',
                background: 'var(--primary-soft)',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                letterSpacing: '0.04em',
              }}
            >
              {index}
            </span>
            <ArrowRightIcon
              size={16}
              style={{
                color: isHovered ? 'var(--primary)' : 'var(--muted-foreground)',
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'all var(--duration-fast) var(--ease-out-smooth)',
                flexShrink: 0,
              }}
            />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.0625rem',
              fontWeight: 600,
              color: 'var(--foreground)',
              marginBottom: '0.5rem',
              letterSpacing: '-0.005em',
            }}
          >
            {label}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              lineHeight: 'var(--type-body-s-line-height)',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

function PatternChip({ label, to }: { label: string; to: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.5rem 1rem',
        background: isHovered ? 'var(--background)' : 'var(--background)',
        border: `1px solid ${isHovered ? 'var(--primary)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body-s-size)',
        fontWeight: 500,
        color: isHovered ? 'var(--primary)' : 'var(--foreground)',
        textDecoration: 'none',
        transition: 'all var(--duration-fast) var(--ease-out-smooth)',
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <ArrowRightIcon size={11} style={{ opacity: 0.65 }} />
    </Link>
  );
}

// ─── Category preview thumbnails ─────────────────────────────────────────────

function FoundationsPreview() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '1rem' }}>
      {[
        { bg: 'var(--primary)', size: 42 },
        { bg: 'var(--primary-soft)', size: 32, border: true },
        { bg: 'var(--success)', size: 28 },
        { bg: 'var(--warning)', size: 28 },
        { bg: 'var(--danger)', size: 28 },
        { bg: 'var(--border)', size: 22, border: true },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            width: c.size,
            height: c.size,
            borderRadius: '50%',
            background: c.bg,
            border: c.border ? '1.5px solid var(--border)' : 'none',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

function ComponentsPreview() {
  return (
    <div style={{ padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '210px' }}>
      {/* Mini primary button */}
      <div
        style={{
          height: '30px',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '56px', height: '8px', background: 'rgba(255,255,255,0.65)', borderRadius: '3px' }} />
      </div>
      {/* Mini input */}
      <div
        style={{
          height: '28px',
          borderRadius: '7px',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '10px',
          gap: '6px',
        }}
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border)', flexShrink: 0 }} />
        <div style={{ flex: 1, height: '7px', background: 'color-mix(in oklch, var(--border) 60%, transparent)', borderRadius: '3px' }} />
      </div>
      {/* Mini verdict badges */}
      <div style={{ display: 'flex', gap: '5px' }}>
        {[
          { bg: 'var(--success-soft)', border: 'var(--success)' },
          { bg: 'var(--warning-soft)', border: 'var(--warning)' },
          { bg: 'var(--danger-soft)', border: 'var(--danger)' },
        ].map((v, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '18px',
              borderRadius: '9999px',
              background: v.bg,
              border: `1px solid ${v.border}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PatternsPreview() {
  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        gap: '7px',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: '210px',
        height: '80px',
      }}
    >
      {/* Sidebar stub */}
      <div
        style={{
          width: '32px',
          background: 'var(--background)',
          borderRadius: '5px',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '7px 4px',
          gap: '5px',
          flexShrink: 0,
        }}
      >
        <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.85 }} />
        {[true, false, false].map((active, i) => (
          <div
            key={i}
            style={{
              width: '18px',
              height: '4px',
              background: active ? 'var(--primary)' : 'var(--border)',
              borderRadius: '2px',
            }}
          />
        ))}
      </div>
      {/* Content area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div
          style={{
            height: '9px',
            background: 'color-mix(in oklch, var(--foreground) 14%, transparent)',
            borderRadius: '3px',
            width: '65%',
          }}
        />
        <div
          style={{
            flex: 1,
            background: 'var(--background)',
            borderRadius: '5px',
            border: '1px solid var(--border)',
            padding: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div style={{ height: '5px', background: 'var(--border)', borderRadius: '2px' }} />
          <div style={{ height: '5px', background: 'var(--border)', borderRadius: '2px', width: '75%' }} />
          <div
            style={{
              height: '14px',
              background: 'var(--primary-soft)',
              borderRadius: '4px',
              marginTop: 'auto',
              border: '1px solid color-mix(in oklch, var(--primary) 28%, transparent)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function VoicePreview() {
  return (
    <div style={{ padding: '1.25rem 2rem', textAlign: 'left', width: '100%', maxWidth: '210px' }}>
      <div
        style={{
          fontFamily: 'var(--type-display-m-family)',
          fontSize: '1.875rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: 'var(--foreground)',
          marginBottom: '7px',
        }}
      >
        Proceed.
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          color: 'var(--muted-foreground)',
          lineHeight: 1.55,
          maxWidth: '145px',
        }}
      >
        Sharp. Confident. Like a real advisor — not a form.
      </div>
    </div>
  );
}

function AccessibilityPreview() {
  return (
    <div
      style={{
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        justifyContent: 'center',
      }}
    >
      {/* Focus ring button */}
      <div
        style={{
          padding: '6px 14px',
          borderRadius: '9999px',
          background: 'var(--primary)',
          color: 'white',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 600,
          boxShadow: '0 0 0 4px color-mix(in oklch, var(--primary) 20%, transparent)',
        }}
      >
        Focus
      </div>
      {/* Contrast badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div
          style={{
            padding: '3px 10px',
            background: 'var(--foreground)',
            color: 'var(--background)',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            fontWeight: 700,
          }}
        >
          AAA
        </div>
        <div
          style={{
            padding: '3px 10px',
            background: 'var(--primary)',
            color: 'white',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            fontWeight: 700,
          }}
        >
          AA
        </div>
      </div>
    </div>
  );
}
