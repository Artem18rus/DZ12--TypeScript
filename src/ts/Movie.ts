import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly time: string,
    readonly price?: number,
  ) { }
}