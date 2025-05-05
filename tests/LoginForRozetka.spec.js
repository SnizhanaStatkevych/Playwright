
import { test, expect } from '@playwright/test';


test("Login Rozetka", async ({page}) => {

    const SignInButton = page.getByText('Увійти');
    const phoneNumberInput = page.getByPlaceholder('+38(___)___-__-__');
    const receiveCodeButton = page.locator("button[class = 'cmf-button-primary auth-init__sms']");
    
    await page.goto ('https://comfy.ua/ua/?gad_source=1&gad_campaignid=9979162967&gbraid=0aaaaac-ixwgiozwbt-kjcuvvu42mxnfze&gclid=Cj0KCQjw_dbABhC5ARIsAAh2Z-SfX_FJ89hsgJkNEvlWRFHlQR9htWS25h5eCjT_Zlsz1cGnWrKPJH0aAn2sEALw_wcB'); 
    await SignInButton.first().click();
    await phoneNumberInput.fill('0978359552');
    await receiveCodeButton.click();

    
    },  {timeout: 60000 }); 