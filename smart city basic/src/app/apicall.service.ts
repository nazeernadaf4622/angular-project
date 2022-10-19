import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AppSettings } from "./app.settings";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private _isLoggedIN$ = new BehaviorSubject<boolean>(false)

  is_lLggedIn$ = this._isLoggedIN$.asObservable

  constructor(private http:HttpClient, public appSetings:AppSettings) {
    
  }
  apiurl = this.appSetings.settings.apiUrl
    getpost(){
        return this.http.get<any>(this.apiurl+'limens/report_views/');

      
            }
     getusername(uid:any):Observable<any>{
          return this.http.get<any>(this.apiurl+'accounts/create_user/'+uid+"/");
      
            
                  }

    createuser(data:any){
        return this.http.post(this.apiurl+'accounts/create_user/', data);
              }
       
      
    login(data:any){
          return this.http.post(this.apiurl+'accounts/auth/', data).pipe(
            tap((response:any)=>{
              this._isLoggedIN$.next(true);
              sessionStorage.setItem('token',response.token);
              response['is_admin']='true';
              sessionStorage.setItem('admin_variable',response.is_admin);
            })
            );
         
                }
          
   
          
          
      }
   
