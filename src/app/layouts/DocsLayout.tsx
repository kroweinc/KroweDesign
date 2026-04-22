import { Suspense, Fragment, type ReactNode } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { DOCS_NAV_GROUPS } from '../docsNav';
import { EmberGlyph } from '../components/EmberGlyph';

function docSuspenseFallback(): ReactNode {
  return (
    <div
      className="py-12 text-center"
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body-s-size)',
        color: 'var(--muted-foreground)',
      }}
    >
      Loading…
    </div>
  );
}

const groupLabelStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--type-caption-size)',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: 'var(--muted-foreground)',
};

/**
 * Shared chrome for /docs/*: home link, grouped section nav, and content.
 */
export function DocsLayout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
      <header
        className="shrink-0 border-b px-4 py-3 md:px-6"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 no-underline hover:opacity-90"
            style={{ color: 'var(--foreground)' }}
          >
            <EmberGlyph size={24} />
            <span
              className="text-sm font-medium sm:text-base"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Krowe design library
            </span>
          </Link>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-0 md:flex-row">
        <nav
          className="shrink-0 border-b px-2 py-3 md:w-56 md:max-h-[calc(100vh-3.5rem)] md:overflow-y-auto md:border-b-0 md:border-r md:px-3 md:py-6 md:sticky md:top-0 md:self-start"
          style={{ borderColor: 'var(--border)' }}
          aria-label="Design library"
        >
          <p className="mb-3 hidden px-2 md:block" style={groupLabelStyle}>
            Browse
          </p>
          <div className="flex flex-row flex-wrap gap-x-3 gap-y-4 md:flex-col md:gap-y-5">
            {DOCS_NAV_GROUPS.map((group) => (
              <Fragment key={group.id}>
                <div className="min-w-0 flex-1 basis-[140px] md:basis-auto">
                  <p className="mb-1.5 px-2 md:px-2" style={groupLabelStyle}>
                    {group.label}
                  </p>
                  <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                    {group.items.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={`/docs/${item.path}`}
                          className="block w-fit max-w-full rounded-md px-2 py-1 text-left no-underline md:w-full"
                        >
                          {({ isActive }) => (
                            <span
                              className="hover:text-primary"
                              style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: 'var(--type-body-s-size)',
                                fontWeight: isActive ? 600 : 400,
                                color: isActive ? 'var(--primary)' : 'var(--foreground)',
                                textDecoration: 'none',
                                borderBottom: isActive
                                  ? '1px solid color-mix(in oklch, var(--primary) 60%, transparent)'
                                  : '1px solid color-mix(in oklch, var(--primary) 35%, transparent)',
                                paddingBottom: '0.1em',
                                transition:
                                  'color 180ms var(--ease-out-smooth), border-color 180ms var(--ease-out-smooth)',
                              }}
                            >
                              {item.label}
                            </span>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </nav>

        <main className="min-w-0 flex-1" style={{ borderColor: 'var(--border)' }}>
          <Suspense fallback={docSuspenseFallback()}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
