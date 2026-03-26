import { BasePage } from "./base/BasePage";

/**
 * Represents the TODO page in a web application.
 * Extends the BasePage class.
 */
export class TodoPage extends BasePage {

    /**
     * Types a new TODO item into the input field.
     * @param todoItem The text of the TODO item to be added.
     * @returns {Promise<void>} A Promise that resolves when the text has been entered.
     */
    public async typeNewTodoItem(todoItem: string): Promise<void> {
        return this.page.getByPlaceholder('Add new todo').fill(todoItem);
    }

    /**
     * Presses the Enter key to add a new TODO item.
     * @returns {Promise<void>} A Promise that resolves when the Enter key has been pressed.
     */
    public async pressTheEnterKey(): Promise<void> {
        await this.page.getByPlaceholder('Add new todo').press('Enter');
    }

    /**
     * Gets the count of TODO items currently visible in the list. 
     * @returns {Promise<number>} A Promise that resolves to the count of TODO items.
     */
    public async getTodoItemCount(): Promise<number> {
        return await this.page.locator('li:visible').count();
    }

    /**
     * Gets the text of the last added TODO item.
     * @returns {Promise<string>} A Promise that resolves to the text of the last added TODO item.
     */
    public async getLastItemAddedText(): Promise<string> {
        const lastItem = this.page.locator('li:visible').last();
        const text = await lastItem.textContent();
        return text?.trim() ?? '';
    }

    /**
     * Gets the text of a TODO item by its index.
     * @param index The index of the TODO item.
     * @returns {Promise<string>} A Promise that resolves to the text of the TODO item.
     */

    public async getTodoItemTextByIndex(index: number): Promise<string> {
        const item = this.page.locator('.todo-list li').nth(index);
        const text = await item.textContent();
        return text?.trim() ?? '';
    }

    /**
     * Gets the text of all TODO items currently visible in the list.
     * @returns {Promise<string[]>} A Promise that resolves to an array of strings, each representing a TODO item.
     */
    public async getAllTodoTexts(): Promise<string[]> {
        return (await this.page.locator('li:visible').allTextContents()).map(item => item.trim());
    }
}
