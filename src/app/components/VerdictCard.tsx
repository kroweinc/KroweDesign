import { useState, useEffect } from 'react';
import { DownloadIcon, MessageCircleIcon } from 'lucide-react';

type Verdict = 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';

interface VerdictCardProps {
  verdict: Verdict;
  summary: string;
  animateIn?: boolean;
  onExportPDF?: () => void;
  onAskFollowUp?: () => void;
}

export function VerdictCard({
  verdict,
  summary,
  animateIn = true,
  onExportPDF,
  onAskFollowUp,
}: VerdictCardProps) {
  const [phase, setPhase] = useState<'hidden' | 'stamp' | 'badge' | 'done'>(
    animateIn ? 'hidden' : 'done'
  );

  useEffect(() => {
    if (!animateIn) return;
    const t1 = setTimeout(() => setPhase('stamp'), 120);
    const t2 = setTimeout(() => setPhase('badge'), 480);
    const t3 = setTimeout(() => setPhase('done'), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [animateIn]);

  const verdictConfig: Record<Verdict, { color: string; bgColor: string; label: string }> = {
    Proceed: { color: 'var(--success)', bgColor: 'var(--success-soft)', label: 'Strong signal — build it' },
    Refine: { color: 'var(--primary)', bgColor: 'var(--primary-soft)', label: 'Close, but needs work' },
    Pivot: { color: 'var(--warning)', bgColor: 'var(--warning-soft)', label: 'Redirect before building' },
    Rethink: { color: 'var(--danger)', bgColor: 'var(--danger-soft)', label: 'Pause and reconsider' },
  };

  const config = verdictConfig[verdict];
  const isVisible = phase !== 'hidden';

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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Impact flash — radial orange behind the verdict word */}
      {phase === 'stamp' && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: `radial-gradient(circle, color-mix(in oklch, var(--primary) 35%, transparent) 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            animation: 'impact-flash 420ms var(--ease-out-smooth) forwards',
            pointerEvents: 'none',
          }}
        />
      )}

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
          textShadow: '0 2px 20px color-mix(in oklch, var(--primary) 22%, transparent)',
          animation: isVisible ? 'stamp-in 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none',
          opacity: isVisible ? undefined : 0,
        }}
      >
        {verdict}
      </h1>

      {/* Semantic badge — staggered after stamp */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          background: config.bgColor,
          border: `1px solid ${config.color}`,
          borderRadius: 'var(--radius-full)',
          marginBottom: '1.5rem',
          opacity: phase === 'badge' || phase === 'done' ? 1 : 0,
          transform: phase === 'badge' || phase === 'done' ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 180ms var(--ease-out-smooth), transform 180ms var(--ease-out-smooth)',
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
          opacity: phase === 'done' ? 1 : 0,
          transform: phase === 'done' ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 200ms var(--ease-out-smooth), transform 200ms var(--ease-out-smooth)',
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
          opacity: phase === 'done' ? 1 : 0,
          transition: 'opacity 200ms var(--ease-out-smooth) 60ms',
        }}
      >
        <VerdictButton onClick={onExportPDF} icon={<DownloadIcon size={16} />} variant="secondary">
          Export PDF
        </VerdictButton>
        <VerdictButton onClick={onAskFollowUp} icon={<MessageCircleIcon size={16} />} variant="primary">
          Ask Krowe a follow-up
        </VerdictButton>
      </div>
    </div>
  );
}

function VerdictButton({
  children,
  onClick,
  icon,
  variant,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant: 'primary' | 'secondary';
}) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--type-body-size)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all var(--duration-fast) var(--ease-out-smooth)',
    overflow: 'hidden',
    position: 'relative',
  };

  const variantStyle: React.CSSProperties = variant === 'primary'
    ? { background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)', color: 'white', border: 'none', boxShadow: 'var(--shadow-4)' }
    : { background: 'var(--surface-subtle)', color: 'var(--foreground)', border: '1px solid var(--border)' };

  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variantStyle }}
      onMouseEnter={(e) => {
        if (variant === 'primary') { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.filter = 'brightness(0.95)'; }
        if (variant === 'secondary') { e.currentTarget.style.background = 'var(--background)'; e.currentTarget.style.borderColor = 'var(--primary)'; }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = ''; }
        if (variant === 'secondary') { e.currentTarget.style.background = 'var(--surface-subtle)'; e.currentTarget.style.borderColor = 'var(--border)'; }
      }}
    >
      {icon}
      {children}
    </button>
  );
}
