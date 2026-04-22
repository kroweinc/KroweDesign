import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/Button';
import { Input } from '@/app/components/Input';
import { SelectionCard } from '@/app/components/SelectionCard';
import { ProgressIndicator } from '@/app/components/ProgressIndicator';
import { BrandMark } from '@/app/components/BrandMark';
import { LightbulbIcon, UsersIcon, DollarSignIcon } from 'lucide-react';

type StepType = 'reflection' | 'selection' | 'quick';

interface Step {
  id: number;
  name: string;
  type: StepType;
  question: string;
  hint?: string;
  options?: Array<{ id: string; title: string; description: string; icon?: React.ReactNode }>;
  inputType?: 'text' | 'number' | 'textarea';
}

const SIGNUP_STEPS: Step[] = [
  { id: 1, name: 'Business idea', type: 'reflection', question: 'What is the business idea?', hint: 'Do not overthink it. A sentence or two is fine.' },
  { id: 2, name: 'Problem statement', type: 'reflection', question: 'What problem does this solve?', hint: 'The clearer the problem, the easier everything else gets.' },
  { id: 3, name: 'Target customer', type: 'reflection', question: 'Who is the customer?', hint: 'Be specific. "Small businesses" is too broad. "Retail shops with 2–10 employees" works better.' },
  {
    id: 4,
    name: 'Product type',
    type: 'selection',
    question: 'What are you building?',
    options: [
      { id: 'saas', title: 'Software (SaaS)', description: 'Web or mobile app, subscription model', icon: <LightbulbIcon size={24} /> },
      { id: 'marketplace', title: 'Marketplace', description: 'Connecting buyers and sellers', icon: <UsersIcon size={24} /> },
      { id: 'ecommerce', title: 'E-commerce', description: 'Selling physical or digital products', icon: <DollarSignIcon size={24} /> },
    ],
  },
  { id: 5, name: 'Team size', type: 'quick', question: 'How many people on the team?', inputType: 'number' },
];

type GenerationPhase = 'form' | 'loading' | 'done';

/** Multi-step onboarding with progress, reflection, selection, and loading states. */
export function OnboardingFlowPattern() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [genPhase, setGenPhase] = useState<GenerationPhase>('form');
  const [loadingText, setLoadingText] = useState('Analyzing your idea...');

  const step = SIGNUP_STEPS.find((s) => s.id === currentStep)!;

  const handleNext = () => {
    if (currentStep < SIGNUP_STEPS.length) {
      setDirection('forward');
      setCurrentStep((s) => s + 1);
    } else {
      setGenPhase('loading');
      setTimeout(() => setLoadingText('Building your report...'), 2000);
      setTimeout(() => setGenPhase('done'), 4000);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection('back');
      setCurrentStep((s) => s - 1);
    }
  };

  const completedSteps = SIGNUP_STEPS.filter((s) => s.id < currentStep).map((s) => ({ step: s.id, name: s.name }));

  const variants = {
    enterForward: { x: 32, opacity: 0 },
    enterBack: { x: -32, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exitForward: { x: -32, opacity: 0 },
    exitBack: { x: 32, opacity: 0 },
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header>
        <div
          style={{
            padding: '1.25rem 2rem',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BrandMark size={22} />
            <span style={{ fontFamily: 'var(--type-display-m-family)', fontSize: '1.25rem', color: 'var(--foreground)' }}>
              Krowe
            </span>
          </div>
          <button
            type="button"
            onClick={() => {}}
            style={{
              padding: '0.4rem 0.875rem',
              background: 'transparent',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              color: 'var(--muted-foreground)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-subtle)'; e.currentTarget.style.color = 'var(--foreground)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--muted-foreground)'; }}
          >
            Exit
          </button>
        </div>

        {genPhase === 'form' && (
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={SIGNUP_STEPS.length}
            sectionName={step.name}
            estimatedTimeRemaining={`~${Math.max(1, SIGNUP_STEPS.length - currentStep + 1)} min`}
            completedSteps={completedSteps}
          />
        )}
      </header>

      {/* Main */}
      <main role="main" style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {genPhase === 'form' ? (
            <motion.div
              key={currentStep}
              initial={direction === 'forward' ? variants.enterForward : variants.enterBack}
              animate={variants.center}
              exit={direction === 'forward' ? variants.exitForward : variants.exitBack}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '3rem 2rem', paddingBottom: '7rem' }}
            >
              {step.type === 'reflection' && (
                <ReflectionLayout
                  question={step.question}
                  hint={step.hint}
                  value={answers[currentStep] || ''}
                  onChange={(v) => setAnswers({ ...answers, [currentStep]: v })}
                />
              )}
              {step.type === 'selection' && (
                <SelectionLayout
                  question={step.question}
                  options={step.options || []}
                  selected={answers[currentStep]}
                  onSelect={(v) => setAnswers({ ...answers, [currentStep]: v })}
                />
              )}
              {step.type === 'quick' && (
                <QuickLayout
                  question={step.question}
                  inputType={step.inputType || 'text'}
                  value={answers[currentStep] || ''}
                  onChange={(v) => setAnswers({ ...answers, [currentStep]: v })}
                />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                gap: '2rem',
              }}
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.4 }}
                transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <BrandMark size={88} animated />
              </motion.div>

              {/* Orbit dots */}
              <div style={{ position: 'relative', width: '80px', height: '80px', marginTop: '-80px' }}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '6px',
                      height: '6px',
                      marginTop: '-3px',
                      marginLeft: '-3px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      opacity: 0.7,
                      animation: 'orbit 1.2s linear infinite',
                      animationDelay: `${i * 400}ms`,
                      transformOrigin: '0 0',
                      transform: `rotate(${i * 120}deg) translateX(36px)`,
                    }}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingText}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-body-l-size)',
                    color: 'var(--muted-foreground)',
                    marginTop: '1rem',
                  }}
                >
                  {loadingText}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      {genPhase === 'form' && (
        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1.25rem 2rem',
            borderTop: '1px solid var(--border)',
            background: 'var(--background)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="ghost" onClick={handleBack} disabled={currentStep === 1}>
            Back
          </Button>
          <Button variant="primary" onClick={handleNext} disabled={!answers[currentStep]}>
            {currentStep === SIGNUP_STEPS.length ? 'Generate my report' : 'Next question'}
          </Button>
        </footer>
      )}
    </div>
  );
}

function QuestionHeading({ question }: { question: string }) {
  const words = question.split(' ');
  return (
    <h2
      style={{
        fontFamily: 'var(--type-display-m-family)',
        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
        lineHeight: 'var(--type-display-m-line-height)',
        letterSpacing: 'var(--type-display-m-letter-spacing)',
        fontWeight: 'var(--type-display-m-weight)',
        color: 'var(--foreground)',
        marginBottom: '1rem',
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.035, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

function ReflectionLayout({
  question, hint, value, onChange,
}: { question: string; hint?: string; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: '-2rem',
          background: 'var(--blueprint-grid)',
          backgroundSize: 'var(--blueprint-grid-size)',
          opacity: 0.12,
          pointerEvents: 'none',
          borderRadius: 'var(--radius-lg)',
        }}
        aria-hidden
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <QuestionHeading question={question} />
        {hint && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              color: 'var(--muted-foreground)',
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}
          >
            {hint}
          </motion.p>
        )}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Start typing..."
            style={{
              width: '100%',
              minHeight: '280px',
              padding: '1.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-l-size)',
              lineHeight: 'var(--type-body-l-line-height)',
              color: 'var(--foreground)',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color var(--duration-fast) var(--ease-out-smooth), box-shadow var(--duration-fast) var(--ease-out-smooth)',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 0 0 4px color-mix(in oklch, var(--primary) 10%, transparent)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
          />
          <div style={{ marginTop: '0.5rem', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 'var(--type-caption-size)', color: 'var(--muted-foreground)' }}>
            {value.length} chars
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SelectionLayout({
  question, options, selected, onSelect,
}: { question: string; options: Array<{ id: string; title: string; description: string; icon?: React.ReactNode }>; selected: string; onSelect: (id: string) => void }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <QuestionHeading question={question} />
      </div>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {options.map((option, i) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <SelectionCard
              title={option.title}
              description={option.description}
              selected={selected === option.id}
              onClick={() => onSelect(option.id)}
              illustration={
                option.icon ? (
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'var(--primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                    }}
                  >
                    {option.icon}
                  </div>
                ) : undefined
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function QuickLayout({
  question, inputType, value, onChange,
}: { question: string; inputType: 'text' | 'number' | 'textarea'; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <QuestionHeading question={question} />
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.3 }}>
        {inputType === 'number' ? (
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min="1"
            placeholder="0"
            style={{
              width: '100%',
              maxWidth: '200px',
              height: '80px',
              textAlign: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: '2.5rem',
              fontWeight: 600,
              color: 'var(--foreground)',
              background: 'var(--background)',
              border: '2px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              outline: 'none',
              transition: 'border-color var(--duration-fast) var(--ease-out-smooth), box-shadow var(--duration-fast) var(--ease-out-smooth)',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 0 0 4px color-mix(in oklch, var(--primary) 10%, transparent)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
          />
        ) : (
          <Input type={inputType} value={value} onChange={(e) => onChange(e.target.value)} placeholder="Type here..." />
        )}
      </motion.div>
    </div>
  );
}
