import { Link } from 'react-router';
import { ArrowRightIcon } from 'lucide-react';
import {
  DocPageHeader,
  DocCallout,
  DocsHeroBento,
  docsPageWrap,
  docMuted,
} from './DocsPageChrome';
import { DOCS_NAV_GROUPS } from '../docsNav';

export function DocsFoundations() {
  const flat = DOCS_NAV_GROUPS.flatMap((g) => g.items.map((item) => ({ ...item, group: g.label })));

  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Foundations"
        description="Start here when you need the full token story: color, type, motion, space, and motifs. Each deep-dive page is live — copy values, replay motion, and cross-link into UI components and screen patterns."
      />

      <DocsHeroBento
        eyebrow="System map"
        title="Tokens first, patterns second."
        description="Foundations define the atoms. UI tabs show composed controls. Patterns show full screens. Jump directly to the page you need — everything shares the same CSS variables from theme.css."
        chips={[
          { k: 'Source', v: 'src/styles/theme.css' },
          { k: 'UI', v: 'Buttons → Components' },
          { k: 'Ship', v: 'Screen patterns' },
        ]}
      />

      <DocCallout title="Navigation">
        Use the sidebar groups (Tokens, UI, Patterns, Guidance) or pick a destination below. This hub mirrors that structure for quick scanning.
      </DocCallout>

      <div
        style={{
          display: 'grid',
          gap: '1.25rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          marginTop: '2rem',
        }}
      >
        {flat.map((item) => (
          <Link
            key={item.path}
            to={`/docs/${item.path}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              padding: '1.25rem 1.35rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              background: `
                radial-gradient(120% 80% at 100% 0%, color-mix(in oklch, var(--primary) 8%, transparent), transparent 55%),
                var(--background)
              `,
              boxShadow: 'var(--shadow-1)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color var(--duration-fast) var(--ease-out-smooth), box-shadow var(--duration-fast) var(--ease-out-smooth)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-caption-size)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--muted-foreground)',
              }}
            >
              {item.group}
            </span>
            <span
              style={{
                fontFamily: 'var(--type-h3-family)',
                fontSize: 'var(--type-h3-size)',
                fontWeight: 'var(--type-h3-weight)',
                color: 'var(--foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}
            >
              {item.label}
              <ArrowRightIcon size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            </span>
            <span style={{ ...docMuted, fontSize: 'var(--type-body-s-size)', marginTop: '0.25rem' }}>
              /docs/{item.path}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
