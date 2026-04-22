import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ContentHeader } from '../components/ContentHeader';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { PlusIcon, MoreVerticalIcon, ClockIcon } from 'lucide-react';

interface Idea {
  id: string;
  title: string;
  verdict: 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';
  lastUpdated: string;
  createdAt: string;
}

const SAMPLE_IDEAS: Idea[] = [
  {
    id: '1',
    title: 'RetailFlow - Inventory management for small shops',
    verdict: 'Proceed',
    lastUpdated: '2 hours ago',
    createdAt: '2026-04-20',
  },
  {
    id: '2',
    title: 'LocalMart - Marketplace for artisan goods',
    verdict: 'Refine',
    lastUpdated: '1 day ago',
    createdAt: '2026-04-19',
  },
  {
    id: '3',
    title: 'HealthTrack - Personal wellness dashboard',
    verdict: 'Pivot',
    lastUpdated: '3 days ago',
    createdAt: '2026-04-17',
  },
  {
    id: '4',
    title: 'CodeMentor - 1-on-1 programming tutoring',
    verdict: 'Rethink',
    lastUpdated: '1 week ago',
    createdAt: '2026-04-13',
  },
];

type VerdictFilter = 'all' | 'Proceed' | 'Refine' | 'Pivot' | 'Rethink';

export function IdeasList() {
  const [activeNav, setActiveNav] = useState('ideas');
  const [ideas] = useState<Idea[]>(SAMPLE_IDEAS);
  const [filter, setFilter] = useState<VerdictFilter>('all');

  const filteredIdeas =
    filter === 'all' ? ideas : ideas.filter((idea) => idea.verdict === filter);

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Sidebar */}
      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} userName="Alex Chen" />

      {/* Main content with sidebar offset */}
      <div className="flex-1" style={{ marginLeft: '260px' }}>
        <div role="main" style={{ minHeight: '100vh' }}>
          <div className="max-w-6xl mx-auto p-8 md:p-12">
            {/* Page header */}
            <ContentHeader
              title="Your Ideas"
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

            {ideas.length === 0 ? (
              /* Empty state */
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                }}
              >
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
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <FilterChip
                    label="All"
                    count={ideas.length}
                    active={filter === 'all'}
                    onClick={() => setFilter('all')}
                  />
                  <FilterChip
                    label="Proceed"
                    count={ideas.filter((i) => i.verdict === 'Proceed').length}
                    active={filter === 'Proceed'}
                    onClick={() => setFilter('Proceed')}
                    color="var(--success)"
                  />
                  <FilterChip
                    label="Refine"
                    count={ideas.filter((i) => i.verdict === 'Refine').length}
                    active={filter === 'Refine'}
                    onClick={() => setFilter('Refine')}
                    color="var(--primary)"
                  />
                  <FilterChip
                    label="Pivot"
                    count={ideas.filter((i) => i.verdict === 'Pivot').length}
                    active={filter === 'Pivot'}
                    onClick={() => setFilter('Pivot')}
                    color="var(--warning)"
                  />
                  <FilterChip
                    label="Rethink"
                    count={ideas.filter((i) => i.verdict === 'Rethink').length}
                    active={filter === 'Rethink'}
                    onClick={() => setFilter('Rethink')}
                    color="var(--danger)"
                  />
                </div>

                {/* Table */}
                <div
                  style={{
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-1)',
                  }}
                >
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          background: 'var(--surface-subtle)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <th
                          style={{
                            padding: '1rem 1.5rem',
                            textAlign: 'left',
                            fontFamily: 'var(--font-sans)',
                            fontSize: 'var(--type-caption-size)',
                            fontWeight: 600,
                            color: 'var(--muted-foreground)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          Idea
                        </th>
                        <th
                          style={{
                            padding: '1rem 1.5rem',
                            textAlign: 'left',
                            fontFamily: 'var(--font-sans)',
                            fontSize: 'var(--type-caption-size)',
                            fontWeight: 600,
                            color: 'var(--muted-foreground)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          Verdict
                        </th>
                        <th
                          style={{
                            padding: '1rem 1.5rem',
                            textAlign: 'left',
                            fontFamily: 'var(--font-sans)',
                            fontSize: 'var(--type-caption-size)',
                            fontWeight: 600,
                            color: 'var(--muted-foreground)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          Last updated
                        </th>
                        <th style={{ width: '48px' }} />
                      </tr>
                    </thead>
                    <tbody>
                      {filteredIdeas.map((idea) => (
                        <IdeaRow key={idea.id} idea={idea} />
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Results count */}
                <p
                  style={{
                    marginTop: '1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-body-s-size)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Showing {filteredIdeas.length} of {ideas.length}{' '}
                  {ideas.length === 1 ? 'idea' : 'ideas'}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile offset */}
      <style>{`
        @media (max-width: 768px) {
          .flex-1 {
            margin-left: 0 !important;
          }
          table {
            display: block;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
  color,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        background: active
          ? color
            ? `color-mix(in oklch, ${color} 12%, white)`
            : 'var(--primary-soft)'
          : 'var(--surface-subtle)',
        border: active
          ? `1px solid ${color || 'var(--primary)'}`
          : '1px solid var(--border)',
        borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body-s-size)',
        fontWeight: active ? 600 : 400,
        color: active ? color || 'var(--primary)' : 'var(--foreground)',
        cursor: 'pointer',
        transition: 'all var(--duration-fast) var(--ease-out-smooth)',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'var(--background)';
          e.currentTarget.style.borderColor = color || 'var(--primary)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'var(--surface-subtle)';
          e.currentTarget.style.borderColor = 'var(--border)';
        }
      }}
    >
      {label}
      <span
        style={{
          padding: '0.125rem 0.375rem',
          background: active ? color || 'var(--primary)' : 'var(--border)',
          color: active ? 'white' : 'var(--muted-foreground)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--type-caption-size)',
          fontWeight: 600,
        }}
      >
        {count}
      </span>
    </button>
  );
}

function IdeaRow({ idea }: { idea: Idea }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showActions, setShowActions] = useState(false);

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
    <tr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowActions(false);
      }}
      style={{
        borderBottom: '1px solid var(--border)',
        background: isHovered ? 'var(--surface-subtle)' : 'transparent',
        transition: 'background var(--duration-fast) var(--ease-out-smooth)',
        cursor: 'pointer',
      }}
      onClick={() => (window.location.href = `/report/${idea.id}`)}
    >
      {/* Title */}
      <td style={{ padding: '1.25rem 1.5rem' }}>
        <a
          href={`/report/${idea.id}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            fontWeight: 500,
            color: 'var(--foreground)',
            textDecoration: 'none',
            transition: 'color var(--duration-fast) var(--ease-out-smooth)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--foreground)';
          }}
        >
          {idea.title}
        </a>
      </td>

      {/* Verdict */}
      <td style={{ padding: '1.25rem 1.5rem' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.375rem 0.75rem',
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

      {/* Last updated */}
      <td style={{ padding: '1.25rem 1.5rem' }}>
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
          <span>{idea.lastUpdated}</span>
        </div>
      </td>

      {/* Actions */}
      <td style={{ padding: '1.25rem 1.5rem', position: 'relative' }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowActions(!showActions);
          }}
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
            e.currentTarget.style.background = 'var(--background)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <MoreVerticalIcon size={16} />
        </button>

        {/* Action menu */}
        {showActions && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '100%',
              marginTop: '0.25rem',
              minWidth: '160px',
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-3)',
              padding: '0.5rem',
              zIndex: 10,
              animation: 'slide-down var(--duration-fast) var(--ease-out-smooth)',
            }}
          >
            <ActionMenuItem label="View report" />
            <ActionMenuItem label="Duplicate" />
            <ActionMenuItem label="Archive" danger />
          </div>
        )}
      </td>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </tr>
  );
}

function ActionMenuItem({ label, danger = false }: { label: string; danger?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => alert(label)}
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
        transition: 'all var(--duration-fast) var(--ease-out-smooth)',
      }}
    >
      {label}
    </button>
  );
}
