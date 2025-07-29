const { test, expect } = require('@playwright/test');

// playwright-todo-test/todo-test.test.js
// Uses Playwright Test runner


test('can add and remove todo items', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Add "go shopping"
  await page.getByRole('textbox', { name: 'Add item' }).click();
  await page.getByRole('textbox', { name: 'Add item' }).fill('go shopping');
  await page.getByRole('button', { name: 'Add new item to list' }).click();

  // Add "make dinner"
  await page.getByRole('textbox', { name: 'Add item' }).dblclick();
  await page.getByRole('textbox', { name: 'Add item' }).fill('make dinner');
  await page.getByRole('button', { name: 'Add new item to list' }).click();

  // Add "feed fish"
  await page.getByRole('textbox', { name: 'Add item' }).click();
  await page.getByRole('textbox', { name: 'Add item' }).fill('feed fish');
  await page.getByRole('button', { name: 'Add new item to list' }).click();

  // Delete "feed fish"
  await page.getByRole('listitem').filter({ hasText: 'feed fishX' }).getByRole('button').click();
  await expect(page.getByTestId('listItems')).toHaveCount(2);

  // Delete "make dinner"
  await page.getByRole('listitem').filter({ hasText: 'make dinnerX' }).getByRole('button').click();
  await expect(page.getByTestId('listItems')).toHaveCount(1);
});