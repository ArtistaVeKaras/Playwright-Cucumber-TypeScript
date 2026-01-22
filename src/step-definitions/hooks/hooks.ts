import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserType, chromium, firefox, webkit } from "playwright";
import { pageFixture } from "./browserContextFixture";
import { setGlobalTimeouts } from "../../utils/playwright-timeouts";
import logger from '../../logger/logger';

// Load environment variables from .env file
import { config as loadEnv } from 'dotenv';
const env = loadEnv({ path: './env/.env' });

// Create a configuration object for easy access to environment variables
const config = {
    browser: env.parsed?.UI_AUTOMATION_BROWSER || 'chromium',
    headless: env.parsed?.UI_AUTOMATION_HEADLESS === 'true',
    browserHeight: parseInt(process.env.BROWSER_HEIGHT || '1080', 10),
    browserWidth: parseInt(process.env.BROWSER_WIDTH || '1920', 10),
};

// Create a dictionary mapping browser names to Playwright browser types
const browsers: { [key: string]: BrowserType } = {
    'chromium': chromium,
    'firefox:': firefox,
    'webkit': webkit,
};


let browserInstance: Browser | null = null;

async function initializeBrowserContext(selectedBrowser: string): Promise<Browser> {
    const launchBrowser = browsers[selectedBrowser];
    if (!launchBrowser) {
        throw new Error(`Unsupported browser: ${selectedBrowser}`);
    }
    return await launchBrowser.launch({ headless: config.headless });
}

async function initializePage(): Promise<void> {
    if (!browserInstance) {
        throw new Error("Browser instance is null. Cannot create page.");
    }
    pageFixture.context = await browserInstance.newContext({
        ignoreHTTPSErrors: true,
    });
    pageFixture.page = await pageFixture.context.newPage();
    await setGlobalTimeouts(pageFixture.page); // This line sets the global timeouts configured in the playwright-timeouts.ts
    await pageFixture.page.setViewportSize({
        width: config.browserWidth,
        height: config.browserHeight,
    });
}

// BeforeAll hook to set up resources before any tests run
BeforeAll(async function () {
    logger.info("Setting up resources before all tests");
    // You can add code here to initialize shared resources
});

// AfterAll hook to clean up resources after all tests have run
AfterAll(async function () {
    logger.info("Cleaning up resources after all tests");
    // You can add code here to clean up shared resources
});

// This hook runs before each scenario
Before(async function () {
    try {
        logger.info("Launching browser before each scenario");
        browserInstance = await initializeBrowserContext(config.browser);
        await initializePage();
    } catch (error) {
        logger.error("Error during browser initialization:", error);
        throw error; // Rethrow to fail the scenario if initialization fails
    }

});

// After hook to close the browser after each scenario
// For failed scenarios, capture a screenshot and attach it to the report folder
After(async function ({ pickle, result }) {
    if (result?.status === Status.FAILED) {
        if (pageFixture.page) {
            const screenshotPath = `./reports/screenshots/${pickle.name}-${Date.now()}.png`;
            const image = await pageFixture.page.screenshot({
                path: screenshotPath,
                type: 'png',
            });
            this.attach(image, 'image/png');
        } else {
            logger.error("Page is not available to take screenshot");
        }
    }
    if (browserInstance) {
        logger.info("Closing browser after each scenario");
        await pageFixture.page?.close();
        await browserInstance.close();
    }
});
