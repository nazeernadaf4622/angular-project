import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from "../app.settings";
@Injectable({
  providedIn: 'root'
})
export class DimensionApiService {


  constructor(private http:HttpClient, public appSetings:AppSettings) { }
  apiurl = this.appSetings.settings.apiUrl
  
  postDimensiondetails(data: any){

		return this.http.post<any>(this.apiurl+'limens/dimensions_view/', data)
				}




getDimensiondetails():Observable<any>{
  return   this.http.get(this.apiurl+'limens/dimensions_view/')
    
      }

getDimensiondetailsById(id:any):Observable<any>{
  return   this.http.get(this.apiurl+'limens/dimensions_view/'+id+'/')
          
      }

  getVirtuedetails(){
        return new Promise((resolve, reject) => {
          this.http.get(this.apiurl+'limens/virtue_view/')
            .subscribe(resolve, reject);
            console.log()
        })
            }
                          
  dimen_count():Observable<any>{
    return this.http.get<any>(this.apiurl+'limens/count_dimens/')
  }

  deleteVirtueById(id:any):Observable<any>{
    return this.http.delete(this.apiurl+'limens/dimensions_view/'+id+'/')
            
                        }     

  updateDimensionById(vid:any,data:any):Observable<any>{
 

   return this.http.patch<any>(this.apiurl+'limens/dimensions_view/'+vid+'/', data)
                  }
  getVirtueNameId(data:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      }
     const body={"virtue_list":data}
    
    return this.http.post<any>(this.apiurl+'limens/virtue_id_name/',body, httpOptions)
                    }
                 
}


