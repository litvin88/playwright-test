import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
  readonly searchBox: Locator = this.page.locator(".nav-search-field input");
  readonly initSearch: Locator = this.page.locator("#nav-search-submit-button");
  readonly acceptCookies: Locator = this.page.locator("#sp-cc-accept");

  async open() {
    await this.page.goto("/");
    await this.page.waitForLoadState("domcontentloaded");

    if (await this.acceptCookies.isVisible()) {
      await this.acceptCookies.click();
    }
  }

  async search(words: string) {
    await this.searchBox.fill(words);
    await this.initSearch.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
