import { Types } from './types';

export class Film {

    characters: string[];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    planets: string[];
    producer: string;
    release_date: string;
    species: string[];
    starships: string[];
    title: string;
    url: string;
    vehicles: string[];
    type = Types.film;

    constructor(film: Film) {

        this.characters = film.characters;
        this.created = film.created;
        this.director = film.director;
        this.edited = film.edited;
        this.episode_id = film.episode_id;
        this.opening_crawl = film.opening_crawl;
        this.planets = film.planets;
        this.producer = film.producer;
        this.release_date = film.release_date;
        this.species = film.species;
        this.starships = film.starships;
        this.title = film.title;
        this.url = film.url;
        this.vehicles = film.vehicles;
    }

}
