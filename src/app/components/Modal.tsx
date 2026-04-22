import { XIcon } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '560px',
}: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'color-mix(in srgb, black 40%, transparent)',
          animation: 'backdrop-fade-in var(--duration-normal) var(--ease-out-smooth)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth,
          background: 'var(--background)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-3)',
          animation: 'modal-scale-in var(--duration-normal) var(--ease-out-smooth)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        {title && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--type-h2-family)',
                fontSize: 'var(--type-h2-size)',
                fontWeight: 'var(--type-h2-weight)',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              {title}
            </h2>

            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                color: 'var(--muted-foreground)',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--ease-out-smooth)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--surface-subtle)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--muted-foreground)';
              }}
            >
              <XIcon size={20} />
            </button>
          </div>
        )}

        {/* Content */}
        <div style={{ padding: title ? '1.5rem' : '2rem' }}>{children}</div>
      </div>

      <style>{`
        @keyframes backdrop-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modal-scale-in {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
