import { useTypewriter } from '../hooks/useTypewriter';
import { BrandMark } from './BrandMark';

interface AIRewritePanelProps {
  userAnswer: string;
  aiSuggestion: string;
  onUse?: () => void;
  onEdit?: () => void;
  onKeepMine?: () => void;
}

export function AIRewritePanel({
  userAnswer,
  aiSuggestion,
  onUse,
  onEdit,
  onKeepMine,
}: AIRewritePanelProps) {
  const { displayText, isDone } = useTypewriter(aiSuggestion, 22);

  return (
    <div
      className="ai-rewrite-panel"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        animation: 'fade-up-in var(--duration-normal) var(--ease-out-smooth)',
      }}
    >
      {/* User's answer */}
      <div
        style={{
          padding: '1.5rem',
          background: 'var(--surface-subtle)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-caption-size)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--muted-foreground)',
            marginBottom: '1rem',
            fontWeight: 600,
          }}
        >
          Your answer
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            lineHeight: 'var(--type-body-line-height)',
            color: 'var(--muted-foreground)',
            margin: 0,
          }}
        >
          {userAnswer}
        </p>
      </div>

      {/* AI suggestion */}
      <div
        style={{
          padding: '1.5rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated left border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '3px',
            height: '100%',
            background: 'var(--primary)',
            transformOrigin: 'top',
            animation: 'border-grow-down 400ms var(--ease-out-smooth) forwards',
          }}
        />

        <div style={{ paddingLeft: '0.75rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <BrandMark size={16} />
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-caption-size)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--primary)',
                fontWeight: 600,
              }}
            >
              A small nudge from Krowe
            </div>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-size)',
              lineHeight: 'var(--type-body-line-height)',
              color: 'var(--foreground)',
              margin: 0,
              marginBottom: '1.5rem',
              minHeight: '4.8em',
            }}
          >
            {displayText}
            {!isDone && (
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1em',
                  background: 'var(--primary)',
                  marginLeft: '1px',
                  verticalAlign: 'text-bottom',
                  animation: 'cursor-blink 700ms step-end infinite',
                }}
              />
            )}
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <ActionButton onClick={onUse} variant="primary">Use this</ActionButton>
            <ActionButton onClick={onEdit} variant="secondary">Edit and use</ActionButton>
            <ActionButton onClick={onKeepMine} variant="ghost">Keep mine</ActionButton>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ai-rewrite-panel {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  variant,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'ghost';
}) {
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      padding: '0.5rem 1rem',
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)',
      color: 'white',
      border: 'none',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-body-s-size)',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-out-smooth)',
    },
    secondary: {
      padding: '0.5rem 1rem',
      background: 'var(--surface-subtle)',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-body-s-size)',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-out-smooth)',
    },
    ghost: {
      padding: '0.5rem 1rem',
      background: 'transparent',
      color: 'var(--foreground)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-body-s-size)',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-out-smooth)',
    },
  };

  return (
    <button
      onClick={onClick}
      style={styles[variant]}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.currentTarget.style.filter = 'brightness(0.92)';
        if (variant === 'secondary') { e.currentTarget.style.background = 'var(--background)'; e.currentTarget.style.borderColor = 'var(--primary)'; }
        if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-subtle)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.currentTarget.style.filter = '';
        if (variant === 'secondary') { e.currentTarget.style.background = 'var(--surface-subtle)'; e.currentTarget.style.borderColor = 'var(--border)'; }
        if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
      }}
    >
      {children}
    </button>
  );
}
