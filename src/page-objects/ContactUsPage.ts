import { BasePage } from './base/BasePage';

export class ContactUsPage extends BasePage {


    public async fillFirstName(firstName: string): Promise<void> {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }
    public async fillLastName(lastName: string): Promise<void> {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    public async fillEmail(email: string): Promise<void> {
        await this.page.getByPlaceholder('Email').fill(email);
    }
    public async fillMessage(message: string): Promise<void> {
        await this.page.getByPlaceholder('Message').fill(message);
    }

    public async clickSubmitForm(): Promise<void> {
        await this.waitAndClickByRole('button', 'SUBMIT');
    }
}