import { test, expect } from '@playwright/test';

test.only("E2E test", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator(".submit-button").click();
    // const HasText = await expect(page.getByText("Swag Labs")).toBeVisible();
    // expect(HasText).toBeTruthy();
    await page.waitForLoadState('networkidle');


    const productName = 'Sauce Labs Backpack';
    const Products = await page.locator(".inventory_item")
    //змінна яка вміщає в себе всі блоки з продуктами на сторінці
    const titles = await Products.allTextContents();
    console.log(titles)


    const CountProduct = await Products.count();

    for (let i = 0; i < CountProduct; ++i) {
        const title = await Products.nth(i).locator(".inventory_item_name").textContent();
        if (title?.trim() === productName) {
            await Products.nth(i).getByRole('button', { name: 'Add to cart' }).click();
            break;
        }
    }
    
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.waitForLoadState('networkidle');
    await(page).pause()
    const isVisible = await page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' }).isVisible();
    expect(isVisible).toBeTruthy();
    

  


});