import { ChevronRightIcon } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ContentHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  actions?: React.ReactNode;
}

export function ContentHeader({ title, breadcrumbs, actions }: ContentHeaderProps) {
  return (
    <header
      style={{
        borderBottom: '1px solid var(--border)',
        paddingBottom: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          {breadcrumbs.map((crumb, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {index > 0 && (
                <ChevronRightIcon
                  size={14}
                  style={{ color: 'var(--muted-foreground)' }}
                />
              )}
              {crumb.href ? (
                <a
                  href={crumb.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-body-s-size)',
                    color: 'var(--muted-foreground)',
                    textDecoration: 'none',
                    transition: 'color var(--duration-fast) var(--ease-out-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--muted-foreground)';
                  }}
                >
                  {crumb.label}
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-body-s-size)',
                    color: 'var(--foreground)',
                    fontWeight: 500,
                  }}
                >
                  {crumb.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--type-display-m-family)',
            fontSize: 'clamp(1.75rem, 4vw, 2rem)',
            lineHeight: 'var(--type-display-m-line-height)',
            letterSpacing: 'var(--type-display-m-letter-spacing)',
            fontWeight: 'var(--type-display-m-weight)',
            color: 'var(--foreground)',
            margin: 0,
          }}
        >
          {title}
        </h1>

        {actions && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}
