import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppSettings } from "../../app.settings";
@Injectable({
  providedIn: 'root'
})
export class ProfileServicesService {

  constructor(private http:HttpClient, public appSetings:AppSettings) { }
  apiurl = this.appSetings.settings.apiUrl
  // apiurl ='http://127.0.0.1:8020/'


  check_user_profile(id:any):Observable<any>{
    return this.http.get(this.apiurl+'accounts/check_user_profile/'+ id+'/')
  }

  getUserTypeList():Observable<any>{
    return this.http.get(this.apiurl+'limens/type_view/')
   }

  update_user_profile(id:any, data:any):Observable<any>{
    return this.http.put(this.apiurl+'accounts/user_profile/'+ id+'/',data )
  }
  post_user_profile(id:any, data:any):Observable<any>{
    return this.http.post(this.apiurl+'accounts/user_profile/',data )
  }
}
