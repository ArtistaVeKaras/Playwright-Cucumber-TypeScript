import { Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({ path : './env/.env' });

export function setGlobalTimeouts(page: Page) {

    const navigationTimeout = parseInt(process.env.UI_AUTOMATION_NAVIGATION_TIMEOUT || '50000'); // Default to 50 seconds
    const commandTimeout = parseInt(process.env.UI_AUTOMATION_COMMAND_TIMEOUT || '30000'); // Default to 30 seconds

    // Set Global 'navigationTimeout' and 'timeout' for the page
    page.setDefaultNavigationTimeout(navigationTimeout); // 50 seconds for navigation timeout

    // Set default timeout for all actions (click, fill, etc.)
    page.setDefaultTimeout(commandTimeout); // 30 seconds for other actions
}