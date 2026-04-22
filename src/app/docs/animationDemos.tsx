import { useState, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BrandMark } from '@/app/components/BrandMark';

/** Krowe default — matches patterns and CSS `--ease-out-smooth`. */
export const KROWE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const MARKETING_HEADLINE = 'Your idea deserves a real gut-check.';
const ONBOARDING_QUESTION = 'What problem does this solve?';
const SUPPORTING =
  'Answer ten questions. Get a no-nonsense validation report — market size, competitors, MVP cost, and a verdict.';

const replayBtn: CSSProperties = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  zIndex: 2,
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-caption-size)',
  fontWeight: 600,
  color: 'var(--foreground)',
  background: 'color-mix(in oklch, var(--background) 88%, transparent)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-full)',
  padding: '0.35rem 0.85rem',
  cursor: 'pointer',
  backdropFilter: 'blur(8px)',
};

function Replay({ onReplay }: { onReplay: () => void }) {
  return (
    <button type="button" style={replayBtn} onClick={onReplay}>
      Replay
    </button>
  );
}

/** Marketing hero: per-word clip-path reveal (same recipe as `MarketingLandingPattern`). */
export function MarketingHeadlineEntranceDemo() {
  const reduceMotion = useReducedMotion();
  const [key, setKey] = useState(0);
  const words = MARKETING_HEADLINE.split(' ');

  if (reduceMotion) {
    return (
      <div
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          minHeight: '200px',
          background:
            'linear-gradient(135deg, #fff5f0 0%, #fff9f5 25%, #fffbf8 50%, #fef5ec 75%, #fef0e5 100%)',
          borderRadius: 'inherit',
        }}
      >
        <Replay onReplay={() => setKey((k) => k + 1)} />
        <h1
          style={{
            fontFamily: 'var(--type-display-xl-family)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            fontWeight: 400,
            color: 'var(--foreground)',
            margin: '2.5rem 0 0',
            maxWidth: '14ch',
          }}
        >
          {MARKETING_HEADLINE}
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        padding: '2.5rem 2rem',
        minHeight: '200px',
        background:
          'linear-gradient(135deg, #fff5f0 0%, #fff9f5 25%, #fffbf8 50%, #fef5ec 75%, #fef0e5 100%)',
        borderRadius: 'inherit',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--blueprint-grid)',
          backgroundSize: 'var(--blueprint-grid-size)',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
      />
      <Replay onReplay={() => setKey((k) => k + 1)} />

      <motion.div
        key={`eyebrow-${key}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}
      >
        <BrandMark size={20} />
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
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          fontWeight: 400,
          color: 'var(--foreground)',
          margin: 0,
          maxWidth: '16ch',
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${key}-${i}-${word}`}
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{
              delay: 0.22 + i * 0.07,
              duration: 0.38,
              ease: KROWE_EASE,
            }}
            style={{ display: 'inline-block', marginRight: '0.28em' }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}

/** Onboarding step title: staggered word rise (same recipe as `QuestionHeading` in patterns). */
export function OnboardingQuestionEntranceDemo() {
  const reduceMotion = useReducedMotion();
  const [key, setKey] = useState(0);
  const words = ONBOARDING_QUESTION.split(' ');

  if (reduceMotion) {
    return (
      <div style={{ position: 'relative', padding: '2rem 1.75rem', background: 'var(--background)' }}>
        <Replay onReplay={() => setKey((k) => k + 1)} />
        <h2
          style={{
            fontFamily: 'var(--type-display-m-family)',
            fontSize: 'clamp(1.35rem, 3.5vw, 2rem)',
            fontWeight: 'var(--type-display-m-weight)',
            color: 'var(--foreground)',
            margin: '2rem 0 0',
            letterSpacing: 'var(--type-display-m-letter-spacing)',
            lineHeight: 'var(--type-display-m-line-height)',
          }}
        >
          {ONBOARDING_QUESTION}
        </h2>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', padding: '2rem 1.75rem', background: 'var(--background)' }}>
      <Replay onReplay={() => setKey((k) => k + 1)} />
      <h2
        style={{
          fontFamily: 'var(--type-display-m-family)',
          fontSize: 'clamp(1.35rem, 3.5vw, 2rem)',
          fontWeight: 'var(--type-display-m-weight)',
          color: 'var(--foreground)',
          margin: '2rem 0 0',
          letterSpacing: 'var(--type-display-m-letter-spacing)',
          lineHeight: 'var(--type-display-m-line-height)',
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${key}-${i}-${word}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.035, duration: 0.28, ease: KROWE_EASE }}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}

/** Body / subhead after hero: delayed fade + lift (marketing hero subcopy). */
export function SupportingLineEntranceDemo() {
  const reduceMotion = useReducedMotion();
  const [key, setKey] = useState(0);

  if (reduceMotion) {
    return (
      <div style={{ position: 'relative', padding: '1.75rem', background: 'var(--surface-subtle)' }}>
        <Replay onReplay={() => setKey((k) => k + 1)} />
        <p
          style={{
            margin: '2rem 0 0',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-l-size)',
            lineHeight: 1.65,
            color: 'var(--muted-foreground)',
            maxWidth: '48ch',
          }}
        >
          {SUPPORTING}
        </p>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', padding: '1.75rem', background: 'var(--surface-subtle)' }}>
      <Replay onReplay={() => setKey((k) => k + 1)} />
      <motion.p
        key={key}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: KROWE_EASE }}
        style={{
          margin: '2rem 0 0',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-l-size)',
          lineHeight: 1.65,
          color: 'var(--muted-foreground)',
          maxWidth: '48ch',
        }}
      >
        {SUPPORTING}
      </motion.p>
    </div>
  );
}
