import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotalPriceWithoutDiscount(): number {
    return this._items.reduce((sum, item) => item.price + sum, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    return ((100 - discount) / 100) * this.getTotalPriceWithoutDiscount();
  }

  removeItem(id: number): void {
    const removeInd = this._items.findIndex((item) => item.id === id);
    if (removeInd !== -1) {
      this._items.splice(removeInd, 1);
    }
  }
}
