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
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles: React.CSSProperties = {
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
    position: 'relative',
    overflow: 'hidden',
  };

  const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: { fontSize: 'var(--type-body-s-size)', padding: '0.5rem 1rem', height: '32px' },
    md: { fontSize: 'var(--type-body-size)', padding: '0.75rem 1.5rem', height: '40px' },
    lg: { fontSize: 'var(--type-body-l-size)', padding: '1rem 2rem', height: '48px' },
  };

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: disabled
        ? 'var(--muted-foreground)'
        : 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)',
      color: 'white',
      borderRadius: 'var(--radius-full)',
      transform: isPressed && !disabled && !loading ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)',
      boxShadow: !disabled && !loading && !isPressed ? 'var(--shadow-4)' : 'none',
    },
    secondary: {
      background: 'var(--surface-subtle)',
      color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
      border: '1px solid var(--border)',
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

  const hoverStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: `linear-gradient(135deg, var(--primary-hover) 0%, color-mix(in srgb, var(--primary-accent) 88%, black) 100%)`,
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-4)',
    },
    secondary: { background: 'var(--background)', borderColor: 'var(--primary)' },
    ghost: { background: 'var(--surface-subtle)' },
    destructive: { background: 'color-mix(in srgb, var(--danger) 88%, black)' },
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
        ...(isHovered && !disabled && !loading ? hoverStyles[variant] : {}),
      }}
      onMouseDown={() => !disabled && !loading && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => !disabled && !loading && setIsHovered(true)}
      onMouseLeave={() => { setIsPressed(false); setIsHovered(false); }}
    >
      {/* Shimmer overlay — primary only */}
      {variant === 'primary' && !disabled && !loading && (
        <span
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
            animation: isHovered ? 'shimmer 380ms var(--ease-out-smooth) forwards' : 'none',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />
      )}

      {loading ? (
        <OrbitSpinner />
      ) : (
        <>
          {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}

function OrbitSpinner() {
  return (
    <span
      style={{
        position: 'relative',
        width: '18px',
        height: '18px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'currentColor',
            opacity: 0.9,
            transformOrigin: '0 0',
            animation: `orbit 900ms linear infinite`,
            animationDelay: `${i * 300}ms`,
            transform: `rotate(${i * 120}deg) translateX(7px)`,
          }}
        />
      ))}
    </span>
  );
}
