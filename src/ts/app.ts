import Movie from '../ts/Movie';
import Cart from '../ts/Cart';

const movie = new Movie(2001, 'USA', 'hello from western', 'western', '120', 23);
const cart = new Cart();

console.log(movie);
console.log(cart);