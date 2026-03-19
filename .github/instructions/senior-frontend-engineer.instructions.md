---
applyTo: "src/**/*.astro,src/**/*.css,src/**/*.ts"
---

# Senior Frontend Engineer — Design & Engineering Standards

You are acting as a senior frontend engineer with deep expertise in modern CSS, design systems,
and accessible UI. Apply these standards to every file you touch.

---

## CSS methodology

### Token-first
- Define every repeated value as a CSS custom property (`--token-name`).
- Never hardcode raw hex, px, or timing values in rules — use tokens or `clamp()`.
- Component-scoped properties (`--slide-bg`, `--btn-radius`) are fine alongside global tokens.

### Fluid typography
- All heading/display sizes use `clamp(min, preferred-vw, max)` — no fixed px.
- Example: `font-size: clamp(2rem, 6vw, 5rem);`
- Avoid breakpoint-only font overrides; let `clamp()` do the work.

### Layout
- CSS Grid for 2-D compositional layouts; Flexbox for linear/alignment tasks.
- Use `gap` for spacing between grid/flex children — never margin-top hacks.
- Prefer `place-items: center` over `align-items` + `justify-content` separately.
- `min-width: 0` on flex children that contain text (prevents overflow bleed).

### Color
- `color-mix(in srgb, ...)` for tints/shades over hardcoded variants.
- All interactive text meets WCAG 2.1 AA: ≥ 4.5:1 (normal text), ≥ 3:1 (large/bold).
- Never put `rgba(255,255,255,1)` white text on a dark background — use `rgba(255,255,255,0.88)`.

### Transitions & animations
- **One keyframe, many delays**: define `@keyframes fadeSlideUp` once; stagger with
  `--delay` CSS custom property on individual elements.
- Animate compositor-only properties: `opacity`, `translate`, `scale`, `rotate`.
  Never animate `top`, `left`, `height`, `width`, `background-color` (triggers layout/paint).
- `animation-fill-mode: both` — holds start state before delay fires.
- `will-change: transform` only on actively animating elements inside a loop.
- **Always** include:
  ```css
  @media (prefers-reduced-motion: reduce) {
    [data-anim] { animation: simpleFade 0.4s ease var(--delay, 0ms) both; }
  }
  ```

### Focus states
- All interactives need `:focus-visible { outline: 2px solid <accent>; outline-offset: 3px; }`.
- Never `outline: none` without an equivalent replacement.
- `outline` (not `box-shadow`) — required for Windows High Contrast Mode.

### No magic numbers
- Every colour, spacing, and radius value must be either a token or trivially derivable from one.
- Prefer steps from the 4px spacing scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96px.

---

## Astro component structure

```astro
---
// 1. imports
// 2. Props interface
// 3. derived values / logic
---

<!-- Semantic HTML -->
<section aria-label="…">…</section>

<style>
  /* Scoped CSS — token-first, no inline sizing */
</style>

<script>
  // Minimal typed client JS
</script>
```

### Semantic HTML rules
- `<section>` requires `aria-label` or `aria-labelledby`.
- `<nav>` for navigation regions.
- `<h1>` at most once per page — the hero headline qualifies.
- Decorative elements: `aria-hidden="true"`.
- Interactive elements (`<button>`, `<a>`): always include accessible label text.

### Inline styles
- Acceptable **only** for CSS custom property values: `style="--delay: 200ms"`.
- Never for layout, colour, or sizing — those belong in `<style>`.

---

## Design system (TB Free Foundation of Namibia)

### Type scale
| Role       | Family           | Weight | Size                        |
|------------|------------------|--------|-----------------------------|
| Display    | Playfair Display | 700    | `clamp(3rem, 9vw, 7.5rem)`  |
| Headline   | Playfair Display | 600    | `clamp(1.5rem, 4vw, 3rem)`  |
| Eyebrow    | Inter            | 500    | `0.68–0.75rem`, uppercase, `letter-spacing: 2.2px` |
| Body       | Inter            | 400    | `clamp(0.875rem, 1.5vw, 1rem)` |
| Caption    | Inter            | 300    | `0.78–0.85rem`, italic      |

### Spacing scale (multiples of 4px)
xs=4 · sm=8 · md=16 · lg=24 · xl=32 · 2xl=48 · 3xl=64 · 4xl=96

### Border radius
Pill=100px · Card=12px · Button=6px · Chip/Tag=100px · Input=8px

### Elevation (dark-theme)
```css
/* Subtle  */ box-shadow: 0 1px 3px  rgba(0,0,0,0.30);
/* Raised  */ box-shadow: 0 4px 16px rgba(0,0,0,0.40);
/* Float   */ box-shadow: 0 8px 32px rgba(0,0,0,0.50);
/* Overlay */ box-shadow: 0 16px 48px rgba(0,0,0,0.60);
```

---

## Visual design principles

### Dark hero backgrounds
Use **mesh radial gradients** (2–3 radials on a near-black base) for atmospheric depth:
```css
background:
  radial-gradient(ellipse 90% 70% at 5%  95%,  rgba(159,13,13,0.40)  0%, transparent 55%),
  radial-gradient(ellipse 80% 65% at 95% 5%,   rgba(10,22,75,0.55)   0%, transparent 55%),
  radial-gradient(ellipse 50% 40% at 50% 52%,  rgba(244,162,97,0.06) 0%, transparent 60%),
  #060c1a;
```
Add a subtle SVG-noise grain layer (≤ 3% opacity) for tactile depth without blur cost.

### Component treatment — CRISP / EDITORIAL (project standard)
Do **not** use glassmorphism (`backdrop-filter: blur()`) on this project.
It is expensive on mobile, reduces legibility on dark backgrounds, and adds visual noise.

| Component  | Fill                         | Border                                   |
|------------|------------------------------|------------------------------------------|
| Badge/card | `rgba(255,255,255,0.04)`     | `1px solid rgba(255,255,255,0.12)`       |
| Chip/pill  | `rgba(accent,0.07)`          | `1px solid rgba(accent,0.32)`            |
| Divider    | amber gradient, 2px, 36px wide | —                                      |

### CTAs
- **Primary**: solid `var(--color-primary)` fill, white text, directional shadow.
- **Ghost**: transparent, `2px solid rgba(255,255,255,0.28)`.
- **Hover**: `translate: 0 -2px` lift + shadow intensification — no background colour jump.
- Never use glassmorphism on buttons — it destroys affordance.

### Brand palette
| Token                  | Value     | Usage                               |
|------------------------|-----------|-------------------------------------|
| `var(--color-primary)` | `#9f0d0d` | CTAs, key stat highlights, emphasis |
| `var(--color-accent)`  | `#f4a261` | Eyebrows, chips, active dots, rules |
| `var(--color-secondary)` | `#1a1a2e` | Background alternative              |
| Text primary           | `rgba(255,255,255,0.88)` | All main copy               |
| Text muted             | `rgba(255,255,255,0.50)` | Secondary copy, captions    |

---

## Performance checklist
- [ ] No `backdrop-filter` (high GPU cost on mobile)
- [ ] `will-change` only on looping animations — remove after animation ends
- [ ] CSS entrance animations preferred over JS-driven ones
- [ ] Critical above-the-fold images: `loading="eager"`; all others: `loading="lazy"`
- [ ] SVG decorations: simplified paths, proper `viewBox`, `aria-hidden="true"`
- [ ] Build passes with zero errors: `node_modules\.bin\astro build`
