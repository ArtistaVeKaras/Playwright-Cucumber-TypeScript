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
        await this.page.getByPlaceholder('Comments').fill(message);
    }

    public async clickSubmitForm(): Promise<void> {
        await this.waitAndClickByRole('button', 'SUBMIT');
    }

    public async getSuccessMessage(): Promise<string> {
        await this.page.waitForSelector('#contact_reply h1', { timeout: 6000 });
        return await this.page.innerText('#contact_reply h1'); // Get the text content of the success message
    }

    public async getErrorMessage(): Promise<string> {
        await this.page.waitForSelector('//body', { timeout: 6000 });
        const bodyElement = await this.page.locator("body");
        const bodyText = await bodyElement.innerText();
        return bodyText;
    }

    public async getHeaderTExt(message: string): Promise<string> {
          await this.page.waitForSelector('//h1 | //body', { state: 'visible' });

    // get all elements that match the locator
    const elements = await this.page.locator('//h1 | //body').elementHandles();
    let foundElementText = '';

    // loop through each element and get its text content
    for (let element of elements) {
        // get the inner text of the element
        let elementText = await element.innerText();

        if (elementText.includes(message)) {
            foundElementText = elementText;
            break;
        }
    }
    return foundElementText;
    }
}