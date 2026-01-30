import { BasePage } from './base/BasePage';

export class ContactUsPage extends BasePage {

    public async fillContactForm(firstName: string, lastName: string, email: string, message: string): Promise<void> {
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('Email').fill(email);
        await this.page.getByPlaceholder('Message').fill(message);
    }

    public async submitForm(): Promise<void> {
        await this.waitAndClickByRole('button', 'SUBMIT');
    }
}