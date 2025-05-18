
import { test, expect } from '@playwright/test';


test('E2E Test', async ({ page }) => {


    const email = "snizhana.statkevych1501@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body b");

    await page.goto('https://rahulshettyacademy.com/client');
    await page.getByPlaceholder('email@example.com').fill('snizhana.statkevych1501@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Test1234!');
    await page.getByRole("button", { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');
    const titles = await products.allTextContents();

    console.log(titles)
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" })
        .getByRole('button', { name: 'Add To Cart' }).click();

    const cartButton = page.getByRole('listitem').getByRole('button', { name: 'Cart' });
    await cartButton.click(); //це робить кнопку унікальною юо ми вказуємо listitem що кнопка іде звідти , тобто ми не слутаємо її з кнопкою вище


    await page.locator("div li").first().waitFor(); //waiting for elements in the cart
    expect(page.getByText("ZARA COAT 3"));
    await page.getByRole("button", { name: "Checkout" }).click();
    await page.getByPlaceholder("Select Country").pressSequentially("Ind", { delay: 100 });
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button[type='button']").count();
    await page.locator('input[type="text"]').nth(1).fill('455');
    await page.locator('input[type="text"]').nth(2).fill('test');

    await page.getByRole("button", { name: "India" }).nth(1).click();

    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.getByText("PLACE ORDER").click(); //ми тут використали метод getByText(), тому що елемент в дом дереві не є кнопкою а знаходиться в тезі а, що є лінкою, тому ми шукаємо по тексту 
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId)

    await page.locator("button[routerlink*='myorders']").click();
    const rows = await page.locator('tbody tr');
    for (i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent()
    expect(orderId.includes(orderIdDetails)).toBeTruthy()

});
