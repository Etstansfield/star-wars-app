import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }
  
    /**
        @desc - http get with basic error handling
    **/
    httpGet(url:string):Observable<any>{
        return this.http.get(url).map(
            res => return res;
        
            //error => console.log('Error',error)           
        ).catch(
           error =>  return error;          
        );
    }

}
