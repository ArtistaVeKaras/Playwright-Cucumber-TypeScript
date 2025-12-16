import { Given, When} from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import dotenv from 'dotenv';
import logger from '../logger/logger';
import { CucumberWorld } from '../step-definitions/world/CucumberWorld';

// Configure dotenv to load mutlitple env files
dotenv.config({ path : ['./env/.env', './env/.env.local'] });

const url = 'https://www.webdriveruniversity.com/';

Given('I navigate to webdriveruniversity hompepage', async function (this: CucumberWorld) {
    // Navigate to the homepage URL
    try {
    await pageFixture.page.goto(process.env.HOMEPAGE_URL || url);
    logger.info(`Navigated to URL: ${process.env.HOMEPAGE_URL || url}`);
    logger.info(`Accessing the homepage URL:`,`${url}`);
    // Store the base URL in the Cucumber World instance'
    this.setBaseUrl(url);
    } catch (error) {
        logger.error('Error navigating to homepage:', error);
    }
});

When('I click on the Contact Us button', async () => {
    const contactUsButton = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUsButton.click();
    logger
});

When('I click on the Login Portal button', async () => {
    const loginButton = await pageFixture.page.getByText('LOGIN PORTAL', { exact: true })
    await loginButton.click();
    logger.info('Clicked on the Login Portal button');
});



