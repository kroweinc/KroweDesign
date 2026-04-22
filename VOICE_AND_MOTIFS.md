# Krowe Voice & Motifs Reference

Complete guide to voice, microcopy, and signature design motifs for Pass 3/3.

---

## Voice

### Personality
**The senior friend who's built three companies** — plainspoken, warm, honest, editorial. NOT a chatbot, NOT a motivational speaker, NOT a corporate consultant.

Think: NYT business section × trusted advisor's notebook. Feels like sunrise on the day someone decides to start a business.

### Tone attributes
- **Plainspoken**: Say "Let's see if this holds up" NOT "Let's validate your assumptions"
- **Warm**: "Welcome back — let's see where your ideas stand" NOT "Sign in to your account"
- **Honest**: "The market exists, but your differentiation needs work" NOT "Opportunity for improvement detected"
- **Editorial**: Use Instrument Serif for reflective moments (hero, verdicts, page titles)

### NEVER use
- "Supercharge" / "Unleash" / "Revolutionize" / "Game-changing"
- "Empower" / "Transform" / "Leverage"
- Exclamation marks in body copy (use sparingly in CTAs only)
- Marketing speak or corporate jargon
- Overly technical language

### DO use
- "Let's see if this holds up"
- "Here's what we found"
- "This might work, but..."
- "The data suggests..."
- "Worth a shot" / "Not quite there yet"

---

## Microcopy Patterns

### Buttons & CTAs
❌ **Avoid**: "Get Started", "Continue", "Submit", "Click Here"

✅ **Use**:
- "Start validating" (primary landing CTA)
- "Next question" (signup flow, NOT "Continue")
- "Generate my report" (final signup step, NOT "Submit")
- "Ask Krowe a follow-up" (follow-up CTA)
- "Export PDF" (download action)

### Empty States
❌ **Avoid**: "No data available", "You haven't created anything yet"

✅ **Use**:
- "No ideas yet. What are you thinking about?"
- "Nothing here. Start by validating your first idea."

### Error Messages (Advisor Voice)
❌ **Avoid**: "Error 500: Internal server error", "Something went wrong"

✅ **Use**:
- **Recoverable**: "The URL didn't load — try pasting it again, or skip and fill in manually."
- **System**: "Hmm, let's look at this again. The server isn't responding — give it a minute and retry."

### Success States
❌ **Avoid**: "Success!", "Saved successfully"

✅ **Use**:
- "Saved" (auto-save indicator)
- "All set" (completion)
- "Done" (action complete)

### Loading States
❌ **Avoid**: "Loading...", "Please wait", Generic spinners

✅ **Use**:
- Ember spinner (animated golden-spiral dot) for all loading states
- "Generating your report..." (process-specific)
- NO generic "Loading..." text

### Form Labels & Hints
❌ **Avoid**: Boxed "Examples" sections, Technical field names

✅ **Use**:
- Conversational hints in italic: *"Don't overthink it. A sentence or two is fine."*
- Margin notes, NOT boxed examples: *"Be specific. 'Small businesses' is too broad. 'Retail shops with 2-10 employees' works better."*

### Navigation
❌ **Avoid**: "Dashboard", "My Account", "Settings"

✅ **Use**:
- "Home" (main dashboard)
- "Ideas" (list of validations)
- "Reports" (completed analyses)
- "Resources" (learning materials)

### Time & Dates
❌ **Avoid**: "2026-04-21 14:32:00"

✅ **Use**:
- "2 hours ago"
- "Updated yesterday"
- "Last week"

---

## Signature Motifs

### 1. Ember Glyph
**12–16px golden-spiral dot mark** — Krowe's signature icon.

**Where it appears**:
- Logo (wordmark + ember)
- Active sidebar items (left of label)
- AI cards and rewrite panels (left of "A small nudge from Krowe")
- Report section headers (left of section title)
- Inside primary-button loaders (animated pulse)
- Empty states (large, faded above message)

**Colors**:
- Primary: 4 concentric circles (outer → inner opacity: 0.2, 0.4, 1.0)
- Accent dot: small offset circle at top-right (primary-accent color)

**SVG reference**:
```svg
<svg width="16" height="16" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2"/>
  <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4"/>
  <circle cx="8" cy="8" r="2.5" fill="var(--primary)"/>
  <circle cx="9" cy="7" r="1" fill="var(--primary-accent)"/>
</svg>
```

**DO**:
- Use at 12–16px for UI elements
- Use at 32–64px for empty states / hero moments
- Animate with pulse (scale 0.85 → 1.0, opacity 0.4 → 1.0)

**DON'T**:
- Use as a generic icon replacement
- Animate with spin or bounce
- Use multiple embers on a single screen (one accent rule)

---

### 2. Blueprint Grid
**28px radial dot grid** — subtle technical reference, warm not cold.

**Pattern**:
```css
background: radial-gradient(
  circle,
  color-mix(in oklch, var(--primary) 6%, transparent) 1px,
  transparent 1px
);
background-size: 28px 28px;
```

**Where it appears**:
- Dashboard canvas (full background behind content)
- Signup open-reflection layouts (faded behind textarea)
- Landing hero (very subtle overlay at 30% opacity)

**DON'T use**:
- On cards, modals, or UI chrome
- At full opacity (always 15–30% opacity max)
- On white backgrounds (needs warm canvas color beneath)

---

### 3. Sunrise Gradient
**Ambient warm gradient** — landing hero + post-signup transition ONLY.

**Gradient**:
```css
background: linear-gradient(
  135deg,
  #fff5f0 0%,
  #fff9f5 25%,
  #fffbf8 50%,
  #fef5ec 75%,
  #fef0e5 100%
);
```

**Where it appears**:
- Landing page hero background
- Post-signup transition moment (fade from signup → dashboard)

**DON'T use**:
- On buttons (pill solid orange only)
- On cards or components
- Anywhere beyond landing/transition

---

## Typography Voice Mapping

### Instrument Serif (Editorial Moments)
Use for reflective, decision-making moments:
- Landing hero headline
- Page titles (Dashboard "Home", Report page title)
- Report section headers ("Market Size", "Competitive Landscape")
- Verdict card verdict word ("Proceed", "Refine", "Pivot", "Rethink")
- Signup transition title ("Your first read")

### Geist Sans (UI & Function)
Use for all UI, navigation, forms, body text:
- Buttons, inputs, labels
- Sidebar navigation
- Table headers and rows
- Body paragraphs in reports
- Helper text and captions
- Empty state messages

### Geist Mono (Numeric Display)
Use for financial figures, metrics, and data:
- MVP cost total ("$80,000")
- Market size figures ("$2.4B", "$480M", "$24M")
- Resource cost estimates
- Timestamps and IDs (where appropriate)

**Rule**: NEVER mix serif + sans inside a single button, input, or label.

---

## Accessibility Requirements

### Focus States
- **Ring**: 4px at 10% opacity minimum
- **Color**: Orange (`var(--primary)`)
- **Never**: Rely on color alone for state
- **Always**: Pair color with text label or icon

Example:
```css
input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px color-mix(in oklch, var(--primary) 10%, transparent);
}
```

### Color Contrast
- **Body text**: WCAG AA minimum (4.5:1)
- **Large text (≥18pt)**: WCAG AA (3:1)
- **Target**: AAA for body text where possible

### ARIA Landmarks
- `role="main"` on canvas/content area
- `role="navigation"` on sidebar
- `role="banner"` on headers
- Progress indicator: `aria-valuenow`, `aria-valuemax`, `aria-label`
- Icon-only buttons: `aria-label` required

### Touch Targets
- Minimum: 44×44px on mobile
- Spacing: 8px between adjacent interactive elements

---

## Responsive Patterns

### Sidebar
- Desktop (≥768px): 260px expanded, visible
- Mobile (<768px): Hidden, drawer overlay (triggered by hamburger)

### Type Scales
- Desktop: Full scale
- Mobile: One step down (e.g., Display XL → Display L)

### Grid Layouts
- Report sections: 2-col → 1-col below md
- Selection cards: 3-col → 1-col below md
- Signup cards: side-by-side → stacked below md

### Padding
- Desktop: `px-8 py-6` or `p-12`
- Mobile: `px-4 py-4`

---

## Do/Don't Quick Reference

### Design
✅ **DO**:
- One orange accent per screen
- Warm neutrals (oklch hue 60)
- Shadows with 8% orange mix
- Serif at editorial moments only

❌ **DON'T**:
- Multiple orange accents (buttons, borders, text)
- Cold blue-gray palettes
- Pure black shadows
- Serif in buttons, inputs, nav

### Voice
✅ **DO**:
- Plainspoken, honest advisor voice
- "Let's see if this holds up"
- Plain-English takeaways beneath charts
- Conversational hints in margins

❌ **DON'T**:
- Marketing speak ("supercharge")
- Technical jargon in user-facing text
- Boxed "Examples" sections
- Exclamation-heavy copy

### Motion
✅ **DO**:
- Smooth ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`)
- 180ms for interactions (hover, focus)
- 280ms for page transitions
- 850ms for hero moments with 85ms stagger

❌ **DON'T**:
- Linear easing
- Bounce or elastic effects (too playful)
- Spin animations (except minimal loading states)

---

## Signature Moments Checklist

Every surface should feel like it came from one studio. Use this checklist:

- [ ] One orange accent per screen (active nav OR primary CTA OR data-viz primary OR progress pulse)
- [ ] Warm neutrals throughout (not cold gray)
- [ ] Serif only at editorial moments (hero, page titles, verdicts)
- [ ] Advisor voice in all copy (no marketing speak)
- [ ] Ember glyph appears at least once per screen
- [ ] Blueprint grid on canvas surfaces only (dashboard, signup reflection)
- [ ] Sunrise gradient ONLY on landing hero + post-signup transition
- [ ] All loading states use ember spinner (no generic spinners)
- [ ] Focus states: 4px orange ring at 10% opacity
- [ ] Motion uses signature ease-out curve

If anything could appear in a ChatGPT clone or generic SaaS starter, redesign it.

---

**Pass 3 Complete** — Seven surfaces, unified voice, signature motifs consistently applied.
