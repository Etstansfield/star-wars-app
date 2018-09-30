export class Planet {

    climate: string;
    ​​created: string;
    ​​diameter: number;
    ​​edited: string;
    ​​films: string[];
    ​​gravity: string;
    ​​name: string;
    ​​orbital_period: number;
    ​​population: number;
    ​​residents: string[];
    ​​rotation_period: number;
    ​​surface_water: boolean;
    ​​terrain: string;
    ​​url: string;
    type = 'planet';

    constructor(planet: Planet) {
        this.name = planet.name;
        this.climate = planet.climate;
        this.​​diameter = planet.​​diameter;
        this.​​gravity = planet.​​gravity;
        this.​​orbital_period = planet.​​orbital_period;
        this.​​population = planet.​​population;
        this.​​residents = planet.​​residents;
        this.​​rotation_period = planet.​​rotation_period;
        this.​​surface_water = planet.​​surface_water;
        this.films = planet.films;
        this.​​terrain = planet.​​terrain;
        this.created = planet.created;
        this.edited = planet.edited;
        this.url = planet.url;
    }

}
