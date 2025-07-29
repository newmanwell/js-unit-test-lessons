const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
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
  await expect(page.getByText('feed fish')).toHaveCount(0);
  await expect(page.getByText('make dinner')).toHaveCount(1);
  await expect(page.getByText('go shopping')).toHaveCount(1);
  
  // Delete "make dinner"
  await page.getByRole('listitem').filter({ hasText: 'make dinnerX' }).getByRole('button').click();
  await expect(page.getByText('feed fish')).toHaveCount(0);
  await expect(page.getByText('make dinner')).toHaveCount(0);
  await expect(page.getByText('go shopping')).toHaveCount(1);

  // Take screenshot
  await page.screenshot({path: 'final_list_screenshot.png'});
  
  // close out
  await context.close();
  await browser.close();
})();