import { useState, useEffect } from 'react';
import { CheckIcon } from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt';

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
  const { ref, style: tiltStyle, onMouseMove, onMouseLeave } = useMouseTilt(2);
  const [showRing, setShowRing] = useState(false);
  const [prevSelected, setPrevSelected] = useState(selected);

  useEffect(() => {
    if (selected && !prevSelected) {
      setShowRing(true);
      const t = setTimeout(() => setShowRing(false), 400);
      return () => clearTimeout(t);
    }
    setPrevSelected(selected);
  }, [selected, prevSelected]);

  return (
    <div
      ref={ref}
      onMouseMove={!disabled ? onMouseMove : undefined}
      onMouseLeave={!disabled ? onMouseLeave : undefined}
      style={{ ...tiltStyle, position: 'relative' }}
    >
      <button
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
        style={{
          position: 'relative',
          width: '100%',
          padding: '1.5rem',
          background: selected
            ? 'color-mix(in oklch, var(--primary) 8%, var(--background))'
            : 'var(--background)',
          border: `2px solid ${selected
            ? 'color-mix(in oklch, var(--primary) 50%, transparent)'
            : 'var(--border)'}`,
          borderRadius: 'var(--radius-lg)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          transition: 'border-color var(--duration-normal) var(--ease-out-smooth), background var(--duration-normal) var(--ease-out-smooth), box-shadow var(--duration-normal) var(--ease-out-smooth)',
          boxShadow: selected ? 'var(--shadow-2)' : 'var(--shadow-1)',
          opacity: disabled ? 0.5 : 1,
          display: 'block',
          overflow: 'hidden',
        }}
      >
        {/* Ring draw on select */}
        {showRing && <SelectionRing />}

        {/* Check badge */}
        {selected && (
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fade-up-in 200ms var(--ease-spring) forwards',
            }}
          >
            <CheckIcon size={14} color="white" strokeWidth={3} />
          </div>
        )}

        {illustration && (
          <div
            style={{
              marginBottom: '1.25rem',
              color: selected ? 'var(--primary)' : 'var(--muted-foreground)',
              transition: 'color var(--duration-fast) var(--ease-out-smooth)',
            }}
          >
            {illustration}
          </div>
        )}

        <h3
          style={{
            fontFamily: 'var(--type-h3-family)',
            fontSize: 'var(--type-h3-size)',
            fontWeight: 'var(--type-h3-weight)',
            color: selected ? 'var(--primary)' : 'var(--foreground)',
            marginBottom: '0.375rem',
            transition: 'color var(--duration-fast) var(--ease-out-smooth)',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            lineHeight: 'var(--type-body-s-line-height)',
            color: 'var(--muted-foreground)',
            margin: 0,
          }}
        >
          {description}
        </p>
      </button>
    </div>
  );
}

function SelectionRing() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'visible',
      }}
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="14"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        style={{
          animation: 'ring-draw 320ms var(--ease-out-smooth) forwards',
        }}
      />
    </svg>
  );
}
