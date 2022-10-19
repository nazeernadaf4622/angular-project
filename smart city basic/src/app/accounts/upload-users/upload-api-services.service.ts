import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppSettings } from "../../app.settings";
@Injectable({
  providedIn: 'root'
})
export class UploadApiServicesService {

  constructor(private http: HttpClient,public appSetings:AppSettings ) { }
  apiurl = this.appSetings.settings.apiUrl

  import_user_data(data: any) {
    return new Promise((resolve, reject) => {
    this.http.post(this.apiurl+'accounts/LoginUsersImport_test/',data).subscribe(resolve, reject);
  })
}

  export_user_data() {
    return this.http.get(this.apiurl+'accounts/LoginUsersExport/',{observe:'response', responseType:'blob'});
  }

  export_statement_data() {
    return this.http.get(this.apiurl+'accounts/StatementsExport/',{observe:'response', responseType:'blob'});
  }

  import_statmenent_data(data: any) {
    return new Promise((resolve, reject) => {
    this.http.post(this.apiurl+'accounts/StatementsImport/',data).subscribe(resolve, reject);
  })
}
  
}
