import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router';
import { MessageCircleIcon, ThumbsUpIcon, BanIcon, TextQuoteIcon } from 'lucide-react';
import {
  DocPageHeader,
  DocSection,
  docP,
  docMuted,
  DocCallout,
  DocCardGrid,
  DocInfoCard,
  DocSnippet,
  DocsHeroBento,
  DocsSegmented,
  docsPageWrap,
} from './DocsPageChrome';

const listStyle: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-size)',
  lineHeight: 1.6,
  color: 'var(--foreground)',
  paddingLeft: '1.25rem',
  margin: '1rem 0 0',
  maxWidth: '65ch',
};

type VoicePanel = 'personality' | 'do' | 'avoid' | 'microcopy';

const VOICE_TABS: { value: VoicePanel; label: string }[] = [
  { value: 'personality', label: 'Voice' },
  { value: 'do', label: 'Do say' },
  { value: 'avoid', label: 'Avoid' },
  { value: 'microcopy', label: 'Patterns' },
];

export function DocsVoice() {
  const [panel, setPanel] = useState<VoicePanel>('personality');

  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Voice & copy"
        description="Plainspoken, warm, honest — like a senior friend who has built companies. Not a chatbot, not a slide deck. This page encodes how Krowe sounds in UI strings, marketing lines, and recovery copy."
      />

      <DocsHeroBento
        eyebrow="Tone"
        title="Confident, never breathless."
        description="We explain tradeoffs, celebrate clarity, and skip hype. Editorial moments get serif; instructions stay in sans. When something breaks, we say what happened and what to try next — never blame the reader."
        chips={[
          { k: 'Cadence', v: 'Short sentences' },
          { k: 'Honesty', v: 'Maybe / worth / not yet' },
          { k: 'CTAs', v: 'Verb + outcome' },
        ]}
      />

      <DocCallout title="Use with components">
        Pair these rules with{' '}
        <Link to="/docs/components" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Components
        </Link>{' '}
        for empty and error states, and with{' '}
        <Link to="/docs/buttons" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Buttons
        </Link>{' '}
        for action labels.
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="Personality"
          description="NYT business desk meets advisor notebook — warm, precise, never performative."
        />
        <DocInfoCard
          title="Do say"
          description="Acknowledge uncertainty; invite the next step; name specifics instead of generic cheer."
        />
        <DocInfoCard
          title="Avoid"
          description="Hype chains, corporate filler, empty data shrugs, spammy punctuation."
        />
        <DocInfoCard
          title="Microcopy patterns"
          description="Prefer / Avoid pairs for CTAs, steps, empty states, and recoverable errors."
        />
      </DocCardGrid>

      <DocSnippet title="Example line" code={`"Let's see if this holds up."`} />

      <DocSection id="voice-browser" title="Browse the voice system">
        <p style={docP}>
          Use the segmented control to jump between pillars — same treatment as interactive docs elsewhere, so this tab
          feels consistent with Components and Cards.
        </p>
        <div style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
          <DocsSegmented<VoicePanel>
            ariaLabel="Voice documentation sections"
            value={panel}
            onChange={setPanel}
            options={VOICE_TABS}
          />
        </div>

        <div
          style={{
            padding: '1.5rem 1.35rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border)',
            background: `
              radial-gradient(560px 200px at 12% 0%, color-mix(in oklch, var(--primary) 7%, transparent), transparent 58%),
              var(--background)
            `,
            minHeight: '280px',
          }}
        >
          {panel === 'personality' && (
            <>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                  color: 'var(--primary)',
                }}
              >
                <MessageCircleIcon size={18} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-caption-size)',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Personality
                </span>
              </div>
              <p style={docP}>
                Think NYT business desk meets a trusted advisor’s notebook. Editorial moments use Instrument Serif;
                everything else stays in Geist Sans.
              </p>
            </>
          )}

          {panel === 'do' && (
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--success)' }}>
                <ThumbsUpIcon size={18} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-caption-size)',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Do say
                </span>
              </div>
              <ul style={listStyle}>
                <li style={{ marginBottom: '0.5rem' }}>“Let’s see if this holds up.”</li>
                <li style={{ marginBottom: '0.5rem' }}>“Here’s what we found.”</li>
                <li style={{ marginBottom: '0.5rem' }}>“The data suggests…” / “This might work, but…”</li>
                <li style={{ marginBottom: '0.5rem' }}>“Worth a shot” / “Not quite there yet.”</li>
              </ul>
            </>
          )}

          {panel === 'avoid' && (
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--danger)' }}>
                <BanIcon size={18} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-caption-size)',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Avoid
                </span>
              </div>
              <ul style={listStyle}>
                <li style={{ marginBottom: '0.5rem' }}>Hype words: “supercharge,” “unleash,” “revolutionize,” “game-changing.”</li>
                <li style={{ marginBottom: '0.5rem' }}>Corporate filler: “leverage,” “empower,” “transform” (unless literal).</li>
                <li style={{ marginBottom: '0.5rem' }}>Generic empty states (“No data”) — be specific and invite action.</li>
                <li style={{ marginBottom: '0.5rem' }}>Exclamation marks in body copy (sparingly in CTAs only).</li>
              </ul>
            </>
          )}

          {panel === 'microcopy' && (
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                <TextQuoteIcon size={18} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-caption-size)',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Microcopy patterns
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <PatternBlock label="Primary CTA" good="Start validating" bad="Get started" />
                <PatternBlock label="Signup step" good="Next question" bad="Continue" />
                <PatternBlock label="Final step" good="Generate my report" bad="Submit" />
                <PatternBlock label="Empty state" good="No ideas yet. What are you thinking about?" bad="You have no items" />
                <PatternBlock
                  label="Recoverable error"
                  good="The URL didn’t load — try pasting again, or skip and fill in manually."
                  bad="Error 404"
                />
              </div>
            </>
          )}
        </div>
      </DocSection>
    </div>
  );
}

function PatternBlock({ label, good, bad }: { label: string; good: string; bad: string }) {
  return (
    <div
      style={{
        padding: '1.2rem 1.25rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid color-mix(in oklch, var(--border) 85%, var(--primary) 8%)',
        background: 'color-mix(in oklch, var(--primary) 3%, var(--background))',
        boxShadow: 'var(--shadow-1)',
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
