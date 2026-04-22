import {
  DocPageHeader,
  DocSection,
  docP,
  docMuted,
  DocCardGrid,
  DocInfoCard,
} from './DocsPageChrome';

export function DocsComponents() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
      <DocPageHeader
        title="Components"
        description="Production-ready building blocks: buttons, inputs, navigation, report patterns, and empty and error states — all aligned with Krowe tokens and motion."
      />

      <DocSection id="actions" title="Actions & forms">
        <p style={docP}>
          Primary interaction layer — four button variants, full loading and focus states, and form controls with validation
          feedback.
        </p>
        <DocCardGrid>
          <DocInfoCard
            title="Button"
            description="Variants: primary, secondary, ghost, destructive. Sizes sm–lg. Ember-dot loading spinner (never a generic loader)."
          />
          <DocInfoCard
            title="Input"
            description="Text, textarea, checkbox, toggle. Focus ring uses 4px orange at 10% + 1px border. Error and success states included."
          />
        </DocCardGrid>
      </DocSection>

      <DocSection id="layout" title="Layout & navigation">
        <p style={docP}>Shell pieces for authenticated and marketing layouts.</p>
        <DocCardGrid>
          <DocInfoCard
            title="Sidebar"
            description="260px expanded, 64px collapsed, mobile drawer. Active item: soft orange fill + left border + label."
          />
          <DocInfoCard
            title="Content header"
            description="Instrument Serif title, optional breadcrumbs, right-aligned actions."
          />
          <DocInfoCard
            title="Modal"
            description="560px dialog, warm backdrop, scale-in. Use for confirmations and focused tasks."
          />
        </DocCardGrid>
      </DocSection>

      <DocSection id="flows" title="Flows & progress">
        <DocCardGrid>
          <DocInfoCard
            title="Progress indicator"
            description="Step count, section name, estimate, orange track. Past steps show as tappable dots."
          />
          <DocInfoCard
            title="Selection card"
            description="Large illustrated pick-one cards. Selected: orange border, soft fill, check badge."
          />
        </DocCardGrid>
      </DocSection>

      <DocSection id="signature" title="Signature moments">
        <p style={docP}>Patterns that make Krowe feel like a product, not a template.</p>
        <DocCardGrid>
          <DocInfoCard
            title="AI rewrite panel"
            description="Margin-note layout: your answer vs “A small nudge from Krowe.” Use / keep / edit actions."
          />
          <DocInfoCard
            title="Verdict card"
            description="Serif verdict word, semantic badge, one-line summary, export and follow-up actions."
          />
        </DocCardGrid>
      </DocSection>

      <DocSection id="data-states" title="Data & states">
        <DocCardGrid>
          <DocInfoCard
            title="DataViz"
            description="Market donut, competitor scatter, MVP cost bar — warm orange palette, plain-English callouts."
          />
          <DocInfoCard
            title="Empty state"
            description="Advisor voice + optional inline input. No dead ends."
          />
          <DocInfoCard
            title="Error state"
            description="Recoverable vs system errors with clear next steps."
          />
        </DocCardGrid>
      </DocSection>

      <DocSection id="primitives" title="UI primitives">
        <p style={{ ...docMuted, marginTop: '0.5rem' }}>
          Low-level UI primitives (dialogs, tabs, selects, and similar) are available to compose new patterns. Default to
          Krowe components for the main product; add primitives when you need something that does not map to an existing
          pattern.
        </p>
      </DocSection>
    </div>
  );
}
