import { BasePage } from "./base/BasePage";

/**
 * Represents the TODO page in a web application.
 * Extends the BasePage class.
 */
export class TodoPage extends BasePage {
    
    public async fillTodoItem(todoItem: string): Promise<void> {
        return this.page.getByPlaceholder('Add new todo').fill(todoItem);
    }

    public async clickTheEnterButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Add' }).click();
    }

    public async getLastTodoItemText(): Promise<string> {
        const todoItems = await this.page.locator('.todo-list li').allTextContents();
        return todoItems[todoItems.length - 1] ?? '';
    }
}