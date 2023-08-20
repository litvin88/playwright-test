import { Page } from "@playwright/test";
import { MainPage } from "./main.page";
import { ResultsPage } from "./results.page";

export class App {
  readonly page: Page;
  readonly mainPage: MainPage;
  readonly resultsPage: ResultsPage;

  constructor(page: Page) {
    this.page = page;
    this.mainPage = new MainPage(page);
    this.resultsPage = new ResultsPage(page);
  }
}
