import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { AnagetUser }     from './AnagetUser';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class HeroService {
  constructor (private http: Http) {}
  private heroesUrl = 'Home/GetData';  // URL to web API
  
  getHeroes(): Observable<AnagetUser[]> {
    // let body = JSON.stringify("123456");
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    
    // alert(this.heroesUrl);
    // return this.http.post(this.heroesUrl, body, options)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);
    //document.location.href = this.heroesUrl
    
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
//   getHeroes (): Observable<AnagetUser[]> {
//     return this.http.get(this.heroesUrl)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}