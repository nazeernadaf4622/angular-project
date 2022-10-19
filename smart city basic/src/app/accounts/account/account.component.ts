import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import { filter, mergeMap } from 'rxjs';
import { AccountServiceService } from './account-service.service';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

import {AccountDetailsComponent} from '../account-details/account-details.component';
import Swal from 'sweetalert2';
class RenewalDataModel {  
  id:number;
  uUserID:number;
  uUserEmail: string;
  uPassword: string;
  uUsername: string;
  uOrgType:string;
  uReportType:string;
  uUserCreationLimit: string;
  uOTP: string;
  uIpAddress: string;
  uPayment: boolean;
  uCreatedOn: string;
  uCreatedby: string;
  uModifiedBy:String;
  uModifiedOn:String;
  uType:String;
  examAttemptLimit:String;
  noOfAttempts: String;

  is_super_admin:boolean;
  is_client_admin: boolean;
  is_staff:boolean;
  is_admin_staff:boolean;
  is_client_staff:boolean;
  is_registered_user: boolean;
  is_active:boolean;
 

  constructor(userResponse: any) {
    this.id= userResponse.id;
    this.uUserID = userResponse.vVirtueID;
    this.uUserEmail = userResponse.uUserEmail;
    this.uPassword = userResponse.uPassword;
    this.uUsername = userResponse.uUsername;
   
    this.uOrgType=userResponse.uOrgType
    this.uReportType =userResponse.uReportType
    this.uUserCreationLimit=userResponse.uUserCreationLimit
    this.uOTP=userResponse.uOTP
    this.uIpAddress=userResponse.uIpAddress
    this.uPayment=userResponse.uPayment
    this.uCreatedOn=userResponse.uCreatedOn
    this.uCreatedby=userResponse.uCreatedby
    this.uModifiedBy=userResponse.uModifiedBy
    this.uModifiedOn=userResponse.uModifiedOn
    this.uType = userResponse.uType
    this.examAttemptLimit = userResponse.examAttemptLimit
    this.noOfAttempts = userResponse.noOfAttempts

    this.is_super_admin=userResponse.is_super_admin
    this.is_client_admin=userResponse.is_client_admin
    this.is_staff=userResponse.is_staff
    this.is_admin_staff=userResponse.is_admin_staff
    this.is_client_staff=userResponse.is_client_staff
    this.is_registered_user =userResponse.is_registered_user
    this.is_active=userResponse.is_active

  }
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})


export class AccountComponent implements OnInit {

  dataSource :any;
  tabs = ['First', 'Second', 'Third'];

  isChecked = true;
  listData:any;
 
  selectedIndex=0
  data={};
  textcolor:any;

  vGoverningChecked=false
  vInactiveChecked=false
  
  vGoverningChecked1:any
  vInactiveChecked1:any
  VirtueDetails:any;


  editChecked = false;
  editMode = false;
  editMediaMode = false;
  q1:any;

  status ='';
  col="black"
  updateData:any;
  defaultFormData:any;
  ad=true;
  data_from_api:any;
  is_super_admin:any;
  is_client_admin:any;
  is_admin_staff:any;
  is_client_staff:any;
  is_registered_user:any;
  index_tab_label: any;

  constructor(private dialog: MatDialog,private fb: FormBuilder, private apiservice:AccountServiceService) {

   }

  async onChange(event:any, id:any){
    
    this.updateData= {"is_active": event.checked}
    console.log(id,this.updateData)
    await this.apiservice.updateaccountbyId(id,this.updateData )
  }



  applyFilter(filterVal: any) {
    console.log(filterVal)
    filterVal = filterVal.target.value.trim()
      this.dataSource.filter = filterVal.trim().toLowerCase()

    
  }

  DataList: RenewalDataModel[]  =[]

  myTabSelectedIndexChange(index:any){
    this.index_tab_label = index.tab.textLabel
    this.DataList=[]
    var resp:any;
    if (this.selectedIndex!=index){
        if (index.tab.textLabel === "All"){
          resp= this.apiservice.getAccountdetailsByOrgId({'orgid':sessionStorage.getItem('orgID'),'uRole':"All"})
        }
        if (index.tab.textLabel === "Super Admin"){
          resp= this.apiservice.getAccountdetailsByOrgId({'orgid':sessionStorage.getItem('orgID'),'uRole':"is_super_admin"})
        }
        if (index.tab.textLabel === "Admin Staff"){
            resp= this.apiservice.getAccountdetailsByOrgId({'orgid':sessionStorage.getItem('orgID'),'uRole':"is_admin_staff"})
        }
        if (index.tab.textLabel === "Client Admin"){
          resp= this.apiservice.getAccountdetailsByOrgId({'orgid':sessionStorage.getItem('orgID'),'uRole':"is_client_admin"})
        }
        if (index.tab.textLabel === "Client Staff"){
          resp= this.apiservice.getAccountdetailsByOrgId({'orgid':sessionStorage.getItem('orgID'),'uRole':"is_client_staff"})
        }
        if (index.tab.textLabel === "Registered User"){
          resp= this.apiservice.getAccountdetailsByOrgId({'orgid':sessionStorage.getItem('orgID'),'uRole':"is_registered_user"})
        }
        resp.subscribe((data:any) =>{
            for (let i = 0; i < data.length; i++) {
                const newpvc = new RenewalDataModel(data[i]);
                this.DataList.push(newpvc);
            }
          this.dataSource = new MatTableDataSource(this.DataList);
        })
    }
  }


  dialog_open(a1:boolean,a2:boolean,a3:boolean,a4:boolean,a5:boolean){
    const dialogConfig = new MatDialogConfig();
    
    this.defaultFormData={
      id:'',
      password:'',
      uUserID:'',
      uUserEmail:''  ,
      uPassword: '',
      uUsername:'',
      uOrgType:'',
      uReportType:'',
      examAttemptLimit:'',
      noOfAttempts:'',
      uOTP:'',
      uPayment:'',
      uCreatedOn:'',
      uCreatedBy:'',
      uModifiedBy:'',
      uModifiedOn:'',
      is_super_admin:false,
      is_client_admin:false,
      is_admin_staff:false,
      is_client_staff:false,
      is_active:true,
      organizationID:'',
      uType:''
    }
    this.apiservice.getaccountdetailsById(sessionStorage.getItem('uUserID')).subscribe((data) =>{
        this.defaultFormData.uCreatedBy=data.uUsername
        this.defaultFormData.is_super_admin=a1;
        this.defaultFormData.is_admin_staff=a2;
        this.defaultFormData.is_client_admin=a3;
        this.defaultFormData.is_client_staff=a4;
        this.defaultFormData.is_registered_user=a5;


        dialogConfig.width="60%";
        dialogConfig.data={
            formData:this.defaultFormData,
            newform:true,
            is_super_admin:this.is_super_admin,
            is_client_admin:this.is_client_admin,
            is_admin_staff:this.is_admin_staff,
            is_client_staff:this.is_client_staff,
            is_registered_user:this.is_registered_user,
            a1:a1,
            a2:a2,
            a3:a3,
            a4:a4,
            a5:a5,
            rowHeight:"4rem"
        }
    dialogConfig.autoFocus=true;

    const dialogRef = this.dialog.open(AccountDetailsComponent,dialogConfig );
    });
  };

  swal_error(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Limit Exeeded',
      showConfirmButton: false,
      timer: 1800
    })
  };

  openDialog(){
    var res=true;
    console.log(this.index_tab_label)
    switch (this.index_tab_label) {
      case "Super Admin":
          this.dialog_open(true, false, false, false, false)
          break;
      case "Admin Staff":
          this.dialog_open(false, true,false , false, false)
          break;
      case "Client Admin":
          this.apiservice.check_client_admin_creation_limit(sessionStorage.getItem('uUserID')).subscribe((resp)=>{
            if (resp){
              this.dialog_open(false, false, true, false, false)
            }
            else{
              this.swal_error()
            }
          })
          break;
      case "Client Staff":
        this.apiservice.check_client_staff_creation_limit(sessionStorage.getItem('uUserID')).subscribe((resp)=>{
          if (resp){
            this.dialog_open(false, false, false, true, false)
          }
          else{
            this.swal_error()
          }
        })
        break;
      case "Registered User":
        this.apiservice.check_reg_user_creation_limit(sessionStorage.getItem('uUserID')).subscribe((resp)=>{
          if (resp){
            this.dialog_open(false, false, false, false, true)
          }
          else{
            this.swal_error()
          }
  
        })
        break;
      default:
  }
};


async get_account_details(event:any){
  var a1=true;var a2=true;var a3=true;var a4=true;var a5=true;

  await this.apiservice.getaccountdetailsById(event).subscribe((res2) =>{
    if (sessionStorage.getItem('is_admin_staff')==='true' ){
      a1=false;a2=a5=true;
    
   }
  if (sessionStorage.getItem('is_client_admin')==='true' ){
     a1=false;a2=false;a5=false;
     if (res2.is_registered_user===true) {
      a3=a4=a5=false;
     }
  }
  if (sessionStorage.getItem('is_client_staff')==='true' ){
     a1=false;a2=false;a3=false;a5=false;
     if (res2.is_registered_user===true) {
      a3=a4=a5=false;
     }
  }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width="70%";
    dialogConfig.data={
        formData:res2,
        newform:false,
        is_super_admin:this.is_super_admin,
        is_client_admin:this.is_client_admin,
        is_admin_staff:this.is_admin_staff,
        is_client_staff:this.is_client_staff,
        is_registered_user:this.is_registered_user,
        a1:a1,a2:a2,a3:a3,a4:a4,a5:a5,
        rowHeight:"6rem"
        }
    dialogConfig.autoFocus=true;
    const dialogRef = this.dialog.open(AccountDetailsComponent,dialogConfig );
    });  
    }


  loadAPI(){
      this.DataList =[]
      this.dataSource=[]
      this.apiservice.getAccountdetailsByOrgId({'orgid':sessionStorage.getItem('orgID')}).subscribe((data) =>{
        for (let i = 0; i < data.length; i++) {
          const newpvc = new RenewalDataModel(data[i]);
          this.DataList.push(newpvc);
        }
        this.dataSource = new MatTableDataSource(this.DataList);
      });
  }

  ngOnInit(): void {
this.loadAPI();
this.is_super_admin = sessionStorage.getItem('is_super_admin')
this.is_super_admin =  JSON.parse(this.is_super_admin)
this.is_client_admin =sessionStorage.getItem('is_client_admin')
this.is_client_admin =  JSON.parse(this.is_client_admin)
this.is_admin_staff =sessionStorage.getItem('is_admin_staff')
this.is_admin_staff =  JSON.parse(this.is_admin_staff)
this.is_client_staff =sessionStorage.getItem('is_client_staff')
this.is_client_staff =  JSON.parse(this.is_client_staff)
this.is_registered_user =sessionStorage.getItem('is_registered_user')
this.is_registered_user =  JSON.parse(this.is_registered_user)

if (this.is_super_admin){
  this.tabs=["All","Super Admin","Admin Staff", "Client Admin", "Client Staff","Registered User"]
}
if (this.is_admin_staff){
  this.tabs=["All","Admin Staff", "Client Admin", "Client Staff","Registered User"]
}
if (this.is_client_admin){
  this.tabs=["All", "Client Admin", "Client Staff","Registered User"]
}
if (this.is_client_staff){
  this.tabs=["All","Client Staff","Registered User"]
}
  }

}
