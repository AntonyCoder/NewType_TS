import Cart from '../service/Cart';
import { Movie } from '../domain/Movie';
import { IMovieItem } from '../domain/types';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.movies.length).toBe(0);
});

test('new card should be empty', () => {
  const cart = new Cart();

  const avengers: IMovieItem = new Movie(
    "Мстители", 
    "The Avengers", 
    2012, 
    "США", 
    "Avengers Assemble!", 
    ["фантастика", "боевик", "фэнтези", "приключения"], 
    137
  )

  cart.addMovie(avengers);
  expect(cart.movies).toEqual([avengers])

});
