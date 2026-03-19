---
applyTo: src/components/HeroSlideshow.astro
---

# Hero Slideshow — Design & Content Instructions

## Overview
`HeroSlideshow.astro` is the full-screen hero slideshow that replaces the old video background on the home page. Each slide is a self-contained `<div class="slide">` inside `#ss-stage`.

## File location
`src/components/HeroSlideshow.astro`

## Slide structure (copy this template for each new slide)
```html
<div class="slide" id="slide-N" data-duration="7000">

  <!-- Background (customize per slide) -->
  <div class="absolute inset-0" style="background: #0d1a2e;">
    <!-- optional ambient glow, overlay, or image here -->
  </div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col items-center justify-center h-full px-6 pb-24 pt-24 text-center gap-0">
    <!-- your slide content here -->
  </div>

  <!-- Namibia flag strip (include on title/closing slides) -->
  <div class="flag-strip" aria-hidden="true"></div>

</div>
```

## Required: update the dots when adding a slide
In the `<script>`, the dots are built automatically from `.slide` elements — no manual dot updates needed.

## Slide index reference
| id       | Title                        | data-duration |
|----------|------------------------------|---------------|
| slide-1  | Title + World TB Day 2026    | 8000          |
| slide-2  | TB in Namibia: The Facts     | 6000 (planned)|
| slide-3  | Know the Signs of TB         | 5500 (planned)|
| slide-4  | HIV & TB                     | 6500 (planned)|
| slide-5  | TB in the Workplace          | 6000 (planned)|
| slide-6  | Get Tested. Get Treated.     | 5500 (planned)|
| slide-7  | The Road to Recovery         | 6500 (planned)|
| slide-8  | Protecting Our Children      | 5500 (planned)|
| slide-9  | Hope / Closing               | 7000 (planned)|

## Source content
All slide data is derived from `TBFreeNamibia_Explainer_v3.html` in the project root.
Stats, copy, and messaging must match that file exactly.

## Design system — Crisp / Editorial (project standard)

**Do NOT use glassmorphism** (`backdrop-filter: blur()`). It is expensive on mobile and reduces
legibility on dark backgrounds. Use the crisp/editorial treatment exclusively.

See `.github/instructions/senior-frontend-engineer.instructions.md` for the full design system.

### Background — mesh radial gradients
Each slide uses 2–3 radial gradients on a near-black base:
```css
.sN-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 90% 70% at <x>% <y>%, <colour> 0%, transparent 55%),
    radial-gradient(ellipse 80% 65% at <x>% <y>%, <colour> 0%, transparent 55%),
    #060c1a; /* near-black navy base */
}
/* Optional: add SVG noise grain via ::after for tactile depth (opacity ≤ 0.03) */
```

Background colour guide by slide type:
- Title / Hope → red BL + navy TR on `#060c1a`
- Stats / burden → amber accent on `#07101a`
- Children focus → warm green accent on `#060f08`
- HIV–TB → red accent only on `#0a0608`
- Testing / Journey → teal accent on `#06100c`

### Type hierarchy (Slide 1 pattern — apply consistently)
| Element        | Tag / class   | Font                    | Size                         |
|----------------|---------------|-------------------------|------------------------------|
| Eyebrow chip   | `<p>.s1-chip` | Inter 500, uppercase    | `clamp(0.62rem,1.4vw,0.72rem)` |
| Light subtitle | `.hl-light`   | Inter 300               | `clamp(1.25rem,3.5vw,2.6rem)`  |
| Display head   | `.hl-display` | Playfair Display 700    | `clamp(2.8rem,9.5vw,7.5rem)`   |
| Theme line     | `<p>.s1-theme`| Inter 300 italic        | `clamp(0.78rem,1.8vw,0.92rem)` |
| Hashtags       | `<p>.s1-tags` | Inter 600               | `0.68rem`                      |

### Component treatments
| Component  | Fill                        | Border                              |
|------------|-----------------------------|-------------------------------------|
| Chip/pill  | `rgba(244,162,97,0.065)`    | `1px solid rgba(244,162,97,0.32)`   |
| Card/badge | `rgba(255,255,255,0.04)`    | `1px solid rgba(255,255,255,0.12)`  |
| Divider    | amber gradient, 2px, 36px   | —                                   |

### CTA buttons
- `.btn-solid` — `var(--color-primary)` fill, white text, `6px` radius, directional shadow
- `.btn-outline` — transparent, `2px solid rgba(255,255,255,0.28)`, white text
- Hover: `translate: 0 -2px` + shadow intensification; no background-colour flash

## Animation system

### Single-keyframe stagger
All animated elements use `[data-anim]` + `--delay` inline CSS property:
```html
<div data-anim style="--delay: 200ms">...</div>
```
```css
[data-anim] {
  animation: fadeSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms) both;
}
@keyframes fadeSlideUp {
  from { opacity: 0; translate: 0 16px; }
  to   { opacity: 1; translate: 0 0; }
}
```

**Never** define per-element named animations — use delay stagger only.

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  [data-anim] { animation: simpleFade 0.4s ease var(--delay, 0ms) both; }
}
@keyframes simpleFade { from { opacity: 0; } to { opacity: 1; } }
```

### Animation restart on slide re-entry
`restartAnims(slide)` in the JS engine replays all `[data-anim]` animations each time a slide
becomes active. Every content element must carry `data-anim` + the appropriate `--delay`.

## Design tokens (always use these — never hardcode raw hex values)
| Token | Value | Use |
|---|---|---|
| `var(--color-primary)` | `#9f0d0d` | Red CTAs, accents |
| `var(--color-accent)` | `#f4a261` | Amber — sun orb, badge borders, highlights |
| `var(--color-secondary)` | `#1a1a2e` | Deep navy backgrounds |
| `var(--font-heading)` | Playfair Display | Slide titles only |
| `var(--font-sans)` | Inter | All body copy, labels, badges |
| `#0d1a2e` | — | Slide background (slightly darker than secondary) |

## Shared CSS classes (defined in the `<style>` block)
- `.hs-root` — section wrapper (`100dvh`, `overflow: hidden`)
- `#ss-stage` — slides container (`position: absolute; inset: 0`)
- `.slide` — base slide (`position: absolute`, opacity transition)
- `.slide.active` — visible slide
- `.slide-body` — centered content flex-column for each slide
- `.slide-logo` — logo wrapper (add `data-anim style="--delay:80ms"`)
- `.btn-solid` — red filled CTA button
- `.btn-outline` — ghost/white-border CTA button
- `.flag-strip` — Namibia blue/red/green bottom strip (6px)
- `.ss-arrow`, `.ss-dot`, `#ss-controls`, `#ss-dots`, `#ss-counter` — nav controls

## Shared entrance animation
`[data-anim]` on any element + `style="--delay: Xms"` → staggered `fadeSlideUp` entrance.
Only one keyframe (`fadeSlideUp`) is defined — no per-element named animations.

## When adding a new slide
1. Duplicate the `.slide` template above
2. Give it a unique `id="slide-N"` and set `data-duration`
3. Add a per-slide hook in `onEnter(idx)` in the `<script>` if it needs JS on enter (e.g. animating a journey line, counting up a number)
4. Ensure all stats match `TBFreeNamibia_Explainer_v3.html`
5. Use `var(--color-accent)` for key numbers and highlights, `var(--color-primary)` for error/urgency states

## Slide backgrounds by type
- Title/Hope slides → deep navy `#0d1a2e` + amber radial glow
- Stats/burden slides → `#0f1520` (near-black)
- Children focus → `#101808` (dark olive-black)
- HIV-TB slides → `#160808` (dark crimson-black)
- Testing/Journey slides → `#0a1a14`, `#0d1a28`
- Workplace slides → `#0a1520`

## Layout rules
- All slide content: `flex flex-col items-center justify-center h-full`, centered
- Max content width: `max-w-xl` for single column, `max-w-2xl` for two-column layouts
- Bottom padding `pb-24` to clear the navigation controls bar
- Top padding `pt-24` to clear the fixed header
- Namibia flag strip: include on slide-1 and slide-9 (title + closing)
