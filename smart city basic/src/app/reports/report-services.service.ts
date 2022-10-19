
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppSettings } from "../app.settings";
@Injectable({
  providedIn: 'root'
})
export class ReportServicesService {

  constructor(private http:HttpClient, public appSetings:AppSettings) { }
  apiurl = this.appSetings.settings.apiUrl


  sort_exams_by_userid(id:any):Observable<any>{
    return this.http.get(this.apiurl+'exams/sort_exams_by_userid/'+id+'/')
  }

  get_user_data_for_exams(id:any):Observable<any>{
    return this.http.get(this.apiurl+'accounts/get_user_data_for_exams/'+id+'/')
   }

   get_report_by_user(id:any):Observable<any>{
    return this.http.get(this.apiurl+'limens/get_report_by_user/'+id+'/')
   }
   download(examid:any){
    return this.http.get(this.apiurl+'limens/humanpotential_report/'+examid+'/', 
    {observe:'response', responseType:'blob'});
  }    
  delete_exam_data(id:any):Observable<any>{
    return this.http.delete(this.apiurl+'exams/create/'+id+'/')
   }

}
