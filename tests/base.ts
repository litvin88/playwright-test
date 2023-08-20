import { test } from "@playwright/test";
import { App } from "../src/pages/app";

export const myTest = test.extend<{ app: App }>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await use(app);
  },
});
