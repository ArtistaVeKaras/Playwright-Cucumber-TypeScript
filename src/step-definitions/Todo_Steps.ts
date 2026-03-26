import { When, Then } from '@cucumber/cucumber';
import { CucumberWorld } from './world/CucumberWorld';
import logger from '../logger/logger';
import dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });

When('I click on the TO DO LIST button', async function (this: CucumberWorld) {
    logger.info('Clicking on the TO DO LIST button');
    await this.homePage.clickTheToDoListButton();
});

When('I type a new TODO item into the input field', async function (this: CucumberWorld) {
    logger.info('Typing a new TODO item into the input field');
});

When('I press the Enter key', async function (this: CucumberWorld) {
    logger.info('Pressing the Enter key to add the TODO item');
});

Then('I should see the new TODO item added to the list of items', async function (this: CucumberWorld) {
    logger.info('Checking if the new TODO item is added to the list');
});