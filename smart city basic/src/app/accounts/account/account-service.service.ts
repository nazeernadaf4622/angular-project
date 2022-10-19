import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppSettings } from "../../app.settings";

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient, public appSetings:AppSettings) { }
  apiurl = this.appSetings.settings.apiUrl
  // apiurl ='http://127.0.0.1:8020/'


  getAccountdetailsByOrgId(orgid:any):Observable<any>{
    console.log(this.apiurl)
    return this.http.post(this.apiurl+'accounts/account_details_by_orgid/', orgid)
  }

  getaccountdetails():Observable<any>{
    return this.http.get(this.apiurl+'accounts/UpdateUserLogindata/')
     
                    }

  updateaccountbyId(id:any,data:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiurl+'accounts/user-update/'+id+'/',data)
        .subscribe(resolve, reject);
    });
  }

  createAccount(data:any){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiurl+'accounts/create_user/',data)
        .subscribe(resolve, reject);
    });
    // return this.http.post(this.apiurl+'accounts/create_user/',data)
  }

  getaccountdetailsById(id:any):Observable<any>{
    return this.http.get(this.apiurl+'accounts/user-update/'+id+'/')
     
                    }
 getOrgList():Observable<any>{
  return this.http.get(this.apiurl+'org/create_org/')
 }
 getReportList():Observable<any>{
  return this.http.get(this.apiurl+'limens/report_view/')
 }
 get_report_by_org(orgid:any):Observable<any>{
  return this.http.get(this.apiurl+'limens/get_report_by_org/'+orgid+'/')
 }
 
 getUserTypeList():Observable<any>{
  return this.http.get(this.apiurl+'limens/type_view/')
 }

 get_user_by_org(orgid:any):Observable<any>{
  return this.http.get(this.apiurl+'limens/get_user_by_org/'+orgid+'/')
 }
 get_user_by_org_single(orgid:any):Observable<any>{
  return this.http.get(this.apiurl+'limens/get_user_by_org_single/'+orgid+'/')
 }
 check_client_admin_creation_limit(id:any):Observable<any>{
  return this.http.get(this.apiurl+'accounts/check_client_admin_creation_limit/'+id+'/')
 }

 check_client_staff_creation_limit(id:any):Observable<any>{
  return this.http.get(this.apiurl+'accounts/check_client_staff_creation_limit/'+id+'/')
 }

 
 check_reg_user_creation_limit(id:any):Observable<any>{
  return this.http.get(this.apiurl+'accounts/check_reg_user_creation_limit/'+id+'/')
 }
}
