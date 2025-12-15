import { Given, When} from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import dotenv from 'dotenv';
import logger from '../logger/logger';

// Configure dotenv to load mutlitple env files
dotenv.config({ path : ['./env/.env', './env/.env.local'] });

const url = 'https://www.webdriveruniversity.com/';

Given('I navigate to webdriveruniversity hompepage', async () => {
    // Navigates to the apple URL
    await pageFixture.page.goto(process.env.HOMEPAGE_URL || url);
    logger.info(`Navigated to URL: ${process.env.HOMEPAGE_URL || url}`);
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



