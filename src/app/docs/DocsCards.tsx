import { useState } from 'react';
import { Link } from 'react-router';
import { LightbulbIcon, UsersIcon, SparklesIcon, LayersIcon, PlayIcon } from 'lucide-react';
import { SelectionCard } from '@/app/components/SelectionCard';
import { VerdictCard } from '@/app/components/VerdictCard';
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
  DocsSegmented,
  docsPageWrap,
} from './DocsPageChrome';

type Verdict = 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';

const verdicts: Verdict[] = ['Proceed', 'Refine', 'Pivot', 'Rethink'];

function SaasIllustration({ active }: { active: boolean }) {
  return (
    <div style={{ position: 'relative', width: '56px', height: '56px' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '4px',
          borderRadius: '14px',
          border: `1px solid ${active ? 'color-mix(in oklch, var(--primary) 45%, transparent)' : 'var(--border)'}`,
          background: active
            ? 'linear-gradient(145deg, color-mix(in oklch, var(--primary) 14%, var(--background)), var(--background))'
            : 'var(--surface-subtle)',
          transform: 'rotate(-6deg)',
          boxShadow: active ? 'var(--shadow-2)' : 'var(--shadow-1)',
          transition: 'all var(--duration-normal) var(--ease-out-smooth)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '0',
          borderRadius: '14px',
          border: `1px solid ${active ? 'color-mix(in oklch, var(--primary) 55%, transparent)' : 'var(--border)'}`,
          background: 'var(--background)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: active ? 'var(--primary)' : 'var(--muted-foreground)',
          transition: 'all var(--duration-normal) var(--ease-out-smooth)',
        }}
      >
        <LightbulbIcon size={22} strokeWidth={2} />
      </div>
    </div>
  );
}

function MarketplaceIllustration({ active }: { active: boolean }) {
  return (
    <div
      style={{
        width: '56px',
        height: '56px',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${active ? 'color-mix(in oklch, var(--primary) 40%, transparent)' : 'var(--border)'}`,
        background: active
          ? 'radial-gradient(circle at 30% 20%, color-mix(in oklch, var(--primary) 20%, transparent), transparent 55%), var(--surface-subtle)'
          : 'var(--surface-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: active ? 'var(--primary)' : 'var(--muted-foreground)',
        transition: 'all var(--duration-normal) var(--ease-out-smooth)',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          border: '1px dashed color-mix(in oklch, var(--primary) 25%, transparent)',
          opacity: active ? 0.9 : 0.35,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <UsersIcon size={22} strokeWidth={2} style={{ position: 'relative' }} />
    </div>
  );
}

export function DocsCards() {
  const [pick, setPick] = useState<'a' | 'b'>('a');
  const [verdict, setVerdict] = useState<Verdict>('Proceed');
  const [motionKey, setMotionKey] = useState(0);

  const verdictSummary: Record<Verdict, string> = {
    Proceed:
      'The market data supports this direction. Your positioning is clear, and the MVP cost is reasonable for your target segment.',
    Refine:
      'Signals are mixed: tighten the wedge, sharpen the story, and re-run validation on one narrower segment before you scale spend.',
    Pivot:
      'Demand exists, but not where you assumed. Shift the beachhead, preserve the engine, and validate the new wedge with a focused experiment.',
    Rethink:
      'Structural risk outweighs upside right now. Pause build, interrogate assumptions, and come back with a materially different thesis.',
  };

  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Cards"
        description="Selection tiles for pick-one flows, and the verdict moment for reports. Same radius, border, and elevation tokens as Space — expressed as either a tactile choice surface or a ceremonial report centerpiece."
      />

      <DocsHeroBento
        eyebrow="Card language"
        title="Tiles for choice, a stage for the verdict."
        description="Selection cards compress complex intent into a confident tap target. Verdict cards slow the moment down — serif headline, semantic badge, then action — so the report lands emotionally before it lands practically."
        chips={[
          { k: 'Radius', v: 'var(--radius-lg)' },
          { k: 'Depth', v: 'shadow-1 → shadow-2' },
          { k: 'Focus', v: 'Ring + check on select' },
        ]}
      />

      <DocCallout title="Patterns">
        Selection cards appear in{' '}
        <Link to="/docs/patterns#pattern-onboarding" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Onboarding
        </Link>
        ; verdict in{' '}
        <Link to="/docs/patterns#pattern-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Validation report
        </Link>
        .
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="SelectionCard"
          description="Large hit target, subtle tilt, animated selection ring, and a check badge when chosen. Built for onboarding and other pick-one grids."
          code="@/app/components/SelectionCard"
        />
        <DocInfoCard
          title="VerdictCard"
          description="Serif verdict word, semantic pill, summary body, and paired actions. Optional staged entrance for the report reveal."
          code="@/app/components/VerdictCard"
        />
      </DocCardGrid>

      <DocSection id="selection" title="Selection card">
        <p style={docP}>
          Onboarding questions read better as objects you can inspect, not rows of radio text. Tilt invites exploration;
          the ring and check confirm commitment without shouting.
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
            { icon: <LayersIcon size={16} />, label: 'Stacked illustration frame for SaaS' },
            { icon: <SparklesIcon size={16} />, label: 'Radial field + icon for marketplace' },
            { icon: <PlayIcon size={16} />, label: 'Disabled tile shows quieted affordance' },
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
          code={`import { SelectionCard } from '@/app/components/SelectionCard';`}
        />
        <DocLivePreview label="Interactive grid · two options + disabled" minHeight={300}>
          <div
            style={{
              padding: '2rem 1.75rem',
              minHeight: '260px',
              background: `
                radial-gradient(900px 420px at 12% -10%, color-mix(in oklch, var(--primary) 10%, transparent), transparent 60%),
                radial-gradient(700px 380px at 92% 108%, color-mix(in oklch, var(--primary-accent) 8%, transparent), transparent 55%),
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
                opacity: 0.35,
                backgroundImage:
                  'linear-gradient(color-mix(in oklch, var(--border) 55%, transparent) 1px, transparent 1px)',
                backgroundSize: '100% 11px',
                maskImage: 'linear-gradient(180deg, transparent, black 18%, black 82%, transparent)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                maxWidth: '720px',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              <SelectionCard
                title="Software (SaaS)"
                description="Subscription web or mobile product"
                selected={pick === 'a'}
                onClick={() => setPick('a')}
                illustration={<SaasIllustration active={pick === 'a'} />}
              />
              <SelectionCard
                title="Marketplace"
                description="Connecting buyers and sellers"
                selected={pick === 'b'}
                onClick={() => setPick('b')}
                illustration={<MarketplaceIllustration active={pick === 'b'} />}
              />
              <SelectionCard
                title="Hardware (soon)"
                description="Physical goods or IoT — not available in this preview build."
                selected={false}
                disabled
                illustration={
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      border: '1px dashed var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--muted-foreground)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Soon
                  </div>
                }
              />
            </div>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="verdict" title="Verdict card">
        <p style={docP}>
          The verdict is typography-first: Instrument Serif at display scale, then meaning encoded in color through the
          badge. Actions sit last so reading order matches decision order.
        </p>
        <DocSnippet title="Import" code={`import { VerdictCard } from '@/app/components/VerdictCard';`} />
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
          <DocsSegmented<Verdict>
            ariaLabel="Verdict preview"
            value={verdict}
            onChange={setVerdict}
            options={verdicts.map((v) => ({ value: v, label: v }))}
          />
          <button
            type="button"
            onClick={() => setMotionKey((k) => k + 1)}
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
            Replay entrance
          </button>
        </div>
        <DocLivePreview label="<VerdictCard /> · static (docs default)" minHeight={340}>
          <div
            style={{
              padding: '1.75rem 1.25rem 2rem',
              background: `
                radial-gradient(520px 240px at 50% 0%, color-mix(in oklch, var(--primary) 7%, transparent), transparent 65%),
                var(--surface-subtle)
              `,
            }}
          >
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <VerdictCard verdict={verdict} summary={verdictSummary[verdict]} animateIn={false} />
            </div>
          </div>
        </DocLivePreview>
        <DocLivePreview label="Staged motion · same verdict" minHeight={360}>
          <div style={{ padding: '1.5rem 1rem 2rem', background: 'var(--background)' }}>
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <VerdictCard
                key={`${verdict}-${motionKey}`}
                verdict={verdict}
                summary={verdictSummary[verdict]}
                animateIn
              />
            </div>
          </div>
        </DocLivePreview>
      </DocSection>
    </div>
  );
}
