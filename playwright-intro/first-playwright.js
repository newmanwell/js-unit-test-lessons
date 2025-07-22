const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.bbc.com/');
  await page.locator('iframe[name="offer_af19ee0ad606b3d907cf-0"]').contentFrame().getByRole('button', { name: '×' }).click();
  await page.getByTestId('level1-navigation-container').getByRole('link', { name: 'News' }).click();
  await page.getByRole('link', { name: 'UK', exact: true }).click();
  await page.getByRole('link', { name: 'UK Politics' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();