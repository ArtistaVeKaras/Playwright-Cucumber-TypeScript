import { BasePage } from './base/BasePage';

/**
 * Represents the contact us page in a web application.
 * Extends the BasePage class.
 */
export class ContactUsPage extends BasePage {

    /**
     * Fills the first name field with the provided value.
     * @param firstName The first name to fill in the field.
     * @returns {Promise<void>} A Promise that resolves when the field is filled.
     */
    public async fillFirstName(firstName: string): Promise<void> {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    /**
     * Fills the last name field with the provided value.
     * @param lastName The last name to fill in the field.
     * @returns {Promise<void>} A Promise that resolves when the field is filled.
     */
    public async fillLastName(lastName: string): Promise<void> {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    /**
     * Fills the email field with the provided value.
     * @param email The email to fill in the field.
     * @returns {Promise<void>} A Promise that resolves when the field is filled.
     */
    public async fillEmail(email: string): Promise<void> {
        await this.page.getByPlaceholder('Email').fill(email);
    }

    /**
     * Fills the message field with the provided value.
     * @param message The message to fill in the field.
     * @returns {Promise<void>} A Promise that resolves when the field is filled.
     */
    public async fillMessage(message: string): Promise<void> {
        await this.page.getByPlaceholder('Comments').fill(message);
    }

    /**
     * Clicks on the submit button.
     * @returns {Promise<void>} A Promise that resolves when the button is clicked.
     */
    public async clickSubmitForm(): Promise<void> {
        await this.waitAndClickByRole('button', 'SUBMIT');
    }

    /**
     * Gets the text content of the success message.
     * @returns {Promise<string>} The text content of the success message.
     */
    public async getSuccessMessage(): Promise<string> {
        await this.page.waitForSelector('#contact_reply h1', { timeout: 6000 });
        return await this.page.innerText('#contact_reply h1'); // Get the text content of the success message
    }

    /**
     * Gets the text content of the error message.
     * @returns {Promise<string>} The text content of the error message.
     */
    public async getErrorMessage(): Promise<string> {
        await this.page.waitForSelector('//body', { timeout: 6000 });
        const bodyElement = await this.page.locator("body");
        const bodyText = await bodyElement.innerText();
        return bodyText;
    }

    /**
     * Gets the text content of the header element that matches the provided message.
     * @param message The message to search for in the header element.
     * @returns {Promise<string>} The text content of the header element that matches the message.
     */
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