import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { UrlService } from './url.service';
import { Person } from './person';
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
    public searchResult = '';
    public searchTerm: FormControl;
    public searchTypes = ['All', 'Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];
    public selectedSearchType = 'All';

    constructor(private httpService: HttpService, private urlService: UrlService) {
        // called first time before the ngOnInit()
        this.searchTerm = new FormControl();
        this.searchTerm.valueChanges
        .debounceTime(300)
        .subscribe(data => {
            this.search_word(data).subscribe(response => {
                this.searchResult = response;
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
        return result ? result.name : undefined;
    }

    /**
     * @description - set the result to the option chosen in the autocomplete
     * @param $event - event emitted by the autocomplete
     */
    setResult($event: MatAutocompleteSelectedEvent) {
        console.log('Set Event Called!');
        console.log($event);
        this.result = $event.option.value;
    }

}
