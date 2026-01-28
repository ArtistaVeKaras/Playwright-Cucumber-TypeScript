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

    // Wait and click by role and name
    public async waitAndClick(role: string, name: string): Promise<void> {
        const element = this.page.getByRole(role as any, { name });
        await element.click();
    }

    // Wait and click by locator
    public async waitAndClickByLocator(locator: Locator): Promise<void> {
        await locator.click();
    }

    // Wait for element to be visible
    public async waitForVisibility(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
    }
}