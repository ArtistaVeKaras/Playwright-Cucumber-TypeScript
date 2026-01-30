import { BasePage } from "./base/BasePage";

export class HomePage extends BasePage {

    public async clickContactUsForm(): Promise<void> {
        await this.waitAndClickByRole('link', 'CONTACT Us Form');
    }

    public async clickLoginPortal(): Promise<void> {
        await this.waitAndClickByRole('link', 'LOGIN PORTAL');
    }

    public async clickOnButtonClicks(): Promise<void> {
        await this.waitAndClickByRole('link', 'BUTTON CLICKS');
    }

    public async clickOnToDoList(): Promise<void> {
        await this.waitAndClickByRole('link', 'TO DO LIST');
    }
}