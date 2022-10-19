import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";

import { LoaderService } from '../loader/loader.service';
import {  StatementsService } from './statements-api.service';


class RenewalDataModel {  
  sDescription:string;
  sStatementID: string;
  sInactive:boolean;

  constructor(userResponse: any) {
    this.sDescription = userResponse.sDescription;
    this.sStatementID = userResponse.sStatementID;
    this.sInactive = userResponse.sInactive;
  }
}


class VirtuesDataModel {  
  vVirtueID:string;
  vVirtueName: string;

  constructor(userResponse: any) {
    this.vVirtueID = userResponse.vVirtueID;
    this.vVirtueName = userResponse.vVirtueName;
  }
}

class ReportDataModel {  
  rID:string;
  rName: string;

  constructor(userResponse: any) {
    this.rID = userResponse.rID;
    this.rName = userResponse.rName;
  }
}

class UserDataModel {  
  tID:string;
  tName: string;

  constructor(userResponse: any) {
    this.tID = userResponse.tID;
    this.tName = userResponse.tName;
  }
}

class DimensionDataModel{
  sDescription:string;
  sAnswer:string;
  sType:string;
  sReport:string;
  sVirtueID:string;
  sInactive:boolean;

  constructor(user: any) {
    this.sDescription = user.sDescription;
    this.sAnswer = user.sAnswer;
    this.sType = user.sType;
    this.sReport = user.sReport;
    this.sVirtueID = user.sVirtueID;
    this.sInactive = user.sInactive;
  }
}
@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {



  dVirtueID:string[]=[];

  displayedColumns: string[] = [ 'sStatementID', 'sDescription','sInactive'];
  datasource :any;
  isChecked = true;
  userForm:FormGroup;
  detailsform: FormGroup;
  listData:any;
  public VirtueList: any;
  selectedIndex=0
  data={};
  textcolor:any;
  vInactiveChecked=false;
  q1:any;
  vquestions={};
  DimensionList:any;

  active_counter =0;
  inactive_counter =0;
  total_counter =0;

  active_virtues=0;
  inactive_virtues=0;
  total_virtues=0;
  sAnswer={};
  activeStatus= "Active"

  constructor(private fb:FormBuilder ,private  service:StatementsService,public loaderservice: LoaderService)  { 

    this.userForm=this.fb.group({
      sDescription:['',Validators.required],
      sInactive:[false],
      dStronglyAgree:[Number,Validators.required],
      dAgree:[Number,Validators.required],
      dDisagree:[Number,Validators.required],
      dStronglyDisagree:[Number,Validators.required],
      dNeutral:[Number,Validators.required],
      sVirtueID:['',Validators.required],
      sReport:['',Validators.required],
      sType:['',Validators.required],
      sAnswer:[''],
      


    })

    this.detailsform = this.fb.group({
      dDimensionID:[''],
      dDescription:['',],
      dataStatmenet:['',],
      dataColorPara:['',],

      dataOneliners:['',],
      dataTrinity:['',],
      dataCertificate:['',],
      q1PowerZone:['',],
      q1BreakZone:[''],
      q1BuddingZone:[''],
      q1SilentZone:[''],
      q1DeterZone:[''],
      q2BreakZone:[''],
      q2PowerZone:[''],
      q2BuddingZone:[''],
      q2SilentZone:[''],
      q2DeterZone:[''],
      dInactive:[],
      dVirtueID:[]
    });




  }


 
  public addItem():void{
    if (this.userForm.valid){
      this.userForm.value.sVirtueID= (this.userForm.value.sVirtueID).toString();
      this.userForm.value.sReport= (this.userForm.value.sReport).toString();
      this.userForm.value.sType= (this.userForm.value.sType).toString();
      this.userForm.value.sAnswer ={"Agree": this.userForm.value.dAgree,
                    "Strongly Agree": this.userForm.value.dStronglyAgree,
                    "Disagree": this.userForm.value.dDisagree,
                    "Strongly Disgree": this.userForm.value.dStronglyDisagree,
                    "Neutral": this.userForm.value.dNeutral 
                    }
                    console.log(this.userForm.value)
      this.service.postStatementdetails(this.userForm.value).subscribe((res)=> {
        this.userForm.reset()
        this.vInactiveChecked=false;
        this.display();
           })
      this.display();

    }
    else{
      alert("Form Error")
    }
    
    
  }


  async updateItem(id:any){
    // this.dVirtueID=[]
    // this.listData = {
    //   "dDescription":this.detailsform.value.dDescription,
    //     "dataStatmenet":this.detailsform.value.dataStatmenet,
    //     "dataColorPara":this.detailsform.value.dataColorPara,
    //     "dataOneliners":this.detailsform.value.dataOneliners,
    //     "dataTrinity":this.detailsform.value.dataTrinity,
    //     "dataCertificate":this.detailsform.value.dataCertificate,
        
    //     "dInactive":this.detailsform.value.dInactive ??false,
    //     "vquestions":{"Q1": 
    //                       {"Break Zone":this.detailsform.value.q1BreakZone,
    //                        "Deter Zone":this.detailsform.value.q1DeterZone,
    //                        "Power Zone":this.detailsform.value.q1PowerZone,
    //                        "Buding Zone":this.detailsform.value.q1BuddingZone,
    //                        "Silent Zone":this.detailsform.value.q1SilentZone
    //                     },
                   
    //                "Q2": 
    //                       {"Break Zone":this.detailsform.value.q2BreakZone,
    //                        "Deter Zone":this.detailsform.value.q2DeterZone,
    //                        "Power Zone":this.detailsform.value.q2PowerZone,
    //                        "Buding Zone":this.detailsform.value.q2BuddingZone,
    //                        "Silent Zone":this.detailsform.value.q2SilentZone
    //                     }
    //               },
    //           }
    //     this.done_details.forEach(data =>{
    //         this.dVirtueID.push(data.id)
    //            })
    //     var mySet = new Set(this.dVirtueID);
    //     this.dVirtueID = [...mySet];
    //     this.listData["dVirtueID"] = this.dVirtueID
    //    console.log(this.listData)
    // await this.service.updateDimensionById(id,this.listData).subscribe((res)=> {
    //     this.reset();
    //     this.todo=[];
    //     this.done_details=[];
    //   })
    //  this.vInactiveChecked=false
    }
 

  deleteDimensionById(id:any){
    // this.service.deleteVirtueById(id).subscribe(data =>{
    //   this.detailsform.reset();
    //   this.selectedIndex=0;
    //   this.display();
    //   this.counter_rest();
    //   this.done=[]
    // })
  }




  async getDimensionDetails(row:any): Promise<void>{
    
    this.service.getDimensiondetailsById(row.dDimensionID).subscribe( async data => {

      this.detailsform.setValue({
        dDimensionID:data.dDimensionID,
        dDescription:data.dDescription,
        dataStatmenet:data.dataStatmenet,
        dataColorPara:data.dataColorPara,
        dataOneliners:data.dataOneliners,
        dataTrinity:data.dataTrinity,
        dataCertificate:data.dataCertificate,
        q1PowerZone:data.dQuestions.Q1["Power Zone"] ??"",
        q1BuddingZone:data.dQuestions.Q1["Buding Zone"]??"",
        q1BreakZone:data.dQuestions.Q1["Break Zone"] ??"",
        q1SilentZone:data.dQuestions.Q1["Silent Zone"] ??"",
        q1DeterZone:data.dQuestions.Q1["Deter Zone"] ??"",
  
        q2PowerZone:data.dQuestions.Q1["Power Zone"] ??"",
        q2BreakZone:data.dQuestions.Q2["Break Zone"] ??"",
        q2BuddingZone:data.dQuestions.Q2["Buding Zone"] ??"",
        q2SilentZone:data.dQuestions.Q2["Silent Zone"] ??"", 
        q2DeterZone:data.dQuestions.Q2["Deter Zone"] ??"",
        dVirtueID:"",
        dInactive:data.dInactive ??false
  
      })

    });
    
  } 
  onChange(event:any){
    if (event.checked){

      this.activeStatus="Inactive"
    }
    else{
      this.activeStatus="Active"
    }
console.log(event.checked)
  }
  back(){
    this.selectedIndex=0;
    this.display();
    this.counter_rest();
  }

  
  async loaddata():Promise<void>{
    this.VirtueDataList=[]
        await this.service.getVirtuedetails().subscribe(data => {
    
        for (let i = 0; i < data.length; i++) {
    
          const newpvc = new VirtuesDataModel(data[i]);
          this.VirtueDataList.push(newpvc);
        }
    
      });
  }
    
    


  async counter_rest(){
    this.active_counter =0;
    this.inactive_counter =0;
    this.total_counter =0;

    this.active_virtues=0;
    this.inactive_virtues=0;
    this.total_virtues=0;
    this.service.dimen_count().subscribe((res)=> {
      this.active_virtues=res.active_dimens
      this.inactive_virtues = res.inactive_dimens
      this.total_virtues = res.total_dimens


      const counterstop: any= setInterval(()=>{
        this.active_counter++;
        if (this.active_counter==this.active_virtues){
          clearInterval(counterstop);
          }
        },0)
    
      const counterstop1:any = setInterval(()=>{
        this.inactive_counter++;
        console.log(this.inactive_virtues)
        if (this.inactive_virtues>0){
          if(this.inactive_counter==this.inactive_virtues ){
            clearInterval(counterstop1);
            }
          }
        else{
          this.inactive_counter=0;
          clearInterval(counterstop1);
        }
      },0)
    
      const counterstop2:any = setInterval(()=>{
      this.total_counter++;
      if (this.total_counter==this.total_virtues){
        clearInterval(counterstop2);
        }
      },0)
    
      })
}
  
myTabSelectedIndexChange(index:any){
  if (this.selectedIndex!=index){

    
  }
}
reset(){
        
  this.userForm.reset();
  this.userForm=this.fb.group({
                                vVirtueName:['',Validators.required],
                                vDescription:['',Validators.required],
                                vInactive: [false],
                                vGoverning: [false],
                              })

  this.vInactiveChecked=false
  this.detailsform.reset();
  this.display();
  this.counter_rest();

}

    RenewalDataList :RenewalDataModel[]=[];
   DimensionDataList: DimensionDataModel[] = [];
   VirtueDataList: VirtuesDataModel[] = [];
   ReportDataList: ReportDataModel[]=[];
   UserDataList : UserDataModel[]=[];
 
  async display(): Promise<void>{
    this.DimensionDataList=[]
    await this.service.getStatementdetails().subscribe( data => {

     for (let i = 0; i < data.length; i++) {
       
       data[i].sInactive = (!data[i].sInactive).toString().toUpperCase()
       
       const newpvc = new DimensionDataModel(data[i]);
       this.DimensionDataList.push(newpvc);
     }
     this.datasource = new MatTableDataSource(this.DimensionDataList);

   });

   this.VirtueDataList=[]
        await this.service.getVirtuedetails().subscribe(data => {
    
        for (let i = 0; i < data.length; i++) {
    
          const newpvc = new VirtuesDataModel(data[i]);
          this.VirtueDataList.push(newpvc);
        }
    
      });
    
    this.ReportDataList=[]
        await this.service.getReportDetails().subscribe(data => {
    
        for (let i = 0; i < data.length; i++) {
    
          const newrep = new ReportDataModel(data[i]);
          this.ReportDataList.push(newrep);
        }
    
      });
          
    this.UserDataList=[]
    await this.service.getUserTypeDetails().subscribe(data => {

    for (let i = 0; i < data.length; i++) {

      const newusr = new UserDataModel(data[i]);
      this.UserDataList.push(newusr);
    }

  });


  }



  async ngOnInit(): Promise<void> {
    this.counter_rest();
    this.display();

    this. vInactiveChecked=false;
    this.VirtueList = await this.service.getVirtuedetails();
    }
   
  


  }
  

