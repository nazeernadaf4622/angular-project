import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import { LoaderService } from '../loader/loader.service';
import { DimensionApiService } from './dimension-api.service';


class RenewalDataModel {  
  name:string;
  id: string;

  constructor(userResponse: any) {
    this.name = userResponse.name;
    this.id = userResponse.id;
  }
}

class DimensionDataModel{
  dDimensionID:string;
  dDescription:string;
  dInactive:boolean;

  constructor(user: any) {
    this.dDimensionID = user.dDimensionID;
    this.dDescription = user.dDescription;
    this.dInactive = user.dInactive;
  }
}

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.scss']
})
export class DimensionsComponent implements OnInit {


  todo:RenewalDataModel[] = [];

  done :RenewalDataModel[] = [];

  todo_details:RenewalDataModel[] = [];

  done_details :RenewalDataModel[] = [];

  dVirtueID:string[]=[];

  displayedColumns: string[] = [ 'vVirtueID', 'vVirtueName','dInactive'];
  dataSource_dimen :any;
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
  activeStatus:any;

  constructor(private fb:FormBuilder ,private  service:DimensionApiService,public loaderservice: LoaderService)  { 

    this.userForm=this.fb.group({
      dDescription:['',Validators.required],
      dInactive:['',Validators.required],
      dVirtueID:[this.done]
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
    this.done.forEach(data =>{
      this.dVirtueID.push(data.id)
     })
    var mySet = new Set(this.dVirtueID);
    this.dVirtueID = [...mySet];
    this.userForm.value.dVirtueID = this.dVirtueID
    this.q1 ={"Break Zone":"NIL",
                  "Deter Zone":"NIL",
                  "Power Zone":"NIL",
                  "Buding Zone":"NIL",
                  "Silent Zone":"NIL" 
                  }
    this.vquestions={Q1:this.q1,Q2:this.q1};
    this.userForm.value["dQuestions"]=this.vquestions
    this.service.postDimensiondetails(this.userForm.value).subscribe((res)=> {
    this.display();
    this.counter_rest();
    this.done=[]
         })
    this.userForm.reset();

    
  }

  async updateItem(id:any){
    this.dVirtueID=[]
    this.listData = {
      "dDescription":this.detailsform.value.dDescription,
        "dataStatmenet":this.detailsform.value.dataStatmenet,
        "dataColorPara":this.detailsform.value.dataColorPara,
        "dataOneliners":this.detailsform.value.dataOneliners,
        "dataTrinity":this.detailsform.value.dataTrinity,
        "dataCertificate":this.detailsform.value.dataCertificate,
        
        "dInactive":this.detailsform.value.dInactive ??false,
        "vquestions":{"Q1": 
                          {"Break Zone":this.detailsform.value.q1BreakZone,
                           "Deter Zone":this.detailsform.value.q1DeterZone,
                           "Power Zone":this.detailsform.value.q1PowerZone,
                           "Buding Zone":this.detailsform.value.q1BuddingZone,
                           "Silent Zone":this.detailsform.value.q1SilentZone
                        },
                   
                   "Q2": 
                          {"Break Zone":this.detailsform.value.q2BreakZone,
                           "Deter Zone":this.detailsform.value.q2DeterZone,
                           "Power Zone":this.detailsform.value.q2PowerZone,
                           "Buding Zone":this.detailsform.value.q2BuddingZone,
                           "Silent Zone":this.detailsform.value.q2SilentZone
                        }
                  },
              }
        this.done_details.forEach(data =>{
            this.dVirtueID.push(data.id)
               })
        var mySet = new Set(this.dVirtueID);
        this.dVirtueID = [...mySet];
        this.listData["dVirtueID"] = this.dVirtueID
       console.log(this.listData)
    await this.service.updateDimensionById(id,this.listData).subscribe((res)=> {
        
        this.display();
        this.counter_rest();
      })
     
    }
 

  deleteDimensionById(id:any){
    this.service.deleteVirtueById(id).subscribe(data =>{
      this.detailsform.reset();
      this.selectedIndex=0;
      this.done=[];
      this.counter_rest();
    })
  }


  async getDimensionDetails(row:any): Promise<void>{
    
    this.done_details=[]
    this.todo=[]
    this.selectedIndex=1
    this.service.getDimensiondetailsById(row.dDimensionID).subscribe( async data => {

      
      
      this.service.getVirtueNameId(data.dVirtueID).subscribe( data => {
        data.forEach((e: { vVirtueName: string;vVirtueID:string }) =>{
        this.done_details.push({name:e.vVirtueName,id:e.vVirtueID})
        })
      
      })

      this.VirtueList = await this.service.getVirtuedetails();
    this.VirtueList.forEach((e: { vVirtueName: string;vVirtueID:string }) =>{
      this.todo.push({name:e.vVirtueName,id:e.vVirtueID})
      })
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
      if (data.dInactive===false) {
        this.activeStatus= "Active"
      }else{
        this.activeStatus= "Inactive"
      }
      
    });
    
    
  } 
  drop(event: CdkDragDrop<any>) {
    console.log(this.done)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,);
     }
  }


  drop_details_form(event: CdkDragDrop<any>) {
   
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.done)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,);
     }
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
        },30)
    
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
        },40)
    
      const counterstop2:any = setInterval(()=>{
      this.total_counter++;
      if (this.total_counter==this.total_virtues){
        clearInterval(counterstop2);
        }
        },30)
    
      })
    }
  
myTabSelectedIndexChange(index:any){
  if (this.selectedIndex!=index){
    this.done=[];
    this.display();
    this.detailsform.reset(); 
    this.userForm.reset();
    this.vInactiveChecked=false;
   
  }
  }

back(){
    this.selectedIndex=0;
  }

onChange(event:any){
    if (event.checked){

      this.activeStatus="Inactive"
    }
    else{
      this.activeStatus="Active"
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


DimensionDataList: DimensionDataModel[] = [];

async display(): Promise<void>{
  this.todo=[]
  this.done=[]
  this.DimensionDataList=[]
  await this.service.getDimensiondetails().subscribe( data => {

     for (let i = 0; i < data.length; i++) {
       
       data[i].dInactive = (!data[i].dInactive).toString().toUpperCase()
       
       const newpvc = new DimensionDataModel(data[i]);
       this.DimensionDataList.push(newpvc);
     }
     this.dataSource_dimen = new MatTableDataSource(this.DimensionDataList);
   });
   
  this.VirtueList = await this.service.getVirtuedetails();
  this.VirtueList.forEach((e: { vVirtueName: string;vVirtueID:string }) =>{
      this.todo.push({name:e.vVirtueName,id:e.vVirtueID})
      })
    
  }



async ngOnInit(): Promise<void> {
    this.counter_rest();
    this.display();
    this. vInactiveChecked=false;
    if (this.vInactiveChecked){

      this.activeStatus="Inactive"
    }
    else{
      this.activeStatus="Active"
    }
    
    }
   
  


  }
  

function e(e: any, arg1: (any: any) => void) {
  throw new Error('Function not implemented.');
}

