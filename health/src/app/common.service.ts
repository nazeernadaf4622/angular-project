import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  LocalstorageService: any;
  // http: any;
  handleError: any;


  baseURL = 'https://jsonplaceholder.typicode.com/posts';
  status: any;

  constructor(private http:HttpClient) { }

  getData() :Observable<{}> {

    return this.http.get(this.baseURL)

    // if (endPoint)
      // return;

    // var accessToken: any = this.LocalstorageService.getItem('edu_token');
    // let token = accessToken ? accessToken.length ? accessToken : "" : "";
    // var option: any = "";

    // let httpheaders = new HttpHeaders({
    //   'Accept': 'application/json;',
    //   'Authorization': 'Bearer ' + token
    // });
    // option = { headers: httpheaders };

    // let result = this.http.get(this.cr_baseUrl + endPoint, option);

    // return this.http.get(this.baseURL + endPoint)
    //   .pipe(
    //     catchError(this.handleError.bind(this))
    //   );
  }

  fnPost(endPoint: string, data: object) {
    if (!endPoint && !data)
      return;
    var accessToken: any = this.LocalstorageService.getItem('edu_token');
    let token = accessToken ? accessToken.length ? accessToken : "" : "";
    var option: any = "";
    let httpheaders = new HttpHeaders({
      'Accept': 'application/json;',
      'Authorization': 'Bearer ' + token
    });
    option = { headers: httpheaders };
    return this.http.post(this.baseURL + endPoint, data, option)
      .pipe(catchError(this.handleError.bind(this)));
  }
}
