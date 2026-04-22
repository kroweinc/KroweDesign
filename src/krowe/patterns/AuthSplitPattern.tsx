import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/Button';
import { Input } from '@/app/components/Input';
import { BrandMark } from '@/app/components/BrandMark';
import { MailIcon } from 'lucide-react';

const FORM_ITEMS = ['google', 'divider', 'email', 'password', 'submit'] as const;

/** Split editorial + credential panel for sign-in. */
export function AuthSplitPattern() {
  const handleGoogleSignIn = () => console.log('Google sign in');
  const handleEmailSignIn = (e: FormEvent) => {
    e.preventDefault();
    console.log('Email sign in');
  };

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex' }}
      className="auth-layout"
    >
      {/* Left panel — editorial */}
      <div
        className="auth-left"
        style={{
          flex: '0 0 50%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(3rem, 6vw, 6rem)',
          background: 'linear-gradient(145deg, #fff5f0 0%, #fef0e5 50%, #fde8d5 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Blueprint grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--blueprint-grid)',
            backgroundSize: 'var(--blueprint-grid-size)',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
          aria-hidden
        />
        {/* Noise texture */}
        <div className="noise-surface" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '380px' }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <BrandMark size={44} animated />
          </div>

          <h1
            style={{
              fontFamily: 'var(--type-display-m-family)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              color: 'var(--foreground)',
              marginBottom: '1.25rem',
            }}
          >
            Welcome back.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-l-size)',
              lineHeight: 1.65,
              color: 'var(--muted-foreground)',
            }}
          >
            Let's see where your ideas stand.
          </p>
        </motion.div>
      </div>

      {/* Right panel — form */}
      <div
        className="auth-right"
        style={{
          flex: '0 0 50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(3rem, 6vw, 6rem)',
          background: 'var(--background)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '380px' }}>
          {/* Staggered form entrance */}
          {FORM_ITEMS.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.065, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {item === 'google' && (
                <GoogleButton onClick={handleGoogleSignIn} />
              )}
              {item === 'divider' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    margin: '1.25rem 0',
                  }}
                >
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--type-caption-size)',
                      color: 'var(--muted-foreground)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    or
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>
              )}
              {item === 'email' && (
                <div style={{ marginBottom: '1rem' }}>
                  <Input type="email" label="Email" placeholder="you@example.com" icon={<MailIcon size={18} />} required />
                </div>
              )}
              {item === 'password' && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <Input type="password" label="Password" placeholder="••••••••" required />
                </div>
              )}
              {item === 'submit' && (
                <form onSubmit={handleEmailSignIn}>
                  <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Sign in
                  </Button>
                </form>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.3 }}
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
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .auth-layout { flex-direction: column !important; }
          .auth-left { flex: 0 0 auto !important; min-height: 40vh; }
          .auth-right { flex: 1 !important; }
        }
      `}</style>
    </div>
  );
}

function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
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
        transition: 'border-color var(--duration-fast) var(--ease-out-smooth), box-shadow var(--duration-fast) var(--ease-out-smooth)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)';
        e.currentTarget.style.boxShadow = 'var(--shadow-1)';
        const shimmer = e.currentTarget.querySelector('.g-shimmer') as HTMLElement;
        if (shimmer) shimmer.style.animation = 'shimmer 380ms var(--ease-out-smooth) forwards';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
        const shimmer = e.currentTarget.querySelector('.g-shimmer') as HTMLElement;
        if (shimmer) shimmer.style.animation = 'none';
      }}
    >
      <span
        className="g-shimmer"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.06) 50%, transparent 100%)',
          transform: 'translateX(-100%)',
          pointerEvents: 'none',
        }}
      />
      <GoogleIcon />
      Continue with Google
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
      <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853" />
      <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
      <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9.003 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335" />
    </svg>
  );
}
