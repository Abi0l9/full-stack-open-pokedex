// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

const { test, describe, expect } = require("@playwright/test");


describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    const pokemonName = "ivysaur";
    await page.goto("http://localhost:8080");
    await expect(page.getByText(pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1))).toBeVisible();
    await expect(page.getByText("Pokémon and Pokémon character names are trademarks of Nintendo.")).toBeVisible();
  });
});