import {test, expect} from '@playwright/test';
import { injectAxe, getViolations } from 'axe-playwright';

test('This is an accessibility test - with axe tool ', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await injectAxe(page);
  const  results = await getViolations(page);
  expect(results).toHaveLength(2);
  }
);

