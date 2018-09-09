import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { UrlService } from './url.service';
import { Person } from './classes/person';
import { Film } from './classes/film';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public title = 'Star Wars';
    public wookie_selected = false;
    public query = '';
    public params = {
        search: this.query
      };
    public search = '';
    public result = null;
    public loading = false;
    public error = false;
    public urlTest = '';
    public searchResult: any;
    public searchTerm: FormControl;
    public searchTypes = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];
    public selectedSearchType = this.searchTypes[0];

    constructor(private httpService: HttpService, private urlService: UrlService) {
        // called first time before the ngOnInit()
        this.searchTerm = new FormControl();
        this.searchTerm.valueChanges
        .debounceTime(300)
        .subscribe(data => {
            this.search_word(data).subscribe(response => {
                console.log('+++ Searching For: ', this.selectedSearchType, ' +++');
                this.searchResult = response;
                // console.log('+++ Typeof Result: ', this.searchResult.constructor.name , ' +++');
            });
        });
    }

    /**
     * @description - get data from a button click
     */
    getData(url: string) {
        console.log('String Emitted: ', url);
        this.loading = true;
        this.httpService.httpGet(url).subscribe(
            data => {
                console.log(data);
                this.result = <Person> data;
                console.log(typeof this.result);
                this.loading = false;
            },
            error => {
                console.log(error);
                this.loading = false;
                this.error = true;
            }
        );
    }

    /**
     * @description - search for a word
     * @param term - the term to search for
     */
    search_word(term) {
        return this.httpService.httpGet(this.urlService.getSearchUrl(this.selectedSearchType) + term).map(
            res => {
            console.log('Results: ', res.results);
            return res.results;
        }).catch(
            error => {
                console.log('Error from search: ', error);
                return error;
            }
        );
    }

    /**
     * @description - the display for the autocomplete
     * @param result - the chosen result
     */
    displayResult(result?): string | undefined {
        if (result) {
            return result.title ? result.title : result.name;
        }
        return undefined;
    }

    /**
     * @description - set the result to the option chosen in the autocomplete
     * @param $event - event emitted by the autocomplete
     */
    setResult($event: MatAutocompleteSelectedEvent) {
        console.log('Set Event Called!');
        console.log($event);
        // this.result = $event.option.value;
        switch (this.selectedSearchType.trim()) {
            case 'People':
                this.result = new Person($event.option.value);
                console.log('+++ Search Result: ', this.result , ' type:  ', this.result.constructor.name  , ' +++');

            break;
            case 'Films':
                this.result = new Film($event.option.value);
            break;

        }
    }

}
