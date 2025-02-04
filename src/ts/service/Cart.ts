import { IMovieItem } from '../domain/types';

export default class Cart {
    private movie: IMovieItem[] = [];

    addMovie(item: IMovieItem): void {
        this.movie.push(item);
    }

    showCart(): void {
        console.log("Корзина:")
        this.movie.forEach(item => {
            console.log(`${item.title} (${item.year})`)
        })
    }
}