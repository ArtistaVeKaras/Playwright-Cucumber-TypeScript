import { Given, When} from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';

const url = 'https://www.webdriveruniversity.com/';

Given('I navigate to webdriveruniversity hompepage', async () => {
    // Navigates to the specified URL
    await pageFixture.page.goto(url);
});

When('I click on the Contact Us button', async () => {
    // await page.pause();
    const contactUsButton = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUsButton.click();
});

When('I click on the Login Portal button', async () => {
    const loginButton = await pageFixture.page.getByText('LOGIN PORTAL', { exact: true })
    await loginButton.click();
});

When('I switch to the broswer Tab', async () => {

    // waitForEvent returns the new Page directly (safer than indexing)
    const newPage = await pageFixture.context.waitForEvent('page');
    pageFixture.page = newPage; // now definitely a Page

    await pageFixture.page.bringToFront();
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });

});

