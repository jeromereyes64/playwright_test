const {test, expect} = require('@playwright/test');

test('Test Locators', async ({page}) => {

    await page.goto("https://www.demoblaze.com/");
    
    //Click Login Button
    await page.locator('//a[@id="login2"]').click();

    //Fill User Name
    await page.locator('//input[@id="loginusername"]').fill('Test123');

    //Fill Password
    await page.locator('//input[@id="loginpassword"]').fill('Pass123');

    //Click Login
    await page.locator('//button[contains(text(),"Log in")]').click();
    
    //Set the element in a variable
    const logOutLink = await page.locator('//a[@id="logout2"]');

    //Await for the button to showup
    await page.close();

});