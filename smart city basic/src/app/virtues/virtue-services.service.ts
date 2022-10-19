import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppSettings } from "../app.settings";


@Injectable({
  providedIn: 'root'
})
export class VirtueServicesService {

 
  
  constructor(private http:HttpClient, public appSetings:AppSettings) { }

  apiurl = this.appSetings.settings.apiUrl


      postVirtuedetails(data: any):Observable<any>{
		      return this.http.post<any>(this.apiurl+'limens/getallvirtues/', data)
         }

      getVirtuedetails():Observable<any>{
        return this.http.get(this.apiurl+'limens/getallvirtues/')
         
                        }

      getVirtuedetailsByID(vid:any):Observable<any>{
      
        return this.http.get(this.apiurl+'limens/getallvirtues/'+vid+'/')
           
                        };

      updateVirtueById(vid:any,data:any):Observable<any>{
     
          // return new Promise((resolve, reject) => {
          //   this.http.patch('http://107.23.252.64:8000/limens/getallvirtues/'+vid+'/',data)
          //     .subscribe(resolve, reject);
          //               });
          //             }

         return this.http.patch<any>(this.apiurl+'limens/getallvirtues/'+vid+'/', data)
                        }


     deleteVirtueById(vid:any,):Observable<any>{

        return this.http.delete(this.apiurl+'limens/getallvirtues/'+vid+'/')
            
                        }     
                        
                        
    virtue_count():Observable<any>{
      return this.http.get<any>(this.apiurl+'limens/count/')
    }
}
