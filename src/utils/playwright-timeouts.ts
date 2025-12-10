import { Page } from '@playwright/test';

export function setGlobalTimeouts(page: Page) {
    // Set Global 'navigationTimeout' and 'timeout' for the page
    page.setDefaultNavigationTimeout(50000); // 50 seconds for navigation timeout

    // Set default timeout for all actions (click, fill, etc.)
    page.setDefaultTimeout(30000); // 30 seconds for other actions
}