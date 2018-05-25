import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { UrlService } from './url.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Star Wars';
    
    wookie_selected:boolean = false;
  
    constructor(private httpService: HttpService,private urlService:UrlService){
        //called first time before the ngOnInit()
    }
}
