
import { test, expect } from '@playwright/test';

test('Browser Context-Vadidating Error login', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn") ;
    const cardTitles = page.locator('.card-title a');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title()); 
// css
    await userName.type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await signIn.click();
    // wait until this locator show up page
   console.log( await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
// type = fill 
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click(); 
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);

});













