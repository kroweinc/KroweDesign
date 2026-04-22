/**
 * Grouped navigation for /docs — single source for sidebar and landing deep links.
 */
export type DocsNavItem = { path: string; label: string };

export type DocsNavGroup = {
  id: string;
  label: string;
  items: DocsNavItem[];
};

export const DOCS_NAV_GROUPS: DocsNavGroup[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [{ path: 'foundations', label: 'Foundations' }],
  },
  {
    id: 'tokens',
    label: 'Tokens',
    items: [
      { path: 'colors', label: 'Colors' },
      { path: 'typography', label: 'Typography' },
      { path: 'animations', label: 'Animations' },
      { path: 'space', label: 'Space & elevation' },
      { path: 'motifs', label: 'Motifs' },
    ],
  },
  {
    id: 'ui',
    label: 'UI',
    items: [
      { path: 'buttons', label: 'Buttons' },
      { path: 'cards', label: 'Cards' },
      { path: 'components', label: 'Components' },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    items: [{ path: 'patterns', label: 'Screen patterns' }],
  },
  {
    id: 'guidance',
    label: 'Guidance',
    items: [
      { path: 'voice', label: 'Voice' },
      { path: 'accessibility', label: 'Accessibility' },
    ],
  },
];

/** Flat list for lookups and legacy helpers */
export const DOCS_NAV_ITEMS: DocsNavItem[] = DOCS_NAV_GROUPS.flatMap((g) => g.items);

/** Slug after `/docs/` (e.g. `colors`), or null on `/docs` only. */
export function getDocsSlugFromPathname(pathname: string): string | null {
  const m = pathname.match(/\/docs\/([^/?#]+)/);
  return m?.[1] ?? null;
}

export function getDocsNavLabelForSlug(slug: string | null): string | undefined {
  if (!slug) return undefined;
  return DOCS_NAV_ITEMS.find((i) => i.path === slug)?.label;
}
