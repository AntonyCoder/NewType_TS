import Cart from './service/Cart';
import { Movie } from './domain/Movie';
import { IMovieItem } from './domain/types';

// Пример использования
const avengers: IMovieItem = new Movie(
    "Мстители", 
    "The Avengers", 
    2012, 
    "США", 
    "Avengers Assemble!", 
    ["фантастика", "боевик", "фэнтези", "приключения"], 
    137
);

console.log(avengers.toString());

const cart = new Cart();
cart.addMovie(avengers);
cart.showCart();

