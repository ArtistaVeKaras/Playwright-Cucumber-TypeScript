import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

const url = 'https://www.webdriveruniversity.com/';

Given('I navigate to webdriveruniversity hompepage', async () => {
    // Navigates to the specified URL
    await pageFixture.page.goto(url);
});

When('I click on the Contact Us button', async () => {
    // await page.pause();
    const contactUsButton = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUsButton.click();
});

When('I switch to the broswer Tab', async () => {

    // waitForEvent returns the new Page directly (safer than indexing)
    const newPage = await pageFixture.context.waitForEvent('page');
    pageFixture.page = newPage; // now definitely a Page

    await pageFixture.page.bringToFront();
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });

});

When('I type a valid last name', async () => {
    const lastNameField = await pageFixture.page.getByPlaceholder('Last Name');
    await lastNameField.fill('Doe');
});

When('I type a valid email address', async () => {
    const emailField = await pageFixture.page.getByPlaceholder('Email Address');
    await emailField.fill('d6E0r@example.com');
});

When('I type a comment into the comment text area', async () => {
    const commentField = await pageFixture.page.getByPlaceholder('Comments');
    await commentField.fill('This is a test comment for the contact us form.');
});

When('I click on the submit button', async () => {
    const submitButton = await pageFixture.page.getByRole('button', { name: 'SUBMIT' });
    await submitButton.click();
});

Then('I should be presented with a successful contact us submission message', async () => {
    const successMessage = await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 5000 });

    // Get the text content of the success message
    const messageText = await pageFixture.page.innerText('#contact_reply h1');

    // Assert that the success message contains the expected text
    expect(messageText).toBe('Thank You for your Message!');
});
