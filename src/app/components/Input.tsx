import { useState } from 'react';
import { CheckIcon, AlertCircleIcon } from 'lucide-react';

type InputState = 'default' | 'error' | 'success';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  state?: InputState;
  icon?: React.ReactNode;
}

export function Input({
  label,
  helperText,
  state = 'default',
  icon,
  disabled,
  className = '',
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  const borderColor =
    state === 'error' ? 'var(--warning)' :
    state === 'success' ? 'var(--success)' :
    isFocused ? 'var(--primary)' : 'var(--border)';

  const ringStyle = isFocused ? {
    boxShadow: `0 0 0 4px color-mix(in oklch, var(--primary) 10%, transparent)`,
  } : {};

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            fontWeight: 500,
            color: 'var(--foreground)',
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: 'relative' }}>
        {icon && (
          <div style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--muted-foreground)',
            display: 'flex',
            alignItems: 'center',
          }}>
            {icon}
          </div>
        )}

        <input
          {...props}
          id={inputId}
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            props.onChange?.(e);
          }}
          style={{
            width: '100%',
            height: '44px',
            padding: icon ? '0 2.75rem 0 2.75rem' : '0 0.75rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            color: 'var(--foreground)',
            background: disabled ? 'var(--surface-subtle)' : 'var(--background)',
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            cursor: disabled ? 'not-allowed' : 'text',
            opacity: disabled ? 0.6 : 1,
            ...ringStyle,
          }}
        />

        {state === 'success' && hasValue && (
          <div
            style={{
              position: 'absolute',
              right: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              animation: 'fade-in var(--duration-normal) var(--ease-out-smooth)',
            }}
          >
            <CheckIcon size={18} />
          </div>
        )}

        {state === 'error' && (
          <div
            style={{
              position: 'absolute',
              right: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--warning)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AlertCircleIcon size={18} />
          </div>
        )}
      </div>

      {helperText && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: state === 'error' ? 'var(--warning)' : 'var(--muted-foreground)',
          margin: 0,
        }}>
          {helperText}
        </p>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-50%) scale(0.8); }
          to { opacity: 1; transform: translateY(-50%) scale(1); }
        }
      `}</style>
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  state?: InputState;
  showSaveIndicator?: boolean;
}

export function Textarea({
  label,
  helperText,
  state = 'default',
  showSaveIndicator = false,
  disabled,
  className = '',
  ...props
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const textareaId = `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const borderColor =
    state === 'error' ? 'var(--warning)' :
    state === 'success' ? 'var(--success)' :
    isFocused ? 'var(--primary)' : 'var(--border)';

  const ringStyle = isFocused ? {
    boxShadow: `0 0 0 4px color-mix(in oklch, var(--primary) 10%, transparent)`,
  } : {};

  // Simulate auto-save
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange?.(e);
    if (showSaveIndicator) {
      setIsSaved(false);
      setTimeout(() => setIsSaved(true), 1000);
    }
  };

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {label && (
        <label
          htmlFor={textareaId}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            fontWeight: 500,
            color: 'var(--foreground)',
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: 'relative' }}>
        <textarea
          {...props}
          id={textareaId}
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          onChange={handleChange}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            lineHeight: 'var(--type-body-line-height)',
            color: 'var(--foreground)',
            background: disabled ? 'var(--surface-subtle)' : 'var(--background)',
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            cursor: disabled ? 'not-allowed' : 'text',
            opacity: disabled ? 0.6 : 1,
            resize: 'vertical',
            ...ringStyle,
          }}
        />

        {showSaveIndicator && isSaved && (
          <div
            style={{
              position: 'absolute',
              right: '0.75rem',
              bottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: 'var(--type-caption-size)',
              color: 'var(--success)',
              animation: 'fade-in var(--duration-normal) var(--ease-out-smooth)',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--success)',
              }}
            />
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Saved</span>
          </div>
        )}
      </div>

      {helperText && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: state === 'error' ? 'var(--warning)' : 'var(--muted-foreground)',
          margin: 0,
        }}>
          {helperText}
        </p>
      )}
    </div>
  );
}

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, disabled, className = '', ...props }: CheckboxProps) {
  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <input
        {...props}
        type="checkbox"
        id={checkboxId}
        disabled={disabled}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          accentColor: 'var(--primary)',
        }}
      />
      <label
        htmlFor={checkboxId}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-size)',
          color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {label}
      </label>
    </div>
  );
}

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ label, checked, onChange, disabled }: ToggleProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
      <label style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body-size)',
        color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}>
        {label}
      </label>
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        style={{
          width: '48px',
          height: '28px',
          borderRadius: 'var(--radius-full)',
          background: checked ? 'var(--primary)' : 'var(--border)',
          border: 'none',
          position: 'relative',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'all var(--duration-fast) var(--ease-out-smooth)',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            background: 'white',
            position: 'absolute',
            top: '3px',
            left: checked ? '23px' : '3px',
            transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            boxShadow: 'var(--shadow-1)',
          }}
        />
      </button>
    </div>
  );
}
