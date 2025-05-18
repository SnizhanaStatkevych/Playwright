import { test, expect } from '@playwright/test';

test("Calendar Validations", async ({ page }) => {
    
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber, date, year]
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").nth(0).click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__tile").nth(Number(monthNumber) - 1).click();
    await page.locator("//abbr[text()='" + date + "']").click();


    const input = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index < input.count(); index++) {
        const value = input[index].getAttribute("value")
        expect(value).toEqual(expectedList[index]);

    }

});









    // const end = 10 

    // const users = []
    // for(let i = 0; i < end; i++){
    //     const user = {
    //         phoneNumber: `+1345555${i}`,

    //         test: i % 2 === 0
    //     }

    //     users.push(user)
    // }
    
    // console.log(users);