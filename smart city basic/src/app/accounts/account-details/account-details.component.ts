import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountServiceService } from '../account/account-service.service';
import { AccountComponent } from '../account/account.component';
import Swal from 'sweetalert2';
import { tick } from '@angular/core/testing';

class OptionsDataModel{
  id:string;
  value:boolean;

  constructor(userResponse: any) {
    this.id = userResponse.id;
    this.value= userResponse.value;
  }
}
class CompanyDataModel {
  uOrgID:number
  uOrgName:string

  constructor(userResponse: any) {
    this.uOrgID = userResponse.uOrgID;
    this.uOrgName= userResponse.uOrgName;
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
class ReportDataModel {
  rID:number
  rName:string

  constructor(userResponse: any) {
    this.rID = userResponse.rID;
    this.rName= userResponse.rName;
  }
}
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  detailsform: FormGroup;
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  c_a_disabled=true;
  s_a_disabled=true;
  a_s_disabled=true;
  c_s_disabled=true;
  r_s_disabled=true;
  public selectedCompany =''
  public selectedReport =''
  public selectedUser =''
  selectedoptions_org =''
  selectedoptions_payment =''
  desired_rowHeight =''

  constructor(private fb :FormBuilder, 
    
            @Inject(MAT_DIALOG_DATA) private data: any,
            private apiservice:AccountServiceService,
          
            public dialogRef: MatDialogRef<AccountDetailsComponent>) {
              console.log(dialogRef._containerInstance._config.data.newform)
              this.detailsform=this.fb.group({
                id:new FormControl({value:""},Validators.required),
                password:new FormControl({value:""},Validators.required),
                uUserID:new FormControl({value:""},Validators.required),
                uUserEmail: new FormControl({value:""},Validators.required),
                uPassword:new FormControl({value:""},Validators.required),
                uUsername: new FormControl({value:""},Validators.required),
                uOrgType:new FormControl({value:""},Validators.required),
                uReportType:new FormControl({value:""},Validators.required),
                examAttemptLimit:new FormControl({value:""},Validators.required),
                noOfAttempts:new FormControl({value:""},Validators.required),
                uOTP:new FormControl({value:""},Validators.required),
                uPayment:new FormControl({value:""},Validators.required),
                uCreatedOn:new FormControl({value:""},Validators.required),
                uCreatedBy:new FormControl({value:""}, Validators.required),
                uModifiedBy:new FormControl({value:""}, Validators.required),
                uModifiedOn:new FormControl({value:""}, Validators.required),
                uType: new FormControl({value:""}, Validators.required),
                is_super_admin:new FormControl({value:true,disabled: false},Validators.required),
                is_client_admin:new FormControl({value:true,disabled: false},Validators.required),
                is_admin_staff:new FormControl({value:true,disabled: false},Validators.required),
                is_client_staff:new FormControl({value:true,disabled: false},Validators.required),
                is_registered_user:new FormControl({value:true,disabled: false},Validators.required),
                is_active:new FormControl({value:true,disabled: false},Validators.required),
                organizationID:new FormControl({value:""}, Validators.required),
              })
          this.detailsform.patchValue(dialogRef._containerInstance._config.data.formData)
              
              this.selectedReport= this.detailsform.value.uReportType
              this.selectedUser= this.detailsform.value.uType
              this.selectedoptions_org =this.detailsform.value.uOrgType
              this.selectedoptions_payment =this.detailsform.value.uPayment
              this.c_a_disabled=!this.detailsform.value.is_client_admin;
              this.s_a_disabled=!this.detailsform.value.is_super_admin;
              this.a_s_disabled=!this.detailsform.value.is_admin_staff;
              this.c_s_disabled=!this.detailsform.value.is_client_staff;
              this.r_s_disabled=!this.detailsform.value.is_registered_user;
              this.selectedCompany=this.detailsform.value.organizationID
            }
            
  updateItem(id:any){
    
    this.dialogRef.close(true);
  //   const formData = new FormData();
  //   let keyvalues = Object.keys(this.detailsform.value);
  //   keyvalues.forEach(e => {
  //     formData.append(e, this.detailsform.value[e])
  // })
  delete this.detailsform.value.id
  delete this.detailsform.value.password
  delete this.detailsform.value.uCreatedBy
  
  this.detailsform.value.uModifiedBy=sessionStorage.getItem('uUserID')
  this.detailsform.value.uModifiedOn=new Date().toUTCString()
  console.log(this.detailsform.value)
   let variable= this.apiservice.updateaccountbyId(id,this.detailsform.value)
    variable.then((result) =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sucessfully updated the data',
        showConfirmButton: false,
        timer: 1800      })
      console.log(result)
    },(error)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error Updating the data',
        showConfirmButton: false,
        timer: 1800      })
      console.log("Error")
    })


  }
  saveItem(){
    this.dialogRef.close(true);
    const formData = new FormData();
    let keyvalues = Object.keys(this.detailsform.value);
    keyvalues.forEach(e => {
      formData.append(e, this.detailsform.value[e])
      })
    delete this.detailsform.value.id
    delete this.detailsform.value.uUserID
    delete this.detailsform.value.uOTP
    delete this.detailsform.value.uModifiedBy
    delete this.detailsform.value.uModifiedOn
    delete this.detailsform.value.examAttemptLimit
    delete this.detailsform.value.noOfAttempts
    
    if (this.dialogRef._containerInstance._config.data.is_super_admin==false || this.dialogRef._containerInstance._config.data.is_admin_staff==false){
      this.detailsform.value.organizationID=sessionStorage.getItem('orgID')
    }
    
    this.detailsform.value.uCreatedBy=sessionStorage.getItem('uUserID')
    this.detailsform.value.uCreatedOn=new Date().toUTCString()
    let variable= this.apiservice.createAccount(this.detailsform.value)
    variable.then((result) =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sucessfully Saved the data',
        showConfirmButton: false,
        timer: 1800      })
      console.log(result)
    },(error)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error creating the data',
        showConfirmButton: false,
        timer: 1800      })
      console.log("Error")
    })
    // this.apiservice.createAccount(this.detailsform.value).subscribe((res) =>{

    // })
    

  }
  optinsgroups: OptionsDataModel[]=[];
  option(){
    this.optinsgroups=[];
    var newpvc = new OptionsDataModel({id:true,value:'Yes'});
    this.optinsgroups.push(newpvc);
    var newpvc = new OptionsDataModel({id:false,value:'No'});
    this.optinsgroups.push(newpvc);
  }

 
 

  companygroups: CompanyDataModel[] = []

  async loadOrgs() {
    this.companygroups=[]
      await this.apiservice.getOrgList().subscribe( data => {

        for (let i = 0; i < data.length; i++) {
          const newpvc = new CompanyDataModel(data[i]);
          this.companygroups.push(newpvc)
        }
      });
    }

  reportgroups: ReportDataModel[] = []

  async loadReports() {
    this.reportgroups=[]
      await this.apiservice.get_report_by_org(sessionStorage.getItem('orgID')).subscribe( data => {

        for (let i = 0; i < data.length; i++) {
          const newpvc = new ReportDataModel(data[i]);
          this.reportgroups.push(newpvc)


        }
      });
    }

  usergroups: UserDataModel[] = []

  async loadUsers() {
      this.usergroups=[]
        await this.apiservice.get_user_by_org(sessionStorage.getItem('orgID')).subscribe( data => {
           if( data.length>1){
                for (let i = 0; i < data.length; i++) {
                  const newpvc = new UserDataModel(data[i]);
                  this.usergroups.push(newpvc)
                }
           }
           else{
              const newpvc = new UserDataModel(data);
              this.usergroups.push(newpvc)
           }
       
        });
        console.log("User Grouops",this.usergroups)
}


  activate_togles(){
      this.c_a_disabled=false;
      this.s_a_disabled=false;
      this.a_s_disabled=false;
      this.c_s_disabled=false;
      this.r_s_disabled=false;
    }

  onChange_s_a(event:any){
    console.log(event)
    if (event.checked){
      this.c_a_disabled= this.a_s_disabled = this.c_s_disabled=this.r_s_disabled=true;
     
    }
    else{
     this.activate_togles();
    }
  }


  onChange_a_s(event:any){
    console.log(event)
    if (event.checked){
      this.c_a_disabled= this.s_a_disabled= this.c_s_disabled=  this.r_s_disabled=true;
    }
    else{
      this.activate_togles();
  }
}

  onChange_c_a(event:any){
    console.log(event)
    if (event.checked){
      this.s_a_disabled=this.a_s_disabled= this.c_s_disabled= this.r_s_disabled=true;
    }
    else{
      this.activate_togles();
      
    }
  }

  
  onChange_c_s(event:any){
    console.log(event)
    if (event.checked){
      this.c_a_disabled= this.a_s_disabled= this.s_a_disabled=this.r_s_disabled=true;
    }
    else{
      this.activate_togles();
    }
  }

  onChange_r_s(event:any){
    console.log(event)
    if (event.checked){
      this.c_a_disabled= this.a_s_disabled=  this.s_a_disabled= this.c_s_disabled=true;
    }
    else{
      this.activate_togles();
    }
  }
  reset(){

    this.detailsform.reset();
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }


  ngOnInit(): void {

this.loadOrgs();
this.loadReports();
this.loadUsers();
this.option();
this.desired_rowHeight=this.dialogRef._containerInstance._config.data.rowHeight
  }

}
