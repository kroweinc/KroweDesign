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
import { FoundationSpaceSections } from './foundations/foundationSections';

export function DocsSpace() {
  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Space & elevation"
        description="Spacing scale, corner radius, and warm shadows. Cards inherit shadow-1/2/3; modals and floating chrome reach for shadow-4. Everything snaps to the 4pt grid so Patterns feel machined, not guessed."
      />

      <DocsHeroBento
        eyebrow="Spatial system"
        title="Rhythm you can count on four."
        description="Spacing tokens name the grid explicitly; radius tokens echo component families; shadows carry a whisper of primary tint so stacked surfaces still feel on-brand."
        chips={[
          { k: 'Grid', v: '--spacing-xs → 6xl' },
          { k: 'Radius', v: 'sm → full pills' },
          { k: 'Depth', v: 'shadow-1 … shadow-4' },
        ]}
      />

      <DocCallout title="Where it shows up">
        Selection and verdict cards document elevation in the UI library; full chrome examples live in{' '}
        <Link to="/docs/cards" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Cards
        </Link>{' '}
        and{' '}
        <Link to="/docs/patterns#pattern-dashboard" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          App shell patterns
        </Link>
        .
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Spacing"
          description="Ten steps from hairline gaps to section breaks. Prefer tokens over magic numbers in padding and gap."
          code="--spacing-md, --spacing-2xl, …"
        />
        <DocInfoCard
          title="Radius"
          description="Controls use md/lg; cards xl; pills full. Keeps corners consistent between docs and product."
          code="--radius-md … --radius-full"
        />
        <DocInfoCard
          title="Shadows"
          description="Four levels + button glow recipe for primary hover — all mixed with warm shadow tint."
          code="--shadow-1 … --shadow-4"
        />
      </DocCardGrid>

      <DocSnippet title="Example" code={`padding: var(--spacing-xl);\nborder-radius: var(--radius-lg);\nbox-shadow: var(--shadow-2);`} />

      <FoundationSpaceSections />

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: 'var(--muted-foreground)',
          marginTop: '2rem',
          maxWidth: '56ch',
        }}
      >
        Pair with{' '}
        <Link to="/docs/colors" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Colors
        </Link>{' '}
        for border tints and{' '}
        <Link to="/docs/motifs" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Motifs
        </Link>{' '}
        for blueprint overlays on large surfaces.
      </p>
    </div>
  );
}
