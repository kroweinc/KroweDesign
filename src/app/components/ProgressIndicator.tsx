import { useState, useEffect, useRef } from 'react';
import { ClockIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

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
  const [shimmer, setShimmer] = useState(false);
  const prevStep = useRef(currentStep);
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    if (currentStep !== prevStep.current) {
      setShimmer(true);
      const t = setTimeout(() => setShimmer(false), 300);
      prevStep.current = currentStep;
      return () => clearTimeout(t);
    }
  }, [currentStep]);

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
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            color: 'var(--muted-foreground)',
          }}
        >
          <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>{currentStep}</span>
          {' of '}
          <span>{totalSteps}</span>
        </div>

        {/* Section name crossfade */}
        <div style={{ flex: 1, padding: '0 2rem', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={sectionName}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-size)',
                fontWeight: 500,
                color: 'var(--foreground)',
              }}
            >
              {sectionName}
            </motion.div>
          </AnimatePresence>
        </div>

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
        <div
          style={{
            height: '3px',
            background: 'var(--border)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'var(--primary)',
              transition: 'width var(--duration-slow) var(--ease-out-smooth)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Shimmer on step advance */}
            {shimmer && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                  animation: 'shimmer 280ms var(--ease-out-smooth) forwards',
                }}
              />
            )}
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
                  width: isCurrent ? '10px' : '8px',
                  height: isCurrent ? '10px' : '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isCompleted ? (
                  <CompletedDot />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: isCurrent ? 'var(--primary)' : 'var(--border)',
                      transition: 'all var(--duration-fast) var(--ease-out-smooth)',
                      transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                      boxShadow: isCurrent ? '0 0 0 3px var(--primary-soft)' : 'none',
                    }}
                  />
                )}

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
                      animation: 'fade-up-in 140ms var(--ease-out-smooth)',
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
    </div>
  );
}

function CompletedDot() {
  return (
    <div
      style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="6"
        height="6"
        viewBox="0 0 10 8"
        fill="none"
        style={{ overflow: 'visible' }}
        aria-hidden
      >
        <polyline
          points="1,4 4,7 9,1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="20"
          strokeDashoffset="20"
          style={{
            animation: 'draw-check 200ms var(--ease-out-smooth) forwards',
          }}
        />
      </svg>
    </div>
  );
}
