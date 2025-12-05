import { When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

let alertMessage: string;

// This scenario uses hardcoded valid credentials
When('I type a valid username', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Username' }).fill('webdriver');
});

When('I type a valid password', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Password' }).fill('webdriver123');
});

When('I click on the login button', async () => {
    // look out for alert dialog and capture the message
    await pageFixture.page.on('dialog', async (alert) => {
        alertMessage = alert.message();
        await alert.accept();
    });
    const loginButton = pageFixture.page.locator('#login-button');
    await loginButton.hover();
    await loginButton.click({force: true});
});

Then('I should be presented with a successful login message', async () => {
    expect(alertMessage).toBe('validation succeeded');
});

// This scenario uses parameterized credentials
When('I type a username {string}', async (firstName: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Username' }).fill(firstName);
});

When('I type a password {string}', async (password: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Password' }).fill(password);
});

Then('I should be presented with a login message {string}', async (messag: string) => {
    expect(alertMessage).toBe(messag);
});
