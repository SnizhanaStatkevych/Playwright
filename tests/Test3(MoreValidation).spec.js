import { test, expect } from '@playwright/test';

test("Pop up Validation", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("http://google.com");
    // await page.goBack();
    // await page.goForward();

    expect(await page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    expect(await page.locator("#displayed-text")).toBeHidden();
    // await page.pause()
    //handle pop ups 
    page.on("dialog", dialog => dialog.accept())
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await page.frameLocator(".text h2");
    textCheck.textContent();
    console.log(textCheck.split(" ")[1]);
})