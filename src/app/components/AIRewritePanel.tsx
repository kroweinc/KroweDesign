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
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        animation: 'slide-in var(--duration-normal) var(--ease-out-smooth)',
      }}
      className="ai-rewrite-panel"
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
            letterSpacing: '0.05em',
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
          borderLeft: '3px solid var(--primary)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <EmberGlyph />
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-caption-size)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
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
          }}
        >
          {aiSuggestion}
        </p>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={onUse}
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
              transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--primary)';
            }}
          >
            Use this
          </button>

          <button
            onClick={onEdit}
            style={{
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
            Edit and use
          </button>

          <button
            onClick={onKeepMine}
            style={{
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
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface-subtle)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Keep mine
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .ai-rewrite-panel {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function EmberGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
