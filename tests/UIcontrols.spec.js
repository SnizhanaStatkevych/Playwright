
import { test, expect } from '@playwright/test';


 test('UI controls', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn") ;
    const dropdown = page.locator("select.form-control")
    const documentLink = page.locator("[href*='document']");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click()
    //assertions 
    await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
    console.log(await page.locator(".radiotextsty").nth(1).isChecked());
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck()
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect (documentLink).toHaveAttribute("class", "blinkingText");
 }); 



 test('@Child windows handle', async({browser}) => { 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='document']");
    
   
   const [newPage] = await Promise.all(
    [context.waitForEvent('page'), //listen for any new page 
    documentLink.click()]) //new page is opened );
    const text = await newPage.locator(".red").textContent();
   console.log(text)
   const ArrayText = text.split('@');
   const domain = ArrayText[1].split(' ')[0];
   console.log(domain);
   await page.locator('#username').type(domain);
   await page.pause()
   console.log(await page.locator('#username').textContent());




 });


 //promises have three states   1- pending promise , 2 - rejected promise , 3- fullfiled promise
 