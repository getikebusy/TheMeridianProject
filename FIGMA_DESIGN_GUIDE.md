# The Meridian Club — Figma Design System Guide & Token Specification
**Version:** 1.0.0 · **Target Platform:** Web (Desktop 1440px / Mobile 390px) · **Framework:** React + Tailwind CSS v4

This document serves as the canonical design system specification for creating, maintaining, and inspecting **The Meridian Club** UI kit and components in Figma.

---

## 1. Colour System & Tokens

The Meridian Club palette is rooted in an understated luxury editorial aesthetic. It uses a **60-30-10 distribution** (60% canvas, 30% structural surfaces, 10% high-intent gold/bronze accents) and guarantees **WCAG AA (4.5:1 text, 3:1 graphical)** compliance in both Light and Dark themes.

### 1.1 Color Tokens & Hex Values

| Token Name | Light Theme Hex | Dark Theme Hex | Usage / Semantic Role | WCAG Contrast |
| :--- | :--- | :--- | :--- | :--- |
| `color/bg/canvas` | `#FBF9F5` (Archival Alabaster) | `#121110` (Deep Obsidian Espresso) | Root application background field | Baseline |
| `color/bg/surface-card` | `#FFFFFF` (Pure Crisp White) | `#1A1816` (Warm Dark Slate) | Bento cards, event cards, tier cards | Delta $\le 10\%$ vs canvas |
| `color/bg/surface-subtle` | `#F3EFEA` (Warm Limestone) | `#24211D` (Subterranean Charcoal) | Inputs, segmented controls, inner boxes | Subtle tonal separation |
| `color/text/primary` | `#1C1917` (Antique Charcoal) | `#F5F2EB` (Warm Ecru White) | Headings, card titles, primary body | Light: 14.2:1 (AAA) · Dark: 15.1:1 (AAA) |
| `color/text/secondary` | `#57534E` (Muted Warm Stone) | `#A8A29E` (Soft Warm Gray) | Descriptions, metadata, secondary copy | Light: 5.7:1 (AA) · Dark: 6.8:1 (AA) |
| `color/text/tertiary` | `#68625C` (Deep Umber Stone) | `#8F8981` (Luminous Warm Taupe) | Footnotes, accession codes, captions | Light: 5.3:1 (AA) on subtle / 5.7:1 on canvas · Dark: 5.5:1 (AA) on canvas / 4.6:1 on subtle |
| `color/accent/gold-primary` | `#8C6B38` (Deep Antique Bronze) | `#C5A880` (Champagne Satin Gold) | Primary CTA buttons, active indicators | Light: 4.8:1 (AA) · Dark: 8.2:1 (AAA) |
| `color/accent/gold-hover` | `#6E532B` (Burnished Bronze) | `#DFCAAA` (Lustrous Cream Gold) | Button hover states, focus rings | Light: 7.1:1 (AAA) · Dark: 10.4:1 (AAA) |
| `color/border/hairline` | `rgba(28, 25, 23, 0.12)` (`#E7E5E4`) | `rgba(197, 168, 128, 0.20)` | 1px delicate container borders | Balanced aesthetic presence |
| `color/border/accent` | `rgba(140, 107, 56, 0.40)` | `rgba(197, 168, 128, 0.45)` | Active tier cards, focused inputs | Intent highlight |
| `color/status/success` | `#166534` (Deep Forest) | `#4ADE80` (Muted Emerald) | Application confirmation, verified badge | 4.8:1 (AA) |
| `color/status/warning` | `#9A3412` (Terracotta Ochre) | `#FDBA74` (Warm Amber) | Roster capacity warning (few seats left) | 4.6:1 (AA) |

### 1.2 Figma Color Styles Setup
1. In Figma, organize as:
   - `Theme / Dark / Surface / Canvas`
   - `Theme / Dark / Surface / Card`
   - `Theme / Dark / Accent / Gold Primary`
   - `Theme / Light / Surface / Canvas`
   - `Theme / Light / Surface / Card`
   - `Theme / Light / Accent / Bronze Primary`
2. Leverage Figma **Variables & Modes** (`Light` vs `Dark`) to enable 1-click theme switching across all frames.

---

## 2. Typography System

The Meridian Club couples **Cormorant Garamond** (high-contrast editorial serif) with **Plus Jakarta Sans** (clean, contemporary geometric sans-serif) following the **2+1 Font Rule**.

### 2.1 Font Families
- **Display & Headings:** `Cormorant Garamond` (Weights: Regular 400, Medium 500, SemiBold 600)
- **Body & Controls:** `Plus Jakarta Sans` (Weights: Light 300, Regular 400, Medium 500, SemiBold 600)
- **Data & Accession Numbers:** Monospace tabular figures (`tabular-nums`, `SF Mono` or `JetBrains Mono`)

### 2.2 Type Scale Hierarchy

| Style Name | Font Family | Weight | Size (px) | Line Height | Letter Spacing | Case | Figma Style Name |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | Cormorant Garamond | 400 (Regular) | 60px | 112% (68px) | `-0.02em` | Sentence case | `Heading/Display-Hero` |
| **Heading 1 (Page Title)** | Cormorant Garamond | 400 (Regular) | 48px | 115% (56px) | `-0.015em` | Sentence case | `Heading/H1` |
| **Heading 2 (Section)** | Cormorant Garamond | 400 (Regular) | 36px | 120% (44px) | `0em` | Sentence case | `Heading/H2` |
| **Heading 3 (Card Title)**| Cormorant Garamond | 500 (Medium) | 24px | 125% (30px) | `0em` | Sentence case | `Heading/H3` |
| **Heading 4 (Sub-Card)** | Cormorant Garamond | 600 (SemiBold)| 18px | 130% (24px) | `0em` | Sentence case | `Heading/H4` |
| **Kicker / Eyebrow** | Plus Jakarta Sans | 600 (SemiBold)| 12px | 150% (18px) | `+0.25em` | ALL CAPS | `Label/Kicker-Tracking` |
| **Body Large** | Plus Jakarta Sans | 300 (Light) | 18px | 165% (30px) | `0em` | Sentence case | `Body/Large` |
| **Body Base** | Plus Jakarta Sans | 400 (Regular) | 15px | 160% (24px) | `0em` | Sentence case | `Body/Base` |
| **Body Small** | Plus Jakarta Sans | 400 (Regular) | 13px | 155% (20px) | `0em` | Sentence case | `Body/Small` |
| **Button Text** | Plus Jakarta Sans | 600 (SemiBold)| 12px | 100% (12px) | `+0.18em` | ALL CAPS | `Button/Text-Caps` |
| **Caption / Accession** | Plus Jakarta Sans / Mono | 400 (Regular) | 11px | 140% (15px) | `+0.10em` | Mixed | `Caption/Accession` |

---

## 3. Spacing Scale & Grid Layout

### 3.1 Base Unit: 4px / 8px Grid
All paddings, margins, gaps, and heights snap to the 4px/8px incremental scale:
- `4px` (`spacing-1`): Micro-adjustments, dot gaps, button icon gaps.
- `8px` (`spacing-2`): Input label bottom gap, tags row spacing.
- `12px` (`spacing-3`): Card inner items gap, dropdown option padding.
- `16px` (`spacing-4`): Small container padding, table cell vertical gap.
- `24px` (`spacing-6`): Standard card inner padding (`p-6`), section sub-gaps.
- `32px` (`spacing-8`): Large card padding (`p-8`), desktop navbar horizontal padding.
- `48px` (`spacing-12`): Medium section separation (`gap-12`).
- `64px` (`spacing-16`): Major layout block margins (`space-y-16`).
- `96px` (`spacing-24`): Chapter transitions & section vertical padding (`space-y-24`).

### 3.2 Viewport & Container Constraints
- **Desktop Canvas:** Frame width `1440px` (min-height `900px`).
- **Desktop Content Container:** Max-width `1280px` (`max-w-7xl`), centered, margin horizontal `auto`, horizontal padding `32px`.
- **Text Measure (Readability):** Constrained to `max-w-2xl` (~`672px` / 65–75 characters per line).
- **Mobile Canvas:** Frame width `390px`, horizontal padding `24px`.

---

## 4. Buttons & Interactive Controls

In alignment with the design direction, buttons feature **smooth rounded geometry (`rounded-full`)**, single-line text labels (`whitespace-nowrap`), and high-intent focus outlines.

### 4.1 Button Variants & States

```
[ Primary Button ]  ->  Dark: bg-[#C5A880] text-[#121110]  |  Light: bg-[#C5A880] text-[#121110]
[ Secondary Button]->  Dark: bg-[#121110] border-[#C5A880]/30 text-[#F5F2EB] | Light: bg-[#FFFFFF] border-stone-300 text-[#1C1917]
[ Ghost / Link ]   ->  Transparent bg, text-[#8C6B38] / text-[#C5A880], hover underline
```

#### Detailed Specs

| Variant | State | Background | Text Color | Border | Shadow / Glow | Radius | Padding |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary** | Default | `#C5A880` | `#121110` | None | `0 2px 4px rgba(0,0,0,0.1)` | Full (`9999px`)| `14px 32px` |
| **Primary** | Hover | `#DFCAAA` | `#121110` | None | `0 4px 14px rgba(197,168,128,0.25)` | Full (`9999px`)| `14px 32px` |
| **Primary** | Focus | `#DFCAAA` | `#121110` | 2px `#8C6B38` ring | `0 0 0 2px #8C6B38` | Full (`9999px`)| `14px 32px` |
| **Primary** | Disabled | `#24211D` (Dark) / `#E7E5E4` (Light) | `#8F8981` (Dark) / `#68625C` (Light) | None | None | Full (`9999px`)| `14px 32px` |
| **Secondary** | Default | `#121110` (Dark) / `#FFFFFF` (Light) | `#F5F2EB` (Dark) / `#1C1917` (Light) | 1px `border-stone-300` / `#C5A880/30` | None | Full (`9999px`)| `14px 28px` |
| **Secondary** | Hover | `#1A1816` (Dark) / `#F5F2EB` (Light) | `#C5A880` (Dark) / `#8C6B38` (Light) | 1px `#C5A880` | `0 2px 8px rgba(0,0,0,0.08)` | Full (`9999px`)| `14px 28px` |
| **Filter Tab** | Inactive | Transparent / `#221F1C` | `#A8A29E` / `#57534E` | 1px border | None | Full (`9999px`)| `8px 20px` |
| **Filter Tab** | Active | `#C5A880` | `#121110` | None | `0 1px 3px rgba(0,0,0,0.12)` | Full (`9999px`)| `8px 20px` |

---

## 5. Navigation Bar Specifications

Follows the strict **Top Bar Contract**:
$$\text{[Zone 1: Single-Line Brand Wordmark]} \quad\text{—}\quad \text{[Zone 2: 4–5 Nav Links]} \quad\text{—}\quad \text{[Zone 3: Utility & Primary Action]}$$

### 5.1 Desktop Header (Height: 80px default, 64px on scroll)
- **Auto-Layout:** Horizontal, space-between, align center. Padding horizontal `32px`.
- **Background:** `bg-[#FBF9F5]/90` (Light) or `bg-[#121110]/90` (Dark), with Backdrop Blur `16px`.
- **Bottom Border:** 1px hairline (`border-stone-200` Light / `rgba(197, 168, 128, 0.15)` Dark).
- **Zone 1 (Brand):** Text `THE MERIDIAN` in Cormorant Garamond 24px (`tracking-[0.2em]`), adjacent `CLUB` micro-label (10px uppercase, tracking `+0.3em`).
- **Zone 2 (Links):** 5 text links (`The Club`, `Membership`, `Experiences`, `Events`, `Contact`, `Status`). Font: Plus Jakarta Sans 12px uppercase, tracking `+0.18em`. Active state: 2px gold indicator underneath.
- **Zone 3 (Utilities):**
  1. `Language Toggle`: Rounded-full pill (EN / FR), 12px SemiBold.
  2. `Theme Toggle`: Rounded-full button with Sun/Moon vector icon (16px).
  3. `Primary CTA`: `Apply for Membership` button (`rounded-full`, gold background).

### 5.2 Mobile Header & Navigation Drawer
- **Header Bar:** 64px fixed, Brand title on left, Language + Theme + Hamburger Icon on right.
- **Drawer Overlay:** Fullscreen fixed sheet (`bg-[#121110]/98` Dark / `#FBF9F5]/98` Light).
- **Drawer Links:** Stacked vertical list, Cormorant Garamond 28px.
- **Drawer Footer:** Full-width primary CTA button (`w-full rounded-full py-4`) + private house address caption.

---

## 6. Card Components

Cards use **Single-Elevation Depth** with generous whitespace, subtle hairline borders, and `rounded-2xl` corners. Cards avoid thick colored left accent bars and static pill badges.

### 6.1 Membership Tier Card (Figma Component: `Card/Membership-Tier`)
- **Dimensions:** Width `290px`–`320px` (Desktop 4-column grid), Height auto (`flex-col justify-between`).
- **Corner Radius:** `16px` (`rounded-2xl`).
- **Surfaces:**
  - Standard Tier: `bg-white` (Light) / `bg-[#1A1816]` (Dark), 1px hairline border.
  - Highlighted Tier (Global Founder): 2px `#8C6B38` (Light) / `#C5A880` (Dark) border, top centered floating badge (`rounded-full px-4 py-1 text-[10px]`).
- **Hierarchy:**
  1. Tier Title (Cormorant Garamond 24px)
  2. Tagline (Plus Jakarta Sans 12px, muted)
  3. Dues Block: Annual Dues (24px serif tabular) + Initiation Fee (12px muted)
  4. Candidate Profile paragraph
  5. Core Privileges checklist (12px text with 14px checkmark icon)
  6. Distinctive Amenities list (bullet points)
  7. Footer CTA: Full-width rounded-full button (`Apply as Resident`, etc.)

### 6.2 Facility & Experience Card (Figma Component: `Card/Facility-Experience`)
- **Aspect Ratio of Image:** `4:3` or `16:9` top media frame with `rounded-t-2xl`.
- **Image Treatment:** Subtle gradient scrim at bottom (`from-black/60 to-transparent`).
- **Overlay Micro-Badges:** Rounded-full floating pills for hours (`Clock` icon + text) and capacity.
- **Card Body Padding:** `28px` (`p-7`).
- **Metadata Rule:** Accession notes & hours rendered in clean unboxed typography with `·` separators.

### 6.3 Event Activity Card (Figma Component: `Card/Event-Item`)
- **Padding:** `28px` all around.
- **Top Row:** Category name in gold tracking-widest text (left) + seats remaining tabular count (right).
- **Title:** Cormorant Garamond 24px, 2-line balanced clamp.
- **Host Row:** 14px User avatar icon + Host Name (SemiBold) + Host Title (muted).
- **Logistics Strip:** Date, Time, Room Location, Dress Code with subtle icons.
- **Action:** Full-width rounded-full button (`Request Seat Reservation`).

---

## 7. Form Controls & Validation States

Forms project discretion, confidentiality, and clarity. All interactive input fields use rounded geometry, WCAG-compliant border contrasts, and explicit error/helper typography.

### 7.1 Input & Dropdown Geometry
- **Height:** Single-line inputs: `44px` (Desktop) / `48px` (Mobile touch target $\ge 44\text{px}$).
- **Border Radius:** `rounded-full` for text inputs and dropdowns; `rounded-2xl` for multi-line textareas.
- **Padding:** Horizontal `20px` (`px-5`), Vertical `10px` (`py-2.5`).
- **Font:** Plus Jakarta Sans 13px Regular.

### 7.2 Form States

```
[ Default State ]
Border: 1px solid #D6D3D1 (Light) / rgba(197, 168, 128, 0.25) (Dark)
Background: #F5F2EB (Light) / #121110 (Dark)
Text: #1C1917 (Light) / #F5F2EB (Dark)

[ Focused State ]
Border: 1.5px solid #8C6B38 (Light) / #C5A880 (Dark)
Ring: 2px soft glow rgba(197, 168, 128, 0.25)

[ Error State (Invalid Input) ]
Border: 1.5px solid #DC2626
Error Message: 11px text-red-500 mt-1 with AlertCircle icon (no color-only signaling)

[ Success State (Validated / Submitted) ]
Border: 1px solid #16A34A
Success Indicator: 14px Check icon
```

### 7.3 Multi-Step Application Workflow Layout
- **Step Progress Bar:** 5 segment progress indicator (`Step 01 / 05` with clean tracking).
- **Section Headers:** Human editorial numbering (`01. Candidate Standing & Credentials`).
- **Attestation Checkboxes:** 18px checkbox target paired with 13px legal text.

---

## 8. Reusable Interface Elements & Components

### 8.1 The Meridian Gazette (Newsletter Lead Capture)
- **Container:** `rounded-2xl` card with deep radial gold backdrop glow (`bg-[#171513]`).
- **Heading:** Cormorant Garamond 32px (`Exclusive Event Invitations & Private Dispatches`).
- **Lead Capture Fields:**
  1. Full Name (optional input, `rounded-full`)
  2. Executive Email (required input, `rounded-full`)
  3. Interactive Interest Tags (Selectable pills: Salons, Gastronomy, Art Previews, Wellness)
  4. Submit Button: `Request Invitations` (Gold, `rounded-full`).

### 8.2 Application Status Modal (Figma Component: `Modal/Status-Tracker`)
- **Scrim:** `rgba(0, 0, 0, 0.85)` with background blur `8px`.
- **Modal Window:** Width `560px`, `rounded-2xl`, padding `32px`.
- **Pipeline Stepper (5 Nodes):**
  - Node 1: Dossier Received & Verified (`Completed / Checkmark`)
  - Node 2: Peer Sponsorship Contact (`Completed / Checkmark`)
  - Node 3: Committee Deliberation (`Active / Gold Pulsing Ring`)
  - Node 4: Governor Private Coffee (`Upcoming / Muted`)
  - Node 5: Election & Key Card Induction (`Upcoming / Muted`)

### 8.3 Quiet Footer Component
- **Height / Layout:** 4-column editorial layout + bottom legal row.
- **Top Section:** Embedded `NewsletterSubscription` lead capture component.
- **Hairline Divider:** 1px hairline (`border-[#C5A880]/15`).
- **Typography:** 12px navigation links with subtle hover color shifts.
- **Trust Elements:** Quiet notices (`By Appointment Only · Strict Discretion Observed`).

---

## 9. Figma Layer Organization & Asset Naming

When creating frames and components in Figma, structure layers using the following naming conventions:

```
❖ Meridian Design System
  ├── ❖ Navigation / Desktop Topbar
  ├── ❖ Navigation / Mobile Drawer
  ├── ❖ Buttons / Primary / [State: Default, Hover, Focus, Disabled]
  ├── ❖ Buttons / Secondary / [State: Default, Hover, Focus]
  ├── ❖ Buttons / Filter-Tab / [Active: True, False]
  ├── ❖ Card / Membership-Tier / [Tier: Resident, Global, Patron, Emerging]
  ├── ❖ Card / Facility-Showcase
  ├── ❖ Card / Event-Activity
  ├── ❖ Form / Input-Text / [State: Default, Focus, Error, Success]
  ├── ❖ Form / Select-Dropdown
  ├── ❖ Form / Checkbox-Attestation
  ├── ❖ LeadCapture / Gazette-Footer
  └── ❖ Modal / Status-Tracker-Dossier
```

---
*Created for The Meridian Club design and engineering alignment. Synchronized with `@tailwindcss/vite` and React SPA implementation.*
