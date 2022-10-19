import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ClientsService } from './clients.service';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import {AccountServiceService} from '../account/account-service.service'

class ReportDataModel {
  rID:number
  rName:string

  constructor(userResponse: any) {
    this.rID = userResponse.rID;
    this.rName= userResponse.rName;
  }
}

class UserDataModel {
  tID:number
  tName:string

  constructor(userResponse: any) {
    this.tID = userResponse.tID;
    this.tName= userResponse.tName;
  }
}
class RenewalDataModel {
  uOrgID: number;
  uOrgName: string;
  orgAdStreetNo: any;
  orgAdStreetName: string;
  orgMainPhone: number;
  orgActiv: boolean;
  orgDeletedOrNot:boolean;
  orgDeletedBy: string;
  orgDeletedOn: string;
  orgCreatedBy: string;
  orgCreatedOn: string;
  orgModifiedBy: string;
  orgModifiedOn: string;
  orgAdminLimit: string;
  orgAdminCurrentValue: string;
  orgStaffLimit: string;
  orgStaffCurrentValue: string;
  orgRegUserLimit: string;
  orgRegUserCurrentValue: string;
  orgPayment:boolean;
  orgReportType: string;
  orgUserType:string;

  constructor(userResponse: any) {
    this.uOrgID = userResponse.uOrgID;
    this.uOrgName = userResponse.uOrgName;
    this.orgAdStreetName = userResponse.orgAdStreetName;
    this.orgMainPhone = userResponse.orgMainPhone;
    this.orgAdStreetNo = userResponse.orgAdStreetNo;
    this.orgActiv = userResponse.orgActiv;
    this.orgDeletedOrNot=userResponse.orgDeletedOrNot;
    this.orgPayment=userResponse.orgPayment
    this.orgDeletedBy=userResponse.orgDeletedBy
    this.orgDeletedOn=userResponse.orgDeletedOn
    this.orgCreatedBy=userResponse.orgCreatedBy
    this.orgCreatedOn=userResponse.orgCreatedOn
    this.orgModifiedBy=userResponse.orgModifiedBy
    this.orgModifiedOn=userResponse.orgModifiedOn
    this.orgAdminLimit=userResponse.orgAdminLimit
    this.orgAdminCurrentValue=userResponse.orgAdminCurrentValue
    this.orgStaffLimit=userResponse.orgStaffLimit
    this.orgStaffCurrentValue=userResponse.orgStaffCurrentValue
    this.orgRegUserLimit=userResponse.orgRegUserLimit
    this.orgRegUserCurrentValue=userResponse.orgRegUserCurrentValue
    this.orgReportType = userResponse.orgReportType
    this.orgUserType = userResponse.orgUserType
  }
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  displayedColumns: string[] = ['uOrgID', 'uOrgName',  'Status','Admin Limit', 'Admin Currrent','Staff Limit', 'Staff Current','Reg Limit', 'Reg Current'];
  dataSource: any;
  clickedRows = new Set<RenewalDataModel>();
  select = 0;
  formnew = true;
  value: any
  tableform: any
  cLogo = "";
  listData: any;
  searchkey: string | undefined
  form: any;
  submitted = false;
  editRecordId = null;
  editobj: any
  editdata: any
  vInactiveChecked = false
  status_active: any
  sub!: any
  RenewalDataModel: any;
  updateid: any
  route: any;
  formData: any;
  image: any;
  // cLogo:File = null;
  fd = new FormData();
  file: any;
  public selectedReport =''
  public selectedUser =''
  Url = 'https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Arrow-upload-2-icon.png'
  // selectedFile: File=null;



  constructor(public apiservices_report:AccountServiceService,
    public service: ClientsService, private http: HttpClient, 
    private dialog: MatDialog,
    private fb: FormBuilder, ) { }
  
  ngOnInit(): void {

    this.tabledata();
  }

  RenewalDataList: RenewalDataModel[] = [];

  async tabledata() {
    this.RenewalDataList=[];
    this.dataSource=[];
    this.service.getalldata().subscribe(data => {
        for (let i = 0; i < data.length; i++) {
            (data[i].orgActiv)?this.status_active="ACTIVE":this.status_active="IN-ACTIVE";
          
            const newpvc = new RenewalDataModel(data[i]);
            
            this.RenewalDataList.push(newpvc);
             }
       this.dataSource = new MatTableDataSource(this.RenewalDataList);
      })
}


applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter = filterValue
    console.log(this.dataSource)
  }

back() {
    this.select = 0;
    }

onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

get_org_details(event: any) {
    this.loadReports();
    this.loadUserTypes();
    this.select = 1
    console.log(event)
    this.formnew = true;
    this.selectedReport= this.service.form.value.uReportType
    this.service.form.patchValue(event);
    this.vInactiveChecked = event.orgActiv
  
    this.editobj = event.companyCode
    if (this.vInactiveChecked === true) {
      this.status_active = 'ACTIVE'
    } else {
      this.status_active  = 'IN-ACTIVE'
    }
  }

newform() {
    this.loadReports();
    this.loadUserTypes();
    this.select = 1
    this.service.initializeFormGroup()
    this.formnew = false;
    this.vInactiveChecked=true;

  }

reportgroups: ReportDataModel[] = []


async loadReports() {
    this.reportgroups=[]
      await this.apiservices_report.getReportList().subscribe( data => {

        for (let i = 0; i < data.length; i++) {
          const newpvc = new ReportDataModel(data[i]);
          this.reportgroups.push(newpvc)
        }
      });
    }
usergroups: UserDataModel[] = []


async loadUserTypes() {
        this.reportgroups=[]
          await this.apiservices_report.getUserTypeList().subscribe( data => {
    
            for (let i = 0; i < data.length; i++) {
              const newpvc = new UserDataModel(data[i]);
              this.usergroups.push(newpvc)
            }
          });
        }
    

public submitForm(): void {
    this.select = 0
    if (this.service.form) {

      this.formData = this.service.form.value
      delete this.service.form.value.uOrgID
      delete this.service.form.value.orgModifiedOn
      delete this.service.form.value.orgRegUserCurrentValue
      

      this.service.form.value.orgCreatedBy = sessionStorage.getItem('uUserID')
      this.service.form.value.orgCreatedOn=new Date().toUTCString()
      this.service.postalldata(this.formData).subscribe((res: any) => {
        console.log(res);
        this.tabledata();
        this.service.form.reset()
        this.vInactiveChecked = false;
        return of(this.RenewalDataModel)
      })
    }
    else {
      alert('Form Empty')
    }
    this.tabledata();
  }

onupdate() {
  console.log(this.service.form.value)

  delete this.service.form.value.orgCreatedBy
  this.service.form.value.orgCreatedOn
  this.service.form.value.orgModifiedBy = sessionStorage.getItem('uUserID')
      this.service.form.value.orgModifiedOn=new Date().toUTCString()
    this.service.updateorgData(this.service.form.value.uOrgID, this.service.form.value).subscribe((res: any) => {
      this.select=0;
      this.tabledata();
    });

  }
 
reset(){
  this.service.form.reset()
}

toggle(event: any) {
  console.log(event)
    if (event.checked === true || this.vInactiveChecked === true) {
      this.status_active = "ACTIVE"
    } else {
      this.status_active = "IN-ACTIVE"
    }
  }
}