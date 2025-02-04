import { IMovieItem } from "./types";

export class Movie implements IMovieItem {
    title: string;
    originalTitle: string;
    year: number;
    country: string;
    slogan: string;
    genres: string[];
    duration: number;

    constructor(title: string, originalTitle: string, year: number, country: string, slogan: string, genres: string[], duration: number) {
        this.title = title;
        this.originalTitle = originalTitle;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genres = genres;
        this.duration = duration;
    }

    toString(): string {
        return `${this.title} (${this.originalTitle})\nГод: ${this.year}\nСтрана: ${this.country}\nСлоган: ${this.slogan}\nЖанр: ${this.genres.join(', ')}\nВремя: ${this.duration} мин.`;
    }
}
