import { BasePage } from "./base/BasePage";

/**
 * Represents the TODO page in a web application.
 * Extends the BasePage class.
 */
export class TodoPage extends BasePage {

    public async typeNewTodoItem(todoItem: string): Promise<void> {
        return this.page.getByPlaceholder('Add new todo').fill(todoItem);
    }

    public async pressTheEnterKey(): Promise<void> {
        await this.page.getByPlaceholder('Add new todo').press('Enter');
    }

    public async getTodoItemCount(): Promise<number> {
        return await this.page.locator('li:visible').count();
    }

    public async getLastItemAddedText(): Promise<string> {
        const lastItem = this.page.locator('li:visible').last();
        const text = await lastItem.textContent();
        return text?.trim() ?? '';
    }

    public async getTodoItemTextByIndex(index: number): Promise<string> {
        const item = this.page.locator('.todo-list li').nth(index);
        const text = await item.textContent();
        return text?.trim() ?? '';
    }

    public async getAllTodoTexts(): Promise<string[]> {
        return (await this.page.locator('li:visible').allTextContents()).map(item => item.trim());
    }
}
