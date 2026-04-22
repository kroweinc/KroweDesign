import { Link } from 'react-router';
import { DocSection } from '../DocsPageChrome';
import {
  bodyStyle,
  bodySmallStyle,
  h3Style,
  h4Style,
  captionStyle,
  ColorGroup,
  TypeSample,
  SpacingToken,
  RadiusDemo,
  ShadowDemo,
  ButtonGlowDemo,
  DurationDemo,
  BezierCurveDemo,
  EmberGlyphScaled,
  MotifDosDonts,
} from './foundationsBlocks';

const pageNote = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-s-size)',
  color: 'var(--muted-foreground)',
  marginTop: '1.5rem',
  maxWidth: '60ch',
} as const;


export function FoundationColorsSections() {
  return (
    <>
      <DocSection id="colors" title="Colors">
        <p style={bodyStyle}>
          Warm, not cold. One orange accent per screen. Every shadow mixes 8% orange for warmth.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <ColorGroup
            title="Primary Orange"
            colors={[
              {
                token: '--primary',
                hex: '#f97316',
                oklch: 'oklch(70% 0.17 40)',
                name: 'Primary',
                usage: 'Active nav, primary CTA, data-viz primary series',
              },
              {
                token: '--primary-hover',
                hex: '#ea580c',
                oklch: 'mix 88% with black',
                name: 'Primary Hover',
                usage: 'Button hover states',
              },
              {
                token: '--primary-soft',
                hex: '#ffedd5',
                oklch: 'mix 12% with white',
                name: 'Primary Soft',
                usage: 'Subtle backgrounds, highlights',
              },
              {
                token: '--primary-accent',
                hex: '#ff6a4d',
                oklch: 'oklch(68% 0.19 35)',
                name: 'Primary Accent',
                usage: 'Complementary accents, ember glyph detail',
              },
            ]}
          />

          <ColorGroup
            title="Warm Neutrals"
            colors={[
              {
                token: '--background',
                hex: '#fefcfb',
                oklch: 'oklch(99% 0.003 60)',
                name: 'Background',
                usage: 'Page canvas, main surface',
              },
              {
                token: '--surface-subtle',
                hex: '#faf8f7',
                oklch: 'oklch(98% 0.005 60)',
                name: 'Surface Subtle',
                usage: 'Sidebar, hint boxes, secondary surfaces',
              },
              {
                token: '--foreground',
                hex: '#2d2622',
                oklch: 'oklch(20% 0.01 60)',
                name: 'Foreground',
                usage: 'Primary text, headings',
              },
              {
                token: '--muted-foreground',
                hex: '#857568',
                oklch: 'oklch(50% 0.01 60)',
                name: 'Muted Foreground',
                usage: 'Secondary text, captions',
              },
              {
                token: '--border',
                hex: '#ebe8e5',
                oklch: 'oklch(92% 0.005 60)',
                name: 'Border',
                usage: 'Dividers, card edges, input borders',
              },
            ]}
          />

          <ColorGroup
            title="Semantic Colors"
            colors={[
              {
                token: '--success',
                hex: '#15803d',
                oklch: 'oklch(45% 0.15 145)',
                name: 'Success',
                usage: 'Success messages, positive indicators',
              },
              {
                token: '--warning',
                hex: '#b45309',
                oklch: 'oklch(50% 0.13 60)',
                name: 'Warning',
                usage: 'Warning messages, caution indicators',
              },
              {
                token: '--danger',
                hex: '#b91c1c',
                oklch: 'oklch(45% 0.19 25)',
                name: 'Danger',
                usage: 'Error messages, destructive actions',
              },
            ]}
          />
        </div>
      </DocSection>
    </>
  );
}

export function FoundationTypographySections() {
  return (
    <>
      <DocSection id="typography" title="Typography">
        <p style={bodyStyle}>
          Instrument Serif for editorial moments. Geist Sans for everything else. Geist Mono for numeric data.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <TypeSample
            label="Display XL"
            text="Your idea deserves a real gut-check"
            family="Instrument Serif"
            size="80px (5rem)"
            weight="400"
            lineHeight="1.1"
            letterSpacing="-0.03em"
            usage="Landing hero only"
            style={{
              fontFamily: 'var(--type-display-xl-family)',
              fontSize: 'var(--type-display-xl-size)',
              lineHeight: 'var(--type-display-xl-line-height)',
              letterSpacing: 'var(--type-display-xl-letter-spacing)',
              fontWeight: 'var(--type-display-xl-weight)',
            }}
          />

          <TypeSample
            label="Display L"
            text="Proceed"
            family="Instrument Serif"
            size="56px (3.5rem)"
            weight="400"
            lineHeight="1.15"
            letterSpacing="-0.02em"
            usage="Verdict words, sub-hero"
            style={{
              fontFamily: 'var(--type-display-l-family)',
              fontSize: 'var(--type-display-l-size)',
              lineHeight: 'var(--type-display-l-line-height)',
              letterSpacing: 'var(--type-display-l-letter-spacing)',
              fontWeight: 'var(--type-display-l-weight)',
            }}
          />

          <TypeSample
            label="Display M"
            text="Market Analysis"
            family="Instrument Serif"
            size="36px (2.25rem)"
            weight="400"
            lineHeight="1.25"
            letterSpacing="-0.015em"
            usage="Page titles, report section headers"
            style={{
              fontFamily: 'var(--type-display-m-family)',
              fontSize: 'var(--type-display-m-size)',
              lineHeight: 'var(--type-display-m-line-height)',
              letterSpacing: 'var(--type-display-m-letter-spacing)',
              fontWeight: 'var(--type-display-m-weight)',
            }}
          />

          <TypeSample
            label="H1"
            text="Your Business Validation Report"
            family="Geist Sans"
            size="30px (1.875rem)"
            weight="600"
            lineHeight="1.3"
            letterSpacing="-0.01em"
            usage="Section headers"
            style={{
              fontFamily: 'var(--type-h1-family)',
              fontSize: 'var(--type-h1-size)',
              lineHeight: 'var(--type-h1-line-height)',
              letterSpacing: 'var(--type-h1-letter-spacing)',
              fontWeight: 'var(--type-h1-weight)',
            }}
          />

          <TypeSample
            label="Body"
            text="Standard paragraph text for forms, cards, and general UI content. This is the default reading experience across the platform."
            family="Geist Sans"
            size="16px (1rem)"
            weight="400"
            lineHeight="1.6"
            letterSpacing="0"
            usage="Standard text, forms, cards"
            style={{
              fontFamily: 'var(--type-body-family)',
              fontSize: 'var(--type-body-size)',
              lineHeight: 'var(--type-body-line-height)',
              letterSpacing: 'var(--type-body-letter-spacing)',
              fontWeight: 'var(--type-body-weight)',
            }}
          />

          <TypeSample
            label="Caption"
            text="MARKET SIZE: $2.4B • LAST UPDATED: APR 2026"
            family="Geist Sans"
            size="12px (0.75rem)"
            weight="500"
            lineHeight="1.4"
            letterSpacing="0.08em"
            usage="Labels, metadata, timestamps (uppercase variant)"
            style={{
              fontFamily: 'var(--type-caption-family)',
              fontSize: 'var(--type-caption-size)',
              lineHeight: 'var(--type-caption-line-height)',
              letterSpacing: 'var(--type-caption-upper-letter-spacing)',
              fontWeight: 'var(--type-caption-weight)',
              textTransform: 'uppercase',
            }}
          />
        </div>

        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-1)',
          }}
        >
          <h4 style={{ ...h4Style, marginBottom: '1rem' }}>Typography Rules</h4>
          <ul style={{ ...bodyStyle, listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Never mix serif + sans inside a single button, input, or label</li>
            <li>Use serif (Instrument) only for editorial moments: hero, page titles, report headers, verdicts</li>
            <li>Use sans (Geist) for all UI, forms, navigation, body text</li>
            <li>Use mono (Geist Mono) for numeric data, financial figures, metrics</li>
          </ul>
        </div>
      </DocSection>
    </>
  );
}

export function FoundationSpaceSections() {
  return (
    <>
      <DocSection id="spacing" title="Spacing">
        <p style={bodyStyle}>4pt grid system for consistent rhythm. Ten scales from 2px to 96px.</p>

        <div
          style={{
            marginTop: '2rem',
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          }}
        >
          {[
            { name: 'xs', value: '2px', token: '--spacing-xs' },
            { name: 'sm', value: '4px', token: '--spacing-sm' },
            { name: 'md', value: '8px', token: '--spacing-md' },
            { name: 'lg', value: '12px', token: '--spacing-lg' },
            { name: 'xl', value: '16px', token: '--spacing-xl' },
            { name: '2xl', value: '24px', token: '--spacing-2xl' },
            { name: '3xl', value: '32px', token: '--spacing-3xl' },
            { name: '4xl', value: '48px', token: '--spacing-4xl' },
            { name: '5xl', value: '64px', token: '--spacing-5xl' },
            { name: '6xl', value: '96px', token: '--spacing-6xl' },
          ].map((space) => (
            <SpacingToken key={space.name} name={space.name} value={space.value} token={space.token} />
          ))}
        </div>
      </DocSection>
      <DocSection id="radius" title="Radius">
        <p style={bodyStyle}>Five scales from subtle to fully round.</p>

        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            alignItems: 'end',
          }}
        >
          {[
            { name: 'sm', value: '6px', size: 60 },
            { name: 'md', value: '10px', size: 80 },
            { name: 'lg', value: '16px', size: 100 },
            { name: 'xl', value: '24px', size: 120 },
            { name: 'full', value: '9999px', size: 100 },
          ].map((r) => (
            <RadiusDemo key={r.name} name={r.name} value={r.value} size={r.size} />
          ))}
        </div>
      </DocSection>
      <DocSection id="shadow" title="Shadow">
        <p style={bodyStyle}>
          Four elevation levels with 8% orange warmth. Every shadow brings ambient warmth to the interface.
        </p>

        <div
          style={{
            marginTop: '2rem',
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          }}
        >
          {[
            { name: 'shadow-1', label: 'Level 1', desc: 'Subtle lift' },
            { name: 'shadow-2', label: 'Level 2', desc: 'Card default' },
            { name: 'shadow-3', label: 'Level 3', desc: 'Card hover' },
            { name: 'shadow-4', label: 'Level 4', desc: 'Modal, popover' },
          ].map((s) => (
            <ShadowDemo key={s.name} shadowVar={s.name} label={s.label} description={s.desc} />
          ))}
        </div>

        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-1)',
          }}
        >
          <h4 style={{ ...h4Style, marginBottom: '1rem' }}>Button Glow</h4>
          <p style={{ ...bodySmallStyle, marginBottom: '1.5rem' }}>
            Primary buttons on hover gain an orange glow. This is a custom shadow, not one of the four levels.
          </p>
          <ButtonGlowDemo />
        </div>
      </DocSection>
    </>
  );
}

export function FoundationMotionSections() {
  return (
    <>
      <DocSection id="timing-tokens" title="Timing tokens">
        <p style={bodyStyle}>
          CSS duration variables plus the signature cubic-bezier(0.16, 1, 0.3, 1) curve — same values referenced by the
          entrance demos above and by production patterns.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ ...h4Style, marginBottom: '1rem' }}>Durations</h4>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {[
              { name: 'fast', value: '100ms', usage: 'Micro-interactions' },
              { name: 'normal', value: '200ms', usage: 'Default transitions' },
              { name: 'slow', value: '350ms', usage: 'Page transitions' },
              { name: 'slower', value: '500ms', usage: 'Complex animations' },
              { name: 'slowest', value: '850ms', usage: 'Loading states' },
            ].map((d) => (
              <DurationDemo key={d.name} name={d.name} value={d.value} usage={d.usage} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ ...h4Style, marginBottom: '1rem' }}>Signature Easing</h4>
          <div
            style={{
              padding: '2rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-1)',
            }}
          >
            <BezierCurveDemo />
          </div>
        </div>
      </DocSection>
      <p style={pageNote}>
        These timings and curves show up across{' '}
        <Link to="/docs/patterns#pattern-marketing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Marketing</Link>,{' '}
        <Link to="/docs/patterns#pattern-onboarding" style={{ color: 'var(--primary)', fontWeight: 600 }}>Onboarding</Link>, and{' '}
        <Link to="/docs/patterns#pattern-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Report</Link> patterns.
      </p>
    </>
  );
}

export function FoundationMotifsSections() {
  return (
    <>
      <DocSection id="motifs" title="Motifs">
        <p style={bodyStyle}>
          Three signature visual elements: the ember glyph, blueprint grid, and sunrise gradient.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Ember Glyph */}
          <div>
            <h3 style={h3Style}>Ember Glyph</h3>
            <p style={{ ...bodySmallStyle, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              A four-circle golden-spiral symbol. Use as a brand mark, loading spinner, or section divider.
            </p>
            <div
            style={{
              padding: '2rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-1)',
              display: 'flex',
              gap: '3rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
            >
              {[12, 16, 24, 48].map((size) => (
                <div key={size} style={{ textAlign: 'center' }}>
                  <EmberGlyphScaled size={size} />
                  <div style={{ ...captionStyle, marginTop: '0.5rem' }}>{size}px</div>
                </div>
              ))}
            </div>
            <MotifDosDonts
              dos={['Use for brand identity, section headers', 'Animate on loading states', 'Keep spacing balanced around it']}
              donts={['Do not recolor or distort', 'Never use more than one per viewport', 'Avoid decorative overuse']}
            />
          </div>

          {/* Blueprint Grid */}
          <div>
            <h3 style={h3Style}>Blueprint Grid</h3>
            <p style={{ ...bodySmallStyle, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              A radial-gradient grid overlay. Use at 20-30% opacity on large surfaces like landing hero or report canvas.
            </p>
            <div
              style={{
                padding: '4rem 2rem',
                background: 'var(--blueprint-grid)',
                backgroundSize: 'var(--blueprint-grid-size)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
              }}
            >
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--type-body-s-size)',
                  color: 'var(--foreground)',
                  background: 'color-mix(in srgb, var(--background) 90%, transparent)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                background: var(--blueprint-grid)
              </code>
            </div>
            <MotifDosDonts
              dos={['Use as background texture', 'Keep opacity low (20-30%)', 'Pair with large surfaces']}
              donts={['Do not use on small cards', 'Avoid layering multiple grids', 'Never use at full opacity']}
            />
          </div>

          {/* Sunrise Gradient */}
          <div>
            <h3 style={h3Style}>Sunrise Gradient</h3>
            <p style={{ ...bodySmallStyle, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              A five-stop warm gradient. Use for hero sections or major page headers.
            </p>
            <div
              style={{
                height: '160px',
                background: 'linear-gradient(135deg, #fff5f0 0%, #fff9f5 25%, #fffbf8 50%, #fef5ec 75%, #fef0e5 100%)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--type-body-s-size)',
                  color: 'var(--foreground)',
                  background: 'color-mix(in srgb, white 80%, transparent)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                linear-gradient(135deg, #fff5f0 0%, ... #fef0e5 100%)
              </code>
            </div>
            <MotifDosDonts
              dos={['Use for landing hero', 'Pair with blueprint grid overlay', 'Reserve for major moments']}
              donts={['Do not use on small components', 'Never combine with other gradients', 'Avoid on data-heavy surfaces']}
            />
          </div>
        </div>
      </DocSection>
      <p style={pageNote}>
        The blueprint grid and sunrise wash anchor{' '}
        <Link to="/docs/patterns#pattern-marketing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Marketing landing</Link>{' '}
        and <Link to="/docs/patterns#pattern-auth" style={{ color: 'var(--primary)', fontWeight: 600 }}>Auth split</Link>.
      </p>
    </>
  );
}
