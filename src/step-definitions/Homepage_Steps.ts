import { Given, When, Then } from '@cucumber/cucumber';
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
    await page.pause();
    await page.getByText("CONTACT US").click(); // Clicks the element with id contact-us
});


When('I type a valid first name', async () => {
    // Write code here that turns the phrase above into concrete actions  
    // return 'pending';
        console.log("Executing: Step 1")

});


When('I type a valid last name', async () => {
    // Write code here that turns the phrase above into concrete actions  
    // return 'pending';
        console.log("Executing: Step 1")

});

When('I type a valid email address', async () => {
    // Write code here that turns the phrase above into concrete actions  
    // return 'pending';
        console.log("Executing: Step 1")

});

When('I type a comment into the comment text area', async () => {
    // Write code here that turns the phrase above into concrete actions  
    // return 'pending';
        console.log("Executing: Step 1")

});

When('I click on the submit button', async () => {
    // Write code here that turns the phrase above into concrete actions  
    // return 'pending';
        console.log("Executing: Step 1")

});

Then('I should be presented with a successful contact us submission message', async () => {
    // Write code here that turns the phrase above into concrete actions  
    // return 'pending';
        console.log("Executing: Step 1")

});
