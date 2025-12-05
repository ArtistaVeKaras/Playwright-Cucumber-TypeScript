import { When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';    

When('I switch to the broswer Tab', async () => {

    // waitForEvent returns the new Page directly (safer than indexing)
    const newPage = await pageFixture.context.waitForEvent('page');
    pageFixture.page = newPage; // now definitely a Page

    await pageFixture.page.bringToFront();
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });

});