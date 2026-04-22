import { Link } from 'react-router';
import { DocPageHeader, DocCallout, DocCardGrid, DocInfoCard, DocSnippet, DocsHeroBento, docsPageWrap } from './DocsPageChrome';
import { FoundationColorsSections } from './foundations/foundationSections';

export function DocsColors() {
  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Colors"
        description="Warm neutrals, one orange accent per screen, and semantic greens, ambers, and reds. Tokens match Patterns — especially marketing washes, auth chrome, and verdict states — so swapping a variable updates the whole product."
      />

      <DocsHeroBento
        eyebrow="Palette"
        title="Warm canvas, disciplined orange."
        description="Neutrals skew candlelit, not clinical. Primary orange is for action and focus; semantic colors carry meaning in alerts, badges, and destructive paths. Shadows borrow 8% orange so elevation never reads gray."
        chips={[
          { k: 'Canvas', v: 'oklch warm neutrals' },
          { k: 'Accent', v: '--primary → --primary-accent' },
          { k: 'Shadows', v: '--shadow-tint (orange mix)' },
        ]}
      />

      <DocCallout title="Source of truth">
        Tokens live in{' '}
        <code style={{ fontFamily: 'var(--font-mono)' }}>src/styles/theme.css</code>. Copy swatches below with one
        click; pair this page with{' '}
        <Link to="/docs/typography" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Typography
        </Link>{' '}
        and{' '}
        <Link to="/docs/motifs" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Motifs
        </Link>{' '}
        before tuning marketing or report screens.
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Primary stack"
          description="Orange ladder from solid CTA through hover, soft fills, and accent punch on the ember glyph."
          code="--primary, --primary-hover, --primary-soft"
        />
        <DocInfoCard
          title="Neutrals"
          description="Background, subtle surface, foreground, muted copy, and hairline borders — all slightly warm."
          code="--background … --border"
        />
        <DocInfoCard
          title="Semantic"
          description="Success, warning, danger with soft companions for tinted panels and chips."
          code="--success, --warning, --danger"
        />
      </DocCardGrid>

      <DocSnippet title="Quick reference" code={`/* examples */\ncolor: var(--foreground);\nbackground: var(--surface-subtle);\nborder-color: var(--border);`} />

      <FoundationColorsSections />

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: 'var(--muted-foreground)',
          marginTop: '2rem',
          maxWidth: '58ch',
        }}
      >
        Next:{' '}
        <Link to="/docs/typography" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Typography
        </Link>
        {' · '}
        <Link to="/docs/space" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Space & elevation
        </Link>
        {' · '}
        <Link to="/docs/motifs" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Motifs
        </Link>
        .
      </p>
    </div>
  );
}
