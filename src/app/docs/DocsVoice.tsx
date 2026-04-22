import type { CSSProperties } from 'react';
import { DocPageHeader, DocSection, docP, docMuted } from './DocsPageChrome';

const listStyle: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-size)',
  lineHeight: 1.6,
  color: 'var(--foreground)',
  paddingLeft: '1.25rem',
  margin: '1rem 0 0',
  maxWidth: '65ch',
};

export function DocsVoice() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
      <DocPageHeader
        title="Voice & copy"
        description="Plainspoken, warm, honest — like a senior friend who has built companies. Not a chatbot, not a slide deck."
      />

      <DocSection id="personality" title="Personality">
        <p style={docP}>
          Think NYT business desk meets a trusted advisor’s notebook. Editorial moments use Instrument Serif; everything
          else stays in Geist Sans.
        </p>
      </DocSection>

      <DocSection id="do" title="Do say">
        <ul style={listStyle}>
          <li style={{ marginBottom: '0.5rem' }}>“Let’s see if this holds up.”</li>
          <li style={{ marginBottom: '0.5rem' }}>“Here’s what we found.”</li>
          <li style={{ marginBottom: '0.5rem' }}>“The data suggests…” / “This might work, but…”</li>
          <li style={{ marginBottom: '0.5rem' }}>“Worth a shot” / “Not quite there yet.”</li>
        </ul>
      </DocSection>

      <DocSection id="avoid" title="Avoid">
        <ul style={listStyle}>
          <li style={{ marginBottom: '0.5rem' }}>Hype words: “supercharge,” “unleash,” “revolutionize,” “game-changing.”</li>
          <li style={{ marginBottom: '0.5rem' }}>Corporate filler: “leverage,” “empower,” “transform” (unless literal).</li>
          <li style={{ marginBottom: '0.5rem' }}>Generic empty states (“No data”) — be specific and invite action.</li>
          <li style={{ marginBottom: '0.5rem' }}>Exclamation marks in body copy (sparingly in CTAs only).</li>
        </ul>
      </DocSection>

      <DocSection id="patterns" title="Microcopy patterns">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
          <PatternBlock
            label="Primary CTA"
            good="Start validating"
            bad="Get started"
          />
          <PatternBlock
            label="Signup step"
            good="Next question"
            bad="Continue"
          />
          <PatternBlock
            label="Final step"
            good="Generate my report"
            bad="Submit"
          />
          <PatternBlock
            label="Empty state"
            good="No ideas yet. What are you thinking about?"
            bad="You have no items"
          />
          <PatternBlock
            label="Recoverable error"
            good="The URL didn’t load — try pasting again, or skip and fill in manually."
            bad="Error 404"
          />
        </div>
      </DocSection>
    </div>
  );
}

function PatternBlock({ label, good, bad }: { label: string; good: string; bad: string }) {
  return (
    <div
      style={{
        padding: '1.25rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        background: 'var(--background)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-caption-size)',
          fontWeight: 600,
          color: 'var(--muted-foreground)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '0.75rem',
        }}
      >
        {label}
      </div>
      <p style={{ ...docMuted, marginBottom: '0.5rem' }}>
        <strong style={{ color: 'var(--success)' }}>Prefer</strong> {good}
      </p>
      <p style={docMuted}>
        <strong style={{ color: 'var(--danger)' }}>Avoid</strong> {bad}
      </p>
    </div>
  );
}
