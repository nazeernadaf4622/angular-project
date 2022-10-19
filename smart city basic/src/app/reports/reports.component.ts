import { Component, OnInit } from '@angular/core';
import {  MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import Swal from 'sweetalert2';
import { ReportServicesService } from './report-services.service'
import { DatePipe } from '@angular/common'

class ReportDataModel {
  rID:number
  rName:string

  constructor(userResponse: any) {
    this.rID = userResponse.rID;
    this.rName= userResponse.rName;
  }
}

class ExamDataModel {  
    eExamID: string;
    eUserID: number;
    eExamCreatedOn: string;
    eExamCompleted: boolean;
    eTotalStatements: number;
    ePercentCompleted: string;

  constructor(userResponse: any) {
    this.eExamID= userResponse.eExamID;
    this.eUserID = userResponse.eUserID;
    this.eExamCreatedOn= userResponse.eExamCreatedOn;
    this.eExamCompleted = userResponse.eExamCompleted;
    this.eTotalStatements= userResponse.eTotalStatements;
    this.ePercentCompleted = userResponse.ePercentCompleted;
}
}


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  displayedColumns: string[] = ['examid', 'label','function', 'action', 'delete'];
  file:any;
  date=new Date();
  DataList: any;
  dataSource:any;
  selectedReport:any;
  constructor(private fb: FormBuilder,public apiservice: ReportServicesService, private datepipe:DatePipe) { }

  reportgroups: ReportDataModel[] = []

  async loadReports() {
    this.reportgroups=[]
      await this.apiservice.get_report_by_user(sessionStorage.getItem('uUserID')).subscribe( data => {

        for (let i = 0; i < data.length; i++) {
          const newpvc = new ReportDataModel(data[i]);
          this.reportgroups.push(newpvc)


        }
      });
    }

  loadAPI(){
    this.DataList =[]
    this.dataSource=[]
    this.apiservice.sort_exams_by_userid(sessionStorage.getItem('uUserID')).subscribe((data) =>{
      for (let i = 0; i < data.length; i++) {
          data[i].eExamCreatedOn = this.datepipe.transform((data[i].eExamCreatedOn), 'yyyy-MM-dd HH:mm:ss');
          // data[i].eExamID= i+1
        const newpvc = new ExamDataModel(data[i]);
        this.DataList.push(newpvc);
      }
      this.dataSource = new MatTableDataSource(this.DataList);
    });
}

  ngOnInit(): void {
    this.loadAPI();
    this.loadReports();
  }

  

Download(event:any, examid:any,ePercentCompleted:any){
console.log(examid, this.selectedReport)
if (ePercentCompleted !== '100.0'){
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Sorry. You have not completed the Test.!',
    showConfirmButton: false,
    timer: 2000      })
}
else{
this.apiservice.download(examid).subscribe(response => 
  { let filename="report.pdf";
  let blob : Blob=response.body as Blob;
  let a = document.createElement('a');
  a.download = filename;
  a.href = window.URL.createObjectURL(blob)
  a.click();

});
}

  }

Delete(examid:any){
    this.apiservice.delete_exam_data(examid).subscribe((res)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Deleted Sucessfully',
        showConfirmButton: false,
        timer: 2000      })
        this.loadAPI();

}, (error)=>{
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Something went wrong..!!',
    showConfirmButton: false,
    timer: 2000      })
})
  
}


}
