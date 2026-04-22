import { useState } from 'react';
import type { CSSProperties } from 'react';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { BrandMark } from '@/app/components/BrandMark';

export const bodyStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-size)',
  lineHeight: 'var(--type-body-line-height)',
  color: 'var(--foreground)',
  margin: 0,
};

export const bodySmallStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-s-size)',
  lineHeight: 'var(--type-body-s-line-height)',
  color: 'var(--muted-foreground)',
};

export const h3Style = {
  fontFamily: 'var(--type-h3-family)',
  fontSize: 'var(--type-h3-size)',
  fontWeight: 'var(--type-h3-weight)',
  color: 'var(--foreground)',
  margin: 0,
};

export const h4Style = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-size)',
  fontWeight: 600,
  color: 'var(--foreground)',
  margin: 0,
};

export const captionStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-caption-size)',
  color: 'var(--muted-foreground)',
};

export const captionUpperStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-caption-size)',
  fontWeight: 600,
  color: 'var(--muted-foreground)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};

export function RadiusDemo({ name, value, size }: { name: string; value: string; size: number }) {
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

export function ShadowDemo({ shadowVar, label, description }: { shadowVar: string; label: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '2rem',
        background: 'var(--background)',
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
        {`var(--${shadowVar})`}
      </code>
    </div>
  );
}

export function ButtonGlowDemo() {
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

export function DurationDemo({ name, value, usage }: { name: string; value: string; usage: string }) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div
      onClick={() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 100);
      }}
      style={{
        padding: '1rem',
        background: 'var(--background)',
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

export function BezierCurveDemo() {
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

/** Docs motif scale row — raster brand mark at common sizes. */
export function EmberGlyphScaled({ size }: { size: number }) {
  return <BrandMark size={size} decorative />;
}

export function MotifDosDonts({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
      <div
        style={{
          padding: '1rem',
          background: 'var(--background)',
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
          background: 'var(--background)',
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

export function ColorGroup({ title, colors }: { title: string; colors: Array<{
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

export function ColorSwatch({ token, hex, oklch, name, usage }: {
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
        background: 'var(--background)',
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

export function TypeSample({
  label,
  text,
  family,
  size,
  weight,
  lineHeight,
  letterSpacing,
  usage,
  style,
}: {
  label: string;
  text: string;
  family: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
  usage: string;
  style: CSSProperties;
}) {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'var(--background)',
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

export function SpacingToken({ name, value, token }: { name: string; value: string; token: string }) {
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
        background: 'var(--background)',
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

