import { Suspense, Fragment, type CSSProperties, type ReactNode } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { ChevronRightIcon, SearchIcon } from 'lucide-react';
import { DOCS_NAV_GROUPS, getDocsNavLabelForSlug, getDocsSlugFromPathname } from '../docsNav';
import { BrandMark } from '../components/BrandMark';

function docSuspenseFallback(): ReactNode {
  return (
    <div
      className="py-16 text-center"
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

function DocsBreadcrumb() {
  const { pathname } = useLocation();
  const slug = getDocsSlugFromPathname(pathname);
  const label = getDocsNavLabelForSlug(slug);

  const crumbStyle: CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--type-caption-size)',
    fontWeight: 500,
    letterSpacing: '0.02em',
  };

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.75rem' }}>
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.35rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li style={crumbStyle}>
          <Link
            to="/docs/foundations"
            style={{
              color: 'var(--muted-foreground)',
              textDecoration: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '0.15rem 0.25rem',
              margin: '-0.15rem -0.25rem',
            }}
          >
            Documentation
          </Link>
        </li>
        {label ? (
          <>
            <li aria-hidden style={{ display: 'flex', color: 'var(--border)' }}>
              <ChevronRightIcon size={14} style={{ color: 'var(--muted-foreground)', opacity: 0.75 }} />
            </li>
            <li
              style={{
                ...crumbStyle,
                color: 'var(--foreground)',
                fontWeight: 600,
              }}
            >
              {label}
            </li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}

/**
 * Shared chrome for /docs/* — developer-docs style top bar, sticky sidebar, breadcrumbs.
 */
export function DocsLayout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'var(--background)',
        ['--docs-header-h' as string]: '3.25rem',
      }}
    >
      <header
        className="sticky top-0 z-50 shrink-0 border-b px-4 backdrop-blur-md md:px-6"
        style={{
          borderColor: 'var(--border)',
          background: 'color-mix(in oklch, var(--background) 88%, transparent)',
          minHeight: 'var(--docs-header-h)',
        }}
      >
        <div
          className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 py-3"
          style={{ minHeight: 'var(--docs-header-h)' }}
        >
          <div className="flex min-w-0 flex-1 items-center gap-6">
            <Link
              to="/"
              className="flex shrink-0 items-center gap-2.5 no-underline"
              style={{ color: 'var(--foreground)' }}
            >
              <BrandMark size={28} />
              <div className="flex min-w-0 flex-col leading-tight">
                <span
                  className="truncate text-sm font-semibold sm:text-[0.9375rem]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Krowe
                </span>
                <span
                  className="hidden truncate text-[11px] font-medium sm:block"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--muted-foreground)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Design system
                </span>
              </div>
            </Link>

            <div
              className="hidden h-8 w-px shrink-0 sm:block"
              style={{ background: 'var(--border)' }}
              aria-hidden
            />

            <div
              className="hidden min-w-0 flex-1 md:block"
              role="search"
              aria-label="Search documentation (placeholder)"
            >
              <div
                className="flex max-w-md cursor-default items-center gap-2 rounded-lg border px-3 py-2"
                style={{
                  borderColor: 'var(--border)',
                  background: 'var(--surface-subtle)',
                  boxShadow: 'var(--shadow-1)',
                }}
              >
                <SearchIcon size={16} style={{ color: 'var(--muted-foreground)', flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-body-s-size)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Search documentation…
                </span>
                <kbd
                  className="ml-auto hidden rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium sm:inline-block"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'var(--background)',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/docs/foundations"
              className="hidden rounded-md border px-2.5 py-1.5 text-xs font-semibold no-underline sm:inline-block"
              style={{
                fontFamily: 'var(--font-sans)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
                background: 'var(--background)',
              }}
            >
              Reference hub
            </Link>
            <Link
              to="/"
              className="rounded-full px-3 py-1.5 text-xs font-semibold no-underline"
              style={{
                fontFamily: 'var(--font-sans)',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)',
                color: 'var(--primary-foreground)',
                boxShadow: 'var(--shadow-2)',
              }}
            >
              App home
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col md:flex-row md:gap-0">
        <aside
          className="shrink-0 border-b md:w-60 md:border-b-0 md:border-r lg:w-64"
          style={{
            borderColor: 'var(--border)',
            background: 'color-mix(in oklch, var(--surface-subtle) 65%, var(--background))',
          }}
          aria-label="Documentation sections"
        >
          <div
            className="sticky overflow-y-auto px-2 py-4 md:px-0 md:py-6"
            style={{
              top: 'var(--docs-header-h)',
              maxHeight: 'calc(100vh - var(--docs-header-h))',
            }}
          >
            <p
              className="mb-3 hidden px-4 text-[11px] font-semibold tracking-wider md:block"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--muted-foreground)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              In this library
            </p>

            <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 px-1 md:flex-col md:gap-y-6 md:px-0">
              {DOCS_NAV_GROUPS.map((group) => (
                <Fragment key={group.id}>
                  <div className="min-w-0 flex-1 basis-[140px] md:basis-auto">
                    <p
                      className="mb-1.5 px-3 text-[11px] font-semibold"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--muted-foreground)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {group.label}
                    </p>
                    <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                      {group.items.map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={`/docs/${item.path}`}
                            className="block no-underline"
                            style={({ isActive }) => ({
                              margin: '0 0.35rem',
                              borderRadius: 'var(--radius-md)',
                              borderLeft: isActive
                                ? '3px solid var(--primary)'
                                : '3px solid transparent',
                              padding: '0.45rem 0.65rem 0.45rem 0.75rem',
                              background: isActive
                                ? 'color-mix(in oklch, var(--primary) 9%, var(--background))'
                                : 'transparent',
                              transition:
                                'background var(--duration-fast) var(--ease-out-smooth), border-color var(--duration-fast) var(--ease-out-smooth)',
                            })}
                          >
                            {({ isActive }) => (
                              <span
                                style={{
                                  fontFamily: 'var(--font-sans)',
                                  fontSize: '0.8125rem',
                                  fontWeight: isActive ? 600 : 500,
                                  color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                                  letterSpacing: isActive ? '-0.01em' : '0',
                                  lineHeight: 1.35,
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
          </div>
        </aside>

        <main className="min-w-0 flex-1 border-t md:border-l md:border-t-0" style={{ borderColor: 'var(--border)' }}>
          <div
            className="mx-auto max-w-[min(1200px,100%)] px-4 py-8 sm:px-6 lg:px-10 lg:py-10"
            style={{ background: 'var(--background)' }}
          >
            <DocsBreadcrumb />
            <Suspense fallback={docSuspenseFallback()}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
