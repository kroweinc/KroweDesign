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
import { FoundationTypographySections } from './foundations/foundationSections';

export function DocsTypography() {
  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Typography"
        description="Instrument Serif for editorial beats; Geist Sans for UI; Geist Mono for numbers. This hierarchy is what Patterns use for heroes, report titles, and dense tables — so type rhythm stays legible from marketing to data-heavy screens."
      />

      <DocsHeroBento
        eyebrow="Type system"
        title="Serif for drama, sans for duty."
        description="Reserve Instrument for moments that should feel printed: landing hero, verdict word, report section heads. Everything operational — forms, nav, tables — stays in Geist so the interface whispers instead of shouts."
        chips={[
          { k: 'Display', v: 'Instrument · clamp scale' },
          { k: 'UI', v: 'Geist · 10 named styles' },
          { k: 'Data', v: 'Geist Mono · metrics' },
        ]}
      />

      <DocCallout title="Rules of thumb">
        Never mix serif and sans inside a single control. Keep mono to numerics and code. When in doubt, default to{' '}
        <code style={{ fontFamily: 'var(--font-mono)' }}>--type-body-*</code> tokens instead of raw pixel sizes.
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Display XL → M"
          description="Serif ladder for hero, sub-hero, and page titles. Tied to CSS variables in theme.css."
          code="--type-display-xl-* … --type-display-m-*"
        />
        <DocInfoCard
          title="Headings & body"
          description="H1–H3 sans for structure; body L/M/S for reading density; captions for labels."
          code="--type-h1-* … --type-caption-*"
        />
        <DocInfoCard
          title="Mono"
          description="Financial figures, IDs, and inline code — keeps tabular data aligned without faux small-caps."
          code="--font-mono"
        />
      </DocCardGrid>

      <DocSnippet title="Font stacks" code={`--font-serif: 'Instrument Serif', serif;\n--font-sans: 'Geist', …;\n--font-mono: 'Geist Mono', …;`} />

      <FoundationTypographySections />

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: 'var(--muted-foreground)',
          marginTop: '2rem',
          maxWidth: '56ch',
        }}
      >
        See type in motion on{' '}
        <Link to="/docs/animations" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Animations
        </Link>
        {' and full layouts under '}
        <Link to="/docs/patterns" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Screen patterns
        </Link>
        .
      </p>
    </div>
  );
}
