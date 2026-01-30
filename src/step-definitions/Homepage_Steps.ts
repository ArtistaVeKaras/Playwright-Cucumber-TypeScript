import { Given, When} from '@cucumber/cucumber';
import dotenv from 'dotenv';
import logger from '../logger/logger';
import { CucumberWorld } from '../step-definitions/world/CucumberWorld';

// Configure dotenv to load multiple env files
dotenv.config({ path : ['./env/.env', './env/.env.local'] });

const homepage_url = 'https://www.webdriveruniversity.com/';

Given('I navigate to webdriver university homepage', async function (this: CucumberWorld) {
    try {
    // Log the URLs from the environment variables for debugging purposes
    logger.info('Homepage URL: ' + process.env.HOMEPAGE_URL);

    // Navigate to the homepage URL
    await this.basePage.navigateTo(process.env.HOMEPAGE_URL || homepage_url);
    logger.info(`Accessing the homepage URL: ${process.env.HOMEPAGE_URL || homepage_url}`);

    // Store the base URL in the Cucumber World instance'
    this.setBaseUrl(homepage_url);
    } catch (error) {
        logger.error('Error navigating to homepage:', error);
    }
});

When('I click on the Contact Us button', async function (this: CucumberWorld) {
    this.homePage?.clickContactUsForm();
    logger.info('Clicked on the Contact Us button');});

When('I click on the Login Portal button', async function (this: CucumberWorld) {
    this.homePage?.clickLoginPortal();
    logger.info('Clicked on the Login Portal button');
});



