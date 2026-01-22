const { firefox, chromium } = require('playwright');  // Or 'chromium' or 'webkit'.
import { test, expect } from '@playwright/test';

test('has title', async () => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    await context.close();
    await browser.close();
});

test('simulate two users logging in at the same time', async () => {
    const browser = await chromium.launch();

    const user1 = await browser.newContext();
    const user2 = await browser.newContext();

    const page1 = await user1.newPage();
    const page2 = await user2.newPage();

    await page1.goto("https://example.com");
    await page2.goto("https://example.com");

    await user1.close();
    await user2.close();
    await browser.close();
});

test("parallel test A", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.ebay.com/");
});

test("parallel test B", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.apple.com/");
});

test.describe('group testing', {
  tag: '@smoke',
}, () => {
  test('test report header', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');});
});
