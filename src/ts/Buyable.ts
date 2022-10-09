console.log('Buya')
export default interface Buyable {
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly time: string,
    readonly price?: number,
}
