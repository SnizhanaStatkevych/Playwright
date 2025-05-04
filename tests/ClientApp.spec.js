import { test, expect } from '@playwright/test';


test.only ('Test', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator('[value = "Login"]').click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body h5").first().waitFor();
    const titles = await page.locator(".card-body h5").allTextContents();
    console.log(titles);


})