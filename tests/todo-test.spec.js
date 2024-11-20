// @ts-check
const { test, expect } = require('@playwright/test');

test('Adding a reminder to buy milk', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByTestId('text-input');
    await page.getByPlaceholder("What needs to be done?");
    await page.getByLabel("New Todo Input");
    await page.locator("input");
    await page.locator('[class="new-todo"]')
    await page.locator("#todo-input")
    await page.locator('xpath=//*[@id="todo-input"]')
    await page.locator('xpath=//html/body/section/header/div/input')



    await page.getByTestId('text-input').fill("esimene");
    await page.getByTestId('text-input').press("Enter");


    await expect(page.getByTestId("todo-item-label")).toBeVisible();
    await expect(page.getByTestId("todo-item-label")).toHaveText("esimene");

    // todo counter
    await expect(page.locator('[class="todo-count"]')).toHaveText("1 item left!");
    // to containtext("1")
    // tohavetext(/1/)

    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByTestId("todo-item-label")).not.toBeVisible();

    // await expect(page.getByTestId('todo-item')).toHaveClass(['completed']);
})