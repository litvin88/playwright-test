import { Locator, Page, expect } from "@playwright/test";
import { SearchItem } from "../items/search.item";
import { BasePage } from "./base.page";
import { Item } from "../pojos/item";

export class ResultsPage extends BasePage {
  readonly searchResultsTable: Locator = this.page.locator(
    'span[data-component-type="s-search-results"]'
  );
  readonly tableItems: Locator = this.page.locator(
    'div.s-result-item[data-component-type="s-search-result"]'
  );

  async getItems(): Promise<Item[]> {
    const allItems: Locator[] = await this.tableItems.all();
    console.log(`Count: ${allItems.length}`);

    const itemsList: Item[] = [];
    for (const item of allItems) {
      if (item) {
        await item.scrollIntoViewIfNeeded();
      } else {
        console.error("Element not found.");
      }
      const searchItem = new SearchItem(item);

      const title = await searchItem.getTitle();
      const rating = await searchItem.getRating();
      const price = await searchItem.getPrice();
      itemsList.push(new Item(price, rating, title));
    }
    return itemsList;
  }
}
