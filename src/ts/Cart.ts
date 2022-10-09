import Buyable from "./Buyable";

export default class Cart {
  private _items: Buyable[]=[];
  
  add(item: Buyable): void{
    this._items.push(item);
  }

  getAll(): Buyable[] {
    return[...this.items];
  }

  get items(): Buyable[] {
    return[...this._items];
  }
}



// const eks1 = new Movie(2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фентези, приключения, ...', '137 мин./02:17');
// const eks2 = new Cart;
// eks2.add({
//   year: 2003,
//   country: 'RUS',
//   slogan: 'Slogan1',
//   genre: 'боевик',
//   time: '116 мин./03:17',
//   price: 453,
// });
// eks2.add({
//   year: 2005,
//   country: 'RUS',
//   slogan: 'Slogan2',
//   genre: 'боевик',
//   time: '116 мин./03:17',
//   price: 547,
// });