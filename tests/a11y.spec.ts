import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE = 'http://localhost:4322';

const ALL_PAGES = [
  '/',
  '/who-we-are',
  '/what-we-do',
  '/our-mission',
  '/our-advocacy',
  '/events',
  '/news',
  '/donations',
  '/contact',
  '/world-tb-day',
  '/tb-champion-stories',
  '/media-articles',
  '/opinion-pieces',
  '/research-publications',
  '/resources',
  '/tb-questions-answers',
  '/volunteer',
  '/advocacy-letters',
];

for (const path of ALL_PAGES) {
  test(`a11y: ${path}`, async ({ page }) => {
    await page.goto(`${BASE}${path}`);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .disableRules(['color-contrast']) // skip contrast (Tailwind purge may affect analysis)
      .analyze();

    if (results.violations.length > 0) {
      const summary = results.violations.map(v =>
        `[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}\n  Nodes: ${v.nodes.map(n => n.target.join(', ')).slice(0, 3).join(' | ')}`
      ).join('\n');
      console.log(`\nA11y violations on ${path}:\n${summary}`);
    }

    // Only fail on critical/serious violations
    const critical = results.violations.filter(v => v.impact === 'critical' || v.impact === 'serious');
    expect(critical, `Critical a11y violations found on ${path}:\n${critical.map(v => `${v.id}: ${v.description}`).join('\n')}`).toHaveLength(0);
  });
}

// Mobile viewport a11y
const MOBILE_PAGES = ['/', '/who-we-are', '/volunteer', '/contact'];
for (const path of MOBILE_PAGES) {
  test(`mobile a11y: ${path}`, async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15',
    });
    const page = await context.newPage();
    await page.goto(`${BASE}${path}`);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze();

    const critical = results.violations.filter(v => v.impact === 'critical' || v.impact === 'serious');
    expect(critical, `Mobile a11y violations on ${path}:\n${critical.map(v => `${v.id}: ${v.description}`).join('\n')}`).toHaveLength(0);
    await context.close();
  });
}
