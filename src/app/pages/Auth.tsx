import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { MailIcon } from 'lucide-react';

export function Auth() {
  const handleGoogleSignIn = () => {
    // OAuth flow
    console.log('Google sign in');
  };

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email sign in');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'var(--background)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '3rem 2.5rem',
          background: 'var(--surface-subtle)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-2)',
        }}
      >
        {/* Logo + ember */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            justifyContent: 'center',
          }}
        >
          <EmberGlyph />
          <span
            style={{
              fontFamily: 'var(--type-display-m-family)',
              fontSize: '1.5rem',
              color: 'var(--foreground)',
            }}
          >
            Krowe
          </span>
        </div>

        {/* Editorial line */}
        <p
          style={{
            fontFamily: 'var(--type-body-l-family)',
            fontSize: 'var(--type-body-l-size)',
            lineHeight: 'var(--type-body-l-line-height)',
            color: 'var(--foreground)',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Welcome back - let's see where your ideas stand.
        </p>

        {/* Google OAuth */}
        <button
          onClick={handleGoogleSignIn}
          style={{
            width: '100%',
            padding: '0.875rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            fontWeight: 600,
            color: 'var(--foreground)',
            cursor: 'pointer',
            transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            marginBottom: '1.5rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.boxShadow = 'var(--shadow-1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--background)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
              fill="#4285F4"
            />
            <path
              d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z"
              fill="#34A853"
            />
            <path
              d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
              fill="#FBBC05"
            />
            <path
              d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9.003 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-caption-size)',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Or
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Email form */}
        <form onSubmit={handleEmailSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            icon={<MailIcon size={18} />}
            required
          />

          <Input
            type="password"
            label="Password"
            placeholder="••••••••"
            required
          />

          <Button variant="primary" type="submit" style={{ marginTop: '0.5rem' }}>
            Sign in
          </Button>
        </form>

        {/* Footer links */}
        <div
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            color: 'var(--muted-foreground)',
          }}
        >
          Don't have an account?{' '}
          <a
            href="#signup"
            style={{
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'color var(--duration-fast) var(--ease-out-smooth)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary)')}
          >
            Start validating
          </a>
        </div>
      </div>
    </div>
  );
}

function EmberGlyph() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
