import { When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';   

// Load environment variables from .env file
import { config as loadEnv } from 'dotenv';
const env = loadEnv({ path: './env/.env' });

// Create a configuration object for easy access to environment variables
const config = {
    browserHeight: parseInt(process.env.BROWSER_HEIGHT || '1080', 10),
    browserWidth: parseInt(process.env.BROWSER_WIDTH || '1920', 10),
};

When('I switch to the browser Tab', async () => {

    // waitForEvent returns the new Page directly (safer than indexing)
    const newPage = await pageFixture.context.waitForEvent('page');
    pageFixture.page = newPage; // now definitely a Page

    await pageFixture.page.bringToFront();
    await pageFixture.page.setViewportSize({width: config.browserWidth, height: config.browserHeight});

});

When('I wait for {int} seconds', async (seconds: number) => {
    await pageFixture.page.waitForTimeout(seconds * 1000);
});