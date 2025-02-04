import { IMovieItem } from '../domain/types';

export default class Cart {
    private movie: IMovieItem[] = [];

    addMovie(item: IMovieItem): void {
        this.movie.push(item);
    }

    get movies(): IMovieItem[] {
        return [...this.movie]
    }
}