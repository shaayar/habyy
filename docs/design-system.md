# Habby Design System 🌱

## 1. Purpose

This document defines the visual system for **Habby**, a cozy, growth-themed habit tracker.

Its purpose is to keep the product interface:

- consistent
- calm
- visually rewarding
- clean
- recognizable

This design system should guide all UI decisions for:

- homepage
- app dashboard
- forms
- cards
- analytics
- settings
- future expansions

---

## 2. Design Principles

Every Habby screen should feel:

### 1) Gentle
Nothing should feel harsh, aggressive, or overly sharp.

### 2) Rewarding
Progress should feel satisfying and visible.

### 3) Breathable
Spacing and layout should reduce stress, not increase it.

### 4) Friendly
The interface should feel approachable and human.

### 5) Structured
Despite being soft and playful, the UI should remain clear and organized.

---

## 3. Visual Personality

Habby should visually feel like:

- a tiny growth companion
- a calm productivity ritual
- a soft but modern app

### Visual keywords
- rounded
- airy
- warm
- fresh
- clean
- light
- motivating

### Avoid
- corporate dashboard heaviness
- neon productivity aesthetics
- sharp “tech startup” harshness
- over-decoration
- clutter

---

## 4. Color Tokens

These are the core color tokens to use consistently.

---

# Primary Brand Colors

## habby-mint
**Hex:** `#7BDCB5`

### Use for
- primary buttons
- active tabs
- progress indicators
- toggles
- check/completion states
- selected chips

---

## leaf-green
**Hex:** `#2F8F6B`

### Use for
- hover states
- emphasis
- strong stat cards
- completed metrics
- chart highlights
- success accents

---

# Neutral Colors

## soft-cream
**Hex:** `#FFF9F1`

### Use for
- app background
- section backgrounds
- warm surfaces
- homepage sections

---

## cloud-white
**Hex:** `#FFFFFF`

### Use for
- cards
- panels
- modals
- forms
- elevated surfaces

---

## pebble-gray
**Hex:** `#7C857E`

### Use for
- muted text
- helper text
- secondary labels
- placeholders
- inactive icons

---

## forest-ink
**Hex:** `#1F2A24`

### Use for
- headings
- body text
- important labels
- numbers
- strong contrast text

---

# Accent Colors

## sunbeam
**Hex:** `#FFD166`

### Use for
- streaks
- achievements
- reward moments
- celebration UI
- “all habits complete” visuals

---

## coral-pop
**Hex:** `#FF8C82`

### Use for
- warnings
- delete states
- missed habit indicators
- low completion visuals

Use lightly.

---

## lavender-mist
**Hex:** `#C8B6FF`

### Use for
- calm categories
- reflection / journaling habits
- alternate soft cards
- decorative accents

---

## sky-dew
**Hex:** `#A8D8FF`

### Use for
- hydration / wellness categories
- info cards
- charts
- support accents

---

## 5. Color Usage Rules

### Main rule
Most screens should use:

- 70–80% neutrals
- 15–20% primary brand color
- 5–10% accent color

This keeps Habby calm and clean.

---

### Use mint for:
- key interactions
- CTA buttons
- active elements
- completed actions

### Use green for:
- emphasis
- stronger completed states
- data highlights

### Use yellow for:
- streaks
- rewards
- positive celebration

### Use coral for:
- warnings
- delete actions
- missed consistency

### Use lavender and sky for:
- category visuals
- dashboard decoration
- charts and tags

---

## 6. Tailwind Color Mapping

Recommended Tailwind equivalents or custom usage:

### Primary
- Habby Mint → custom
- Leaf Green → custom

### Neutral suggestions
- Soft Cream → custom
- Cloud White → `white`
- Pebble Gray → `zinc-500` / custom
- Forest Ink → `zinc-900` / custom

### Accent suggestions
- Sunbeam → custom
- Coral Pop → custom
- Lavender Mist → custom
- Sky Dew → custom

### Recommended approach
Define these inside your Tailwind config or use CSS variables later.

If not doing config yet, manually use custom hex values for now.

---

## 7. Typography System

### Primary Font
**Inter**

Use for:
- body text
- labels
- buttons
- cards
- dashboard content

---

### Optional Display Font
**Sora**

Use only for:
- homepage hero
- major landing page headlines
- occasional branding moments

Do NOT overuse display fonts inside the app UI.

---

## 8. Typography Hierarchy

### Display Heading
Use for:
- homepage hero
- major marketing sections

### Page Heading
Use for:
- dashboard title
- habits page title
- analytics page title

### Section Heading
Use for:
- card section titles
- dashboard group labels

### Body
Use for:
- standard UI text
- descriptions
- helper copy

### Caption / Meta
Use for:
- dates
- labels
- small metadata
- muted card info

---

## 9. Shape Language

Habby should feel soft and tactile.

### Use:
- rounded cards
- pill chips
- rounded buttons
- soft containers

### Recommended radius direction
- Cards: large rounded corners
- Buttons: rounded
- Inputs: rounded
- Pills/Badges: fully rounded

### Tailwind radius suggestions
- `rounded-2xl`
- `rounded-3xl`
- `rounded-full`

Avoid overly sharp rectangles.

---

## 10. Spacing System

Habby should feel breathable and uncluttered.

### Spacing philosophy
Prefer:
- larger padding
- generous whitespace
- calm layout rhythm

Avoid:
- dense dashboard packing
- tiny gaps everywhere
- cramped cards

### Suggested spacing rhythm
Use spacing consistently in multiples such as:

- 4
- 6
- 8
- 10
- 12
- 16

### Good section spacing
- homepage sections: large vertical spacing
- dashboard cards: medium-large spacing
- forms: generous field spacing

---

## 11. Shadows

Shadows should feel:

- soft
- subtle
- airy
- modern

### Use for:
- cards
- floating panels
- modals
- CTA emphasis

### Avoid:
- harsh dark shadows
- heavy layered shadows
- “crypto app” glow aesthetics

### Tailwind direction
Use soft shadow utilities only.

---

## 12. Borders

Borders should be subtle and supportive.

### Use borders for:
- cards
- inputs
- section separation
- lightweight structure

### Border style should feel:
- soft
- low contrast
- clean

Avoid thick or dark borders.

---

## 13. Buttons

Buttons in Habby should feel:

- soft
- clear
- tactile
- modern

---

# Primary Button

### Use for:
- Add Habit
- Get Started
- Complete Habit
- Save actions

### Style direction:
- mint background
- dark readable text or appropriate contrast
- rounded shape
- subtle shadow
- hover lift or darken slightly

---

# Secondary Button

### Use for:
- Edit
- View Analytics
- Learn More
- Cancel secondary actions

### Style direction:
- white / cream surface
- subtle border
- dark text
- soft hover

---

# Ghost Button

### Use for:
- inline actions
- small utilities
- non-primary interactions

### Style direction:
- no heavy background
- subtle hover background
- soft rounded corners

---

# Destructive Button

### Use for:
- Delete Habit
- Clear Data

### Style direction:
- coral or tinted destructive state
- should feel noticeable but not alarming

---

## 14. Inputs & Forms

Inputs should feel calm and easy to use.

### Inputs should be:
- rounded
- soft
- clearly spaced
- not overly outlined

### Use for:
- habit name
- category
- custom schedule
- settings

### Form guidance
- keep forms short
- prefer simple flows
- avoid overwhelming users with too many options at once

---

## 15. Cards

Cards are one of Habby’s main visual building blocks.

They should feel:

- soft
- clean
- lightly elevated
- easy to scan

---

# Habit Card

### Use for:
- individual habits on dashboard
- habits list
- active daily check-ins

### Should contain:
- habit name
- category or icon
- completion state
- streak or quick info

### Style direction:
- white card
- rounded corners
- subtle border/shadow
- optional small color accent

---

# Stat Card

### Use for:
- streak count
- weekly completion
- total completed habits
- longest streak

### Style direction:
- slightly tinted or highlighted
- clean typography
- visual emphasis on the number

---

# Feature Card (homepage)

### Use for:
- product benefits
- app features
- marketing content

### Style direction:
- rounded
- premium spacing
- icon or small visual
- minimal clutter

---

## 16. Badges / Chips / Tags

These are useful for:
- categories
- streaks
- filters
- frequency types

### Style direction
- pill shaped
- small and clean
- tinted background
- readable text

### Example use cases
- Health
- Daily
- 4-day streak
- Mindfulness
- Archived

---

## 17. Navigation

Habby’s navigation should feel:

- simple
- lightweight
- clean
- not too enterprise-heavy

### Main nav should include
- Dashboard
- Habits
- Analytics
- Settings

### Style guidance
- clear active state
- soft hover states
- rounded nav items if needed

---

## 18. Dashboard Layout Guidance

The dashboard should be the emotional center of the app.

It should immediately answer:

- What do I need to do today?
- How am I doing?
- What progress have I made?

### Dashboard should prioritize:
1. Today’s habits
2. Progress summary
3. Streaks
4. Helpful encouragement

### Avoid:
- too much data above the fold
- analytics overload
- dense admin-dashboard feeling

---

## 19. Analytics Visual Style

Analytics should feel motivating, not clinical.

### Good analytics components
- completion percentage cards
- weekly progress bars
- mini streak stats
- monthly consistency heatmap
- category completion summary

### Analytics should feel:
- visual
- rewarding
- easy to understand
- not spreadsheet-like

---

## 20. Motion & Interaction

Habby should have subtle delight.

### Good motion ideas
- check toggle pop
- progress bar fill
- card hover lift
- stat fade-in
- soft page transitions

### Avoid
- dramatic animations
- noisy transitions
- too many moving parts on one screen

---

## 21. Empty States

Empty states are very important for Habby.

They should feel:

- encouraging
- warm
- non-judgmental

### Good empty state examples

#### No habits yet
“Let’s plant your first habit 🌱”

#### No analytics yet
“Your growth will show up here soon.”

#### Nothing completed today
“A fresh day for small wins.”

---

## 22. Microcopy Rules

All interface copy should feel:

- human
- gentle
- clear
- supportive

### Good examples
- “Add Habit”
- “Everything’s watered today ✨”
- “Keep your streak growing”
- “One small win at a time”

### Avoid
- “Crush your goals”
- “Dominate your routine”
- “No excuses”

Habby is not a drill sergeant.

---

## 23. Consistency Rules

Whenever designing a new component, check:

### 1) Does it feel soft and rounded?
### 2) Is it easy to scan quickly?
### 3) Does it use brand colors intentionally?
### 4) Does it feel rewarding instead of stressful?
### 5) Does it visually match the rest of Habby?

If not, simplify and align.

---

## 24. Final Design Direction Summary

Habby should always feel like:

> **a calm, modern, growth-oriented companion for small daily wins**

Every design decision should support that feeling.