import Buyable from "./Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  getAll(): Buyable[] {
    return [...this.items];
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}
