import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private _isLoggedIN$ = new BehaviorSubject<boolean>(false)

  is_lLggedIn$ = this._isLoggedIN$.asObservable

  constructor(private http:HttpClient) {}

    getpost(){
        return this.http.get<any>('http://107.22.125.226:8000/limens/report_views/');

      
            }


    createuser(data:any){
        return this.http.post('http://107.22.125.226:8000/accounts/create_user/', data);
              }
       
      
    login(data:any){
          return this.http.post('http://107.23.252.64:8000/accounts/auth/', data).pipe(
            tap((response:any)=>{
              this._isLoggedIN$.next(true);
              sessionStorage.setItem('token',response.token);
              response['is_admin']='true';
              sessionStorage.setItem('admin_variable',response.is_admin);
            })
            );
         
                }
          
    download(examid:any){
      return this.http.get('http://107.22.125.226:8000/limens/humanpotential_report/'+examid+'/', 
      {observe:'response', responseType:'blob'});
    }    
          
          
      }
   
