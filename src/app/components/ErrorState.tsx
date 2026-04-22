import { AlertCircleIcon, RefreshCwIcon } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  description?: string;
  onRetry?: () => void;
  retryLabel?: string;
  type?: 'recoverable' | 'system';
}

export function ErrorState({
  message,
  description,
  onRetry,
  retryLabel = 'Try again',
  type = 'recoverable',
}: ErrorStateProps) {
  const isRecoverable = type === 'recoverable';

  return (
    <div
      style={{
        padding: '2rem',
        background: isRecoverable ? 'var(--warning-soft)' : 'var(--danger-soft)',
        border: `2px solid ${isRecoverable ? 'var(--warning)' : 'var(--danger)'}`,
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Icon and message */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div
          style={{
            flexShrink: 0,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: isRecoverable ? 'var(--warning)' : 'var(--danger)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AlertCircleIcon size={20} color="white" />
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-l-size)',
              fontWeight: 600,
              color: 'var(--foreground)',
              margin: '0 0 0.5rem',
            }}
          >
            {message}
          </h3>

          {description && (
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-size)',
                lineHeight: 'var(--type-body-line-height)',
                color: 'var(--muted-foreground)',
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Retry button */}
      {onRetry && (
        <div>
          <button
            onClick={onRetry}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'var(--background)',
              color: 'var(--foreground)',
              border: `1px solid ${isRecoverable ? 'var(--warning)' : 'var(--danger)'}`,
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface-subtle)';
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--background)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <RefreshCwIcon size={16} />
            {retryLabel}
          </button>
        </div>
      )}
    </div>
  );
}
