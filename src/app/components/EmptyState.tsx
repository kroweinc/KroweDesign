import { PlusIcon } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  showInput?: boolean;
  inputPlaceholder?: string;
  onInputSubmit?: (value: string) => void;
}

export function EmptyState({
  message,
  actionLabel,
  onAction,
  showInput = false,
  inputPlaceholder = 'What are you thinking about?',
  onInputSubmit,
}: EmptyStateProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get('input') as string;
    if (value.trim() && onInputSubmit) {
      onInputSubmit(value);
      e.currentTarget.reset();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      {/* Ember glyph */}
      <div style={{ marginBottom: '1.5rem', opacity: 0.4 }}>
        <EmberGlyph size="lg" />
      </div>

      {/* Message */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-l-size)',
          lineHeight: 'var(--type-body-l-line-height)',
          color: 'var(--muted-foreground)',
          maxWidth: '40ch',
          margin: '0 0 2rem',
        }}
      >
        {message}
      </p>

      {/* Inline input or button */}
      {showInput ? (
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            gap: '0.75rem',
          }}
        >
          <input
            type="text"
            name="input"
            placeholder={inputPlaceholder}
            required
            style={{
              flex: 1,
              height: '48px',
              padding: '0 1rem',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-size)',
              color: 'var(--foreground)',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              outline: 'none',
              transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.boxShadow =
                '0 0 0 4px color-mix(in oklch, var(--primary) 10%, transparent)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <button
            type="submit"
            style={{
              height: '48px',
              padding: '0 2rem',
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
            Start
          </button>
        </form>
      ) : actionLabel && onAction ? (
        <button
          onClick={onAction}
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
          <PlusIcon size={18} />
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

function EmberGlyph({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  const px = sizeMap[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
