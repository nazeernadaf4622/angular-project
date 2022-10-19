import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VirtueServicesService } from './virtue-services.service';
import { MatTableDataSource } from "@angular/material/table";
import { LoaderService } from '../loader/loader.service';


class RenewalDataModel {  
  vVirtueID:number;
  vVirtueName: string;
  vGoverning: boolean;
  vInactive: boolean;

  constructor(userResponse: any) {
    this.vVirtueID = userResponse.vVirtueID;
    this.vVirtueName = userResponse.vVirtueName;
    this.vGoverning = userResponse.vGoverning;
    this.vInactive = userResponse.vInactive;
  }
}
@Component({
  selector: 'app-virtues',
  templateUrl: './virtues.component.html',
  styleUrls: ['./virtues.component.scss']
})
export class VirtuesComponent implements OnInit {

  
  displayedColumns: string[] = [ 'vVirtueID', 'vVirtueName', 'vGoverning','vInactive'];
  dataSource :any;
  isChecked = true;
  userForm:FormGroup;
  detailsform: FormGroup;
  listData:any;
  public VirtueList: any;
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
  vquestions={};

  active_counter =0;
  inactive_counter =0;
  total_counter =0;

  active_virtues=0;
  inactive_virtues=0;
  total_virtues=0;
  status ='';
  col="black"

  constructor(private fb :FormBuilder,private virtueServices:VirtueServicesService,public loaderservice: LoaderService) {

    this.userForm=this.fb.group({
        vVirtueName:['',Validators.required],
        vDescription:[''],
        vInactive: [false],
        vGoverning: [false],
      })

    this.detailsform=this.fb.group({
        vVirtueId:['',],
        vVirtueName:['',],
        vDescription:['',],
        vInactive: [],
        vGoverning: [],
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
      })
}
  async counter_rest(){
    this.active_counter =0;
    this.inactive_counter =0;
    this.total_counter =0;

    this.active_virtues=0;
    this.inactive_virtues=0;
    this.total_virtues=0;
    this.virtueServices.virtue_count().subscribe((res)=> {
      this.active_virtues=res.active_virtues
      this.inactive_virtues = res.inactive_virtues
      this.total_virtues = res.total_virtues

      console.log( this.active_virtues,this.inactive_virtues, this.total_virtues)

      const counterstop: any= setInterval(()=>{
        this.active_counter++;
        if (this.active_counter==this.active_virtues){
          clearInterval(counterstop);
          }
        },30)
    
      const counterstop1:any = setInterval(()=>{
        this.inactive_counter++;
        console.log(this.inactive_virtues)
        if(this.inactive_counter==this.inactive_virtues){
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
  

  async addItem(){
     if (this.userForm.valid){
        console.log(this.userForm.value)
        this.q1 ={"Break Zone":"NIL",
                  "Deter Zone":"NIL",
                  "Power Zone":"NIL",
                  "Buding Zone":"NIL",
                  "Silent Zone":"NIL" 
                  }
        this.vquestions={Q1:this.q1,Q2:this.q1};
        this.userForm.value["vquestions"]=this.vquestions
        this.virtueServices.postVirtuedetails(this.userForm.value).subscribe((res)=> {
        this.display();
        this.counter_rest();
        })
        this.userForm.reset();
         }
  }

  async updateItem(id:any){
    this.listData = {
      "vVirtueName": this.detailsform.value.vVirtueName,
      "vDescription": this.detailsform.value.vDescription,
      "vGoverning": this.detailsform.value.vGoverning,
      "vInactive":this.detailsform.value.vInactive ,

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
    await this.virtueServices.updateVirtueById(id,this.listData).subscribe((res)=> {
      this.display();
      this.counter_rest();
    })
  }
  
  async deleteItem(id:any){
    this.virtueServices.deleteVirtueById(id).subscribe(data =>{
      this.detailsform.reset();
      this.selectedIndex=0;
      this.counter_rest();

    })
  }

  async getVirtueDetails(row:any): Promise<void>{
      this.detailsform.reset();
      this.selectedIndex=1
      this.virtueServices.getVirtuedetailsByID(row.vVirtueID).subscribe( data => {

        this.detailsform.setValue({
          vVirtueId:data.vVirtueID,
          vVirtueName:data.vVirtueName,
          vDescription:data.vDescription,
    
          q1PowerZone:data.vquestions.Q1["Power Zone"] ??"",
          q1BuddingZone:data.vquestions.Q1["Buding Zone"]??"",
          q1BreakZone:data.vquestions.Q1["Break Zone"] ??"",
          q1SilentZone:data.vquestions.Q1["Silent Zone"] ??"",
          q1DeterZone:data.vquestions.Q1["Deter Zone"] ??"",
    
          q2PowerZone:data.vquestions.Q1["Power Zone"] ??"",
          q2BreakZone:data.vquestions.Q2["Break Zone"] ??"",
          q2BuddingZone:data.vquestions.Q2["Buding Zone"] ??"",
          q2SilentZone:data.vquestions.Q2["Silent Zone"] ??"", 
          q2DeterZone:data.vquestions.Q2["Deter Zone"] ??"",
          vGoverning:data.vGoverning ??false,
          vInactive:data.vInactive ??false
    
        })

      });
      
    } 
    onChange(event:any){
      if (event.checked){
  
        this.status="Inactive"
      }
      else{
        this.status="Active"
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
        this.vGoverningChecked=false
        this.vInactiveChecked=false
        this.detailsform.reset();
        this.display();
        this.counter_rest();
      
    }

  RenewalDataList: RenewalDataModel[] = [];

  async display(): Promise<void>{
     this.RenewalDataList=[]
     this.VirtueList =  await this.virtueServices.getVirtuedetails().subscribe( data => {

      for (let i = 0; i < data.length; i++) {
        data[i].vGoverning = (data[i].vGoverning).toString().toUpperCase()
        data[i].vInactive = (!data[i].vInactive).toString().toUpperCase()
        
        const newpvc = new RenewalDataModel(data[i]);
        this.RenewalDataList.push(newpvc);
      }
      this.dataSource = new MatTableDataSource(this.RenewalDataList);
    });
     
   }

  back(){
    this.selectedIndex=0;
    this.userForm.reset();  
  }

  save(){
     this.listData.save
     localStorage.setItem('item',JSON.stringify(this.listData))
		}
   
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enableDisableForm():void{
    if(this.userForm.enabled){
      this.userForm.disable();
    }else{
      this.userForm.enable();
    }
  }
 
  get enableText():string{
    return this.userForm.enabled ? 'Disable' :'Enable';
  }

  toggleSidebarForMe(){
    return this.userForm.touched.valueOf
  }

  toggleSidebarForDetails(){
    return this.detailsform.touched.valueOf
  }

  myTabSelectedIndexChange(index:any){
    if (this.selectedIndex!=index){
      this.display();
      this.detailsform.reset(); 
      this.userForm.reset();
      this.vInactiveChecked=false;

    }
  }

  async ngOnInit(): Promise<void> {
    this.counter_rest();
    this.display();
    this.vGoverningChecked=false
    this.vInactiveChecked=false
    this.status="Active"
  }

    
  }

