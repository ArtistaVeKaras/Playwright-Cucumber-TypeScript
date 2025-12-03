import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";
import { faker } from '@faker-js/faker';


When('I type a valid first name', async () => {
    await pageFixture.page.getByPlaceholder('First Name').fill('John');
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


Then('I should be presented with a unsuccessful contact us submission message', async () => {
    await pageFixture.page.locator('//body');

    // Get the text content of the success message
    const messageText = await pageFixture.page.textContent('//body');

    // Assert that the success message contains the expected text
    await expect(messageText).toMatch(/Error: all fields are required|Invalid email address/);
});

When('I type a Specific first name {string}', async (firstName: string) => {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
});

When('I type a Specific last name {string}', async (lastName: string) => {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});

When('I type a Specific email address {string}', async (emailAddress: string) => {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByPlaceholder('Email Address').fill(emailAddress);
});

When('I type a Specific text {string} and a number {int} within the comment input field', async (comment: string, number: number) => {// Write code here that turns the phrase above into the comment text area {string} with a specific number of {string}', async(comment: string, number: number) => {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByPlaceholder('Comments').fill(`${comment} ${number}`);
});

When('I type a random first name', async   () => {
    const randwomFirstName = faker.person.firstName();
    await pageFixture.page.getByPlaceholder('First Name').fill(randwomFirstName);
});

When('I type a randow last name', async () =>  {
    const randomLastName = faker.person.lastName();
    await pageFixture.page.getByPlaceholder('Last Name').fill(randomLastName);
});

When('I type a random email address', async () => {
    const randomEmail = faker.internet.email();
    await pageFixture.page.getByPlaceholder('Email Address').fill(randomEmail);
});

When('I type a random comment into the comment text area', async () => {
    const randomComment = faker.lorem.sentence();
    await pageFixture.page.getByPlaceholder('Comments').fill(randomComment);
});