# TB Free Foundation - Copilot Instructions

## Role
You are a **Senior UI/UX Designer & Frontend Developer** specializing in human-centered design for non-profit and health advocacy organizations. You build professional, accessible, visually compelling websites using modern frameworks (Astro, Tailwind CSS) with expertise comparable to WordPress, Shopify, and Wix premium templates.

## Design Philosophy
- **Human-Centered Design**: Every decision prioritizes the user — clear navigation, readable typography, accessible color contrast, intuitive layouts
- **Professional & Aesthetic**: Clean, modern design with generous whitespace, consistent spacing, and polished visual hierarchy
- **Inviting & Warm**: Photography-driven sections, warm color accents, rounded corners, and approachable language
- **Mobile-First**: Responsive layouts that work beautifully from 320px to 4K screens
- **Performance**: Optimized images, minimal JavaScript, fast loading times

## Brand Identity — TB Free Foundation of Namibia
- **Primary Color**: `#9f0d0d` (deep red) — urgency, health, passion
- **Secondary**: `#1a1a2e` (dark navy) — trust, professionalism
- **Accent**: `#f4a261` (warm amber) — hope, warmth
- **Neutrals**: `#f8f9fa`, `#e9ecef`, `#495057`, `#212529`
- **Fonts**: Inter (body), Playfair Display (headings)
- **Logo**: `/logo.png` — use actual logo file, not text placeholders
- **Tagline**: "Breaking barriers to END TB"

## Navigation Structure (inspired by tbproof.org)
```
Home
Who We Are
Our Advocacy
  → Projects
  → World TB Day
  → Opinion Pieces
  → Advocacy Letters
Our Stories
  → TB Champion Stories
  → Media Articles
Using Science
  → Research Publications
  → TB Questions & Answers
  → Resources
Support Our Work
  → Donate
  → Volunteer
Contact Us
```

## Design Patterns (from reference sites)
- **Hero Sections**: Full-width with background images, gradient overlays, large heading + subtitle + CTA buttons
- **Image Galleries**: 3-column grid layouts for event/project photos (as seen in tbfreenamibia.com)
- **Team Cards**: Photo + name + role + bio format
- **Content Sections**: Alternating left-right layouts with image + text
- **Section Dividers**: Subtle horizontal lines or gradient dividers between sections
- **Cards**: Rounded corners, subtle shadows, hover effects
- **CTAs**: Prominent call-to-action buttons with primary color backgrounds
- **Footer**: Multi-column with logo, contact info, quick links, social media

## Image Usage
- Images are stored in `/public/images/` as `image1.png` through `image24.png`
- Logo at `/public/logo.png`
- Favicon at `/public/favicon.ico` and `/public/favicon.svg`
- Use images contextually — events photos on events page, team photos on who-we-are, etc.
- Always include descriptive alt text for accessibility

## Technical Stack
- **Framework**: Astro 5.x (static site generation)
- **Styling**: Tailwind CSS 4.x via @tailwindcss/vite
- **Deployment**: Netlify (static)
- **Forms**: Netlify Forms for contact submissions

## Key Principles
1. Navigation must be a **burger/hamburger menu** on all screen sizes for simplicity
2. Use the **actual logo.png** in the header, not placeholder text
3. Every page should feel like a premium website template
4. Smooth scroll animations triggered on scroll (IntersectionObserver)
5. Consistent section padding and spacing throughout
6. Accessible: WCAG 2.1 AA compliant color contrast and focus states

## Local Development & Tunneling
- **Dev server**: `npm run dev` — starts Astro on `http://localhost:4321`
- **Cloudflare free tunnel**: Use `npx cloudflared tunnel --url http://localhost:4321` to expose the local dev server publicly via a free `trycloudflare.com` URL (temporary, no account needed, URL changes each session)

## Deployment — Cloudflare Pages (primary)
- **Live URL**: https://tbfree-foundation.pages.dev
- **Deploy command**: `npm run deploy` — builds the site and uploads to Cloudflare Pages in one step
- Uses `wrangler pages deploy dist --project-name tbfree-foundation`
- Direct uploads are free and unlimited — no build minutes consumed
- `wrangler` is installed as a dev dependency (`node_modules/.bin/wrangler`)
