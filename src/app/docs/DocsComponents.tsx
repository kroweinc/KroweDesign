import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  MailIcon,
  SparklesIcon,
  GaugeIcon,
  BarChart3Icon,
  LayersIcon,
  PlayIcon,
  FormInputIcon,
} from 'lucide-react';
import { Input, Textarea, Toggle, Checkbox } from '@/app/components/Input';
import { ProgressIndicator } from '@/app/components/ProgressIndicator';
import { EmptyState } from '@/app/components/EmptyState';
import { ErrorState } from '@/app/components/ErrorState';
import { AIRewritePanel } from '@/app/components/AIRewritePanel';
import { MarketSizeChart } from '@/app/components/DataViz';
import {
  DocPageHeader,
  DocSection,
  docP,
  docMuted,
  DocLivePreview,
  DocCallout,
  DocCardGrid,
  DocInfoCard,
  DocSnippet,
  DocsHeroBento,
  DocsSegmented,
  docsPageWrap,
} from './DocsPageChrome';

type InputShowcase = 'default' | 'error' | 'success' | 'disabled';

const ONBOARD_STEPS = [
  { step: 1, name: 'Business idea', section: 'Business idea' },
  { step: 2, name: 'Problem statement', section: 'Problem statement' },
  { step: 3, name: 'Product type', section: 'Product type' },
  { step: 4, name: 'Target customer', section: 'Target customer' },
  { step: 5, name: 'Review', section: 'Review & submit' },
] as const;

const INPUT_SHOWCASE_OPTIONS: { value: InputShowcase; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'error', label: 'Error' },
  { value: 'success', label: 'Success' },
  { value: 'disabled', label: 'Read-only' },
];

const SURFACE_STATE_OPTIONS = [
  { value: 'empty' as const, label: 'Empty' },
  { value: 'error' as const, label: 'Error' },
  { value: 'system' as const, label: 'System' },
];

export function DocsComponents() {
  const [email, setEmail] = useState('');
  const [inputShowcase, setInputShowcase] = useState<InputShowcase>('default');
  const [notes, setNotes] = useState('');
  const [toggleOn, setToggleOn] = useState(true);
  const [checkOn, setCheckOn] = useState(false);
  const [currentStep, setCurrentStep] = useState(3);
  const [aiKey, setAiKey] = useState(0);
  const [surfaceDemo, setSurfaceDemo] = useState<'empty' | 'error' | 'system'>('empty');

  useEffect(() => {
    if (inputShowcase === 'success') setEmail('you@krowe.design');
    else if (inputShowcase === 'error') setEmail('not-an-email');
    else if (inputShowcase === 'default') setEmail('');
    // disabled: leave value for visual
    else if (inputShowcase === 'disabled') setEmail('Signed in · read only');
  }, [inputShowcase]);

  const stepMeta = ONBOARD_STEPS[currentStep - 1];
  const completedSteps = ONBOARD_STEPS.filter((s) => s.step < currentStep).map((s) => ({
    step: s.step,
    name: s.name,
  }));
  const eta =
    currentStep >= 4 ? '~1 min' : currentStep <= 2 ? '~3 min' : '~2 min';

  const inputState = inputShowcase === 'disabled' ? 'default' : inputShowcase === 'error' || inputShowcase === 'success' ? inputShowcase : 'default';

  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Components"
        description="Form controls, flow chrome, advisor panels, charts, and empty or error shells — the pieces Patterns compose. Prefer live specimens here, then open full screens under Screen patterns when you need spatial context."
      />

      <DocsHeroBento
        eyebrow="Building blocks"
        title="Controls that feel authored, not assembled."
        description="Patterns borrow the same field chrome, the same onboarding rhythm, and the same advisor voice. This page is the live catalog — pair it with Buttons, Cards, and Screen patterns when you are wiring full flows."
        chips={[
          { k: 'Fields', v: '4px primary ring + 1px border' },
          { k: 'Onboarding', v: 'Motion + step crossfade' },
          { k: 'Advisor', v: 'Typewriter + margin layout' },
        ]}
      />

      <DocCallout title="Related">
        <Link to="/docs/buttons" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Buttons
        </Link>
        {' · '}
        <Link to="/docs/cards" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Cards
        </Link>
        {' · '}
        <Link to="/docs/patterns" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Screen patterns
        </Link>
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Input family"
          description="Input, Textarea, Toggle, and Checkbox share Geist labels, warm borders, and the orange focus ring used in Auth and follow-up surfaces."
          code="@/app/components/Input"
        />
        <DocInfoCard
          title="ProgressIndicator"
          description="Onboarding header strip — step count, section crossfade, shimmer on advance, and optional ETA chip."
          code="@/app/components/ProgressIndicator"
        />
        <DocInfoCard
          title="AIRewritePanel"
          description="Margin-note layout: your answer beside Krowe’s nudge, with typewriter suggestion and action row."
          code="@/app/components/AIRewritePanel"
        />
        <DocInfoCard
          title="MarketSizeChart"
          description="Warm TAM / SAM / SOM ladder with plain-language callouts for report cards."
          code="@/app/components/DataViz"
        />
        <DocInfoCard
          title="EmptyState & ErrorState"
          description="Centered ember empty shell vs semantic warning or danger panels with retry affordances."
          code="@/app/components/EmptyState · ErrorState"
        />
        <DocInfoCard
          title="Primitives"
          description="Radix-based primitives under src/app/components/ui/ — reach for Krowe-wrapped controls first."
          code="src/app/components/ui/"
        />
      </DocCardGrid>

      <DocSection id="forms" title="Forms">
        <p style={docP}>
          Focus uses a 4px ring at 10% primary mix plus a 1px border shift — identical to Auth and advisor forms so
          keyboard users never get a different dialect per screen.
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
            { icon: <FormInputIcon size={16} />, label: 'Segmented showcase for validation states' },
            { icon: <SparklesIcon size={16} />, label: 'Textarea auto-save pulse (demo typing)' },
            { icon: <LayersIcon size={16} />, label: 'Toggle + checkbox primitives from the same module' },
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
        <DocSnippet
          title="Import"
          code={`import { Input, Textarea, Toggle, Checkbox } from '@/app/components/Input';`}
        />
        <div
          style={{
            marginTop: '1.25rem',
            marginBottom: '0.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.75rem 1rem',
            justifyContent: 'space-between',
          }}
        >
          <DocsSegmented<InputShowcase>
            ariaLabel="Input showcase"
            value={inputShowcase}
            onChange={setInputShowcase}
            options={INPUT_SHOWCASE_OPTIONS}
          />
        </div>
        <DocLivePreview label="Input · Textarea · Toggle · Checkbox" minHeight={320}>
          <div
            style={{
              padding: '1.75rem 1.5rem',
              background: `
                radial-gradient(720px 320px at 8% 0%, color-mix(in oklch, var(--primary) 9%, transparent), transparent 58%),
                radial-gradient(560px 280px at 96% 100%, color-mix(in oklch, var(--primary-accent) 7%, transparent), transparent 55%),
                linear-gradient(180deg, var(--background) 0%, var(--surface-subtle) 100%)
              `,
              position: 'relative',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.28,
                backgroundImage:
                  'linear-gradient(color-mix(in oklch, var(--border) 50%, transparent) 1px, transparent 1px)',
                backgroundSize: '100% 12px',
                maskImage: 'linear-gradient(180deg, transparent, black 12%, black 88%, transparent)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '1.5rem',
                maxWidth: '720px',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <Input
                  type="email"
                  label="Work email"
                  placeholder="you@example.com"
                  icon={<MailIcon size={18} />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  state={inputState}
                  disabled={inputShowcase === 'disabled'}
                  helperText={
                    inputShowcase === 'error'
                      ? 'Use a valid email so we can send your validation link.'
                      : inputShowcase === 'success'
                        ? 'Looks good — we will only use this for product updates.'
                        : undefined
                  }
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <Textarea
                  label="Notes for Krowe"
                  placeholder="What should we know before sizing the market?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  showSaveIndicator
                  helperText="Pause typing to see the auto-save chip."
                />
                <Toggle label="Share anonymized usage" checked={toggleOn} onChange={setToggleOn} />
                <Checkbox label="I agree to the beta terms" checked={checkOn} onChange={(e) => setCheckOn(e.target.checked)} />
              </div>
            </div>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="progress" title="Progress">
        <p style={docP}>
          The onboarding header is not a passive meter — section titles crossfade, the bar shimmers on advance, and
          completed steps stay discoverable for glanceable orientation.
        </p>
        <DocSnippet title="Import" code={`import { ProgressIndicator } from '@/app/components/ProgressIndicator';`} />
        <div
          style={{
            marginTop: '1.25rem',
            marginBottom: '0.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            alignItems: 'center',
          }}
        >
          <span style={{ ...docMuted, marginRight: '0.35rem' }}>Step</span>
          {ONBOARD_STEPS.map((s) => (
            <button
              key={s.step}
              type="button"
              onClick={() => setCurrentStep(s.step)}
              style={{
                minWidth: '2rem',
                height: '2rem',
                borderRadius: 'var(--radius-full)',
                border: `1px solid ${s.step === currentStep ? 'transparent' : 'var(--border)'}`,
                background:
                  s.step === currentStep
                    ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)'
                    : 'var(--background)',
                color: s.step === currentStep ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-caption-size)',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: s.step === currentStep ? 'var(--shadow-2)' : 'none',
                transition: 'all var(--duration-fast) var(--ease-out-smooth)',
              }}
            >
              {s.step}
            </button>
          ))}
        </div>
        <DocLivePreview label="<ProgressIndicator />" minHeight={200}>
          <div
            style={{
              background: `
                radial-gradient(480px 160px at 50% 0%, color-mix(in oklch, var(--primary) 6%, transparent), transparent 65%),
                var(--background)
              `,
            }}
          >
            <ProgressIndicator
              currentStep={currentStep}
              totalSteps={ONBOARD_STEPS.length}
              sectionName={stepMeta.section}
              estimatedTimeRemaining={eta}
              completedSteps={completedSteps}
            />
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="ai-panel" title="AI rewrite panel">
        <p style={docP}>
          Two-column editorial rhythm: muted “your answer” slab, then Krowe’s suggestion with ember glyph and
          typewriter pacing so the assist feels considered, not chatty.
        </p>
        <DocSnippet title="Import" code={`import { AIRewritePanel } from '@/app/components/AIRewritePanel';`} />
        <div
          style={{
            marginTop: '1.25rem',
            marginBottom: '0.75rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            type="button"
            onClick={() => setAiKey((k) => k + 1)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              fontWeight: 600,
              color: 'var(--foreground)',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.45rem 0.95rem',
              cursor: 'pointer',
              transition: 'border-color var(--duration-fast) var(--ease-out-smooth), background var(--duration-fast) var(--ease-out-smooth)',
            }}
          >
            <PlayIcon size={14} />
            Replay typewriter
          </button>
        </div>
        <DocLivePreview label="<AIRewritePanel />" minHeight={280}>
          <div
            style={{
              padding: '1.5rem 1.25rem',
              background: `
                linear-gradient(135deg, var(--background) 0%, color-mix(in oklch, var(--primary) 4%, var(--background)) 100%)
              `,
            }}
          >
            <AIRewritePanel
              key={aiKey}
              userAnswer="We will sell inventory software to any store that will listen."
              aiSuggestion="Try naming a narrower slice — e.g. independent retail with 2–10 employees — so Krowe can size the market accurately."
            />
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="data-viz" title="Data visualization">
        <p style={docP}>
          Orange-forward series with restrained gridlines — numbers stay honest, annotations stay human. Drop into report
          pattern cards without re-tuning palette.
        </p>
        <DocSnippet title="Import" code={`import { MarketSizeChart } from '@/app/components/DataViz';`} />
        <DocLivePreview label="Market size" minHeight={280}>
          <div
            style={{
              padding: '1.5rem 1.25rem 1.75rem',
              background: `
                radial-gradient(640px 220px at 50% -20%, color-mix(in oklch, var(--primary) 8%, transparent), transparent 60%),
                var(--background)
              `,
            }}
          >
            <MarketSizeChart tam="$2.4B" sam="$480M" som="$24M" />
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="states" title="Empty & error">
        <p style={docP}>
          Empty states invite the next idea with breathing room; errors encode severity through surface tint and icon
          chrome before the retry action.
        </p>
        <DocSnippet
          title="Import"
          code={`import { EmptyState } from '@/app/components/EmptyState';\nimport { ErrorState } from '@/app/components/ErrorState';`}
        />
        <div style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }}>
          <DocsSegmented
            ariaLabel="Surface state preview"
            value={surfaceDemo}
            onChange={setSurfaceDemo}
            options={SURFACE_STATE_OPTIONS}
          />
        </div>
        <DocLivePreview label="EmptyState · ErrorState" minHeight={surfaceDemo === 'empty' ? 320 : 220}>
          <div
            style={{
              padding: '1.5rem',
              background: `
                radial-gradient(520px 200px at 20% 0%, color-mix(in oklch, var(--primary) 5%, transparent), transparent 55%),
                var(--surface-subtle)
              `,
              minHeight: surfaceDemo === 'empty' ? '300px' : '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {surfaceDemo === 'empty' && (
              <div style={{ width: '100%', maxWidth: '520px' }}>
                <EmptyState
                  message="No ideas yet. What are you thinking about?"
                  showInput
                  inputPlaceholder="e.g., A marketplace for local artisans"
                  onInputSubmit={() => {}}
                />
              </div>
            )}
            {surfaceDemo === 'error' && (
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <ErrorState
                  message="Something went wrong"
                  description="We could not load your ideas. Check your connection and try again."
                  onRetry={() => {}}
                  type="recoverable"
                />
              </div>
            )}
            {surfaceDemo === 'system' && (
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <ErrorState
                  message="Krowe is temporarily unavailable"
                  description="Our team has been notified. Please try again in a few minutes."
                  type="system"
                />
              </div>
            )}
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="chrome" title="Layout chrome">
        <p style={docP}>
          Sidebar, content header, and modal framing live inside the app shell. Open a full pattern when you need scroll
          context, density, or breakpoint behavior.
        </p>
        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            alignItems: 'center',
          }}
        >
          {[
            { to: '/docs/patterns#pattern-dashboard', label: 'Dashboard shell', icon: <GaugeIcon size={16} /> },
            { to: '/docs/patterns#pattern-report', label: 'Report shell', icon: <BarChart3Icon size={16} /> },
            { to: '/docs/patterns#pattern-onboarding', label: 'Onboarding shell', icon: <LayersIcon size={16} /> },
          ].map((r) => (
            <Link
              key={r.to}
              to={r.to}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                background: 'var(--background)',
                boxShadow: 'var(--shadow-1)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-s-size)',
                fontWeight: 600,
                color: 'var(--foreground)',
                textDecoration: 'none',
                transition: 'border-color var(--duration-fast) var(--ease-out-smooth), box-shadow var(--duration-fast) var(--ease-out-smooth)',
              }}
            >
              <span style={{ color: 'var(--primary)', display: 'flex' }}>{r.icon}</span>
              {r.label}
            </Link>
          ))}
        </div>
      </DocSection>

      <DocSection id="primitives" title="UI primitives">
        <p style={{ ...docP, marginBottom: '0.75rem' }}>
          Low-level Radix-based primitives live under{' '}
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-body-s-size)' }}>src/app/components/ui/</code>.
          Prefer Krowe components for product surfaces; drop to primitives when you need a control we have not wrapped
          yet.
        </p>
        <DocSnippet title="Path" code="src/app/components/ui/" />
      </DocSection>
    </div>
  );
}
