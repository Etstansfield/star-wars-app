import { Types } from './types';

export class Vehicle {
    cargo_capacity: number;
    consumables: string;
    cost_in_credits: any;
    created: string;
    crew: number;
    edited: string;
    films: string[];
    length: number;
    manufacturer: string;
    max_atmosphering_speed: number;
    model: string;
    name: string;
    passengers: any;
    pilots: string[];
    url: string;
    vehicle_class: string;
    type = Types.vehicle;

    constructor(vehicle: Vehicle) {
        this.name = vehicle.name;
        this.films = vehicle.films;
        this.created = vehicle.created;
        this.edited = vehicle.edited;
        this.url = vehicle.url;
        this.cargo_capacity = vehicle.cargo_capacity;
        this.cost_in_credits = vehicle.cost_in_credits;
        this.crew = vehicle.crew;
        this.length = vehicle.length;
        this.manufacturer = vehicle.manufacturer;
        this.max_atmosphering_speed = vehicle.max_atmosphering_speed;
        this.model = vehicle.model;
        this.passengers = vehicle.passengers;
        this.pilots = vehicle.pilots;
        this.vehicle_class = vehicle.vehicle_class;
        this.consumables = vehicle.consumables;
    }
}
