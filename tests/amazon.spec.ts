import { expect } from "@playwright/test";
import { myTest } from "./base";

myTest.afterAll(async ({ app }) => {
  console.log("Done with tests");
  await app.page.close();
});

myTest("user can open main page", async ({ app }) => {
  await app.mainPage.open();
  await expect(app.page).toHaveTitle(/Amazon/);
});

myTest("user can search products", async ({ app }) => {
  await app.mainPage.open();
  await app.mainPage.search("logitech headset");

  await app.resultsPage.searchResultsTable.waitFor({ state: "visible" });
  const items = await app.resultsPage.getItems();

  items.forEach((item) => {
    console.log(`Title: ${item.title.split(",")[0]}`);
    console.log(`Rating: ${item.rating.substring(0, 3)}`);
    console.log(`Price: ${item.price}`);
    console.log("--------------------------");
  });

  expect(items.length).toBeGreaterThanOrEqual(16);
});
