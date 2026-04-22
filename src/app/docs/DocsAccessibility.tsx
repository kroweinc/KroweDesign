import { Link } from 'react-router';
import { ContrastIcon, KeyboardIcon, HandIcon, SparklesIcon, BracesIcon } from 'lucide-react';
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

const canvas = {
  padding: '1.5rem 1.35rem',
  background: `
    radial-gradient(520px 200px at 20% 0%, color-mix(in oklch, var(--primary) 6%, transparent), transparent 55%),
    linear-gradient(180deg, var(--background) 0%, var(--surface-subtle) 100%)
  `,
};

export function DocsAccessibility() {
  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Accessibility"
        description="How Krowe handles contrast, focus, touch targets, motion, and content structure — apply these checks whenever you add or change UI. Accessibility is a product quality bar, not a post-launch audit."
      />

      <DocsHeroBento
        eyebrow="Inclusive defaults"
        title="Perceivable, operable, understandable."
        description="Tokens were chosen for readable contrast on warm canvas. Components ship focus rings, hit targets, and motion fallbacks so shipped patterns inherit baseline compliance — still test with real assistive tech."
        chips={[
          { k: 'Contrast', v: 'AA-first pairings' },
          { k: 'Input', v: 'Keyboard + focus ring' },
          { k: 'Motion', v: 'prefers-reduced-motion' },
        ]}
      />

      <DocCallout title="Related">
        Motion specifics live in{' '}
        <Link to="/docs/animations" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Animations
        </Link>
        ; voice for errors in{' '}
        <Link to="/docs/voice" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Voice
        </Link>
        .
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Color & contrast"
          description="Aim for WCAG AA for body copy; large display serif gets more latitude but still needs discernible edges."
        />
        <DocInfoCard
          title="Focus & keyboard"
          description="Orange ring mirrors inputs; tab order follows reading order; modals trap focus until dismissed."
        />
        <DocInfoCard
          title="Touch targets"
          description="Primary controls target ~44px min; keep gutters between adjacent tap areas."
        />
        <DocInfoCard
          title="Motion"
          description="Prefer transform and opacity; honor reduced-motion at the document level."
        />
        <DocInfoCard
          title="Structure"
          description="Landmarks, heading order, and icon-only controls expose accessible names."
        />
      </DocCardGrid>

      <DocSnippet title="Landmarks" code={`<main>…</main>\n<nav aria-label="Primary">…</nav>`} />

      <DocSection id="contrast" title="Color & contrast">
        <p style={docP}>
          Text on canvas should meet WCAG AA where possible: roughly 4.5:1 for body and 3:1 for large display type. The
          orange primary is reserved for actions and focus — never rely on color alone for meaning (pair with labels or
          icons).
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '1rem',
            marginBottom: '0.5rem',
            alignItems: 'center',
            fontSize: 'var(--type-body-s-size)',
            color: 'var(--muted-foreground)',
          }}
        >
          <ContrastIcon size={16} style={{ color: 'var(--primary)' }} />
          Pair semantic states with text, not color alone.
        </div>
        <DocLivePreview label="Readable pairings · sample" minHeight={120}>
          <div style={{ ...canvas, display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'stretch' }}>
            <div
              style={{
                flex: '1 1 200px',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <div style={{ fontSize: 'var(--type-caption-size)', color: 'var(--muted-foreground)', marginBottom: '0.35rem' }}>
                Body on canvas
              </div>
              <div style={{ fontSize: 'var(--type-body-size)', lineHeight: 1.55 }}>
                Krowe reads longform comfortably on warm neutrals.
              </div>
            </div>
            <div
              style={{
                flex: '1 1 200px',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--success-soft)',
                border: '1px solid var(--success)',
                color: 'var(--foreground)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <div style={{ fontSize: 'var(--type-caption-size)', color: 'var(--success)', marginBottom: '0.35rem', fontWeight: 600 }}>
                Success panel
              </div>
              <div style={{ fontSize: 'var(--type-body-s-size)', lineHeight: 1.5 }}>
                Semantic green still carries a text label in real UI.
              </div>
            </div>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="focus" title="Focus & keyboard">
        <p style={docP}>
          Every interactive control needs a visible focus state. Primary focus treatment in components uses the orange
          ring at controlled opacity. Tab order should follow reading order; modals must trap focus until dismissed.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--muted-foreground)', fontSize: 'var(--type-body-s-size)' }}>
          <KeyboardIcon size={16} style={{ color: 'var(--primary)' }} />
          Tab through docs sidebar to feel native focus order.
        </div>
        <DocLivePreview label="Focus ring · approximation" minHeight={100}>
          <div style={{ ...canvas, display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                background: 'var(--background)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                cursor: 'default',
                boxShadow: '0 0 0 4px color-mix(in oklch, var(--primary) 10%, transparent)',
              }}
            >
              Focused primary-style ring
            </button>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="touch" title="Touch targets">
        <p style={docP}>
          Primary actions and list rows target at least 44×44px where feasible. Keep spacing between adjacent tappable
          items so they are easy to hit on phones.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--muted-foreground)', fontSize: 'var(--type-body-s-size)' }}>
          <HandIcon size={16} style={{ color: 'var(--primary)' }} />
          Hit slop matters as much as visible button size.
        </div>
        <DocLivePreview label="44px reference" minHeight={100}>
          <div style={{ ...canvas, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--primary-soft)',
                border: '1px dashed color-mix(in oklch, var(--primary) 40%, transparent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--muted-foreground)',
              }}
            >
              44
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-s-size)', color: 'var(--muted-foreground)' }}>
              Minimum comfortable tap target
            </span>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="motion" title="Motion">
        <p style={docP}>
          Interface motion respects <code style={{ fontFamily: 'var(--font-mono)' }}>prefers-reduced-motion</code> in the
          global base styles. Avoid animating properties other than transform and opacity for smooth frames.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--muted-foreground)', fontSize: 'var(--type-body-s-size)' }}>
          <SparklesIcon size={16} style={{ color: 'var(--primary)' }} />
          See reduced-motion handling in animation demos.
        </div>
      </DocSection>

      <DocSection id="content" title="Content">
        <p style={docP}>
          Use semantic structure: one <code style={{ fontFamily: 'var(--font-mono)' }}>main</code> per page, headings in
          order, and <code style={{ fontFamily: 'var(--font-mono)' }}>aria-label</code> (or visible text) on icon-only controls.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--muted-foreground)', fontSize: 'var(--type-body-s-size)' }}>
          <BracesIcon size={16} style={{ color: 'var(--primary)' }} />
          Screen readers traverse headings — do not skip levels for styling.
        </div>
      </DocSection>
    </div>
  );
}
