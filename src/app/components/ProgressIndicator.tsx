import { useState } from 'react';
import { ClockIcon } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
  estimatedTimeRemaining?: string;
  completedSteps?: Array<{ step: number; name: string }>;
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  sectionName,
  estimatedTimeRemaining = '~3 min',
  completedSteps = [],
}: ProgressIndicatorProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div
      style={{
        background: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        padding: '1.5rem 2rem',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        {/* Step count */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            color: 'var(--muted-foreground)',
          }}
        >
          <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>
            {currentStep}
          </span>
          {' of '}
          <span>{totalSteps}</span>
        </div>

        {/* Section name */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            fontWeight: 500,
            color: 'var(--foreground)',
            textAlign: 'center',
            flex: 1,
            padding: '0 2rem',
          }}
        >
          {sectionName}
        </div>

        {/* Time remaining */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            color: 'var(--muted-foreground)',
          }}
        >
          <ClockIcon size={14} />
          <span>{estimatedTimeRemaining}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ position: 'relative' }}>
        {/* Background */}
        <div
          style={{
            height: '3px',
            background: 'var(--border)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
          }}
        >
          {/* Fill */}
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'var(--primary)',
              transition: 'all var(--duration-slow) var(--ease-out-smooth)',
              position: 'relative',
            }}
          >
            {/* Pulse on step complete */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '40px',
                background: 'linear-gradient(to right, transparent, var(--primary-accent))',
                animation: 'progress-pulse var(--duration-slow) var(--ease-out-smooth)',
              }}
            />
          </div>
        </div>

        {/* Step dots */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            pointerEvents: 'none',
          }}
        >
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
            const isCompleted = step < currentStep;
            const isCurrent = step === currentStep;
            const stepData = completedSteps.find((s) => s.step === step);

            return (
              <div
                key={step}
                onMouseEnter={() => isCompleted && setHoveredStep(step)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  position: 'relative',
                  pointerEvents: isCompleted ? 'auto' : 'none',
                  cursor: isCompleted ? 'pointer' : 'default',
                }}
              >
                <div
                  style={{
                    width: isCurrent ? '10px' : '8px',
                    height: isCurrent ? '10px' : '8px',
                    borderRadius: '50%',
                    background:
                      isCurrent || isCompleted ? 'var(--primary)' : 'var(--border)',
                    transition: 'all var(--duration-fast) var(--ease-out-smooth)',
                    transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                    boxShadow: isCurrent ? '0 0 0 3px var(--primary-soft)' : 'none',
                  }}
                />

                {/* Tooltip on hover */}
                {hoveredStep === step && stepData && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      background: 'var(--foreground)',
                      color: 'white',
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--type-caption-size)',
                      whiteSpace: 'nowrap',
                      borderRadius: 'var(--radius-sm)',
                      animation: 'fade-in var(--duration-fast) var(--ease-out-smooth)',
                      pointerEvents: 'none',
                    }}
                  >
                    {stepData.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes progress-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
