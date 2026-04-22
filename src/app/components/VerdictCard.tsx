import { DownloadIcon, MessageCircleIcon } from 'lucide-react';

type Verdict = 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';

interface VerdictCardProps {
  verdict: Verdict;
  summary: string;
  onExportPDF?: () => void;
  onAskFollowUp?: () => void;
}

export function VerdictCard({
  verdict,
  summary,
  onExportPDF,
  onAskFollowUp,
}: VerdictCardProps) {
  const verdictConfig: Record<
    Verdict,
    { color: string; bgColor: string; label: string }
  > = {
    Proceed: {
      color: 'var(--success)',
      bgColor: 'var(--success-soft)',
      label: 'Strong signal - build it',
    },
    Refine: {
      color: 'var(--primary)',
      bgColor: 'var(--primary-soft)',
      label: 'Close, but needs work',
    },
    Pivot: {
      color: 'var(--warning)',
      bgColor: 'var(--warning-soft)',
      label: 'Redirect before building',
    },
    Rethink: {
      color: 'var(--danger)',
      bgColor: 'var(--danger-soft)',
      label: 'Pause and reconsider',
    },
  };

  const config = verdictConfig[verdict];

  return (
    <div
      style={{
        padding: '3rem 2rem',
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-2)',
        textAlign: 'center',
        marginBottom: '3rem',
      }}
    >
      {/* Verdict word */}
      <h1
        style={{
          fontFamily: 'var(--type-display-l-family)',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          lineHeight: 'var(--type-display-l-line-height)',
          letterSpacing: 'var(--type-display-l-letter-spacing)',
          fontWeight: 'var(--type-display-l-weight)',
          color: 'var(--foreground)',
          margin: '0 0 1rem',
        }}
      >
        {verdict}
      </h1>

      {/* Semantic badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          background: config.bgColor,
          border: `1px solid ${config.color}`,
          borderRadius: 'var(--radius-full)',
          marginBottom: '1.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            fontWeight: 600,
            color: config.color,
          }}
        >
          {config.label}
        </span>
      </div>

      {/* Summary */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-l-size)',
          lineHeight: 'var(--type-body-l-line-height)',
          color: 'var(--foreground)',
          maxWidth: '65ch',
          margin: '0 auto 2rem',
        }}
      >
        {summary}
      </p>

      {/* Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={onExportPDF}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--surface-subtle)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all var(--duration-fast) var(--ease-out-smooth)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--background)';
            e.currentTarget.style.borderColor = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--surface-subtle)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          <DownloadIcon size={18} />
          Export PDF
        </button>

        <button
          onClick={onAskFollowUp}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            boxShadow: 'var(--shadow-4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--primary-hover)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--primary)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <MessageCircleIcon size={18} />
          Ask Krowe a follow-up
        </button>
      </div>
    </div>
  );
}
