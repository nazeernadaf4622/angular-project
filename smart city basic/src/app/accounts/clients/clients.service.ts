import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppSettings } from "../../app.settings";
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient,public appSetings:AppSettings ) { }
  apiurl = this.appSetings.settings.apiUrl
  getdata(id: any) {
    return this.http.get(this.apiurl+'org/create_org/' + id)
  }
  getalldata():Observable<any> {
    return this.http.get(this.apiurl+'org/create_org/')
  }

  postalldata(data: any) {
    return this.http.post(this.apiurl+'org/create_org/', data)
  }
  updateorgData(id: any, updata: any) {
    return this.http.put(this.apiurl+'org/create_org/' + id+'/', updata);
  }
  putdata(x: any) {
    return this.http.put(this.apiurl+'org/create_org/', x)
  }




  masterList: any

  form: FormGroup = new FormGroup({
    uOrgID: new FormControl(''),
    uOrgName: new FormControl(''),
    orgCode: new FormControl(''),
    orgAdStreetNo: new FormControl(''),
    orgAdStreetName: new FormControl(''),
    orgMainPhone: new FormControl(''),
    orgDeletedBy: new FormControl(''),
    orgDeletedOn: new FormControl(''),
    orgCreatedBy: new FormControl(''),
    orgCreatedOn: new FormControl(''),
    orgModifiedBy: new FormControl(''),
    orgModifiedOn: new FormControl(''),
    orgAdminLimit: new FormControl(''),
    orgStaffLimit: new FormControl(''),
    orgRegUserLimit: new FormControl(''),
    orgRegUserCurrentValue: new FormControl(''),
    orgDeletedOrNot: new FormControl(false),
    orgPayment:new FormControl(false),
    orgActiv: new FormControl(false),
    orgUserType:new FormControl(''),
    orgReportType: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      uOrgID: '',
      uOrgName: '',
      orgCode: '',
      orgAdStreetNo: '',
      orgAdStreetName: '',
      orgMainPhone: '',
      orgDeletedBy: '',
      orgDeletedOn: '',
      orgCreatedBy: '',
      orgCreatedOn: '',
      orgModifiedBy: '',
      orgModifiedOn: '',
      orgAdminLimit: '',
      orgStaffLimit: '',
      orgRegUserLimit: '',
      orgRegUserCurrentValue: '',
      orgDeletedOrNot:false,
      orgPayment:false,
      orgActiv: true,
      orgUserType:'',
      orgReportType:''
    });
  }


}
