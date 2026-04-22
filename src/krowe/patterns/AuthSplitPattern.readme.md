# AuthSplitPattern

Source: `src/krowe/patterns/AuthSplitPattern.tsx`.

## Purpose

Split-screen **sign-in** demo: editorial left panel, credentials + Google + email form on the right. Uses `Button`, `Input`, `BrandMark` from `@/app/components/*`.

## Usage

```tsx
import { AuthSplitPattern } from '@/krowe/patterns/AuthSplitPattern';

<AuthSplitPattern />
```

Wire `handleGoogleSignIn` / form submit inside the pattern file (currently `console.log`) to your auth API.

