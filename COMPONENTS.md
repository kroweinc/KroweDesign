# Krowe Component Library — Pass 2/3

Complete React component library built on Pass 1 tokens. All components use Tailwind v4 and follow Krowe's design principles: warm neutrals, one orange accent per screen, Instrument Serif for editorial moments, plainspoken advisor voice.

## Components

### Buttons (`/src/app/components/Button.tsx`)
Four variants with all interaction states:
- **Variants**: `primary`, `secondary`, `ghost`, `destructive`
- **Sizes**: `sm`, `md`, `lg`
- **States**: default, hover, active, focus, loading (ember spinner), disabled
- **Features**: 
  - Primary hover: 1px lift + orange glow shadow
  - Active: snap-down animation
  - Loading: animated ember-dot spinner (NO generic spinner)
  - Pill radius for primary/secondary, md radius for utility

**Usage**:
```tsx
import { Button } from './components/Button';

<Button variant="primary" size="md">Click me</Button>
<Button variant="primary" loading>Processing</Button>
<Button variant="secondary" icon={<PlusIcon />}>Add item</Button>
```

---

### Inputs (`/src/app/components/Input.tsx`)
Text inputs, textareas, checkboxes, toggles with comprehensive states:

**Input**:
- States: default, hover, focus, filled, error, success, disabled
- Focus: 4px orange ring at 10% opacity + 1px orange border
- Error: amber border + inline icon + helper text
- Success: small orange check fading in (right side)

**Textarea**:
- Auto-save indicator: green dot + "Saved" (bottom-right)
- Auto-resize vertical

**Checkbox**: Native with accent color override

**Toggle**: Custom switch with smooth animation

**Usage**:
```tsx
import { Input, Textarea, Checkbox, Toggle } from './components/Input';

<Input 
  label="Business name" 
  state="success" 
  helperText="Great choice!"
/>
<Textarea 
  label="Describe your idea" 
  showSaveIndicator 
/>
<Checkbox label="I agree" />
<Toggle 
  label="Email updates" 
  checked={checked} 
  onChange={setChecked} 
/>
```

---

### Selection Cards (`/src/app/components/SelectionCard.tsx`)
Large "pick one" cards with illustrations:
- States: default, hover, selected, disabled
- Default: warm-neutral bg, subtle border, illustration slot
- Hover: 1px lift + warm shadow
- Selected: orange border (50%), soft-orange fill (8%), orange check badge (top-right)

**Usage**:
```tsx
import { SelectionCard } from './components/SelectionCard';

<SelectionCard
  title="Solo founder"
  description="Building and validating on your own"
  selected={selected === 'solo'}
  onClick={() => setSelected('solo')}
  illustration={<YourIcon />}
/>
```

---

### Sidebar (`/src/app/components/Sidebar.tsx`)
Platform navigation rail:
- 260px expanded, 64px collapsed, mobile drawer below md breakpoint
- Background: `--surface-subtle` (cooler than canvas)
- Nav items: 36px height, icon + 14px label
- Active: soft-orange fill (8%) + orange text + 2px orange left-border
- Hover: foreground (4% opacity)
- Section headers: 11px uppercase tracking-wide muted
- User pod (bottom): avatar + first name + caret → popover (Settings, Sign out, Help)

**Sections**: Home, Ideas, Reports, Resources / divider / Settings, Help

**Usage**:
```tsx
import { Sidebar } from './components/Sidebar';

<Sidebar 
  activeItem="home" 
  onNavigate={setActiveItem} 
  userName="Alex Chen" 
/>
```

---

### Content Header (`/src/app/components/ContentHeader.tsx`)
Page header with breadcrumbs and actions:
- Instrument Serif title (28–32px)
- Optional breadcrumb navigation
- Actions slot (right-aligned)
- 1px border-bottom

**Usage**:
```tsx
import { ContentHeader } from './components/ContentHeader';

<ContentHeader
  title="Your Reports"
  breadcrumbs={[
    { label: 'Dashboard', href: '/' },
    { label: 'Reports' }
  ]}
  actions={<Button>Export</Button>}
/>
```

---

### Progress Indicator (`/src/app/components/ProgressIndicator.tsx`)
Designed signup flow tracker:
- Left: "4 of 12" step count
- Center: section name
- Right: time remaining
- 3px orange fill below
- On step complete: brief orange pulse
- Past steps: clickable dots with hover tooltips

**Usage**:
```tsx
import { ProgressIndicator } from './components/ProgressIndicator';

<ProgressIndicator
  currentStep={4}
  totalSteps={12}
  sectionName="Your target market"
  estimatedTimeRemaining="~3 min"
  completedSteps={[
    { step: 1, name: 'Business idea' },
    { step: 2, name: 'Problem statement' }
  ]}
/>
```

---

### AI Rewrite Panel (`/src/app/components/AIRewritePanel.tsx`)
**Signature moment** — advisor writing in the margin:
- Side-by-side: "Your answer" (muted, left) vs "A small nudge from Krowe" (warm card, right)
- Right card: soft orange left-border + ember glyph
- Actions: "Use this" (primary), "Edit and use" (secondary), "Keep mine" (ghost)
- Entry: fade + slide from right
- Feels like margin notes, NOT a notification

**Usage**:
```tsx
import { AIRewritePanel } from './components/AIRewritePanel';

<AIRewritePanel
  userAnswer="We help small businesses manage inventory..."
  aiSuggestion="We help retail shop owners track stock levels without hiring IT staff..."
  onUse={() => {}}
  onEdit={() => {}}
  onKeepMine={() => {}}
/>
```

---

### Verdict Card (`/src/app/components/VerdictCard.tsx`)
Report hero — center-stage card:
- Verdict word: Instrument Serif 48–64px (Proceed/Refine/Pivot/Rethink)
- Semantic badge below (color-coded)
- One-sentence plain-English summary
- Actions: "Export PDF" + "Ask Krowe a follow-up" (right-aligned)

**Usage**:
```tsx
import { VerdictCard } from './components/VerdictCard';

<VerdictCard
  verdict="Proceed"
  summary="The market data supports this direction. Start building, but keep validating assumptions."
  onExportPDF={() => {}}
  onAskFollowUp={() => {}}
/>
```

---

### Data Visualization (`/src/app/components/DataViz.tsx`)
Three custom chart types with plain-English takeaways:

**MarketSizeChart**:
- Concentric donut rings (TAM/SAM/SOM)
- Warm-orange gradient
- Labels on each ring

**CompetitorScatter**:
- 2×2 scatter plot
- Labeled axes
- Competitors: warm dots
- Your idea: larger orange dot

**MVPCostBar**:
- Horizontal stacked bar
- Warm-orange shades (NOT rainbow)
- Total in serif
- Legend below

**Usage**:
```tsx
import { MarketSizeChart, CompetitorScatter, MVPCostBar } from './components/DataViz';

<MarketSizeChart tam="$2.4B" sam="$480M" som="$24M" />

<CompetitorScatter
  competitors={[
    { name: 'CompA', x: 80, y: 85 },
    { name: 'CompB', x: 60, y: 65 }
  ]}
  yourIdea={{ x: 45, y: 45 }}
/>

<MVPCostBar
  breakdown={[
    { label: 'Engineering', amount: 45000, color: 'var(--primary)' },
    { label: 'Design', amount: 15000, color: '...' }
  ]}
  total={80000}
/>
```

---

### Empty State (`/src/app/components/EmptyState.tsx`)
Advisor voice with ember glyph:
- Message: "No ideas yet. What are you thinking about?"
- Inline input (NOT a wizard button)
- One primary action max
- Warm, conversational tone

**Usage**:
```tsx
import { EmptyState } from './components/EmptyState';

<EmptyState
  message="No ideas yet. What are you thinking about?"
  showInput
  inputPlaceholder="e.g., A marketplace for local artisans"
  onInputSubmit={(value) => {}}
/>
```

---

### Error State (`/src/app/components/ErrorState.tsx`)
Two types: recoverable vs system errors:
- **Recoverable**: warm card, amber border, icon + plain-English message + retry
- **System**: warm card, red border, system-level messaging
- Always plain English, never technical jargon

**Usage**:
```tsx
import { ErrorState } from './components/ErrorState';

<ErrorState
  type="recoverable"
  message="Couldn't load your report"
  description="The server took too long to respond..."
  onRetry={() => {}}
/>
```

---

### Modal (`/src/app/components/Modal.tsx`)
Centered overlay dialog:
- 560px max width, 24px radius
- Warm backdrop: black 40% (never pure)
- Entry: fade + scale 0.98 → 1 over 280ms
- Escape key to close
- Click backdrop to close

**Usage**:
```tsx
import { Modal } from './components/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Ask Krowe a follow-up"
>
  <YourContent />
</Modal>
```

---

## Design Principles Recap

1. **One orange per screen**: Active nav, primary CTA, data-viz primary series, or progress pulse only
2. **Warm, not cold**: Use warm neutrals (oklch hue 60), shadows with 8% orange mix
3. **Serif at editorial moments**: Hero, page titles, report headers, verdicts — NOT buttons/inputs/nav
4. **Plainspoken voice**: "Let's see if this holds up" NOT "supercharge your startup journey"
5. **Motion signature**: `cubic-bezier(0.16, 1, 0.3, 1)` — smooth ease-out
6. **Motifs**: Ember glyph (golden-spiral dot), blueprint grid (canvas only), sunrise gradient (landing hero only)

---

## Next: Pass 3

Pass 3 will compose these components into full surfaces:
- Landing page (hero with sunrise gradient)
- Signup flow (10-step with progress indicator)
- Platform dashboard (sidebar + content)
- Report view (verdict card + data viz + sections)

All tokens and components are ready for assembly.
