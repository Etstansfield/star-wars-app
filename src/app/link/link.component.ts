import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

    @Input() type:string;
    @Input() name:string;
    @Input() wookie:any;
    @Output() url = new EventEmitter<string>();

    constructor(private httpService:HttpService, private urlService:UrlService){
    }

    ngOnInit() {
    }
    
    /**
        @desc - get the data from the star wars api from the specified inputs
    **/
    getData(){
        this.url.emit(this.urlService.getUrl(this.name,this.type,this.wookie));
        //this.httpService.httpGet(this.urlService.getUrl(this.name,this.type,this.wookie));
    }

}
