# Design

## Theme

**Light with warm undertones.** This is a daytime business: people researching services during work hours, browsing on mobile in various contexts. The palette evokes morning sunlight on stone architecture, sophisticated without being cold. Dark accents used sparingly for contrast and emphasis.

## Color Palette

### Core Palette

```
--color-surface: #FDFBF8          /* Warm off-white, base canvas */
--color-surface-elevated: #FFFFFF  /* Pure white for cards */
--color-text: #1A1815              /* Warm near-black */
--color-text-muted: #6B6560         /* Muted warm gray */
--color-border: #E8E4DF             /* Subtle warm border */
```

### Accent: Terracotta (Primary Action Color)

```
--color-accent: #C45D3A             /* Terracotta, used for CTAs and emphasis */
--color-accent-light: #F5E6E1       /* Light tint for backgrounds */
--color-accent-dark: #9A3E24        /* Hover/active states */
```

### Division Accents (Used sparingly for categorization)

```
--color-real-estate: #4A6FA5        /* Slate blue, trustworthy */
--color-laundry: #5B8A72             /* Sage green, clean */
--color-bakery: #D4A853              /* Warm gold, artisanal */
--color-jewelry: #7B68A6            /* Amethyst, elegance */
--color-transport: #5C6B73          /* Steel gray, reliable */
```

### Dark Surface (Footer, contrast sections)

```
--color-dark: #1F1D1A               /* Warm charcoal */
--color-dark-muted: #8A847D         /* Muted text on dark */
```

## Typography

**Primary Font**: Source Serif 4 (headings) — editorial elegance with readability
**Secondary Font**: DM Sans (body, UI) — geometric clarity, excellent at small sizes

### Scale

```
--text-hero: clamp(2.5rem, 5vw, 4.5rem)    /* Hero headlines */
--text-h1: clamp(2rem, 4vw, 3rem)            /* Section titles */
--text-h2: clamp(1.5rem, 3vw, 2rem)          /* Sub-sections */
--text-h3: clamp(1.125rem, 2vw, 1.5rem)       /* Card titles */
--text-body: 1rem (16px)                     /* Body copy */
--text-small: 0.875rem (14px)                 /* Captions, labels */
--text-caption: 0.75rem (12px)               /* Fine print */
```

### Hierarchy Rules

- Hero headline: Source Serif 4, weight 600, tracking -0.02em
- Section titles: Source Serif 4, weight 500
- Body: DM Sans, weight 400, line-height 1.6
- CTAs: DM Sans, weight 500, uppercase, tracking 0.05em, 0.875rem

## Spacing System

Base unit: 4px

```
--space-1: 0.25rem   (4px)
--space-2: 0.5rem    (8px)
--space-3: 0.75rem   (12px)
--space-4: 1rem      (16px)
--space-6: 1.5rem    (24px)
--space-8: 2rem      (32px)
--space-12: 3rem     (48px)
--space-16: 4rem     (64px)
--space-24: 6rem     (96px)
--space-32: 8rem     (128px)
```

Section padding: 96px top/bottom on desktop, 64px on tablet, 48px on mobile.

## Layout

### Container

- Max-width: 1280px
- Horizontal padding: 24px (mobile), 48px (tablet), 64px (desktop)
- Content max-width: 720px for text-heavy sections, full-width for cards/grids

### Grid System

- 12-column grid on desktop
- Card grids: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Generous gaps: 32px between cards, 64px between sections

### Responsive Breakpoints

```
--bp-mobile: 480px
--bp-tablet: 768px
--bp-desktop: 1024px
--bp-wide: 1280px
```

## Components

### Navigation

- Fixed header, 72px height
- Logo left, nav center/right, CTA button right
- Background: surface with subtle shadow on scroll
- Nav links: DM Sans 500, 0.875rem, muted text, hover = accent
- Mobile: slide-in drawer from right

### Cards (Division Cards)

- Background: surface-elevated
- Border: 1px solid border color
- Border-radius: 16px
- Padding: 32px
- Icon: 48px, accent or division color
- Hover: translateY(-4px), shadow increase, 0.3s ease-out

### Buttons

- Primary: accent background, white text, 12px 28px padding, 8px radius
- Secondary: transparent, accent border, accent text
- Hover: slight scale (1.02), shadow
- Active: scale(0.98)

### Hero Slider

- Full viewport width, 90vh minimum height
- Overlay gradient for text legibility
- Navigation arrows: 48px circles, white with shadow
- Dots: 8px circles, muted when inactive, accent when active
- Auto-rotate: 6s, pause on hover

### Testimonials

- Single testimonial visible, centered
- Quote styling: large quotation mark, Source Serif italic
- Client info below with small avatar
- Fade transition between testimonials

### Stats Counter

- Large number: Source Serif 4, 600 weight
- Label below: DM Sans, muted text
- Count animation on scroll into view: 2s duration, ease-out

### Contact Form

- Input fields: full-width, 48px height, 8px radius, subtle border
- Focus: accent border, slight shadow
- Dropdown: custom styled to match inputs
- Submit: primary button, full-width on mobile

### Footer

- Dark surface background
- 4-column layout (tablet: 2-column, mobile: stacked)
- Social icons: 24px, muted, hover = accent
- Bottom bar: muted text, links

## Motion

### Transitions

- Default: 0.3s ease-out
- Cards: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Slider: 0.6s ease-out
- No bounce, no elastic

### Scroll Animations

- Sections fade-in on scroll: opacity 0→1, translateY 24px→0
- Staggered reveal for card grids: 100ms delay between cards
- Stats counter: number animates from 0 to target value

### Hover Effects

- Cards: translateY(-4px), shadow increase
- Buttons: scale(1.02), shadow increase
- Links: color transition to accent
- Icons in cards: subtle scale(1.1)

## Icon Strategy

- Lucide icons (line style) for UI elements
- Custom division icons: outlined style, consistent 2px stroke
- Icon colors: muted by default, accent on hover or when serving as visual anchor

## Image Strategy

- Hero images: Unsplash, architectural/industry photography
- Division cards: abstract/symbolic imagery rather than stock
- Placeholder approach: gradient overlays with division accent colors
- Aspect ratios: 16:9 for hero, 4:3 for cards, 1:1 for avatars

## Accessibility

- Focus visible: 2px accent outline, 2px offset
- Skip to content link
- Landmark regions clearly defined
- Reduced motion: respect prefers-reduced-motion
- Color contrast: 7:1 for body text on light backgrounds
- Form labels: always visible, never placeholder-only
- Error states: red border + error message below input