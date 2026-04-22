import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Sidebar } from '@/app/components/Sidebar';
import { ContentHeader } from '@/app/components/ContentHeader';
import { VerdictCard } from '@/app/components/VerdictCard';
import { Button } from '@/app/components/Button';
import { Input } from '@/app/components/Input';
import { EmberGlyph } from '@/app/components/EmberGlyph';
import { useInView } from '@/app/hooks/useInView';
import { useCountUp } from '@/app/hooks/useCountUp';
import {
  MarketSizeChart,
  CompetitorScatter,
  MVPCostBar,
} from '@/app/components/DataViz';
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
    takeaway: 'Your serviceable obtainable market is $24M — a focused slice of the $2.4B total market. Enough to build a sustainable business if you execute well.',
    learnMore: 'TAM is everyone who could theoretically use this. SAM is the subset you can actually reach. SOM is the realistic slice you can capture in the first 1–2 years.',
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
    takeaway: 'You are positioned in a gap between feature-rich and affordable — a promising spot if customers value simplicity over completeness.',
    learnMore: 'The chart plots price vs feature richness. Competitors cluster in the high-price, high-feature quadrant. You are aiming for the underserved budget segment.',
  },
  {
    id: 'mvp-cost',
    title: 'MVP Cost Estimate',
    chart: (
      <MVPCostBar
        breakdown={[
          { label: 'Engineering', amount: 45000, color: 'var(--primary)' },
          { label: 'Design', amount: 15000, color: 'color-mix(in oklch, var(--primary) 60%, transparent)' },
          { label: 'Infrastructure', amount: 8000, color: 'color-mix(in oklch, var(--primary) 40%, transparent)' },
          { label: 'Marketing', amount: 12000, color: 'color-mix(in oklch, var(--primary) 20%, transparent)' },
        ]}
        total={80000}
      />
    ),
    takeaway: 'Engineering is the biggest cost, but you can trim it by starting with fewer features or using no-code tools for the first version.',
    learnMore: 'Assumes hiring contractors or a small agency. If building yourself, your main cost is opportunity cost. Infrastructure includes hosting, databases, and third-party APIs.',
  },
  {
    id: 'resources',
    title: 'What You Will Need',
    chart: <div style={{ padding: '2rem' }}><ResourceList /></div>,
    takeaway: 'You will need a technical co-founder or freelance dev, a designer for the first version, and about 6 months of runway to get to launch.',
    learnMore: 'The technical co-founder should know web development. The designer does not need to be full-time — a contractor for 2–3 weeks is enough.',
  },
];

/** Full validation report layout with verdict, sections, and follow-up. */
export function ValidationReportPattern() {
  const [activeNav, setActiveNav] = useState('reports');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: '260px',
          right: 0,
          height: '2px',
          background: 'var(--primary)',
          transformOrigin: 'left',
          scaleX,
          zIndex: 100,
        }}
        className="scroll-bar-mobile"
      />

      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} userName="Alex Chen" />

      <div style={{ flex: 1, marginLeft: '260px' }} className="report-main">
        <div role="main" style={{ minHeight: '100vh' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <ContentHeader
              title="RetailFlow Validation Report"
              breadcrumbs={[{ label: 'Reports', href: '/reports' }, { label: 'RetailFlow' }]}
              actions={
                <Button variant="secondary" size="sm" icon={<DownloadIcon size={16} />}>
                  Export PDF
                </Button>
              }
            />

            <VerdictCard
              verdict="Proceed"
              summary="The market data supports this direction. Your positioning is clear, and the MVP cost is reasonable for your target customer segment. Start building, but keep validating assumptions as you go."
              animateIn
            />

            <div
              style={{
                display: 'grid',
                gap: '2rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                marginBottom: '3rem',
              }}
            >
              {REPORT_SECTIONS.map((section, i) => (
                <ReportSectionCard
                  key={section.id}
                  section={section}
                  index={i}
                  expanded={expandedSections.has(section.id)}
                  onToggle={() => toggleSection(section.id)}
                />
              ))}
            </div>

            {/* Follow-up */}
            <section
              style={{
                padding: '2.5rem',
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--primary)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <EmberGlyph size={14} />
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

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-size)', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                Have questions about this report? Want to dig deeper into a specific area?
              </p>

              <form
                onSubmit={(e) => { e.preventDefault(); setFollowUpQuestion(''); }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}
              >
                <div style={{ flex: 1 }}>
                  <Input
                    id="follow-up-input"
                    placeholder="e.g., How do I validate demand before building?"
                    value={followUpQuestion}
                    onChange={(e) => setFollowUpQuestion(e.target.value)}
                  />
                </div>
                <Button variant="primary" type="submit" disabled={!followUpQuestion.trim()}>
                  Ask
                </Button>
              </form>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .report-main { margin-left: 0 !important; }
          .scroll-bar-mobile { left: 0 !important; }
        }
      `}</style>
    </div>
  );
}

function ReportSectionCard({
  section,
  index,
  expanded,
  onToggle,
}: {
  section: ReportSection;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { ref, inView } = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '2rem',
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--primary)',
            letterSpacing: '0.06em',
            background: 'var(--primary-soft)',
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 style={{ fontFamily: 'var(--type-h3-family)', fontSize: 'var(--type-h3-size)', fontWeight: 'var(--type-h3-weight)', color: 'var(--foreground)', margin: 0 }}>
          {section.title}
        </h3>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>{section.chart}</div>

      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-size)', lineHeight: 'var(--type-body-line-height)', color: 'var(--foreground)', marginBottom: '1rem' }}>
        {section.takeaway}
      </p>

      <button
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.375rem 0',
          background: 'transparent',
          border: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          fontWeight: 600,
          color: 'var(--primary)',
          cursor: 'pointer',
          transition: 'opacity var(--duration-fast)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {expanded ? <ChevronUpIcon size={15} /> : <ChevronDownIcon size={15} />}
        {expanded ? 'Hide details' : 'Learn more'}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-s-size)', lineHeight: 'var(--type-body-s-line-height)', color: 'var(--muted-foreground)', margin: 0 }}>
                {section.learnMore}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MarketStatNumbers() {
  const { ref, inView } = useInView(0.3);
  const tam = useCountUp(2400, 900, inView);
  const som = useCountUp(24, 900, inView);

  return (
    <div ref={ref} style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>
          ${(tam / 1000).toFixed(1)}B
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-caption-size)', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TAM</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>
          ${som}M
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-caption-size)', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SOM</div>
      </div>
    </div>
  );
}

function ResourceList() {
  const resources = [
    { item: 'Technical co-founder or senior dev', cost: '$45k–60k', why: 'Build the product' },
    { item: 'Product designer (contract)', cost: '$10k–15k', why: 'UI/UX for MVP' },
    { item: 'Cloud infrastructure', cost: '$200–500/mo', why: 'Hosting & databases' },
    { item: '6 months runway', cost: 'Varies', why: 'Living expenses while building' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {resources.map((resource, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '0.875rem 1rem',
            background: 'var(--surface-subtle)',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-size)', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.2rem' }}>{resource.item}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-s-size)', color: 'var(--muted-foreground)' }}>{resource.why}</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-body-s-size)', fontWeight: 600, color: 'var(--foreground)', whiteSpace: 'nowrap' }}>{resource.cost}</div>
        </div>
      ))}
    </div>
  );
}
