import { Component, OnInit } from '@angular/core';

import {  MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {UploadApiServicesService} from './upload-api-services.service'
import { DatePipe } from '@angular/common'
import Swal from 'sweetalert2';
import { AccountServiceService } from '../account/account-service.service';


export interface PeriodicElement {
  
  position: number;
  label: string;
  function: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, label: 'Import Users Data', function: 'import', action:1},
  {position: 2, label: 'Export Users Data', function: 'export', action: 2},
  {position: 3, label: 'Import Statements', function: 'import', action: 3},
  {position: 4, label: 'Export Statements', function: 'export', action: 4},
];

@Component({
  selector: 'app-upload-users',
  templateUrl: './upload-users.component.html',
  styleUrls: ['./upload-users.component.scss']
})
export class UploadUsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'label', 'function', 'action'];
  file:any;
  dataSource = ELEMENT_DATA;
  date=new Date();
  constructor(private fb: FormBuilder, public apiserve: UploadApiServicesService,public account_service:AccountServiceService) {

   }
  
  ngOnInit(): void {
  }
  onFileSelected(e:any)
  {
   this.file= e.target.files[0];
  }
  
  swal_fire(error_msg:any, value:any){
    Swal.fire({
      position: 'center',
      icon: value,
      title: error_msg,
      showConfirmButton: false,
      timer: 1800      
    })
  
  }
  uploadFiles(e:any, element:any){
    console.log(element)
      var formData = new FormData;
      switch (element) {
        case 1:
          formData.append("file",this.file)
      var uReport_list:any=[];
      this.account_service.get_report_by_org(sessionStorage.getItem('orgID')).subscribe((data)=>{
      for (let i = 0; i < data.length; i++) {
        uReport_list.push(data[i].rID)
      };
      formData.append("uReportType",uReport_list)
      this.account_service.get_user_by_org_single(sessionStorage.getItem('orgID')).subscribe(data =>{
              formData.append("uType",data.tID)
              formData.append("organizationID",sessionStorage.getItem('orgID')||'')
              formData.append("uCreatedBy",sessionStorage.getItem('uUserID')||'')
              var datestr = new Date().toUTCString();
              formData.append("uCreatedOn",datestr)
              formData.append("is_registered_user","True")

              let variable= this.apiserve.import_user_data(formData);
              variable.then((response:any) =>{
              
                  if (response.error_id===701){
                    this.swal_fire("All Emails already exists!", 'error')
                  }
                  if (response.error_id===800){
                    this.swal_fire("Unexpected error occured!", 'error')
                  }

                  if (response.error_id===700){
                    this.swal_fire("All Emails added Sucessfully!", 'success')
                  }
                  if (response.error_id===703){
                    this.swal_fire("Some Emails could'not be added.Pls Check!", 'sucess')
                  }
                  if (response.error_id===704){
                    this.swal_fire(response.error, 'error')
                  }
                  if (response.error_id===705){
                    this.swal_fire(response.error, 'error')
                  }
                },(error)=>{
                  Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error Updating the data',
                    showConfirmButton: false,
                    timer: 1800      })
                  console.log("Error")
          });
     })
     
     
    })
            break;
        case 3:
          formData.append("file",this.file)
          var uReport_list:any=[];
      
                  let variable= this.apiserve.import_statmenent_data(formData);
                  variable.then((response:any) =>{
                  
                      if (response.error_id===701){
                        this.swal_fire("All Emails already exists!", 'error')
                      }
                      if (response.error_id===800){
                        this.swal_fire("Unexpected error occured!", 'error')
                      }

                      if (response.error_id===700){
                        this.swal_fire("All Emails added Sucessfully!", 'success')
                      }
                      if (response.error_id===703){
                        this.swal_fire("Some Emails could'not be added.Pls Check!", 'sucess')
                      }
                      if (response.error_id===704){
                        this.swal_fire(response.error, 'error')
                      }
                      if (response.error_id===705){
                        this.swal_fire(response.error, 'error')
                      }
                    },(error)=>{
                      Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Error Updating the data',
                        showConfirmButton: false,
                        timer: 1800      })
                      console.log("Error")
              });
        
        
       
            break;
       
        default:
    }
      //
    
}

  exportFiles(e:any){

  }

  
  public Download(element:any): void{
    console.log(element)
    switch (element) {
      case 2:
        this.apiserve.export_user_data().subscribe(response => 
            { let filename="report.csv";
            let blob : Blob=response.body as Blob;
            let a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob)
            a.click();
          
          });
          break;
      case 4:
        this.apiserve.export_statement_data().subscribe(response => 
          { let filename="report.csv";
          let blob : Blob=response.body as Blob;
          let a = document.createElement('a');
          a.download = filename;
          a.href = window.URL.createObjectURL(blob)
          a.click();
        
        });
          break;
      default:
  }
    // this.apiserve.export_user_data().subscribe(response => 
    //   { let filename="report.csv";
    //   let blob : Blob=response.body as Blob;
    //   let a = document.createElement('a');
    //   a.download = filename;
    //   a.href = window.URL.createObjectURL(blob)
    //   a.click();
    
    // });

    }

}
