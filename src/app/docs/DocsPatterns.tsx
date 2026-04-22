import { Link } from 'react-router';
import { LayoutTemplateIcon, LogInIcon, ListOrderedIcon, LayoutDashboardIcon, BarChart3Icon, TableIcon } from 'lucide-react';
import {
  DocPageHeader,
  DocSection,
  docP,
  DocLivePreview,
  DocCallout,
  DocCardGrid,
  DocInfoCard,
  DocSnippet,
  DocsHeroBento,
  docsPageWrap,
} from './DocsPageChrome';
import {
  MarketingLandingPattern,
  AuthSplitPattern,
  OnboardingFlowPattern,
  DashboardHomePattern,
  ValidationReportPattern,
  IdeasBrowsePattern,
} from '@/krowe';

const patternLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.55rem 1rem',
  borderRadius: 'var(--radius-full)',
  border: '1px solid var(--border)',
  background: 'var(--background)',
  boxShadow: 'var(--shadow-1)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-body-s-size)',
  fontWeight: 600,
  color: 'var(--foreground)',
  textDecoration: 'none',
} as const;

export function DocsPatterns() {
  return (
    <div style={docsPageWrap}>
      <DocPageHeader
        title="Patterns"
        description="Full Krowe compositions you can drop into a route: marketing hero, auth split, onboarding flow, app shell home, validation report, and ideas browse. Each pattern composes tokens (Colors, Typography, Animations) and UI pieces (Buttons, Cards, Components) — presentational shells with local demo state only."
      />

      <DocsHeroBento
        eyebrow="Screen patterns"
        title="Shipped layouts, not lorem galleries."
        description="Import a pattern when you need the whole scene: grid, motion, chrome, and sample copy wired together. Swap in your router, data layer, and analytics — the visuals stay token-driven."
        chips={[
          { k: 'Entry', v: 'Marketing + Auth' },
          { k: 'Core flows', v: 'Onboarding' },
          { k: 'App shell', v: 'Home · Report · Ideas' },
        ]}
      />

      <DocCallout title="How to use">
        Import from <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>@/krowe</code> (or a
        specific file under <code style={{ fontFamily: 'var(--font-mono)' }}>src/krowe/patterns/</code>). Wrap in your
        app router and data layer; patterns are presentational and keep local demo state only where needed for the UI.
        Token reference:{' '}
        <Link to="/docs/colors" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Colors
        </Link>
        {' · '}
        <Link to="/docs/animations" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Animations
        </Link>
        .
      </DocCallout>

      <DocCardGrid>
        <DocInfoCard
          title="MarketingLandingPattern"
          description="Sunrise hero, blueprint grid, animated headline, CTA, preview card, stats strip, footer."
          code="@/krowe → MarketingLandingPattern"
        />
        <DocInfoCard
          title="AuthSplitPattern"
          description="Editorial left rail + staggered credential column with marketing-grade polish."
          code="AuthSplitPattern"
        />
        <DocInfoCard
          title="OnboardingFlowPattern"
          description="Progress header, reflection steps, selection cards, fixed footer, generation state."
          code="OnboardingFlowPattern"
        />
        <DocInfoCard
          title="DashboardHomePattern"
          description="Sidebar, blueprint canvas, featured card, grid, suggested next steps."
          code="DashboardHomePattern"
        />
        <DocInfoCard
          title="ValidationReportPattern"
          description="Verdict, expandable insights, charts, scroll progress, follow-up panel."
          code="ValidationReportPattern"
        />
        <DocInfoCard
          title="IdeasBrowsePattern"
          description="Filters, dense table, verdict chips, row actions, empty variant."
          code="IdeasBrowsePattern"
        />
      </DocCardGrid>

      <DocSnippet
        title="Import"
        code={`import {
  MarketingLandingPattern,
  AuthSplitPattern,
  OnboardingFlowPattern,
  DashboardHomePattern,
  ValidationReportPattern,
  IdeasBrowsePattern,
} from '@/krowe';`}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {[
          { href: '#pattern-marketing', label: 'Marketing', icon: <LayoutTemplateIcon size={16} /> },
          { href: '#pattern-auth', label: 'Auth', icon: <LogInIcon size={16} /> },
          { href: '#pattern-onboarding', label: 'Onboarding', icon: <ListOrderedIcon size={16} /> },
          { href: '#pattern-dashboard', label: 'Home', icon: <LayoutDashboardIcon size={16} /> },
          { href: '#pattern-report', label: 'Report', icon: <BarChart3Icon size={16} /> },
          { href: '#pattern-ideas', label: 'Ideas', icon: <TableIcon size={16} /> },
        ].map((x) => (
          <a key={x.href} href={x.href} style={patternLinkStyle}>
            <span style={{ color: 'var(--primary)', display: 'flex' }}>{x.icon}</span>
            {x.label}
          </a>
        ))}
      </div>

      <DocSection id="pattern-marketing" title="Marketing landing">
        <p style={docP}>
          Sunrise hero with blueprint grid, animated headline, CTA, report preview card, stats strip, and footer.
        </p>
        <DocLivePreview label="<MarketingLandingPattern />" maxHeight="min(85vh, 720px)">
          <div
            style={{
              background:
                'radial-gradient(640px 200px at 50% 0%, color-mix(in oklch, var(--primary) 6%, transparent), transparent 55%)',
            }}
          >
            <MarketingLandingPattern />
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="pattern-auth" title="Auth — split shell">
        <p style={docP}>Editorial left panel and staggered credential form on the right.</p>
        <DocLivePreview label="<AuthSplitPattern />" minHeight={480}>
          <div
            style={{
              background:
                'linear-gradient(180deg, var(--background) 0%, color-mix(in oklch, var(--primary) 4%, var(--background)) 100%)',
            }}
          >
            <AuthSplitPattern />
          </div>
        </DocLivePreview>
      </DocSection>

      <DocSection id="pattern-onboarding" title="Onboarding flow">
        <p style={docP}>
          Progress header, reflection and selection steps, fixed footer actions, and generation loading state.
        </p>
        <DocLivePreview label="<OnboardingFlowPattern />" maxHeight="min(90vh, 760px)">
          <OnboardingFlowPattern />
        </DocLivePreview>
      </DocSection>

      <DocSection id="pattern-dashboard" title="App shell — home">
        <p style={docP}>Sidebar, blueprint canvas, featured idea card, grid, and suggested next steps.</p>
        <DocLivePreview label="<DashboardHomePattern />" maxHeight="min(85vh, 680px)">
          <DashboardHomePattern />
        </DocLivePreview>
      </DocSection>

      <DocSection id="pattern-report" title="App shell — validation report">
        <p style={docP}>Verdict, expandable insight cards with charts, scroll progress, and follow-up panel.</p>
        <DocLivePreview label="<ValidationReportPattern />" maxHeight="min(90vh, 720px)">
          <ValidationReportPattern />
        </DocLivePreview>
      </DocSection>

      <DocSection id="pattern-ideas" title="App shell — ideas browse">
        <p style={docP}>Filters, dense table rows with verdict chips, row actions, and empty state variant.</p>
        <DocLivePreview label="<IdeasBrowsePattern />" maxHeight="min(85vh, 640px)">
          <IdeasBrowsePattern />
        </DocLivePreview>
      </DocSection>
    </div>
  );
}
