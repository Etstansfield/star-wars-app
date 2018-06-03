import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { UrlService } from './url.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    public title = 'Star Wars';   
    public wookie_selected:boolean = false;
    public query = '';
    public url = 'https://swapi.co/api/people/';
    public params = {
        search: this.query
      };
    public search = '';
    public result = {};
    public loading:boolean = false;
    
    constructor(private httpService: HttpService,private urlService:UrlService){
        //called first time before the ngOnInit()
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
                this.result = data;
                this.loading = false;
            },
            error => {
                console.log(error);
                this.loading = false;
            }
            );
    }
    
}
