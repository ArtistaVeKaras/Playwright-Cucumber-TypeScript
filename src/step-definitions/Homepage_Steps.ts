import { Given, When, Then } from '@cucumber/cucumber';
import { assert } from 'console';
import { Browser, chromium, firefox, Page } from "playwright"

let browser: Browser; //represents the browser instance (e.g Chrome, Firefox) Opened by Playwright
let context: any;  // Represents a browser context (a seperate browsing session)
let page: Page; // Represents a single webpage within a context

const url = 'https://www.webdriveruniversity.com/';

Given('I navigate to webdriveruniversity hompepage', async () => {
    console.log("Executing: Step 1")
    browser = await chromium.launch({ headless: false }); // Launches a new browser instance
    context = await browser.newContext({ viewport: { width: 1920, height: 1080 } }); // Creates a new browser context
    page = await context.newPage(); // Opens a new page within the context

    // Access the URl
    await page.goto(url); // Navigates to the specified URL
});


When('I click on the Contact Us button', async () => {
    // await page.pause();
   const contactUsButton = await page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUsButton.click();
});

When('I switch to the broswer Tab', async () => {
    page = await context.waitForEvent('page');
    await page.bringToFront();
});

When('I type a valid last name', async () => {
    const lastNameField = await page.getByPlaceholder( 'Last Name' );
    await lastNameField.fill('Doe');
});

When('I type a valid email address', async () => {
    const emailField = await page.getByPlaceholder( 'Email Address' );
    await emailField.fill('d6E0r@example.com');
});

When('I type a comment into the comment text area', async () => {
    const commentField = await page.getByPlaceholder( 'Comments' );
    await commentField.fill('This is a test comment for the contact us form.');
});

When('I click on the submit button', async () => {
    const submitButton = await page.getByRole('button', { name: 'SUBMIT' });
    await submitButton.click();
});

Then('I should be presented with a successful contact us submission message', async () => {
    const successMessage = await page.getByRole('heading', { name: 'Thank You for your Message!' });
});
