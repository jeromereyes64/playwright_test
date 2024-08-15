const {test, expect} = require('@playwright/test');

test('Access Home Page', async ({page})=> {

    await page.goto('https://www.demoblaze.com/');
    const pageTitle = page.title();
    await expect(page).toHaveTitle('STORE');
    await page.close();

});