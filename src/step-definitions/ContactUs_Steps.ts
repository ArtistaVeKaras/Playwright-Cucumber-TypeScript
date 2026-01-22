import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";
import { faker } from '@faker-js/faker';
import { CucumberWorld } from "./world/CucumberWorld";
import logger from "../logger/logger";
import dotenv from "dotenv";

dotenv.config({ path: "./env/.env.local" });

const contactUsUrl = 'https://www.webdriveruniversity.com/Contact-Us/contactus.html';

Given('I navigate to the contactUs homepage', async function (this: CucumberWorld) {
    try {
        // Log the URLs from the environment variables for debugging purposes
        // The url variables are being read from the env/.env.local file
        logger.info(process.env.CONTACT_US_URL);
        logger.info(process.env.LOGIN_URL1);

        await pageFixture.page.goto(process.env.CONTACT_US_URL || contactUsUrl);
        logger.info(`Accessing the contact us URL: ${process.env.CONTACT_US_URL || contactUsUrl}`);

        // Store the base URL in the Cucumber World instance'
        this.setBaseUrl(contactUsUrl);
        logger.info(`Getting the Base URL from the setter method: ${this.getBaseUrl()}`);
    }
    catch (error) {
        logger.error('Error navigating to contact us page:', error);
    }
});

// This scenario uses hardcoded valid contact us form data
When('I type a valid first name', async () => {
    await pageFixture.page.getByPlaceholder('First Name').fill('John');
});

// This scenario uses hardcoded valid contact us form data
When('I type a valid last name', async () => {
    const lastNameField = await pageFixture.page.getByPlaceholder('Last Name');
    await lastNameField.fill('Doe');
});

// This scenario uses hardcoded valid contact us form data
When('I type a valid email address', async () => {
    const emailField = await pageFixture.page.getByPlaceholder('Email Address');
    await emailField.fill('d6E0r@example.com');
});

// This scenario uses hardcoded valid contact us form data
When('I type a comment into the comment text area', async () => {
    const commentField = await pageFixture.page.getByPlaceholder('Comments');
    await commentField.fill('This is a test comment for the contact us form.');
});

When('I click on the submit button', async () => {
    const submitButton = await pageFixture.page.getByRole('button', { name: 'SUBMIT' });
    await submitButton.click();
});

Then('I should be presented with a successful contact us submission message', async () => {
    await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 5000 });

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

When('I type a Specific text {string} and a number {int} within the comment input field', async (comment: string, number: number) => {
    // Write code here that turns the phrase above into the comment text area {string} with a specific number of {string}', async(comment: string, number: number) => {
    await pageFixture.page.getByPlaceholder('Comments').fill(`${comment} ${number}`);
});

// This scenario uses parameterized credentials with faker and cucumberWorld
When('I type a random first name', async function (this: CucumberWorld) {
    const randomFirstName = faker.person.firstName();
    this.setFirstName(randomFirstName);
    await pageFixture.page.getByPlaceholder('First Name').fill(randomFirstName);
});

When('I type a random last name', async function (this: CucumberWorld) {
    const randomLastName = faker.person.lastName();
    this.setLastName(randomLastName);
    await pageFixture.page.getByPlaceholder('Last Name').fill(randomLastName);
});

When('I type a random email address', async function (this: CucumberWorld) {
    const randomEmail = faker.internet.email();
    this.setEmail(randomEmail);
    await pageFixture.page.getByPlaceholder('Email Address').fill(randomEmail);
})

When('I type a random comment into the comment text area', async function (this: CucumberWorld) {
    const randomComment = faker.lorem.sentence();
    await pageFixture.page.getByPlaceholder('Comments').fill(`Comment: ${randomComment}! 
        \n Please contact me on:\n  ${this.getFirstName()} \n ${this.getLastName()} \n ${this.getEmail()}`);
});

When('I type a firstName {word} and a lastName {word}', async (firstName: string, lastName: string) => {
    await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});

When('I type a email address {string} and a comment {string}', async (emailAddress: string, comment: string) => {
    await pageFixture.page.getByPlaceholder('Email Address').fill(emailAddress);
    await pageFixture.page.getByPlaceholder('Comments').fill(comment);
});

Then('I should be presented with a header text {string}', async (text: string) => {
    await pageFixture.page.waitForSelector('//h1 | //body', { state: 'visible' });

    // get all elements that match the locator
    const elements = await pageFixture.page.locator('//h1 | //body').elementHandles();
    let foundElementText = '';

    // loop through each element and get its text content
    for (let element of elements) {
        // get the inner text of the element
        let elementText = await element.innerText();

        if (elementText.includes(text)) {
            foundElementText = elementText;
            break;
        }
    }
    // assert that the text content of the element includes the expected text
    expect(foundElementText).toContain(text);

});