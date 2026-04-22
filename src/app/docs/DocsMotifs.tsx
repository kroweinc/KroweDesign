import { Link } from 'react-router';
import {
  DocPageHeader,
  DocCallout,
  DocCardGrid,
  DocInfoCard,
  DocSnippet,
  DocsHeroBento,
  docsPageWrap,
} from './DocsPageChrome';
import { FoundationMotifsSections } from './foundations/foundationSections';

export function DocsMotifs() {
  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Motifs"
        description="Ember mark, blueprint grid, and sunrise wash — the three Krowe signatures. They anchor marketing and auth; everywhere else, let content breathe and lean on typography instead of texture."
      />

      <DocsHeroBento
        eyebrow="Signature"
        title="Texture with restraint."
        description="The glyph is identity; the grid is engineering poetry; the gradient is sunrise optimism. Stack at most two motifs per viewport — usually grid + wash, with the ember as punctuation."
        chips={[
          { k: 'Glyph', v: 'EmberGlyph + scaled marks' },
          { k: 'Grid', v: 'var(--blueprint-grid)' },
          { k: 'Wash', v: '5-stop warm gradient' },
        ]}
      />

      <DocCallout title="Shipped context">
        See all three working together on{' '}
        <Link to="/docs/patterns#pattern-marketing" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Marketing landing
        </Link>{' '}
        and the split treatment on{' '}
        <Link to="/docs/patterns#pattern-auth" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Auth
        </Link>
        .
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Ember glyph"
          description="Four nested circles with accent punch — brand, loading, empty states. Never recolor or squash."
          code="<EmberGlyph />"
        />
        <DocInfoCard
          title="Blueprint grid"
          description="CSS gradient grid at low opacity for hero and report canvases."
          code="var(--blueprint-grid)"
        />
        <DocInfoCard
          title="Sunrise wash"
          description="Warm multi-stop background for large editorial panels — not for dense tables."
          code="linear-gradient(135deg, #fff5f0 …)"
        />
      </DocCardGrid>

      <DocSnippet title="Grid token" code={`background: var(--blueprint-grid);\nbackground-size: var(--blueprint-grid-size);`} />

      <FoundationMotifsSections />
    </div>
  );
}
