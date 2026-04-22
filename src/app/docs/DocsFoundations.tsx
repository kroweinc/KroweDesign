import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRightIcon, BookOpenIcon, Code2Icon, LayersIcon } from 'lucide-react';
import {
  DocPageHeader,
  DocCallout,
  DocsHeroBento,
  docsPageWrap,
  docMuted,
  DocSnippet,
} from './DocsPageChrome';
import { DOCS_NAV_GROUPS } from '../docsNav';

const DOC_BLURBS: Record<string, string> = {
  foundations: 'Map of every doc route — start here.',
  colors: 'Primary stack, warm neutrals, semantic colors, and swatches with copyable tokens.',
  typography: 'Instrument + Geist scale, rules, and live type specimens.',
  animations: 'Entrance recipes, Motion snippets, and duration tokens.',
  space: '4pt spacing, radius ladder, shadows, and button glow.',
  motifs: 'Ember glyph, blueprint grid, sunrise wash, and usage guardrails.',
  buttons: 'Variants, sizes, icons, loading — shared CTA language.',
  cards: 'Selection tiles and verdict surfaces with live states.',
  components: 'Forms, progress, AI panel, charts, empty and error shells.',
  patterns: 'Marketing, auth, onboarding, dashboard, report, and ideas browse.',
  voice: 'Tone, vocabulary, microcopy patterns, and anti-patterns.',
  accessibility: 'Contrast, focus, touch targets, motion, and structure.',
};

const sectionIntro: Record<string, string> = {
  overview: 'Orientation and entry points.',
  tokens: 'Visual language primitives — use these before touching UI or patterns.',
  ui: 'Composed controls referenced across patterns.',
  patterns: 'Full-screen compositions you can import into routes.',
  guidance: 'How we write and how we keep interfaces inclusive.',
};

function TocLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        padding: '0.35rem 0',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: 'var(--muted-foreground)',
        textDecoration: 'none',
        borderLeft: '2px solid transparent',
        paddingLeft: '0.65rem',
        marginLeft: '-2px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--foreground)';
        e.currentTarget.style.borderLeftColor = 'color-mix(in oklch, var(--primary) 55%, transparent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--muted-foreground)';
        e.currentTarget.style.borderLeftColor = 'transparent';
      }}
    >
      {children}
    </a>
  );
}

export function DocsFoundations() {
  const groupsForSections = DOCS_NAV_GROUPS.filter((g) => g.id !== 'overview');

  return (
    <div style={docsPageWrap}>
      <div
        id="docs-foundations-intro"
        style={{
          display: 'grid',
          gap: '2.5rem',
          alignItems: 'start',
          gridTemplateColumns: 'minmax(0, 1fr)',
        }}
        className="docs-foundations-grid"
      >
        <div style={{ minWidth: 0 }}>
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

          <DocCallout title="How this hub is organized">
            The left sidebar follows the same groups as below. Each card opens a focused reference page — skim here,
            then deep-link from your editor using the path shown on the card.
          </DocCallout>

          <div id="source" style={{ marginTop: '2.25rem', marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '0.75rem',
              }}
            >
              <Code2Icon size={18} style={{ color: 'var(--primary)' }} />
              <h2
                style={{
                  fontFamily: 'var(--type-h1-family)',
                  fontSize: 'var(--type-h2-size)',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Source files
              </h2>
            </div>
            <p style={{ ...docMuted, maxWidth: '62ch', marginBottom: '1rem' }}>
              Tokens and global motion live in one theme file. Patterns import from <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em' }}>@/krowe</code>; UI primitives from <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em' }}>@/app/components</code>.
            </p>
            <DocSnippet title="theme.css" code={`/* Krowe tokens */\n@import './theme.css';\n\n/* Example */\ncolor: var(--foreground);\nbox-shadow: var(--shadow-2);`} />
          </div>

          {groupsForSections.map((group) => (
            <section
              key={group.id}
              id={group.id}
              style={{
                marginBottom: '2.75rem',
                scrollMarginTop: '5.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '0.75rem 1.5rem',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--type-caption-size)',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                      margin: '0 0 0.35rem',
                    }}
                  >
                    Section
                  </p>
                  <h2
                    style={{
                      fontFamily: 'var(--type-h1-family)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                      fontWeight: 600,
                      color: 'var(--foreground)',
                      margin: 0,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {group.label}
                  </h2>
                </div>
                <p style={{ ...docMuted, margin: 0, maxWidth: '42ch', fontSize: 'var(--type-body-s-size)' }}>
                  {sectionIntro[group.id] ?? ''}
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gap: '1rem',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                }}
              >
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={`/docs/${item.path}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      padding: '1.15rem 1.2rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)',
                      background: 'var(--background)',
                      boxShadow: 'var(--shadow-1)',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition:
                        'border-color var(--duration-fast) var(--ease-out-smooth), box-shadow var(--duration-fast) var(--ease-out-smooth), transform var(--duration-fast) var(--ease-out-smooth)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'color-mix(in oklch, var(--primary) 35%, var(--border))';
                      e.currentTarget.style.boxShadow = 'var(--shadow-2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: 'var(--foreground)',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.35,
                        }}
                      >
                        {item.label}
                      </span>
                      <ArrowRightIcon size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }} />
                    </div>
                    <p
                      style={{
                        ...docMuted,
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {DOC_BLURBS[item.path] ?? 'Reference documentation.'}
                    </p>
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--muted-foreground)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      /docs/{item.path}
                    </code>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <footer
            style={{
              marginTop: '3rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem 1.25rem',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)' }}>
              <BookOpenIcon size={16} style={{ color: 'var(--primary)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-s-size)' }}>
                Prefer the sidebar on wide screens — it stays in sync with this outline.
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)' }}>
              <LayersIcon size={16} style={{ color: 'var(--primary)' }} />
              <Link to="/docs/colors" style={{ fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
                Open Colors →
              </Link>
            </div>
          </footer>
        </div>

        <aside
          className="docs-foundations-toc"
          style={{
            position: 'sticky',
            top: '5.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            background: 'color-mix(in oklch, var(--surface-subtle) 80%, var(--background))',
            padding: '1rem 1rem 1.15rem',
            boxShadow: 'var(--shadow-1)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-caption-size)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              margin: '0 0 0.75rem',
              paddingLeft: '0.65rem',
            }}
          >
            On this page
          </p>
          <nav aria-label="Foundations page table of contents">
            <TocLink href="#docs-foundations-intro">Overview</TocLink>
            <TocLink href="#source">Source files</TocLink>
            {groupsForSections.map((g) => (
              <TocLink key={g.id} href={`#${g.id}`}>
                {g.label}
              </TocLink>
            ))}
          </nav>
        </aside>
      </div>

      <style>{`
        .docs-foundations-toc { display: none; }
        @media (min-width: 1100px) {
          .docs-foundations-grid {
            grid-template-columns: minmax(0, 1fr) 200px;
            gap: 2.75rem;
          }
          .docs-foundations-toc { display: block; }
        }
      `}</style>
    </div>
  );
}
