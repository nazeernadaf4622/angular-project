import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from "../../app.settings";
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient, public appSetings:AppSettings ) { }

  apiurl = this.appSetings.settings.apiUrl
  get(url: string) {
    return this.http.get(url);
  }

  data:any;

  postQuestionJson(data:any){
    return this.http.post<any>(this.apiurl+"limens/get_statements_by_userid_method2/", data)
    console.log("Result Data of Questions",data);
  }

    headers=new HttpHeaders().set('Content-Type','application/json');
    
    result:any;


  getFinalExamData(examid:any){
    return this.http.get<any>(this.apiurl+'exams/create_exam/'+examid+'/' )
   
  }  
  putQuestionJson(examid:any,resultData:any) {
      
      this.result = {
        "eExamProgress": resultData
      }
      // console.log(this.result);
      
      return this.http.put<any>(this.apiurl+'exams/create_exam/'+examid+'/',this.result )
    }
  getProfileList():Observable<any>{
      return this.http.get(this.apiurl+'accounts/user_profile/')
     }

  get_user_data_for_exams(id:any):Observable<any>{
      return this.http.get(this.apiurl+'accounts/get_user_data_for_exams/'+id+'/')
     }
  // getQuestionJson() {
  //   return this.http.get<any>("assets/questions.json");
  // }

  create_new_exam(data:any):Observable<any>{
    return this.http.post(this.apiurl+'exams/create/',data)
   }

   get_user_attempt_limit(id:any):Observable<any>{
    return this.http.get(this.apiurl+'accounts/get_user_attempt_limit/'+id+'/')
   }
}
