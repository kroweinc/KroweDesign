import { useState } from 'react';
import { CopyIcon, CheckIcon } from 'lucide-react';

export function DocsFoundations() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
      {/* Page header */}
      <DocPageHeader
        title="Foundations"
        description="The core tokens - colors, typography, spacing, shadows, and motion - that form the base of the Krowe design system."
      />

      {/* Colors */}
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

      {/* Typography */}
      <DocSection id="typography" title="Typography">
        <p style={bodyStyle}>
          Instrument Serif for editorial moments. Geist Sans for everything else. Geist Mono for numeric data.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <TypeSample
            label="Display XL"
            token="display-xl"
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
            token="display-l"
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
            token="display-m"
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
            token="h1"
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
            token="body"
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
            token="caption"
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
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
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

      {/* Spacing */}
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

      {/* Radius */}
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

      {/* Shadow */}
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
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <h4 style={{ ...h4Style, marginBottom: '1rem' }}>Button Glow</h4>
          <p style={{ ...bodySmallStyle, marginBottom: '1.5rem' }}>
            Primary buttons on hover gain an orange glow. This is a custom shadow, not one of the four levels.
          </p>
          <ButtonGlowDemo />
        </div>
      </DocSection>

      {/* Motion */}
      <DocSection id="motion" title="Motion">
        <p style={bodyStyle}>
          Five durations plus the signature cubic-bezier(0.16, 1, 0.3, 1) easing for graceful snappy motion.
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
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <BezierCurveDemo />
          </div>
        </div>
      </DocSection>

      {/* Motifs */}
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
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
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
    </div>
  );
}

// Helper components

function RadiusDemo({ name, value, size }: { name: string; value: string; size: number }) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      onClick={() => {
        navigator.clipboard?.writeText(`var(--radius-${name})`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      style={{ textAlign: 'center', cursor: 'pointer' }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: 'var(--primary)',
          borderRadius: `var(--radius-${name})`,
          marginBottom: '0.75rem',
          transition: 'all var(--duration-fast) var(--ease-out-smooth)',
        }}
      />
      <div style={{ ...captionUpperStyle, marginBottom: '0.25rem' }}>{name}</div>
      <div style={captionStyle}>{value}</div>
      {copied && <div style={{ ...captionStyle, color: 'var(--success)', marginTop: '0.25rem' }}>Copied!</div>}
    </div>
  );
}

function ShadowDemo({ shadowVar, label, description }: { shadowVar: string; label: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '2rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: `var(--${shadowVar})`,
        transition: 'all var(--duration-normal) var(--ease-out-smooth)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <div style={{ ...h4Style, marginBottom: '0.5rem' }}>{label}</div>
      <div style={bodySmallStyle}>{description}</div>
      <code
        style={{
          display: 'block',
          marginTop: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--type-caption-size)',
          color: 'var(--muted-foreground)',
        }}
      >
        var(--{shadowVar})
      </code>
    </div>
  );
}

function ButtonGlowDemo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '0.75rem 1.5rem',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-size)',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all var(--duration-normal) var(--ease-out-smooth)',
          boxShadow: isHovered
            ? '0 0 0 4px color-mix(in oklch, var(--primary) 15%, transparent), var(--shadow-4)'
            : 'var(--shadow-4)',
        }}
      >
        Hover to see glow
      </button>
    </div>
  );
}

function DurationDemo({ name, value, usage }: { name: string; value: string; usage: string }) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div
      onClick={() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 100);
      }}
      style={{
        padding: '1rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
      }}
    >
      <div style={{ ...captionUpperStyle, marginBottom: '0.5rem' }}>{name}</div>
      <div style={{ ...h4Style, marginBottom: '0.25rem' }}>{value}</div>
      <div style={{ ...bodySmallStyle, marginBottom: '1rem' }}>{usage}</div>
      <div
        style={{
          height: '4px',
          background: 'var(--surface-subtle)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: isAnimating ? '100%' : '0%',
            background: 'var(--primary)',
            transition: `width var(--duration-${name}) var(--ease-out-smooth)`,
          }}
        />
      </div>
    </div>
  );
}

function BezierCurveDemo() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ flex: 1 }}>
          <code
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--type-body-size)',
              color: 'var(--foreground)',
            }}
          >
            cubic-bezier(0.16, 1, 0.3, 1)
          </code>
          <p style={{ ...bodySmallStyle, marginTop: '0.5rem' }}>
            A snappy ease-out curve. Starts fast, finishes gracefully. Used across all motion.
          </p>
        </div>
        <button
          onClick={() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 100);
          }}
          style={{
            padding: '0.5rem 1rem',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Play
        </button>
      </div>

      <div
        style={{
          position: 'relative',
          height: '120px',
          background: 'var(--surface-subtle)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: isAnimating ? 'calc(100% - 48px)' : '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            background: 'var(--primary)',
            borderRadius: 'var(--radius-md)',
            transition: 'left var(--duration-slow) var(--ease-out-smooth)',
          }}
        />
      </div>
    </div>
  );
}

function EmberGlyphScaled({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}

function MotifDosDonts({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
      <div
        style={{
          padding: '1rem',
          background: 'white',
          border: '1px solid var(--success)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <h5
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            fontWeight: 600,
            color: 'var(--success)',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Do
        </h5>
        <ul style={{ ...bodySmallStyle, listStyle: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {dos.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          padding: '1rem',
          background: 'white',
          border: '1px solid var(--danger)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <h5
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            fontWeight: 600,
            color: 'var(--danger)',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Don't
        </h5>
        <ul style={{ ...bodySmallStyle, listStyle: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {donts.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Helper components

function DocPageHeader({ title, description }: { title: string; description: string }) {
  return (
    <header
      style={{
        paddingBottom: '2rem',
        marginBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--type-display-m-family)',
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          lineHeight: 'var(--type-display-m-line-height)',
          letterSpacing: 'var(--type-display-m-letter-spacing)',
          fontWeight: 'var(--type-display-m-weight)',
          color: 'var(--foreground)',
          marginBottom: '1rem',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontFamily: 'var(--type-body-l-family)',
          fontSize: 'var(--type-body-l-size)',
          lineHeight: 'var(--type-body-l-line-height)',
          color: 'var(--muted-foreground)',
          maxWidth: '65ch',
        }}
      >
        {description}
      </p>
    </header>
  );
}

function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: '4rem' }}>
      <h2
        style={{
          fontFamily: 'var(--type-h1-family)',
          fontSize: 'var(--type-h1-size)',
          fontWeight: 'var(--type-h1-weight)',
          color: 'var(--foreground)',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <EmberGlyph />
        {title}
      </h2>
      {children}
    </section>
  );
}

function ColorGroup({ title, colors }: { title: string; colors: Array<{
  token: string;
  hex: string;
  oklch: string;
  name: string;
  usage: string;
}> }) {
  return (
    <div>
      <h3 style={h3Style}>{title}</h3>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', marginTop: '1rem' }}>
        {colors.map((color) => (
          <ColorSwatch key={color.token} {...color} />
        ))}
      </div>
    </div>
  );
}

function ColorSwatch({ token, hex, oklch, name, usage }: {
  token: string;
  hex: string;
  oklch: string;
  name: string;
  usage: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        padding: '1rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div
        style={{
          height: '80px',
          borderRadius: 'var(--radius-md)',
          background: `var(${token})`,
          border: '1px solid var(--border)',
        }}
      />
      <div>
        <div style={{ ...h4Style, marginBottom: '0.25rem' }}>{name}</div>
        <code
          onClick={() => copy(token)}
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--type-caption-size)',
            color: 'var(--muted-foreground)',
            cursor: 'pointer',
            marginBottom: '0.25rem',
          }}
        >
          {token}
        </code>
        <div style={{ ...captionStyle, marginBottom: '0.25rem' }}>{hex}</div>
        <div style={{ ...captionStyle, marginBottom: '0.5rem' }}>{oklch}</div>
        <div style={bodySmallStyle}>{usage}</div>
      </div>
      <button
        onClick={() => copy(token)}
        style={{
          marginTop: 'auto',
          padding: '0.5rem',
          background: 'var(--surface-subtle)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-caption-size)',
          fontWeight: 600,
          color: 'var(--foreground)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          transition: 'all var(--duration-fast) var(--ease-out-smooth)',
        }}
      >
        {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
        {copied ? 'Copied!' : 'Copy token'}
      </button>
    </div>
  );
}

function TypeSample({
  label,
  token,
  text,
  family,
  size,
  weight,
  lineHeight,
  letterSpacing,
  usage,
  style,
}: any) {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <div style={{ ...captionUpperStyle, marginBottom: '0.5rem' }}>{label}</div>
          <div style={style}>{text}</div>
        </div>
        <div style={{ fontSize: 'var(--type-caption-size)', fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)', textAlign: 'right', minWidth: '200px' }}>
          <div style={{ marginBottom: '0.25rem' }}><strong>Family:</strong> {family}</div>
          <div style={{ marginBottom: '0.25rem' }}><strong>Size:</strong> {size}</div>
          <div style={{ marginBottom: '0.25rem' }}><strong>Weight:</strong> {weight}</div>
          <div style={{ marginBottom: '0.25rem' }}><strong>Line height:</strong> {lineHeight}</div>
          <div style={{ marginBottom: '0.25rem' }}><strong>Letter spacing:</strong> {letterSpacing}</div>
          <div style={{ marginTop: '0.75rem', fontStyle: 'italic' }}>{usage}</div>
        </div>
      </div>
    </div>
  );
}

function SpacingToken({ name, value, token }: { name: string; value: string; token: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      onClick={() => {
        navigator.clipboard?.writeText(token);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      style={{
        padding: '1rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'all var(--duration-fast) var(--ease-out-smooth)',
      }}
    >
      <div
        style={{
          height: '60px',
          background: 'var(--primary-soft)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.75rem',
        }}
      >
        <div
          style={{
            width: `var(${token})`,
            height: `var(${token})`,
            background: 'var(--primary)',
            borderRadius: 'var(--radius-sm)',
          }}
        />
      </div>
      <div style={{ ...captionUpperStyle, marginBottom: '0.25rem' }}>{name}</div>
      <div style={captionStyle}>{value}</div>
      <code style={{ ...captionStyle, display: 'block', marginTop: '0.25rem' }}>{token}</code>
      {copied && <div style={{ ...captionStyle, color: 'var(--success)', marginTop: '0.5rem' }}>Copied!</div>}
    </div>
  );
}

function EmberGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}

// Shared styles
const bodyStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-size)',
  lineHeight: 'var(--type-body-line-height)',
  color: 'var(--foreground)',
  margin: 0,
};

const bodySmallStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-s-size)',
  lineHeight: 'var(--type-body-s-line-height)',
  color: 'var(--muted-foreground)',
};

const h3Style = {
  fontFamily: 'var(--type-h3-family)',
  fontSize: 'var(--type-h3-size)',
  fontWeight: 'var(--type-h3-weight)',
  color: 'var(--foreground)',
  margin: 0,
};

const h4Style = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-size)',
  fontWeight: 600,
  color: 'var(--foreground)',
  margin: 0,
};

const captionStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-caption-size)',
  color: 'var(--muted-foreground)',
};

const captionUpperStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-caption-size)',
  fontWeight: 600,
  color: 'var(--muted-foreground)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};
