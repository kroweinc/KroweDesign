# OnboardingFlowPattern

Source: `src/krowe/patterns/OnboardingFlowPattern.tsx`.

## Purpose

Multi-step **onboarding** reference: `ProgressIndicator`, reflection `Input`, `SelectionCard` grid, numeric step, loading → done. State is internal (`SIGNUP_STEPS`).

## Usage

```tsx
import { OnboardingFlowPattern } from '@/krowe/patterns/OnboardingFlowPattern';

<OnboardingFlowPattern />
```

To reuse: extract step config, lift `answers` state to a parent or router, and connect `handleNext` to persistence.

