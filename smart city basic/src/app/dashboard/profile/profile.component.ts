import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { ProfileServicesService } from './profile-services.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DatePipe } from '@angular/common'

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

class ProfessionDataModel {  
  tID:number;
  tName:string;

  constructor(userResponse: any) {
    this.tID= userResponse.tID;
    this.tName = userResponse.tName;

  }
}


class RenewalDataModel {  
  uProfileID:number;
  udob:string;
  uCreatedby: string;
  uFirstName: string;
  uLastName: string;
  uGender:string;
  ucontactNo:string;
  uWassupNo: string;
  uAddress: string;
  uResidingCountry: string;
  uState: boolean;
  uLocation: string;
  uEducation:String;
  uSchool:String;
  uProfession:String;

  uCompany:string;
  uDesignation: string;
  uYearofExp:string;
  uDepartment:string;
  uWorkLocation:string;

  uExtracirricular1: string;
  uExtracirricular2:string;
  uExtracirricular3:string;

  uHobbies1:string;
  uHobbies2:string;
  uHobbies3:string;

  uObjectieves_11:string;
  uObjectieves_12:string;
  uObjectieves_13:string;
  uObjectieves_21:string;
  uObjectieves_22:string;
  uObjectieves_23:string;

  uUserID:string;
  uType:string;

  constructor(userResponse: any) {
    this.uProfileID= userResponse.uProfileID;
    this.udob = userResponse.udob;
    this.uCreatedby = userResponse.uCreatedby;
    this.uFirstName = userResponse.uFirstName;
    this.uLastName = userResponse.uLastName;
    this.uGender=userResponse.ucontactNo
    this.ucontactNo =userResponse.ucontactNo
    this.uWassupNo=userResponse.uWassupNo
    this.uAddress=userResponse.uAddress
    this.uResidingCountry=userResponse.uResidingCountry
    this.uState=userResponse.uState
    this.uLocation=userResponse.uLocation
    this.uEducation=userResponse.uEducation
    this.uSchool = userResponse.uSchool
    this.uProfession=userResponse.uProfession

    this.uCompany=userResponse.uCompany
    this.uDesignation=userResponse.uDesignation
    this.uYearofExp=userResponse.uYearofExp
    this.uDepartment=userResponse.uDepartment
    this.uWorkLocation =userResponse.uWorkLocation

    this.uExtracirricular1=userResponse.uExtracirricular1
    this.uExtracirricular2=userResponse.uExtracirricular2
    this.uExtracirricular3=userResponse.uExtracirricular3

    this.uHobbies1=userResponse.uHobbies1
    this.uHobbies2=userResponse.uHobbies2
    this.uHobbies3=userResponse.uHobbies3

    this.uObjectieves_11=userResponse.uObjectieves_11
    this.uObjectieves_12=userResponse.uObjectieves_12
    this.uObjectieves_13=userResponse.uObjectieves_13
    this.uObjectieves_21=userResponse.uObjectieves_21
    this.uObjectieves_22=userResponse.uObjectieves_22
    this.uObjectieves_23=userResponse.uObjectieves_23

    this.uUserID=userResponse.uUserID
    this.uType=userResponse.uType


    
  }
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS ,}
  ]
})
export class ProfileComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup
  duration: number = 1500
  Profession: any[] = ['Student', 'Employee'];
  industries: any[] = ['Software', 'Marketplace', 'Education', 'Mining'];
  selected = 'None';
  uUserID:any
  dataSource :any;
  selectedUser: any;
  usergroups:any;
  startDate = new Date(2022, 0, 2);
  profile_exist= false;

  constructor(private _formBuilder: FormBuilder,private router: Router,
    private qsnService: QuestionService,
    private profService: ProfileServicesService,
    private datepipe:DatePipe)
     {
    this.firstFormGroup = this._formBuilder.group({
      uProfileID: ['',Validators.required],
      uDob: ['',Validators.required],
      uEmailId: ['', [Validators.required, Validators.email]],
      uFirstName: ['',Validators.required],
      uLastName: ['',Validators.required],
      uGender: ['',Validators.required],
      ucontactNo: ['',Validators.required],
      uWassupNo: ['',Validators.required],
      uAddress: ['',Validators.required],
      uResidingCountry: ['',Validators.required],
      uState: ['',Validators.required],
      uLocation: ['',Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      uProfession: ['',Validators.required],
      uEducation: ['',Validators.required],
      uSchool: ['',Validators.required],
      uCompany: ['',Validators.required],
      uDesignation: ['',Validators.required],
      uYearofExp: ['',Validators.required],
      uDepartment: ['',Validators.required],
      uWorkLocation: ['',Validators.required],
      uExtracirricular1: ['',Validators.required],
      uExtracirricular2: ['',Validators.required],
      uExtracirricular3: ['',Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      uHobbies1: ['',Validators.required],
      uHobbies2: ['',Validators.required],
      uHobbies3: ['',Validators.required],
      uObjectieves_11: ['',Validators.required],
      uObjectieves_12: ['',Validators.required],
      uObjectieves_13: ['',Validators.required],
      uObjectieves_21: ['',Validators.required],
      uObjectieves_22: ['',Validators.required],
      uObjectieves_23: ['',Validators.required],
      uUserID: sessionStorage.getItem('uUserID'),


    });
    console.log(this.uUserID);
  }
  
  DataList: RenewalDataModel[]  =[]
  ProfessoinDataList: ProfessionDataModel[]  =[]
  ngOnInit(): void {
    this.usergroups=[]
    this.profService.getUserTypeList().subscribe(data =>{
      for (let i = 0; i < data.length; i++) {
        const newpvc = new ProfessionDataModel(data[i]);
        this.usergroups.push(newpvc)
      }
     
    });


    this.profService.check_user_profile(sessionStorage.getItem('uUserID')).subscribe((res: any) => {
 
      if (res===false){
        this.profile_exist= false
        console.log("Done")

      }
      else{
          this.profile_exist= true
          this.selectedUser =  res.uProfession
          this.firstFormGroup.patchValue(res)
          this.firstFormGroup.value.uDob= new Date(this.firstFormGroup.value.uDob).toISOString();
          this.secondFormGroup.patchValue(res)
          this.thirdFormGroup.patchValue(res)
          
          }
    });
  }

  submit() {
    var formData = new FormData
    let keyvalues = Object.keys(this.firstFormGroup.value);
    keyvalues.forEach(e => {
      formData.append(e, this.firstFormGroup.value[e])
      })
    keyvalues = Object.keys(this.secondFormGroup.value);
      keyvalues.forEach(e => {
      formData.append(e, this.secondFormGroup.value[e])
        })

        keyvalues = Object.keys(this.thirdFormGroup.value);
        keyvalues.forEach(e => {
        formData.append(e, this.thirdFormGroup.value[e])
          })

    var data={}
    console.log(formData,this.firstFormGroup.value.uProfileID)
    this.profService.post_user_profile(this.firstFormGroup.value.uProfileID, formData).subscribe((res)=>{
      // this.router.navigate(['sidenav/dashboard/welcome']);
      this.router.navigate(['sidenav/dashboard/question']);
    })
    
  }




update() {
  var formData = new FormData
  this.firstFormGroup.value.uDob=new Date(this.firstFormGroup.value.uDob).toISOString();
  let keyvalues = Object.keys(this.firstFormGroup.value);
  keyvalues.forEach(e => {
    formData.append(e, this.firstFormGroup.value[e])
    })
  keyvalues = Object.keys(this.secondFormGroup.value);
    keyvalues.forEach(e => {
    formData.append(e, this.secondFormGroup.value[e])
      })

      keyvalues = Object.keys(this.thirdFormGroup.value);
      keyvalues.forEach(e => {
      formData.append(e, this.thirdFormGroup.value[e])
        })

  this.profService.update_user_profile(this.firstFormGroup.value.uProfileID, formData).subscribe((res)=>{
    // this.router.navigate(['sidenav/dashboard/welcome']);
    this.router.navigate(['sidenav/dashboard/welcome']);
  })
  
}

}
function moment(arg0: number[]): any {
  throw new Error('Function not implemented.');
}

