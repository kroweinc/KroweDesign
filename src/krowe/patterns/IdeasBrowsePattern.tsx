import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from '@/app/components/Sidebar';
import { ContentHeader } from '@/app/components/ContentHeader';
import { Button } from '@/app/components/Button';
import { EmptyState } from '@/app/components/EmptyState';
import { PlusIcon, MoreVerticalIcon, ClockIcon } from 'lucide-react';

interface Idea {
  id: string;
  title: string;
  verdict: 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';
  lastUpdated: string;
  createdAt: string;
}

const SAMPLE_IDEAS: Idea[] = [
  { id: '1', title: 'RetailFlow - Inventory management for small shops', verdict: 'Proceed', lastUpdated: '2 hours ago', createdAt: '2026-04-20' },
  { id: '2', title: 'LocalMart - Marketplace for artisan goods', verdict: 'Refine', lastUpdated: '1 day ago', createdAt: '2026-04-19' },
  { id: '3', title: 'HealthTrack - Personal wellness dashboard', verdict: 'Pivot', lastUpdated: '3 days ago', createdAt: '2026-04-17' },
  { id: '4', title: 'CodeMentor - 1-on-1 programming tutoring', verdict: 'Rethink', lastUpdated: '1 week ago', createdAt: '2026-04-13' },
];

const VERDICT_CONFIG = {
  Proceed: { color: 'var(--success)', bgColor: 'var(--success-soft)', label: 'Strong signal' },
  Refine: { color: 'var(--primary)', bgColor: 'var(--primary-soft)', label: 'Needs work' },
  Pivot: { color: 'var(--warning)', bgColor: 'var(--warning-soft)', label: 'Redirect' },
  Rethink: { color: 'var(--danger)', bgColor: 'var(--danger-soft)', label: 'Reconsider' },
};

type VerdictFilter = 'all' | 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';

/** Ideas index with filters, rows, and empty state. */
export function IdeasBrowsePattern() {
  const [activeNav, setActiveNav] = useState('ideas');
  const [ideas] = useState<Idea[]>(SAMPLE_IDEAS);
  const [filter, setFilter] = useState<VerdictFilter>('all');

  const filteredIdeas = filter === 'all' ? ideas : ideas.filter((i) => i.verdict === filter);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} userName="Alex Chen" />

      <div style={{ flex: 1, marginLeft: '260px' }} className="ideas-main">
        <div role="main" style={{ minHeight: '100vh' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <ContentHeader
              title="Your Ideas"
              actions={
                <Button variant="primary" icon={<PlusIcon size={18} />}>
                  Start a new idea
                </Button>
              }
            />

            {ideas.length === 0 ? (
              <div style={{ padding: '2rem', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <EmptyState
                  message="No ideas yet. What are you thinking about?"
                  showInput
                  inputPlaceholder="e.g., A marketplace for local artisans"
                  onInputSubmit={(value) => alert(`New idea: ${value}`)}
                />
              </div>
            ) : (
              <>
                {/* Filter chips */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'All', value: 'all' as VerdictFilter, count: ideas.length },
                    { label: 'Proceed', value: 'Proceed' as VerdictFilter, count: ideas.filter((i) => i.verdict === 'Proceed').length, color: 'var(--success)' },
                    { label: 'Refine', value: 'Refine' as VerdictFilter, count: ideas.filter((i) => i.verdict === 'Refine').length, color: 'var(--primary)' },
                    { label: 'Pivot', value: 'Pivot' as VerdictFilter, count: ideas.filter((i) => i.verdict === 'Pivot').length, color: 'var(--warning)' },
                    { label: 'Rethink', value: 'Rethink' as VerdictFilter, count: ideas.filter((i) => i.verdict === 'Rethink').length, color: 'var(--danger)' },
                  ].map((chip) => (
                    <FilterChip
                      key={chip.value}
                      label={chip.label}
                      count={chip.count}
                      active={filter === chip.value}
                      onClick={() => setFilter(chip.value)}
                      color={chip.color}
                    />
                  ))}
                </div>

                {/* Table */}
                <div
                  style={{
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-1)',
                  }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border)' }}>
                        {['Idea', 'Verdict', 'Last updated', ''].map((col, i) => (
                          <th
                            key={i}
                            style={{
                              padding: '0.875rem 1.5rem',
                              textAlign: 'left',
                              fontFamily: 'var(--font-sans)',
                              fontSize: 'var(--type-caption-size)',
                              fontWeight: 600,
                              color: 'var(--muted-foreground)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              width: i === 3 ? '48px' : undefined,
                            }}
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="popLayout">
                        {filteredIdeas.map((idea, i) => (
                          <IdeaRow key={idea.id} idea={idea} index={i} />
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>

                <p style={{ marginTop: '1rem', fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-s-size)', color: 'var(--muted-foreground)' }}>
                  Showing {filteredIdeas.length} of {ideas.length} {ideas.length === 1 ? 'idea' : 'ideas'}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ideas-main { margin-left: 0 !important; }
          table { display: block; overflow-x: auto; }
        }
      `}</style>
    </div>
  );
}

function FilterChip({ label, count, active, onClick, color }: { label: string; count: number; active: boolean; onClick: () => void; color?: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        background: active ? (color ? `color-mix(in oklch, ${color} 12%, white)` : 'var(--primary-soft)') : 'var(--surface-subtle)',
        border: `1px solid ${active ? (color || 'var(--primary)') : 'var(--border)'}`,
        borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body-s-size)',
        fontWeight: active ? 600 : 400,
        color: active ? (color || 'var(--primary)') : 'var(--foreground)',
        cursor: 'pointer',
        transition: 'all var(--duration-fast) var(--ease-spring)',
        transform: 'scale(1)',
      }}
      onMouseEnter={(e) => {
        if (!active) { e.currentTarget.style.borderColor = color || 'var(--primary)'; }
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        if (!active) { e.currentTarget.style.borderColor = 'var(--border)'; }
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {label}
      <span
        style={{
          padding: '0.1rem 0.375rem',
          background: active ? (color || 'var(--primary)') : 'var(--border)',
          color: active ? 'white' : 'var(--muted-foreground)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--type-caption-size)',
          fontWeight: 600,
          minWidth: '18px',
          textAlign: 'center',
        }}
      >
        {count}
      </span>
    </button>
  );
}

function IdeaRow({ idea, index }: { idea: Idea; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const config = VERDICT_CONFIG[idea.verdict];

  return (
    <motion.tr
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ duration: 0.22, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setShowActions(false); }}
      onClick={() => {}}
      style={{
        borderBottom: '1px solid var(--border)',
        background: isHovered ? 'var(--surface-subtle)' : 'transparent',
        transition: 'background var(--duration-fast) var(--ease-out-smooth)',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Left indicator */}
      <td style={{ padding: '1.125rem 1.5rem', position: 'relative' }}>
        {/* Sliding left border on hover */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--primary)',
            transformOrigin: 'top',
            transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
            transition: 'transform var(--duration-fast) var(--ease-out-smooth)',
          }}
        />
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            fontWeight: 500,
            color: isHovered ? 'var(--primary)' : 'var(--foreground)',
            textDecoration: 'none',
            transition: 'color var(--duration-fast) var(--ease-out-smooth)',
          }}
        >
          {idea.title}
        </a>
      </td>

      <td style={{ padding: '1.125rem 1.5rem' }}>
        <span
          style={{
            display: 'inline-flex',
            padding: '0.3rem 0.75rem',
            background: config.bgColor,
            border: `1px solid ${config.color}`,
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-caption-size)',
            fontWeight: 600,
            color: config.color,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}
        >
          {idea.verdict}
        </span>
      </td>

      <td style={{ padding: '1.125rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-s-size)', color: 'var(--muted-foreground)' }}>
          <ClockIcon size={13} />
          <span>{idea.lastUpdated}</span>
        </div>
      </td>

      <td style={{ padding: '1.125rem 1.5rem', position: 'relative' }}>
        <button
          onClick={(e) => { e.stopPropagation(); setShowActions(!showActions); }}
          style={{
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isHovered ? 'var(--background)' : 'transparent',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            color: 'var(--muted-foreground)',
            cursor: 'pointer',
            transition: 'background var(--duration-fast) var(--ease-out-smooth)',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <MoreVerticalIcon size={15} />
        </button>

        <AnimatePresence>
          {showActions && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.14 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '100%',
                marginTop: '0.25rem',
                minWidth: '160px',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-3)',
                padding: '0.5rem',
                zIndex: 10,
              }}
            >
              {[
                { label: 'View report', danger: false },
                { label: 'Duplicate', danger: false },
                { label: 'Archive', danger: true },
              ].map((item) => (
                <ActionMenuItem key={item.label} label={item.label} danger={item.danger} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </td>
    </motion.tr>
  );
}

function ActionMenuItem({ label, danger = false }: { label: string; danger?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        padding: '0.5rem 0.75rem',
        background: isHovered ? 'var(--surface-subtle)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body-s-size)',
        color: danger ? 'var(--danger)' : 'var(--foreground)',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-out-smooth)',
      }}
    >
      {label}
    </button>
  );
}
