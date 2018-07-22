import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { UrlService } from './url.service';
import { Person } from './person';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public title = 'Star Wars';
    public wookie_selected = false;
    public query = '';
    public url = 'https://swapi.co/api/people/?search=';
    public params = {
        search: this.query
      };
    public search = '';
    public result = null;
    public loading:boolean = false;
    public error:boolean = false;
    public urlTest:string;
    public searchResult = '';
    public searchTerm: FormControl;

    constructor(private httpService: HttpService,private urlService:UrlService){
        //called first time before the ngOnInit()
        this.searchTerm = new FormControl();
        this.searchTerm.valueChanges
        .subscribe(data => {
            this.search_word(data).subscribe(response =>{
                this.searchResult = response
            });
        });
    }

    handleResultSelected(result) {
        console.log(result);
        this.search = result;
    }
  
    getData(url:string){
        console.log('String Emitted: ',url);
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

    search_word(term){
        return this.httpService.httpGet(this.url + term).map(res => {
            return res.results;
        });
    }

    
}
