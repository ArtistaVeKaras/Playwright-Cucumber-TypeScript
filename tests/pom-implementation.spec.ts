import { PlaywrightDevPage } from "./pom-DevPage.ts";
import { test, expect } from '@playwright/test';

test('implement the Page Object Model - Dev page example', async ({ page }) => {
    // Instance of PlaywrightDevPage
    const playwrightDevPage = new PlaywrightDevPage(page);

    await playwrightDevPage.goto();
    await playwrightDevPage.getStarted();
    // expect(playwrightDevPage.tocList).toContainText([
        // TODO: Replace this locator as there actually 8 of this
        // 'How to install Playwright',
        // `What's installed`,
        // 'How to run the example test',
        // 'How to open the HTML test report'
    // ]);
});

test('should show Page Object Model article', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.pageObjectModel();
    await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});