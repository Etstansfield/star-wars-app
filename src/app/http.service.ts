import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }
  
    /**
        @desc - http get with basic error handling
    **/
    httpGet(url:string):any{
        return this.http.get(url).subscribe(
            data => console.log('Success',data),
            error => console.log('Error',error)           
        );
    }

}
