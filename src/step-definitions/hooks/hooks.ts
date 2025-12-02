import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { Browser, chromium } from "playwright";
import { pageFixture } from "./browserContextFixture";

let browser: Browser;

// BeforeAll hook to set up resources before any tests run
BeforeAll(async function () {
    console.log("Setting up resources before all tests");
    // You can add code here to initialize shared resources
});

// AfterAll hook to clean up resources after all tests have run
AfterAll(async function () {
    console.log("Cleaning up resources after all tests");
    // You can add code here to clean up shared resources
});

// This hook runs before each scenario
Before(async function () {
    console.log("Launching browser before each scenario");
    browser = await chromium.launch({ headless: false });
    pageFixture.context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    pageFixture.page = await pageFixture.context.newPage();
});

// After hook to close the browser after each scenario
After(async function () {
    console.log("Closing browser after all scenarios");
    // await pageFixture.context.close();
    // await browser.close();
});
