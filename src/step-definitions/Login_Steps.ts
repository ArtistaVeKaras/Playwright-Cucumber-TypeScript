import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CucumberWorld } from '../step-definitions/world/CucumberWorld';
import logger from '../logger/logger';
import dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });

let alertMessage: string;

const login_url = 'https://www.webdriveruniversity.com/Login-Portal/index.html?'

Given('I navigate to webdriver university login page', async function (this: CucumberWorld) {
    try {
        // Log the URLs from the environment variables for debugging purposes
        logger.info('Login URL:' + process.env.LOGIN_URL);

        // Navigates to the login page URL
        await this.loginPage.navigateToLoginPage(process.env.LOGIN_URL || login_url);
        logger.info(`Accessing the Login URL: ${process.env.LOGIN_URL || login_url}`);
        this.setBaseUrl(login_url);

        // Log the base URL from the Cucumber World instance
        logger.info(`Getting the Base URL from the setter method: ${this.getBaseUrl()}`);
    } catch (error) {
        logger.error('Error navigating to login page:', error);
    }
});

// This scenario uses hardcoded valid credentials
When('I type a valid username', async function (this: CucumberWorld,) {
    await this.loginPage.fillUsername('webdriver');
});

When('I type a valid password', async function (this: CucumberWorld) {
    await this.loginPage.fillPassword('webdriver123');
});

When('I click on the login button', async function (this: CucumberWorld) {
    // look out for alert dialog and capture the message
    this.loginPage.page.on('dialog', async (alert) => {
        alertMessage = alert.message();
        await alert.accept();
    });

    await this.loginPage.clickLoginButton();
});

Then('I should be presented with a successful login message', async function (this: CucumberWorld) {
    expect(alertMessage).toBe('validation succeeded');
});

// This scenario uses parameterized credentials
When('I type a username {string}', async function (this: CucumberWorld, username: string) {
    await this.loginPage.fillUsername(username);
});

When('I type a password {string}', async function (this: CucumberWorld, password: string) {
    await this.loginPage.fillPassword(password);
});

Then('I should be presented with a login message {string}', async function (this: CucumberWorld, message: string) {
    expect(alertMessage).toBe(message);
});

