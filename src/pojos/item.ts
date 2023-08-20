export class Item {
  readonly price: string;
  readonly rating: string;
  readonly title: string;

  constructor(price: string, rating: string, title: string) {
    this.price = price;
    this.rating = rating;
    this.title = title;
  }
}
