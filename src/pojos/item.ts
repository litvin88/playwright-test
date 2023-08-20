export class Item {
  readonly price: string;
  readonly rating: string;
  readonly title: string;

  constructor(price: string, rating: string, title: string) {
    this.price = price;
    this.rating = rating;
    this.title = title;
  }

  //   getPrice(): string {
  //     return this.price;
  //   }

  //   getRating(): string {
  //     return this.rating;
  //   }

  //   getTitle(): string {
  //     return this.title;
  //   }
}
