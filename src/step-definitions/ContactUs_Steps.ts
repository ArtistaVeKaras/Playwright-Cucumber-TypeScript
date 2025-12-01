import { Given, When } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright"

let page: Page; // Represents a single webpage within a context

When('I type a valid first name', async () => {
    // await page.getByPlaceholder('First Name').fill('John');
});