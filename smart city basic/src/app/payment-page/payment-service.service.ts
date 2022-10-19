import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppSettings } from "../app.settings";
@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http:HttpClient, public appSetings:AppSettings) { }
  apiurl = this.appSetings.settings.apiUrl



  create_individual_user(data:any):Observable<any>{
    return this.http.post(this.apiurl+'accounts/create_individual_user/', data)
  }
  getUserTypeList():Observable<any>{
    return this.http.get(this.apiurl+'limens/type_view/')
   }

   updateaccountbyId(id:any,data:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiurl+'accounts/user-update/'+id+'/',data)
        .subscribe(resolve, reject);
    });
  }

}
