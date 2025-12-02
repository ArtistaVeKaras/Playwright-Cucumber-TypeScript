import { Given, When } from "@cucumber/cucumber";
import { pageFixture} from "./hooks/browserContextFixture";


When('I type a valid first name', async () => {
    await pageFixture.page.getByPlaceholder('First Name').fill('John');
});