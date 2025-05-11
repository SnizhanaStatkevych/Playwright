
import { test, expect } from '@playwright/test';


test('E2E Test', async ({ page }) => {

    const email = "snizhana.statkevych1501@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body b");

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('snizhana.statkevych1501@gmail.com');
    await page.locator('#userPassword').fill('Test1234!');
    await page.locator("[value = 'Login']").click();
    await page.waitForLoadState('networkidle');
    const titles = await products.allTextContents();

    console.log(titles)


    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).textContent() === productName) {
            //add to cart 
            await page.locator('.card:has-text("ZARA COAT 3")').locator("text = Add To Cart").click()
            break;
        }
    }


    await page.locator("[routerlink*= 'cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
    expect(bool).toBeTruthy()
    await page.locator("text = Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("Ind", { delay: 100 });
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button[type='button']").count();
    await page.locator('input[type="text"]').nth(1).fill('455');
    await page.locator('input[type="text"]').nth(2).fill('test');
    for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button[type='button']").nth(i).textContent();
        if (text?.trim() === ' India') {
            await dropdown.locator("button[type='button']").nth(i).click();
            // await dropdown.waitForSelector('.ta-results', { state: 'detached' });
        // await dropdown.waitFor({ state: 'hidden' });
        break;
        }
    }


    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator('.action__submit').click();
    await expect(page.locator('.hero-primary')).toHaveText("Thankyou for the order.")
    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId)

    await page.locator([routerlink *= 'myorders']).click()
    const rows = await page.locator('tbody tr');
    for (i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

const orderIdDetails  = await page.locator(".col-text").textContent()
expect(orderId.includes(orderIdDetails)).toBeTruthy()

});
