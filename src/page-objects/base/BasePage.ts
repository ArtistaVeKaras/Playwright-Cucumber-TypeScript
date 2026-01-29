import { Page, Locator} from '@playwright/test';
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture';

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
    public async waitAndClickForSelector(locator: Locator): Promise<void> {
        await locator.isVisible();
        await locator.click();
    }

    // Wait for selector to be visible and then click
    public async waitAndClickBySelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }

}