import { BasePage } from "./base/BasePage";

/**
 * Represents the home page in a web application.
 * Extends the BasePage class.
 * 
 * Each method uses the waitAndClickByRole method from the BasePage
 * class to wait for the element to be visible and then clicks on it
 */
export class HomePage extends BasePage {
  /**
   * Clicks on the "Contact Us Form" link on the home page.
   * @returns {Promise<void>} A Promise that resolves when the click operation is complete.
   */
  public async clickContactUsForm(): Promise<void> {
    await this.waitAndClickByRole("link", "CONTACT Us Form");
  }

  /**
   * Clicks on the "Login Portal" link on the home page.
   * @returns {Promise<void>} A Promise that resolves when the click operation is complete.
   */
  public async clickLoginPortal(): Promise<void> {
    await this.waitAndClickByRole("link", "LOGIN PORTAL");
  }

  /**
   * Clicks on the "Button Clicks" link on the home page.
   * @returns {Promise<void>} A Promise that resolves when the click operation is complete.
   */
  public async clickOnButtonClicks(): Promise<void> {
    await this.waitAndClickByRole("link", "BUTTON CLICKS");
  }

  /**
   * Clicks on the "To Do List" link on the home page.
   * @returns {Promise<void>} A Promise that resolves when the click operation is complete.
   */
  public async clickTheToDoListButton(): Promise<void> {
    await this.waitAndClickByRole("link", "TO DO LIST");
  }
}
