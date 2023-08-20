import { Locator } from "@playwright/test";

export class SearchItem {
  readonly locator: Locator;
  readonly photo: Locator;
  readonly title: Locator;
  readonly price: Locator;
  readonly rating: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
    this.photo = locator.locator("div.s-list-col-left img.s-image");
    this.title = locator.locator("div.s-list-col-right h2 span.a-text-normal");
    this.price = locator.locator(
      "div.s-list-col-right span.a-price:first-of-type span.a-offscreen"
    );
    this.rating = locator.locator(
      "div.s-list-col-right div.a-row span.a-icon-alt"
    );
  }

  async getTitle(): Promise<string> {
    const title = await this.title.innerText();
    if (title) {
      return title;
    }
    return "No title";
  }

  async getRating(): Promise<string> {
    const rating = (await this.rating.isVisible())
      ? await this.rating.innerText()
      : null;
    if (rating) {
      return rating;
    }
    return "No rating";
  }

  async getPrice(): Promise<string> {
    const price = (await this.price.isVisible())
      ? await this.price.innerText()
      : null;
    if (price) {
      return price;
    }
    return "No price";
  }

  async getImage(): Promise<Locator> {
    return this.photo;
  }

  async scrollIntoViewIfNeeded(): Promise<void> {
    await this.locator.scrollIntoViewIfNeeded();
  }
}
