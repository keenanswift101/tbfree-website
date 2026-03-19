import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:4322/');
await page.waitForTimeout(2000);
await page.screenshot({ path: 'screenshot-home.png', fullPage: true });
await browser.close();
console.log('Screenshot saved: screenshot-home.png');
