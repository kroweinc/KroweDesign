import { Link } from 'react-router';

export function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-4 px-6"
      style={{ background: 'var(--background)' }}
    >
      <h1
        className="text-2xl font-semibold"
        style={{ fontFamily: 'var(--font-sans)', color: 'var(--foreground)' }}
      >
        Page not found
      </h1>
      <p style={{ color: 'var(--muted-foreground)', textAlign: 'center' }}>
        That URL does not exist. Head back to the design library.
      </p>
      <Link
        to="/"
        className="hover:text-primary"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: 'var(--foreground)',
          textDecoration: 'none',
          borderBottom: '1px solid color-mix(in oklch, var(--primary) 35%, transparent)',
          paddingBottom: '0.1em',
        }}
      >
        Krowe design library home
      </Link>
    </div>
  );
}
