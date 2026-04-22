import { DocPageHeader, DocSection, docP } from './DocsPageChrome';

export function DocsAccessibility() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
      <DocPageHeader
        title="Accessibility"
        description="How Krowe handles contrast, focus, touch targets, motion, and content structure — apply these checks whenever you add or change UI."
      />

      <DocSection id="contrast" title="Color & contrast">
        <p style={docP}>
          Text on canvas should meet WCAG AA where possible: roughly 4.5:1 for body and 3:1 for large display type. The
          orange primary is reserved for actions and focus — never rely on color alone for meaning (pair with labels or
          icons).
        </p>
      </DocSection>

      <DocSection id="focus" title="Focus & keyboard">
        <p style={docP}>
          Every interactive control needs a visible focus state. Primary focus treatment in components uses the orange
          ring at controlled opacity. Tab order should follow reading order; modals must trap focus until dismissed.
        </p>
      </DocSection>

      <DocSection id="touch" title="Touch targets">
        <p style={docP}>
          Primary actions and list rows target at least 44×44px where feasible. Keep spacing between adjacent tappable
          items so they are easy to hit on phones.
        </p>
      </DocSection>

      <DocSection id="motion" title="Motion">
        <p style={docP}>
          Interface motion respects <code style={{ fontFamily: 'var(--font-mono)' }}>prefers-reduced-motion</code> in the
          global base styles. Avoid animating properties other than transform and opacity for smooth frames.
        </p>
      </DocSection>

      <DocSection id="content" title="Content">
        <p style={docP}>
          Use semantic structure: one <code style={{ fontFamily: 'var(--font-mono)' }}>main</code> per page, headings in
          order, and <code>aria-label</code> (or visible text) on icon-only controls.
        </p>
      </DocSection>
    </div>
  );
}
