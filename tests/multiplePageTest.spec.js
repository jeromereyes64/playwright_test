const {test, exect} = require('@playwright/test');


test('Select Multiple locators', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');
    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    for (const product of products) {

        const productName = await product.textContent();
        console.log('Jerome Test');
        console.log(productName);

    };

    await page.close();

});