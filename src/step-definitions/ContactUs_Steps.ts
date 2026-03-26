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
    await this.contactUsPage.clickSubmitButton();
});

Then('I should be presented with a successful contact us submission message', async function (this: CucumberWorld) {
    expect(await this.contactUsPage.getSuccessMessage()).toBe('Thank You for your Message!');

    /*
    *  If you need to reuse the value multiple times use this approach instead
    *  If you want to log/debug the actual value before asserting
    *  If the assertion is complex (multiple checks on same value)
    */
    const successMessage = await this.contactUsPage.getSuccessMessage();
    logger.info(`Actual message: ${successMessage}`);
    expect(successMessage).toBe('Thank You for your Message!');
    expect(successMessage).not.toContain('Error');
});

// TODO: This Stepd defintion does exist in the feature file. Maibe we could add a scenario.
Then('I should be presented with a unsuccessful contact us submission message', async function (this: CucumberWorld) {
    const errorMessage = await this.contactUsPage.getErrorMessage();
    expect(errorMessage).toContain(/Error: all fields are required|Invalid email address/);
});

// This scenario uses parameterized data from the cucumber feature file (Using Specific Data scenario)
When('I type a Specific first name {string}', async function (firstName: string) {
    await this.contactUsPage.fillFirstName(firstName);
});

When('I type a Specific last name {string}', async function (lastName: string) {
    await this.contactUsPage.fillLastName(lastName);
});

When('I type a Specific email address {string}', async function (emailAddress: string) {
    await this.contactUsPage.fillEmail(emailAddress);
});

When('I type a Specific text {string} and a number {int} within the comment input field', async function (comment: string, number: number) {
    await this.contactUsPage.fillMessage(`${comment} ${number}`);
});

/*
* This scenario uses parameterized credentials with faker dependencies 
* and the cucumberWorld to store generated data
*/
When('I type a random first name', async function (this: CucumberWorld) {
    const randomFirstName = faker.person.firstName();
    this.setFirstName(randomFirstName);
    await this.contactUsPage.fillFirstName(randomFirstName);
});

/*
* This scenario uses parameterized credentials with faker dependencies 
* and the cucumberWorld to store generated data
*/
When('I type a random last name', async function (this: CucumberWorld) {
    const randomLastName = faker.person.lastName();
    this.setLastName(randomLastName);
    await this.contactUsPage.fillLastName(randomLastName);
});

/*
* This scenario uses parameterized credentials with faker dependencies 
* and the cucumberWorld to store generated data
*/
When('I type a random email address', async function (this: CucumberWorld) {
    const randomEmail = faker.internet.email();
    this.setEmail(randomEmail);
    await this.contactUsPage.fillEmail(randomEmail);
})

When('I type a random comment into the comment text area', async function (this: CucumberWorld) {
    const randomComment = faker.lorem.sentence();
    await this.contactUsPage.fillMessage(`Comment: ${randomComment}! 
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
    expect(await this.contactUsPage.getHeaderTExt(text)).toContain(text);
});