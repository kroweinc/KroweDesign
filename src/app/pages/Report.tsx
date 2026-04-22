import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ContentHeader } from '../components/ContentHeader';
import { VerdictCard } from '../components/VerdictCard';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import {
  MarketSizeChart,
  CompetitorScatter,
  MVPCostBar,
} from '../components/DataViz';
import { ChevronDownIcon, ChevronUpIcon, DownloadIcon } from 'lucide-react';

interface ReportSection {
  id: string;
  title: string;
  chart: React.ReactNode;
  takeaway: string;
  learnMore: string;
}

const REPORT_SECTIONS: ReportSection[] = [
  {
    id: 'market',
    title: 'Market Size',
    chart: <MarketSizeChart tam="$2.4B" sam="$480M" som="$24M" />,
    takeaway:
      'Your serviceable obtainable market is $24M - a focused slice of the $2.4B total market. That is enough to build a sustainable business if you execute well.',
    learnMore:
      'TAM (Total Addressable Market) is everyone who could theoretically use this. SAM (Serviceable Available Market) is the subset you can actually reach with your distribution. SOM (Serviceable Obtainable Market) is the realistic slice you can capture in the first 1-2 years.',
  },
  {
    id: 'competitors',
    title: 'Competitive Landscape',
    chart: (
      <CompetitorScatter
        competitors={[
          { name: 'ShopKeep', x: 80, y: 85 },
          { name: 'Square', x: 70, y: 65 },
          { name: 'Lightspeed', x: 60, y: 75 },
          { name: 'Clover', x: 50, y: 80 },
        ]}
        yourIdea={{ x: 45, y: 45 }}
      />
    ),
    takeaway:
      'You are positioned in a gap between feature-rich and affordable - a promising spot if customers value simplicity over completeness.',
    learnMore:
      'The chart plots price vs feature richness. Your competitors cluster in the high-price, high-feature quadrant. You are aiming for the underserved budget segment. The risk: customers in that segment might not pay enough to sustain your business.',
  },
  {
    id: 'mvp-cost',
    title: 'MVP Cost Estimate',
    chart: (
      <MVPCostBar
        breakdown={[
          { label: 'Engineering', amount: 45000, color: 'var(--primary)' },
          {
            label: 'Design',
            amount: 15000,
            color: 'color-mix(in oklch, var(--primary) 60%, transparent)',
          },
          {
            label: 'Infrastructure',
            amount: 8000,
            color: 'color-mix(in oklch, var(--primary) 40%, transparent)',
          },
          {
            label: 'Marketing',
            amount: 12000,
            color: 'color-mix(in oklch, var(--primary) 20%, transparent)',
          },
        ]}
        total={80000}
      />
    ),
    takeaway:
      'Engineering is the biggest cost, but you can trim it by starting with fewer features or using no-code tools for the first version.',
    learnMore:
      'This assumes you are hiring contractors or a small agency. If you are building it yourself, your main cost is opportunity cost - the salary you are not earning elsewhere. Infrastructure includes hosting, databases, and third-party APIs. Marketing is the budget to get your first 100 customers.',
  },
  {
    id: 'resources',
    title: 'What You will Need',
    chart: (
      <div style={{ padding: '2rem' }}>
        <ResourceList />
      </div>
    ),
    takeaway:
      'You will need a technical co-founder or freelance dev, a designer for the first version, and about 6 months of runway to get to launch.',
    learnMore:
      'The technical co-founder should know web development (React/Node or similar stack). The designer does not need to be full-time - a contractor for 2-3 weeks is enough. Runway assumes you are covering living expenses while building.',
  },
];

export function Report() {
  const [activeNav, setActiveNav] = useState('reports');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [followUpQuestion, setFollowUpQuestion] = useState('');

  const toggleSection = (id: string) => {
    const next = new Set(expandedSections);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedSections(next);
  };

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Sidebar */}
      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} userName="Alex Chen" />

      {/* Main content with sidebar offset */}
      <div className="flex-1" style={{ marginLeft: '260px' }}>
        <div role="main" style={{ minHeight: '100vh' }}>
          <div className="max-w-5xl mx-auto p-8 md:p-12">
            {/* Page header */}
            <ContentHeader
              title="RetailFlow Validation Report"
              breadcrumbs={[
                { label: 'Reports', href: '/reports' },
                { label: 'RetailFlow' },
              ]}
              actions={
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<DownloadIcon size={16} />}
                  onClick={() => alert('Export PDF')}
                >
                  Export PDF
                </Button>
              }
            />

            {/* Verdict card */}
            <VerdictCard
              verdict="Proceed"
              summary="The market data supports this direction. Your positioning is clear, and the MVP cost is reasonable for your target customer segment. Start building, but keep validating assumptions as you go."
              onExportPDF={() => alert('Export PDF')}
              onAskFollowUp={() =>
                document.getElementById('follow-up-input')?.focus()
              }
            />

            {/* Report sections */}
            <div
              className="grid md:grid-cols-2 gap-8"
              style={{
                display: 'grid',
                gap: '2rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                marginBottom: '3rem',
              }}
            >
              {REPORT_SECTIONS.map((section) => (
                <ReportSectionCard
                  key={section.id}
                  section={section}
                  expanded={expandedSections.has(section.id)}
                  onToggle={() => toggleSection(section.id)}
                />
              ))}
            </div>

            {/* Follow-up input */}
            <section
              style={{
                padding: '2.5rem',
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--primary)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <EmberGlyph />
                <h3
                  style={{
                    fontFamily: 'var(--type-h2-family)',
                    fontSize: 'var(--type-h2-size)',
                    fontWeight: 'var(--type-h2-weight)',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}
                >
                  Ask Krowe a follow-up
                </h3>
              </div>

              <p
                style={{
                  fontFamily: 'var(--type-body-family)',
                  fontSize: 'var(--type-body-size)',
                  color: 'var(--muted-foreground)',
                  marginBottom: '1.5rem',
                }}
              >
                Have questions about this report? Want to dig deeper into a specific area?
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Question: ${followUpQuestion}`);
                  setFollowUpQuestion('');
                }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}
                className="flex-col md:flex-row"
              >
                <div style={{ flex: 1 }}>
                  <Input
                    id="follow-up-input"
                    placeholder="e.g., How do I validate demand before building?"
                    value={followUpQuestion}
                    onChange={(e) => setFollowUpQuestion(e.target.value)}
                  />
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!followUpQuestion.trim()}
                >
                  Ask
                </Button>
              </form>
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

function ReportSectionCard({
  section,
  expanded,
  onToggle,
}: {
  section: ReportSection;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-1)',
      }}
    >
      {/* Section title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <EmberGlyph />
        <h3
          style={{
            fontFamily: 'var(--type-h3-family)',
            fontSize: 'var(--type-h3-size)',
            fontWeight: 'var(--type-h3-weight)',
            color: 'var(--foreground)',
            margin: 0,
          }}
        >
          {section.title}
        </h3>
      </div>

      {/* Chart */}
      <div style={{ marginBottom: '1.5rem' }}>{section.chart}</div>

      {/* Takeaway */}
      <p
        style={{
          fontFamily: 'var(--type-body-family)',
          fontSize: 'var(--type-body-size)',
          lineHeight: 'var(--type-body-line-height)',
          color: 'var(--foreground)',
          marginBottom: '1rem',
        }}
      >
        {section.takeaway}
      </p>

      {/* Learn more toggle */}
      <button
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0',
          background: 'transparent',
          border: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          fontWeight: 600,
          color: 'var(--primary)',
          cursor: 'pointer',
          transition: 'color var(--duration-fast) var(--ease-out-smooth)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-hover)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary)')}
      >
        {expanded ? (
          <>
            <ChevronUpIcon size={16} />
            Hide details
          </>
        ) : (
          <>
            <ChevronDownIcon size={16} />
            Learn more
          </>
        )}
      </button>

      {/* Expanded content */}
      {expanded && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'var(--surface-subtle)',
            borderRadius: 'var(--radius-md)',
            animation: 'expand var(--duration-normal) var(--ease-out-smooth)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--type-body-s-family)',
              fontSize: 'var(--type-body-s-size)',
              lineHeight: 'var(--type-body-s-line-height)',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            {section.learnMore}
          </p>
        </div>
      )}

      <style>{`
        @keyframes expand {
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
    </div>
  );
}

function ResourceList() {
  const resources = [
    { item: 'Technical co-founder or senior dev', cost: '$45k-60k', why: 'Build the product' },
    { item: 'Product designer (contract)', cost: '$10k-15k', why: 'UI/UX for MVP' },
    { item: 'Cloud infrastructure', cost: '$200-500/mo', why: 'Hosting & databases' },
    { item: '6 months runway', cost: 'Varies', why: 'Living expenses while building' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {resources.map((resource, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1rem',
            background: 'var(--surface-subtle)',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-size)',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '0.25rem',
              }}
            >
              {resource.item}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-s-size)',
                color: 'var(--muted-foreground)',
              }}
            >
              {resource.why}
            </div>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--type-body-s-size)',
              fontWeight: 600,
              color: 'var(--foreground)',
              whiteSpace: 'nowrap',
            }}
          >
            {resource.cost}
          </div>
        </div>
      ))}
    </div>
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
