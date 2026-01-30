import { Page, Locator } from '@playwright/test';
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture';
import { config as loadEnv } from 'dotenv';

// Load environment variables from .env file
const env = loadEnv({ path: './env/.env' });

// Create a configuration object for easy access to environment variables
const config = {
    browserHeight: parseInt(process.env.BROWSER_HEIGHT || '1080', 10),
    browserWidth: parseInt(process.env.BROWSER_WIDTH || '1920', 10),
};


export class BasePage {
    get page(): Page {
        return pageFixture.page;
    }

    // Promise<void> in TypeScript indicated that this method performs an asynchronous operation and does not return any value
    public async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Wait for role to be visible and then click
    public async waitAndClickByRole(role: string, name: string): Promise<void> {
        const element = this.page.getByRole(role as any, { name });
        await element.click();
    }

    // Wait for locator to be visible and then click
    public async waitAndClickForSLocator(locator: Locator): Promise<void> {
        await locator.isVisible();
        await locator.click();
    }

    // Wait for selector to be visible and then click
    public async waitAndClickBySelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }

    public async switchToNewTab(): Promise<void> {
        
        // waitForEvent returns the new Page directly (safer than indexing)
        const newPage = await this.page.context().waitForEvent('page'); // waitForEvent returns the new Page directly (safer than indexing) const newPage = await pageFixture.context.waitForEvent('page');
        pageFixture.page = newPage; // now definitely a Page
        await pageFixture.page.bringToFront();
        await pageFixture.page.setViewportSize({width: config.browserWidth, height: config.browserHeight});
    }
}