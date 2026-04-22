import { useState } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--duration-fast) var(--ease-out-smooth)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: 'none',
    outline: 'none',
    position: 'relative' as const,
  };

  const sizeStyles = {
    sm: {
      fontSize: 'var(--type-body-s-size)',
      padding: '0.5rem 1rem',
      height: '32px',
    },
    md: {
      fontSize: 'var(--type-body-size)',
      padding: '0.75rem 1.5rem',
      height: '40px',
    },
    lg: {
      fontSize: 'var(--type-body-l-size)',
      padding: '1rem 2rem',
      height: '48px',
    },
  };

  const variantStyles: Record<ButtonVariant, any> = {
    primary: {
      background: disabled ? 'var(--muted-foreground)' : 'var(--primary)',
      color: 'white',
      borderRadius: 'var(--radius-full)',
      transform: isPressed && !disabled && !loading ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)',
      boxShadow: !disabled && !loading && !isPressed ? 'var(--shadow-4)' : 'none',
    },
    secondary: {
      background: disabled ? 'var(--surface-subtle)' : 'var(--surface-subtle)',
      color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
      border: `1px solid ${disabled ? 'var(--border)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-full)',
      transform: isPressed && !disabled && !loading ? 'scale(0.98)' : 'scale(1)',
    },
    ghost: {
      background: 'transparent',
      color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
      borderRadius: 'var(--radius-md)',
      transform: isPressed && !disabled && !loading ? 'scale(0.98)' : 'scale(1)',
    },
    destructive: {
      background: disabled ? 'var(--muted-foreground)' : 'var(--danger)',
      color: 'white',
      borderRadius: 'var(--radius-full)',
      transform: isPressed && !disabled && !loading ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)',
    },
  };

  const hoverStyles: Record<ButtonVariant, any> = {
    primary: {
      background: 'var(--primary-hover)',
    },
    secondary: {
      background: 'var(--background)',
      borderColor: 'var(--primary)',
    },
    ghost: {
      background: 'var(--surface-subtle)',
    },
    destructive: {
      background: 'color-mix(in srgb, var(--danger) 88%, black)',
    },
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={className}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        opacity: disabled ? 0.5 : 1,
      }}
      onMouseDown={() => !disabled && !loading && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, hoverStyles[variant]);
        }
      }}
      onMouseOut={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, variantStyles[variant]);
        }
      }}
    >
      {loading ? (
        <EmberSpinner />
      ) : (
        <>
          {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}

function EmberSpinner() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: 'ember-pulse 1.2s cubic-bezier(0.16, 1, 0.3, 1) infinite',
      }}
    >
      <style>{`
        @keyframes ember-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
      <circle cx="10" cy="10" r="7" fill="currentColor" opacity="0.2"/>
      <circle cx="10" cy="10" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="10" cy="10" r="3" fill="currentColor"/>
      <circle cx="11" cy="9" r="1.5" fill="currentColor" opacity="0.8"/>
    </svg>
  );
}
