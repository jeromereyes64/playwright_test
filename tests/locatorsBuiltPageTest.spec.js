const {test, expect} = require('@playwright/test');

test ('Test Built In Locators',  async ({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //getByAltText Locators
    const logoCompanyBranding = await page.getByAltText('company-branding');
    await expect(logoCompanyBranding).toBeVisible();

    //getByPlaceHolder Locators
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    //getByRole Locators
    await page.getByRole('button', { type: 'submit' }).click();

    //getByText Locators
    await expect(await page.getByText('PIM')).toBeVisible();

});