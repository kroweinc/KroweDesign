import { useState } from 'react';
import { PlusIcon, DownloadIcon, MousePointer2Icon, SparklesIcon, LoaderIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/Button';
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

const row = { display: 'flex', flexWrap: 'wrap' as const, gap: '0.75rem', alignItems: 'center' };

const previewCanvas = {
  padding: '1.75rem',
  background: `
    radial-gradient(640px 240px at 10% 0%, color-mix(in oklch, var(--primary) 8%, transparent), transparent 55%),
    radial-gradient(520px 200px at 95% 100%, color-mix(in oklch, var(--primary-accent) 6%, transparent), transparent 50%),
    linear-gradient(180deg, var(--background) 0%, var(--surface-subtle) 100%)
  `,
  position: 'relative' as const,
};

export function DocsButtons() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Buttons"
        description="Primary gradient pill, secondary frame, quiet ghost, and destructive. Focus, pressed, and loading states ship everywhere — from marketing hero to report export — so intent reads the same in every context."
      />

      <DocsHeroBento
        eyebrow="Actions"
        title="One control, four intents, three sizes."
        description="Primary carries elevation and warmth; secondary frames the choice; ghost disappears on dense chrome; destructive stands alone. Icons align to Geist’s cap height; loading swaps copy for the ember spinner."
        chips={[
          { k: 'Primary', v: 'Gradient + shadow-4' },
          { k: 'Focus', v: 'Ring matches Input' },
          { k: 'Motion', v: 'Press + hover lift' },
        ]}
      />

      <DocCallout title="Usage">
        Import <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>Button</code> from{' '}
        <code style={{ fontFamily: 'var(--font-mono)' }}>@/app/components/Button</code>. Prefer icon + label for
        primary actions; keep labels under five words when possible.
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Primary"
          description="Gradient fill, white label, strongest shadow. Use once per viewport for the forward action."
          code='variant="primary"'
        />
        <DocInfoCard
          title="Secondary"
          description="Neutral fill with border — pairs with primary in dialogs and split layouts."
          code='variant="secondary"'
        />
        <DocInfoCard
          title="Ghost"
          description="Transparent until hover; for tertiary actions on busy surfaces."
          code='variant="ghost"'
        />
        <DocInfoCard
          title="Destructive"
          description="Semantic danger styling — confirm before wiring to irreversible operations."
          code='variant="destructive"'
        />
      </DocCardGrid>

      <DocSnippet title="Import" code={`import { Button } from '@/app/components/Button';`} />

      <DocSection id="variants" title="Variants">
        <p style={docP}>
          Four intents. Primary owns the gradient; secondary holds structure; ghost stays flat; destructive borrows
          semantic red without mimicking marketing orange.
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
            { icon: <MousePointer2Icon size={16} />, label: 'Hover primary to see glow + lift' },
            { icon: <SparklesIcon size={16} />, label: 'Ghost stays quiet until pointer intent' },
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
        <DocLivePreview label="All variants · md">
          <div style={previewCanvas}>
            <div style={row}>
              <Button variant="primary">Start validating</Button>
              <Button variant="secondary">Save draft</Button>
              <Button variant="ghost">Skip</Button>
              <Button variant="destructive">Delete idea</Button>
            </div>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="sizes" title="Sizes">
        <p style={docP}>sm for toolbars and tables, md default, lg for single hero CTAs on marketing blocks.</p>
        <DocLivePreview label="sm · md · lg">
          <div style={previewCanvas}>
            <div style={{ ...row, alignItems: 'flex-end' }}>
              <Button variant="primary" size="sm">
                sm
              </Button>
              <Button variant="primary" size="md">
                md
              </Button>
              <Button variant="primary" size="lg">
                lg
              </Button>
            </div>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="icons-loading" title="Icons & loading">
        <p style={docP}>
          Leading icons sit tight to the label cap height. Loading preserves button width and swaps the label for the
          ember treatment so layout does not jump.
        </p>
        <DocLivePreview label="With icons · loading toggle">
          <div style={previewCanvas}>
            <div style={{ ...row, marginBottom: '1rem' }}>
              <Button variant="primary" icon={<PlusIcon size={18} />}>
                New idea
              </Button>
              <Button variant="secondary" size="sm" icon={<DownloadIcon size={16} />}>
                Export
              </Button>
            </div>
            <div style={{ ...row, alignItems: 'center' }}>
              <Button variant="primary" loading={loading} onClick={() => setLoading((v) => !v)}>
                {loading ? 'Loading' : 'Toggle loading'}
              </Button>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--type-caption-size)',
                  color: 'var(--muted-foreground)',
                }}
              >
                <LoaderIcon size={14} />
                Tap to preview spinner
              </span>
            </div>
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="in-patterns" title="Where they appear">
        <p style={docP}>
          Auth split, onboarding footer, dashboard header, report export — same component everywhere. Jump into a
          pattern to see density and pairing.
        </p>
        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
          }}
        >
          {[
            { to: '/docs/patterns#pattern-auth', label: 'Auth' },
            { to: '/docs/patterns#pattern-onboarding', label: 'Onboarding' },
            { to: '/docs/patterns#pattern-dashboard', label: 'Dashboard' },
            { to: '/docs/patterns#pattern-report', label: 'Report' },
          ].map((r) => (
            <Link
              key={r.to}
              to={r.to}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
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
              }}
            >
              {r.label}
            </Link>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
