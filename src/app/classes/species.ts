export class Species {

    name: string;
    classification: string;
    designation: string;
    average_height: number;
    skin_colors: string[];
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
    type = 'species';

    constructor(species: Species) {
        this.name = species.name;
        this.classification = species.classification;
        this.designation = species.designation;
        this.average_height = species.average_height;
        this.skin_colors = species.skin_colors;
        this.hair_colors = species.hair_colors;
        this.eye_colors = species.eye_colors;
        this.average_lifespan = species.average_lifespan;
        this.homeworld = species.homeworld;
        this.films = species.films;
        this.people = species.people;
        this.language = species.language;
        this.created = species.created;
        this.edited = species.edited;
        this.url = species.url;
    }
}
