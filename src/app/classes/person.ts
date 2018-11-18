import { Types } from './types';

export class Person {

    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
    type = Types.person;

    constructor(person: Person) {
        this.name = person.name;
        this.height = person.height;
        this.mass = person.mass;
        this.hair_color = person.hair_color;
        this.skin_color = person.skin_color;
        this.eye_color = person.eye_color;
        this.birth_year = person.birth_year;
        this.gender = person.gender;
        this.homeworld = person.homeworld;
        this.films = person.films;
        this.species = person.species;
        this.vehicles = person.vehicles;
        this.starships = person.starships;
        this.created = person.created;
        this.edited = person.edited;
        this.url = person.url;
    }

}
