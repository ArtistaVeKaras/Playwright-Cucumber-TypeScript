import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";
import { faker, th } from '@faker-js/faker';
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
        logger.info(process.env.EBAY_URL);

        await this.contactUsPage.navigateTo(process.env.CONTACT_US_URL || contactUsUrl);
        logger.info(`Accessing the Contact Us URL page: ${process.env.CONTACT_US_URL || contactUsUrl}`);

        // Store the base URL in the Cucumber World instance'
        // Extract the URL for debugging purposes
        this.setBaseUrl(contactUsUrl);
        logger.info(`Getting the Base URL from the setter method: ${this.getBaseUrl()}`);
    }
    catch (error) {
        logger.error('Error navigating to contact us page:', error);
    }
});

// This scenario uses hardcoded valid contact us form data
When('I type a valid first name', async function (this: CucumberWorld) {
    await this.contactUsPage.fillFirstName('Franklin');
});

// This scenario uses hardcoded valid contact us form data
When('I type a valid last name', async function (this: CucumberWorld) {
    await this.contactUsPage.fillLastName('Kurosawa');
});

// This scenario uses hardcoded valid contact us form data
When('I type a valid email address', async function (this: CucumberWorld) {
     await this.contactUsPage.fillEmail('d6E0r@example.com');
});

// This scenario uses hardcoded valid contact us form data
When('I type a comment into the comment text area', async function (this: CucumberWorld) {
    await this.contactUsPage.fillMessage('This is a test comment for the contact us form.');
});

When('I click on the submit button', async function (this: CucumberWorld) {
    await this.contactUsPage.clickSubmitForm();
});

Then('I should be presented with a successful contact us submission message', async function (this: CucumberWorld) {
    expect(await this.contactUsPage.getSuccessMessage()).toBe('Thank You for your Message!');
});


Then('I should be presented with a unsuccessful contact us submission message', async function (this: CucumberWorld) {
    // Assert that the error message contains the expected text
    expect(await this.contactUsPage.getErrorMessage()).toMatch(/Error: all fields are required|Invalid email address/);
});

// This scenario uses parameterized data from the cucumber feature file
When('I type a Specific first name {string}', async (firstName: string) => {
    await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
});

When('I type a Specific last name {string}', async (lastName: string) => {
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});

When('I type a Specific email address {string}', async (emailAddress: string) => {
    await pageFixture.page.getByPlaceholder('Email Address').fill(emailAddress);
});

When('I type a Specific text {string} and a number {int} within the comment input field', async (comment: string, number: number) => {
    await pageFixture.page.getByPlaceholder('Comments').fill(`${comment} ${number}`);
});

// This scenario uses parameterized credentials with faker  dependencies 
// and the cucumberWorld to store generated data
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

When('I type a first Name {word} and a last Name {word}', async (firstName: string, lastName: string) => {
    await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});

When('I type a email address {string} and a comment {string}', async (emailAddress: string, comment: string) => {
    await pageFixture.page.getByPlaceholder('Email Address').fill(emailAddress);
    await pageFixture.page.getByPlaceholder('Comments').fill(comment);
});

Then('I should be presented with a header text {string}', async function (this: CucumberWorld, text: string) {
  
    // assert that the text content of the element includes the expected text
    expect(await this.contactUsPage.getHeaderTExt(text)).toContain(text);

});