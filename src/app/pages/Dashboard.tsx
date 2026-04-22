import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ContentHeader } from '../components/ContentHeader';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { PlusIcon, ClockIcon } from 'lucide-react';

interface Idea {
  id: string;
  title: string;
  verdict: 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';
  lastUpdated: string;
  summary: string;
}

const SAMPLE_IDEAS: Idea[] = [
  {
    id: '1',
    title: 'RetailFlow - Inventory management for small shops',
    verdict: 'Proceed',
    lastUpdated: '2 hours ago',
    summary:
      'Strong market signal. Your positioning is clear, and the MVP cost is reasonable for your target segment.',
  },
  {
    id: '2',
    title: 'LocalMart - Marketplace for artisan goods',
    verdict: 'Refine',
    lastUpdated: '1 day ago',
    summary:
      'The market exists, but your differentiation needs work. Too similar to existing players.',
  },
];

export function Dashboard() {
  const [activeNav, setActiveNav] = useState('home');
  const [ideas] = useState<Idea[]>(SAMPLE_IDEAS);

  const mostRecentIdea = ideas[0];

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Sidebar */}
      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} userName="Alex Chen" />

      {/* Main content with sidebar offset */}
      <div className="flex-1" style={{ marginLeft: '260px' }}>
        {/* Canvas with blueprint grid */}
        <div
          role="main"
          style={{
            minHeight: '100vh',
            background: 'var(--blueprint-grid)',
            backgroundSize: 'var(--blueprint-grid-size)',
          }}
        >
          <div className="max-w-6xl mx-auto p-8 md:p-12">
            {/* Page header */}
            <ContentHeader
              title="Home"
              actions={
                <Button
                  variant="primary"
                  icon={<PlusIcon size={18} />}
                  onClick={() => (window.location.href = '/signup')}
                >
                  Start a new idea
                </Button>
              }
            />

            {/* Most recent idea - large card */}
            {mostRecentIdea && (
              <section style={{ marginBottom: '3rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--type-h2-family)',
                    fontSize: 'var(--type-h2-size)',
                    fontWeight: 'var(--type-h2-weight)',
                    color: 'var(--foreground)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <EmberGlyph />
                  Your first read
                </h2>

                <IdeaCard idea={mostRecentIdea} featured />
              </section>
            )}

            {/* Other ideas */}
            {ideas.length > 1 && (
              <section style={{ marginBottom: '3rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--type-h2-family)',
                    fontSize: 'var(--type-h2-size)',
                    fontWeight: 'var(--type-h2-weight)',
                    color: 'var(--foreground)',
                    marginBottom: '1rem',
                  }}
                >
                  Recent ideas
                </h2>

                <div
                  className="grid md:grid-cols-2 gap-6"
                  style={{
                    display: 'grid',
                    gap: '1.5rem',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  }}
                >
                  {ideas.slice(1).map((idea) => (
                    <IdeaCard key={idea.id} idea={idea} />
                  ))}
                </div>
              </section>
            )}

            {/* Suggested next steps */}
            <section
              style={{
                padding: '2rem',
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--type-h3-family)',
                  fontSize: 'var(--type-h3-size)',
                  fontWeight: 'var(--type-h3-weight)',
                  color: 'var(--foreground)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <EmberGlyph />
                Suggested next steps from Krowe
              </h3>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <NextStep
                  text="Talk to 10 potential customers about their current workflow"
                  priority="high"
                />
                <NextStep
                  text="Research competitor pricing models in detail"
                  priority="medium"
                />
                <NextStep
                  text="Sketch out the core user flow for your MVP"
                  priority="medium"
                />
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile offset */}
      <style>{`
        @media (max-width: 768px) {
          .flex-1 {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

function IdeaCard({ idea, featured = false }: { idea: Idea; featured?: boolean }) {
  const verdictConfig: Record<
    Idea['verdict'],
    { color: string; bgColor: string; label: string }
  > = {
    Proceed: {
      color: 'var(--success)',
      bgColor: 'var(--success-soft)',
      label: 'Strong signal',
    },
    Refine: {
      color: 'var(--primary)',
      bgColor: 'var(--primary-soft)',
      label: 'Needs work',
    },
    Pivot: {
      color: 'var(--warning)',
      bgColor: 'var(--warning-soft)',
      label: 'Redirect',
    },
    Rethink: {
      color: 'var(--danger)',
      bgColor: 'var(--danger-soft)',
      label: 'Reconsider',
    },
  };

  const config = verdictConfig[idea.verdict];

  return (
    <a
      href={`/report/${idea.id}`}
      style={{
        display: 'block',
        padding: featured ? '2.5rem' : '2rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-1)',
        textDecoration: 'none',
        transition: 'all var(--duration-normal) var(--ease-out-smooth)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-1)';
      }}
    >
      {/* Verdict badge */}
      <div style={{ marginBottom: '1rem' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: config.bgColor,
            border: `1px solid ${config.color}`,
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-caption-size)',
            fontWeight: 600,
            color: config.color,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {idea.verdict} • {config.label}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: featured
            ? 'var(--type-display-m-family)'
            : 'var(--type-h2-family)',
          fontSize: featured ? 'var(--type-display-m-size)' : 'var(--type-h2-size)',
          fontWeight: featured ? 'var(--type-display-m-weight)' : 'var(--type-h2-weight)',
          lineHeight: featured
            ? 'var(--type-display-m-line-height)'
            : 'var(--type-h2-line-height)',
          letterSpacing: featured
            ? 'var(--type-display-m-letter-spacing)'
            : 'var(--type-h2-letter-spacing)',
          color: 'var(--foreground)',
          marginBottom: '1rem',
        }}
      >
        {idea.title}
      </h3>

      {/* Summary */}
      <p
        style={{
          fontFamily: 'var(--type-body-family)',
          fontSize: 'var(--type-body-size)',
          lineHeight: 'var(--type-body-line-height)',
          color: 'var(--muted-foreground)',
          marginBottom: '1rem',
        }}
      >
        {idea.summary}
      </p>

      {/* Last updated */}
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
        <span>Updated {idea.lastUpdated}</span>
      </div>
    </a>
  );
}

function NextStep({ text, priority }: { text: string; priority: 'high' | 'medium' | 'low' }) {
  const priorityColor =
    priority === 'high'
      ? 'var(--primary)'
      : priority === 'medium'
      ? 'var(--warning)'
      : 'var(--muted-foreground)';

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '1rem',
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
      }}
    >
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: priorityColor,
          marginTop: '0.5rem',
          flexShrink: 0,
        }}
      />
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-size)',
          lineHeight: 'var(--type-body-line-height)',
          color: 'var(--foreground)',
          margin: 0,
        }}
      >
        {text}
      </p>
    </li>
  );
}

function EmberGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
