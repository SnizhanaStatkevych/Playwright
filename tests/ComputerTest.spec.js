import { test, expect } from '@playwright/test';


test('(e2e test) Successful PC creation', async ({page}) => {
// open the web-site
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














test("Login Rozetka", async ({page}) => {

    const SignInButton = page.getByText('Увійти');
    const phoneNumberInput = page.getByPlaceholder('+38(___)___-__-__');
    const receiveCodeButton = page.locator("button[class = 'cmf-button-primary auth-init__sms']");
    
    await page.goto ('https://comfy.ua/ua/?gad_source=1&gad_campaignid=9979162967&gbraid=0aaaaac-ixwgiozwbt-kjcuvvu42mxnfze&gclid=Cj0KCQjw_dbABhC5ARIsAAh2Z-SfX_FJ89hsgJkNEvlWRFHlQR9htWS25h5eCjT_Zlsz1cGnWrKPJH0aAn2sEALw_wcB'); 
    await SignInButton.first().click();
    await phoneNumberInput.fill('0978359552');
    await receiveCodeButton.click();

    
    },  {timeout: 60000 }); 