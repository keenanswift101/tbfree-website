# TB Free Foundation - Image Guide

This document provides a complete reference for all images needed on the website. All images should be placed in the `public/images/` directory.

---

## Image Specifications

### General Guidelines
- **Format**: Use `.jpg` for photographs, `.png` for graphics with transparency, `.webp` for optimal web performance
- **Quality**: Aim for high-quality images that are still web-optimized (generally 80-150KB per image)
- **Style**: Professional, clean, health-oriented. Avoid cluttered or low-resolution images
- **Tone**: Use imagery that conveys hope, community, health, and professionalism
- **Color**: Images should complement the brand colors (primary: #9f0d0d, black, white)

### Recommended Tool for Optimization
- [TinyPNG](https://tinypng.com/) - Free online image compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer

---

## Required Images by Page

### Home Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-home.jpg` | 1920x1080px | Main hero banner. Suggested: TB Free logo/banner, community health outreach, or Namibian landscape with health theme. This is the first thing visitors see. |
| `about-home.jpg` | 800x600px | Image of TB Free team working in the community or at an event. |
| `world-tb-day.jpg` | 1200x600px | World TB Day commemoration - can use event photos from March 24 celebrations. |

### Who We Are Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-who-we-are.jpg` | 1920x800px | Hero image for the page. Suggested: team photo or community engagement shot. |
| `who-we-are-team.jpg` | 800x600px | Group photo of TB Free team/members at an event or meeting. |
| `leader-taime.jpg` | 600x600px | Professional headshot of Dr. Taime Sylvester (Chairperson). Square crop recommended. |
| `leader-karin.jpg` | 600x600px | Professional headshot of Karin Husselmann (Founder). Square crop recommended. |
| `commitment-bg.jpg` | 1200x600px | Background image for the commitment section. Suggested: healthcare/community work photo. |

### What We Do Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-what-we-do.jpg` | 1920x800px | Hero image. Suggested: community outreach, healthcare workers, or educational session. |
| `activity-guidelines.jpg` | 800x400px | Photo related to national guidelines work or meetings with government. |
| `activity-research.jpg` | 800x400px | Photo of research activities, lab work, or data collection. |
| `activity-champions.jpg` | 800x400px | Photo of TB Champions training session. |
| `activity-survivors.jpg` | 800x400px | Photo of TB survivors sharing stories or at awareness events. |
| `activity-gaps.jpg` | 800x400px | Photo representing healthcare system improvement or patient consultations. |
| `activity-policy.jpg` | 800x400px | Photo of meetings with policymakers or government officials. |
| `activity-outreach.jpg` | 800x400px | Photo of outreach to remote/rural communities. E-bikes or community health workers. |

### Our Mission Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-mission.jpg` | 1920x800px | Hero image. Suggested: inspirational imagery of health workers, Namibian community. |
| `mission-vision.jpg` | 800x600px | Image representing the vision of a TB-free Namibia. |
| `aim-awareness.jpg` | 800x400px | TB awareness campaign/event photo. |
| `aim-advocacy.jpg` | 800x400px | Advocacy work, marches, or public speaking events. |
| `aim-education.jpg` | 800x400px | Educational program or workshop photo. |
| `aim-treatment.jpg` | 800x400px | Patient care or healthcare facility photo. |
| `aim-stigma.jpg` | 800x400px | Breaking stigma campaign or community conversation photo. |
| `aim-equity.jpg` | 800x400px | Healthcare access in underserved areas photo. |

### Events & Projects Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-events.jpg` | 1920x800px | Hero image. Suggested: event photo, community gathering, or fundraiser. |
| `event-wtbd-2026.jpg` | 800x500px | World TB Day 2026 promotional image or past World TB Day event photo. |
| `event-gala.jpg` | 800x500px | Photo from the TB Free Charity Gala dinner event. |
| `event-ngo-spotlight.jpg` | 800x500px | Photo from the NGOs in the Spotlight networking event at FNCC gallery. |
| `event-npo-training.jpg` | 800x500px | Photo from the NPO Level Up Training at House of Democracy. |
| `event-coffee-shop.jpg` | 800x500px | Photo from the Umbrella Initiatives Coffee Shop fundraiser. |
| `event-hike.jpg` | 800x500px | Photo from the TB Free Charity Hike event. |
| `event-ministry-tb-day.jpg` | 800x500px | Photo from the TB Day conference with Ministry of Health in Luderitz. |
| `project-ebikes.jpg` | 600x400px | Photo of the E-bike donation to Tsumkwe region. |
| `project-champions.jpg` | 600x400px | Photo of TB Champions program/training. |
| `project-advocacy.jpg` | 600x400px | Photo of advocacy work with TB survivors. |
| `project-workshops.jpg` | 600x400px | Photo from Umbrella Initiatives workshops. |

### Contact Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-contact.jpg` | 1920x800px | Hero image. Suggested: communication, teamwork, or friendly outreach image. |

### Donations Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-donate.jpg` | 1920x800px | Hero image. Suggested: generosity, community support, or impactful healthcare. |

### News Page

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `hero-news.jpg` | 1920x800px | Hero image. Suggested: newspaper/media, Namibian landscape, or journalism. |
| `news-featured.jpg` | 800x500px | Featured news article image. TB awareness or health campaign in Namibia. |

---

## How to Add Images

### Step 1: Prepare Images
1. Select or photograph appropriate images following the descriptions above
2. Resize to the recommended dimensions using any image editor
3. Optimize for web using TinyPNG or Squoosh
4. Rename files exactly as listed in the tables above

### Step 2: Add to Project
1. Place all images in the `public/images/` folder
2. The website will automatically use them - no code changes needed

### Step 3: Verify
1. Run `npm run dev` to start the development server
2. Check each page to verify images display correctly
3. Test on both desktop and mobile viewports

---

## Using Images from the Current Website

You can download images from the current Google Sites website at `tbfreenamibia.com`. Right-click on images and select "Save image as..." to download them. Then rename according to the filenames listed above.

### Current Website Image Sources:
- **Home page**: Banner/logo, team photos, World TB Day images
- **Who We Are**: Leader photos (Dr. Taime Sylvester, Karin Husselmann), team photos
- **Events page**: All event-specific photos (gala, hike, training, etc.)
- **Mission page**: Mission-related imagery

---

## Placeholder Behavior

If an image file is missing, the website will show a broken image icon. To avoid this during development, you can create simple placeholder images or use a service like [placeholder.com](https://placeholder.com).

Example placeholder URL format (for testing only):
```
https://placehold.co/800x400/9f0d0d/ffffff?text=Image+Name
```

---

## Stock Photo Resources (Free)

If you need additional images:
- [Unsplash](https://unsplash.com) - Search for "tuberculosis", "healthcare Africa", "community health", "lungs"
- [Pexels](https://pexels.com) - Similar health-related searches
- [WHO Image Library](https://www.who.int/images) - Official TB-related imagery

---

## Total Images Required: 37 files

Ensure all images are ready before deploying to production.
