import { BasePage } from "./base/BasePage";

/**
 * Represents the login page in a web application.
 * Extends the BasePage class.
 */
export class LoginPage extends BasePage {

    /**
     * Navigates to the login page using the provided URL.
     * @param url The URL of the login page to navigate to.
     * @returns {Promise<void>} A Promise that resolves when the navigation is complete.
     */
    public async navigateToLoginPage(url: string): Promise<void> {
        await this.navigateTo(url);
    }

    /**
     * Fills the username field with the provided value.
     * @param username The username to fill in the field.
     * @return {Promise<void>} A Promise that resolves when the field is filled.
     */
    public async fillUsername(username: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    }

    /**
     * Fills the password field with the provided value.
     * @param password The password to fill in the field.
     * @return {Promise<void>} A Promise that resolves when the field is filled.
     */
    public async fillPassword(password: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    }

    /**
     * Clicks on the login button.
     * @return {Promise<void>} A Promise that resolves when the button is clicked.
     */
    public async clickLoginButton(): Promise<void> {
        const loginButton = this.page.locator('#login-button');
        await loginButton.hover();
        await loginButton.click({ force: true });
    }

    /**
     * Gets the text content of the alert message after clicking the login button.
     * @return {Promise<string>} A Promise that resolves to the text content of the alert message.
     */
    public async getAlertMessage(): Promise<string> {
        let alertMessage: string = '';
        this.page.on('dialog', async (alert) => {
            alertMessage = alert.message();
            await alert.accept();
        });

        return alertMessage;
    }
}
