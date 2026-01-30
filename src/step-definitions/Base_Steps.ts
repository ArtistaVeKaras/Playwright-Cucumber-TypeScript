import { When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';   
import { CucumberWorld } from './world/CucumberWorld';

When('I switch to the browser Tab', async function(this: CucumberWorld) {
    await this.basePage.switchToNewTab();

});

When('I wait for {int} seconds', async (seconds: number) => {
    await pageFixture.page.waitForTimeout(seconds * 1000);
});