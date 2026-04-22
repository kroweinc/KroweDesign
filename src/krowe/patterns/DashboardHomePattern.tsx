import { useState } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from '@/app/components/Sidebar';
import { ContentHeader } from '@/app/components/ContentHeader';
import { Button } from '@/app/components/Button';
import { EmberGlyph } from '@/app/components/EmberGlyph';
import { useMouseTilt } from '@/app/hooks/useMouseTilt';
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
    summary: 'Strong market signal. Your positioning is clear, and the MVP cost is reasonable for your target segment.',
  },
  {
    id: '2',
    title: 'LocalMart - Marketplace for artisan goods',
    verdict: 'Refine',
    lastUpdated: '1 day ago',
    summary: 'The market exists, but your differentiation needs work. Too similar to existing players.',
  },
];

const NEXT_STEPS = [
  { text: 'Talk to 10 potential customers about their current workflow', priority: 'high' as const },
  { text: 'Research competitor pricing models in detail', priority: 'medium' as const },
  { text: 'Sketch out the core user flow for your MVP', priority: 'medium' as const },
];

/** App shell home: sidebar, featured idea, grid, suggested next steps. */
export function DashboardHomePattern() {
  const [activeNav, setActiveNav] = useState('home');
  const [ideas] = useState<Idea[]>(SAMPLE_IDEAS);
  const mostRecentIdea = ideas[0];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} userName="Alex Chen" />

      <div style={{ flex: 1, marginLeft: '260px' }} className="dashboard-main">
        <div
          role="main"
          style={{
            minHeight: '100vh',
            background: 'var(--blueprint-grid)',
            backgroundSize: 'var(--blueprint-grid-size)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <ContentHeader
              title="Home"
              actions={
                <Button variant="primary" icon={<PlusIcon size={18} />}>
                  Start a new idea
                </Button>
              }
            />

            {/* Featured idea */}
            {mostRecentIdea && (
              <section style={{ marginBottom: '3rem' }}>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
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
                  <EmberGlyph size={14} />
                  Your first read
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <IdeaCard idea={mostRecentIdea} featured />
                </motion.div>
              </section>
            )}

            {/* Grid of other ideas */}
            {ideas.length > 1 && (
              <section style={{ marginBottom: '3rem' }}>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.18 }}
                  style={{
                    fontFamily: 'var(--type-h2-family)',
                    fontSize: 'var(--type-h2-size)',
                    fontWeight: 'var(--type-h2-weight)',
                    color: 'var(--foreground)',
                    marginBottom: '1rem',
                  }}
                >
                  Recent ideas
                </motion.h2>
                <div
                  style={{
                    display: 'grid',
                    gap: '1.5rem',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  }}
                >
                  {ideas.slice(1).map((idea, i) => (
                    <motion.div
                      key={idea.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, delay: 0.22 + i * 0.085, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <IdeaCard idea={idea} />
                    </motion.div>
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
                <EmberGlyph size={14} />
                Suggested next steps from Krowe
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {NEXT_STEPS.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
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
                        background: step.priority === 'high' ? 'var(--primary)' : 'var(--warning)',
                        marginTop: '0.5rem',
                        flexShrink: 0,
                      }}
                    />
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-size)', lineHeight: 'var(--type-body-line-height)', color: 'var(--foreground)', margin: 0 }}>
                      {step.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dashboard-main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}

const VERDICT_CONFIG = {
  Proceed: { color: 'var(--success)', bgColor: 'var(--success-soft)', label: 'Strong signal' },
  Refine: { color: 'var(--primary)', bgColor: 'var(--primary-soft)', label: 'Needs work' },
  Pivot: { color: 'var(--warning)', bgColor: 'var(--warning-soft)', label: 'Redirect' },
  Rethink: { color: 'var(--danger)', bgColor: 'var(--danger-soft)', label: 'Reconsider' },
};

function IdeaCard({ idea, featured = false }: { idea: Idea; featured?: boolean }) {
  const { ref, style: tiltStyle, onMouseMove, onMouseLeave } = useMouseTilt(2);
  const config = VERDICT_CONFIG[idea.verdict];

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={tiltStyle}>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{
          display: 'block',
          padding: featured ? '2.5rem' : '2rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-1)',
          textDecoration: 'none',
          transition: 'box-shadow var(--duration-normal) var(--ease-out-smooth)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-2)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-1)')}
      >
        <div style={{ marginBottom: '1rem' }}>
          <span
            style={{
              display: 'inline-flex',
              padding: '0.375rem 0.875rem',
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
            {idea.verdict} · {config.label}
          </span>
        </div>

        <h3
          style={{
            fontFamily: featured ? 'var(--type-display-m-family)' : 'var(--type-h2-family)',
            fontSize: featured ? 'var(--type-display-m-size)' : 'var(--type-h2-size)',
            fontWeight: featured ? 'var(--type-display-m-weight)' : 'var(--type-h2-weight)',
            color: 'var(--foreground)',
            marginBottom: '0.875rem',
            letterSpacing: featured ? 'var(--type-display-m-letter-spacing)' : 'var(--type-h2-letter-spacing)',
          }}
        >
          {idea.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            lineHeight: 'var(--type-body-line-height)',
            color: 'var(--muted-foreground)',
            marginBottom: '1.25rem',
          }}
        >
          {idea.summary}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-s-size)', color: 'var(--muted-foreground)' }}>
          <ClockIcon size={13} />
          <span>Updated {idea.lastUpdated}</span>
        </div>
      </a>
    </div>
  );
}
