import { useState } from 'react';
import { CheckIcon } from 'lucide-react';

interface SelectionCardProps {
  title: string;
  description: string;
  illustration?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function SelectionCard({
  title,
  description,
  illustration,
  selected = false,
  disabled = false,
  onClick,
}: SelectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const borderColor = selected
    ? 'color-mix(in oklch, var(--primary) 50%, transparent)'
    : 'var(--border)';

  const backgroundColor = selected
    ? 'color-mix(in oklch, var(--primary) 8%, var(--background))'
    : 'var(--background)';

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        padding: '1.5rem',
        background: backgroundColor,
        border: `2px solid ${borderColor}`,
        borderRadius: 'var(--radius-lg)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        textAlign: 'left',
        transition: 'all var(--duration-normal) var(--ease-out-smooth)',
        transform: isHovered && !disabled ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHovered && !disabled ? 'var(--shadow-2)' : 'var(--shadow-1)',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {selected && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'check-pop var(--duration-normal) var(--ease-out-smooth)',
          }}
        >
          <CheckIcon size={16} color="white" strokeWidth={3} />
        </div>
      )}

      {illustration && (
        <div style={{ marginBottom: '1rem', opacity: 0.9 }}>
          {illustration}
        </div>
      )}

      <h3
        style={{
          fontFamily: 'var(--type-h3-family)',
          fontSize: 'var(--type-h3-size)',
          fontWeight: 'var(--type-h3-weight)',
          lineHeight: 'var(--type-h3-line-height)',
          letterSpacing: 'var(--type-h3-letter-spacing)',
          color: 'var(--foreground)',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--type-body-family)',
          fontSize: 'var(--type-body-size)',
          lineHeight: 'var(--type-body-line-height)',
          color: 'var(--muted-foreground)',
          margin: 0,
        }}
      >
        {description}
      </p>

      <style>{`
        @keyframes check-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </button>
  );
}
