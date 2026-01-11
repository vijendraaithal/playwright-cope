import { test, expect } from "@playwright/test";

test("Should load homepage with correct title", async ({ page }) => {
  // 1. Go to home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  // 2. Asset if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");
  // 3. Asset header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test.only("Should demo locators", { tag: "@smoke" }, async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  let makeAppointmentBtn = page.getByRole("link", { name: "Make App" });
  console.log(`Type: ${typeof makeAppointmentBtn}, Value: ${JSON.stringify(makeAppointmentBtn)}`);
  // makeAppointmentBtn.click();
  // await page.getByRole("link", { name: "Make App" }).click();
  
})
