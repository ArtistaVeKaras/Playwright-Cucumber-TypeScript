import { Given, When, Then } from '@cucumber/cucumber';
import { CucumberWorld } from './world/CucumberWorld';
import logger from '../logger/logger';
import dotenv from 'dotenv';
import { expect } from '@playwright/test';

dotenv.config({ path: './env/.env' });

Given('I navigate to the TODOLIST homepage', async function (this: CucumberWorld) {
    await this.basePage.navigateTo(process.env.TODOLIST_URL || 'https://www.webdriveruniversity.com/To-Do-List/index.html');
    logger.info(`Accessing the To Do List URL: ${process.env.TODOLIST_URL || 'https://www.webdriveruniversity.com/To-Do-List/index.html'}`);
});

When('I click on the TO DO LIST button', async function (this: CucumberWorld) {
    await this.homePage.clickTheToDoListButton();
    logger.info('Clicking on the TO DO LIST button');
});

When('I type a new TODO item into the input field', async function (this: CucumberWorld) {
    await this.todoPage.typeNewTodoItem('Buy groceries');
    logger.info('Typing a new TODO item into the input field');
});

When('I press the Enter key', async function (this: CucumberWorld) {
    await this.todoPage.pressTheEnterKey();
    logger.info('Pressing the Enter key to add the TODO item');
});

Then('I should see the new TODO item added to the list of items', async function (this: CucumberWorld) {
    const expectedTodo = 'Buy groceries';

    const count = await this.todoPage.getTodoItemCount();
    logger.info(`Todo item count is now: ${count}`);
    expect(count).toBeGreaterThan(0);
    expect(count).toBe(4);

    const lastTodoText = await this.todoPage.getLastItemAddedText();
    logger.info(`The last TODO item added is: ${lastTodoText}`);
    expect(lastTodoText).toBe(expectedTodo);

    const allTodos = await this.todoPage.getAllTodoTexts();
    logger.info(`All TODO items: ${allTodos.join(', ')}`);
    expect(allTodos[count - 1]).toBe(expectedTodo);

});