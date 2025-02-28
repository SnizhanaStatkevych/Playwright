const {test, expect} = require("@playwright/test");


test('(e2e test) Successful PC creation', async ({page}) => {
//open the web-site
await page.goto('https://computer-database.gatling.io/computers')
//click on the btn
await page.getByText('Add a new computer').click();
//fill form
await page.locator('#name').fill('My-new-computer');
await page.locator('#introduced').fill('1981-10-10');
await page.locator('#discontinued').fill('2023-11-11');
//select one available option
await page.locator('#company').selectOption({label: 'Netronics'});
//click on the btn Create this computer
await page.getByText('Create this computer').click();
//Verify
await expect(page.getByText('Done ! Computer My-new-computer has been created')).toBeVisible();

}, {timeout: 60000 }); 



test('Browser Context Playwright test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title()); 

    await page.locator('#username').type("rahulshetty");
    await page.locator("[type='password]").type("learning");
    await page.locator("#signInBtn").click();
    await page.locator("[style*='block']");
})