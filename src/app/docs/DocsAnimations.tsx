import { Link } from 'react-router';
import { ClapperboardIcon, TypeIcon, TimerIcon } from 'lucide-react';
import {
  DocPageHeader,
  DocSection,
  docP,
  DocLivePreview,
  DocCallout,
  DocCardGrid,
  DocInfoCard,
  DocSnippet,
  DocsHeroBento,
  docsPageWrap,
} from './DocsPageChrome';
import { FoundationMotionSections } from './foundations/foundationSections';
import {
  MarketingHeadlineEntranceDemo,
  OnboardingQuestionEntranceDemo,
  SupportingLineEntranceDemo,
  KROWE_EASE,
} from './animationDemos';

const clipSnippet = `const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

{words.map((word, i) => (
  <motion.span
    key={i}
    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 1 }}
    animate={{ clipPath: "inset(0 0% 0 0)" }}
    transition={{
      delay: 0.3 + i * 0.07,
      duration: 0.38,
      ease,
    }}
    style={{ display: "inline-block", marginRight: "0.28em" }}
  >
    {word}
  </motion.span>
))}`;

const staggerSnippet = `{words.map((word, i) => (
  <motion.span
    key={\`\${word}-\${i}\`}
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: i * 0.035,
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    }}
    style={{ display: "inline-block", marginRight: "0.25em" }}
  >
    {word}
  </motion.span>
))}`;

const fadeSnippet = `<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1.1,
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  {children}
</motion.p>`;

const demoPad = {
  padding: '1.5rem 1.25rem',
  background: `
    radial-gradient(520px 180px at 50% 0%, color-mix(in oklch, var(--primary) 7%, transparent), transparent 60%),
    var(--background)
  `,
};

export function DocsAnimations() {
  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Animations"
        description="Entrance motion used in shipped patterns — clip reveals, staggered type, and delayed body copy — plus the timing tokens and easing curve behind them. Replay each demo; respects prefers-reduced-motion."
      />

      <DocsHeroBento
        eyebrow="Motion"
        title="Editorial entrances, engineered timing."
        description="Marketing leans on clip-path reveals; onboarding favors light stagger; supporting lines wait their turn so hierarchy reads in sequence. One easing tuple keeps the choreography on-brand."
        chips={[
          { k: 'Hero', v: 'clip-path per word' },
          { k: 'Flow', v: 'opacity + y stagger' },
          { k: 'Ease', v: 'cubic-bezier(0.16,1,0.3,1)' },
        ]}
      />

      <DocCallout title="Same motion as patterns">
        These recipes are lifted from{' '}
        <Link to="/docs/patterns#pattern-marketing" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Marketing
        </Link>{' '}
        and{' '}
        <Link to="/docs/patterns#pattern-onboarding" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Onboarding
        </Link>
        . Copy the snippets into your route; bump a <code style={{ fontFamily: 'var(--font-mono)' }}>key</code> on the
        animated subtree to replay after navigation. Respect{' '}
        <code style={{ fontFamily: 'var(--font-mono)' }}>prefers-reduced-motion</code> in product (
        <Link to="/docs/accessibility" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Accessibility
        </Link>
        ). The demos use <code style={{ fontFamily: 'var(--font-mono)' }}>useReducedMotion()</code> from Motion when
        available.
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Clip-path headline"
          description="Per-word reveal for marketing hero — highest impact, reserve for large type only."
          code="MarketingHeadlineEntranceDemo"
        />
        <DocInfoCard
          title="Staggered question"
          description="Short word delays for onboarding steps — lighter than clip, easier on narrow screens."
          code="OnboardingQuestionEntranceDemo"
        />
        <DocInfoCard
          title="Supporting line"
          description="Fade + lift after the headline finishes so subcopy reads second."
          code="SupportingLineEntranceDemo"
        />
        <DocInfoCard
          title="KROWE_EASE"
          description="Single exported bezier tuple reused across Motion and CSS custom properties."
          code="animationDemos.tsx"
        />
      </DocCardGrid>

      <DocSection id="text-entrances" title="Text entrances">
        <p style={docP}>
          Headlines split into words so each token can animate independently. Use clip-path for editorial hero impact;
          use opacity + <code style={{ fontFamily: 'var(--font-mono)' }}>y</code> for question steps where you want a
          lighter touch.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem 1.25rem',
            marginTop: '1.25rem',
            marginBottom: '0.25rem',
          }}
        >
          {[
            { icon: <ClapperboardIcon size={16} />, label: 'Clip reveal — marketing weight' },
            { icon: <TypeIcon size={16} />, label: 'Stagger — onboarding questions' },
          ].map((row) => (
            <div
              key={row.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-s-size)',
                color: 'var(--muted-foreground)',
              }}
            >
              <span style={{ color: 'var(--primary)', display: 'flex' }}>{row.icon}</span>
              {row.label}
            </div>
          ))}
        </div>

        <DocLivePreview label="Marketing · clip-path per word" minHeight={220} maxHeight="none">
          <div style={demoPad}>
            <MarketingHeadlineEntranceDemo />
          </div>
        </DocLivePreview>
        <DocSnippet title="Pattern" code={clipSnippet} />

        <DocLivePreview label="Onboarding · staggered words" minHeight={180} maxHeight="none">
          <div style={demoPad}>
            <OnboardingQuestionEntranceDemo />
          </div>
        </DocLivePreview>
        <DocSnippet title="Pattern" code={staggerSnippet} />
      </DocSection>

      <DocSection id="supporting-copy" title="Supporting copy">
        <p style={docP}>
          After the headline, subcopy usually waits for the type animation to finish, then fades up with{' '}
          <code style={{ fontFamily: 'var(--font-mono)' }}>var(--duration-slow)</code>-scale delay so the hierarchy
          reads clearly.
        </p>
        <DocLivePreview label="Fade + lift" minHeight={160} maxHeight="none">
          <div style={demoPad}>
            <SupportingLineEntranceDemo />
          </div>
        </DocLivePreview>
        <DocSnippet title="Pattern" code={fadeSnippet} />
      </DocSection>

      <DocSection id="easing-constant" title="Easing constant">
        <p style={docP}>
          Export a single tuple and reuse everywhere so motion stays consistent (matches CSS{' '}
          <code style={{ fontFamily: 'var(--font-mono)' }}>--ease-out-smooth</code>).
        </p>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            color: 'var(--muted-foreground)',
          }}
        >
          <TimerIcon size={16} style={{ color: 'var(--primary)' }} />
          Mirror this tuple in Motion and in CSS transitions.
        </div>
        <DocSnippet
          title="src/app/docs/animationDemos.tsx (or your shared motion file)"
          code={`export const KROWE_EASE: [number, number, number, number] = [${KROWE_EASE.join(', ')}];

// usage
transition={{ duration: 0.38, ease: KROWE_EASE }}`}
        />
      </DocSection>

      <FoundationMotionSections />
    </div>
  );
}
