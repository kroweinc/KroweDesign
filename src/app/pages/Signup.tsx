import { useState } from 'react';
import { Button } from '../components/Button';
import { Textarea, Input } from '../components/Input';
import { SelectionCard } from '../components/SelectionCard';
import { ProgressIndicator } from '../components/ProgressIndicator';
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
  {
    id: 1,
    name: 'Business idea',
    type: 'reflection',
    question: 'What is the business idea?',
    hint: 'Do not overthink it. A sentence or two is fine.',
  },
  {
    id: 2,
    name: 'Problem statement',
    type: 'reflection',
    question: 'What problem does this solve?',
    hint: 'The clearer the problem, the easier everything else gets.',
  },
  {
    id: 3,
    name: 'Target customer',
    type: 'reflection',
    question: 'Who is the customer?',
    hint: 'Be specific. "Small businesses" is too broad. "Retail shops with 2-10 employees" works better.',
  },
  {
    id: 4,
    name: 'Product type',
    type: 'selection',
    question: 'What are you building?',
    options: [
      {
        id: 'saas',
        title: 'Software (SaaS)',
        description: 'Web or mobile app, subscription model',
        icon: <LightbulbIcon size={24} />,
      },
      {
        id: 'marketplace',
        title: 'Marketplace',
        description: 'Connecting buyers and sellers',
        icon: <UsersIcon size={24} />,
      },
      {
        id: 'ecommerce',
        title: 'E-commerce',
        description: 'Selling physical or digital products',
        icon: <DollarSignIcon size={24} />,
      },
    ],
  },
  {
    id: 5,
    name: 'Team size',
    type: 'quick',
    question: 'How many people on the team?',
    inputType: 'number',
  },
];

export function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  const step = SIGNUP_STEPS.find((s) => s.id === currentStep)!;
  const progress = (currentStep / SIGNUP_STEPS.length) * 100;

  const handleNext = () => {
    if (currentStep < SIGNUP_STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit and transition to platform
      console.log('Signup complete', answers);
    }
  };

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [currentStep]: value });
  };

  const completedSteps = SIGNUP_STEPS.filter((s) => s.id < currentStep).map((s) => ({
    step: s.id,
    name: s.name,
  }));

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Header with progress */}
      <header>
        <div
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <EmberGlyph />
            <span
              style={{
                fontFamily: 'var(--type-display-m-family)',
                fontSize: '1.25rem',
                color: 'var(--foreground)',
              }}
            >
              Krowe
            </span>
          </div>

          <button
            onClick={() => (window.location.href = '/')}
            style={{
              padding: '0.5rem 1rem',
              background: 'transparent',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
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
            Exit
          </button>
        </div>

        <ProgressIndicator
          currentStep={currentStep}
          totalSteps={SIGNUP_STEPS.length}
          sectionName={step.name}
          estimatedTimeRemaining={`~${Math.max(1, SIGNUP_STEPS.length - currentStep + 1)} min`}
          completedSteps={completedSteps}
        />
      </header>

      {/* Main content */}
      <main role="main" style={{ padding: '3rem 2rem' }}>
        {step.type === 'reflection' && (
          <ReflectionLayout
            question={step.question}
            hint={step.hint}
            value={answers[currentStep] || ''}
            onChange={handleAnswer}
          />
        )}

        {step.type === 'selection' && (
          <SelectionLayout
            question={step.question}
            options={step.options || []}
            selected={answers[currentStep]}
            onSelect={handleAnswer}
          />
        )}

        {step.type === 'quick' && (
          <QuickLayout
            question={step.question}
            inputType={step.inputType || 'text'}
            value={answers[currentStep] || ''}
            onChange={handleAnswer}
          />
        )}
      </main>

      {/* Footer with buttons */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.5rem 2rem',
          borderTop: '1px solid var(--border)',
          background: 'var(--background)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button
          variant="ghost"
          onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          Back
        </Button>

        <Button
          variant="primary"
          onClick={handleNext}
          disabled={!answers[currentStep]}
        >
          {currentStep === SIGNUP_STEPS.length ? 'Generate my report' : 'Next question'}
        </Button>
      </footer>
    </div>
  );
}

// Layout A: Open Reflection
function ReflectionLayout({
  question,
  hint,
  value,
  onChange,
}: {
  question: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Blueprint grid background */}
      <div
        style={{
          position: 'absolute',
          inset: '-2rem',
          background: 'var(--blueprint-grid)',
          backgroundSize: 'var(--blueprint-grid-size)',
          opacity: 0.15,
          pointerEvents: 'none',
          borderRadius: 'var(--radius-lg)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Question */}
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
          {question}
        </h2>

        {/* Hint in margin (NOT a boxed "Examples") */}
        {hint && (
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              lineHeight: 'var(--type-body-s-line-height)',
              color: 'var(--muted-foreground)',
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}
          >
            {hint}
          </p>
        )}

        {/* Large textarea */}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start typing..."
          style={{
            width: '100%',
            minHeight: '300px',
            padding: '1.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-l-size)',
            lineHeight: 'var(--type-body-l-line-height)',
            color: 'var(--foreground)',
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            outline: 'none',
            resize: 'vertical',
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

        {/* Character count */}
        <div
          style={{
            marginTop: '0.5rem',
            textAlign: 'right',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-caption-size)',
            color: 'var(--muted-foreground)',
          }}
        >
          {value.length} characters
        </div>
      </div>
    </div>
  );
}

// Layout B: Pick a Card
function SelectionLayout({
  question,
  options,
  selected,
  onSelect,
}: {
  question: string;
  options: Array<{ id: string; title: string; description: string; icon?: React.ReactNode }>;
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Question */}
      <h2
        style={{
          fontFamily: 'var(--type-display-m-family)',
          fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
          lineHeight: 'var(--type-display-m-line-height)',
          letterSpacing: 'var(--type-display-m-letter-spacing)',
          fontWeight: 'var(--type-display-m-weight)',
          color: 'var(--foreground)',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        {question}
      </h2>

      {/* Cards */}
      <div
        className="grid md:grid-cols-3 gap-6"
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}
      >
        {options.map((option) => (
          <SelectionCard
            key={option.id}
            title={option.title}
            description={option.description}
            selected={selected === option.id}
            onClick={() => onSelect(option.id)}
            illustration={
              option.icon ? (
                <div
                  style={{
                    width: '56px',
                    height: '56px',
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
        ))}
      </div>
    </div>
  );
}

// Layout C: Quick Input
function QuickLayout({
  question,
  inputType,
  value,
  onChange,
}: {
  question: string;
  inputType: 'text' | 'number' | 'textarea';
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      {/* Question */}
      <h2
        style={{
          fontFamily: 'var(--type-display-m-family)',
          fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
          lineHeight: 'var(--type-display-m-line-height)',
          letterSpacing: 'var(--type-display-m-letter-spacing)',
          fontWeight: 'var(--type-display-m-weight)',
          color: 'var(--foreground)',
          marginBottom: '2rem',
        }}
      >
        {question}
      </h2>

      {/* Input */}
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
            background: 'white',
            border: '2px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
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
      ) : (
        <Input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type here..."
        />
      )}
    </div>
  );
}

function EmberGlyph() {
  return (
    <svg
      width="20"
      height="20"
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
