export class Starship {

    MGLT: any;
    cargo_capacity: number;
    consumables: string;
    cost_in_credits: any;
    created: string;
    crew: number;
    edited: string;
    films: string[];
    hyperdrive_rating: number;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: any;
    model: string;
    name: string;
    passengers: any;
    pilots: string[];
    starship_class: string;
    url: string;
    type = 'starship';

    constructor(ship: Starship) {
        this.name = ship.name;
        this.films = ship.films;
        this.created = ship.created;
        this.edited = ship.edited;
        this.url = ship.url;
        this.MGLT = ship.MGLT;
        this.cargo_capacity = ship.cargo_capacity;
        this.cost_in_credits = ship.cost_in_credits;
        this.crew = ship.crew;
        this.hyperdrive_rating = ship.hyperdrive_rating;
        this.length = ship.length;
        this.manufacturer = ship.manufacturer;
        this.max_atmosphering_speed = ship.max_atmosphering_speed;
        this.model = ship.model;
        this.passengers = ship.passengers;
        this.pilots = ship.pilots;
        this.starship_class = ship.starship_class;
    }

}
