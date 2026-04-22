import { DocPageHeader, DocSection, docP, DocCardGrid, DocInfoCard } from './DocsPageChrome';

export function DocsSurfaces() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
      <DocPageHeader
        title="Surfaces"
        description="The seven core experiences in the Krowe product, each using the same tokens, components, and voice — from first touch through the validation report."
      />

      <DocSection id="marketing" title="Marketing & entry">
        <DocCardGrid>
          <DocInfoCard
            title="Landing"
            description="Sunrise gradient hero, blueprint grid, report preview cards, primary CTA “Start validating.”"
          />
        </DocCardGrid>
      </DocSection>

      <DocSection id="auth" title="Account">
        <DocCardGrid>
          <DocInfoCard title="Auth" description="Sign-in and account entry with the warm neutral frame." />
        </DocCardGrid>
      </DocSection>

      <DocSection id="onboarding" title="Onboarding">
        <DocCardGrid>
          <DocInfoCard
            title="Signup"
            description="Multi-step flow with progress indicator, selection cards, and advisor copy."
          />
        </DocCardGrid>
      </DocSection>

      <DocSection id="app" title="Product">
        <p style={docP}>Core app surfaces use the sidebar and content header pattern.</p>
        <DocCardGrid>
          <DocInfoCard title="Dashboard" description="Home for ideas and status at a glance." />
          <DocInfoCard title="Ideas list" description="Browse and open validation ideas." />
          <DocInfoCard title="Report" description="Verdict, data visualization, and export." />
        </DocCardGrid>
      </DocSection>
    </div>
  );
}
