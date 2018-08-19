import { Injectable } from '@angular/core';

const STAR_WARS_API_ROOT = 'https://swapi.co/api';

const PEOPLE = {
    'LUKE SKYWALKER': '/people/1',
    'C-3PO': '/people/2',
    'R2-D2': '/people/3',
    'DARTH VADER': '/people/4',
    'LEIA ORGANA': '/people/5',
};

const FILMS = {
    'A NEW HOPE': '/films/1',
    'THE EMPIRE STRIKES BACK': '/films/2',
    'RETURN OF THE JEDI': '/films/3',
    'THE PHANTOM MENACE': '/films/4',
    'ATTACK OF THE CLONES': '/films/5',
    'REVENGE OF THE SITH': '/films/6',
    'THE FORCE AWAKENS': '/films/7',
};

const PLANETS = {
    'TATOOINE': '/planets/1',
};

const SEARCH_URL =  '?search=';

@Injectable()
export class UrlService {

    constructor() { }

    /**
        @desc - get a url from the list of constants, switch between them as appropriate
    **/
    getUrl(name: string, type: string, wookie: false): string {

        let url = '';

        switch (type.toUpperCase()) {

            case 'PEOPLE':
                   url = STAR_WARS_API_ROOT + PEOPLE[name.toUpperCase()];
                break;
            case 'FILMS':
                   url = STAR_WARS_API_ROOT + FILMS[name.toUpperCase()];
                break;
            case 'PLANETS':
                    url = STAR_WARS_API_ROOT + PLANETS[name.toUpperCase()];
                break;
            default:
                // do nothing
        }

        if (wookie) {
            url += '/?format=wookiee';
        }
        console.log(url);
        return url;

    }

    /**
        @desc - get the root url
    **/
    getRootUrl(): string {

        return STAR_WARS_API_ROOT;

    }

    /**
     * @description - get the search url
     */
    getSearchUrl(type: string): string {

        return this.getRootUrl() + '/' + type.toLowerCase() + SEARCH_URL;

    }

}
