import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentServiceService } from '../payment-service.service';
import Swal from 'sweetalert2';


class UserDataModel {
  tID:number
  tName:string

  constructor(userResponse: any) {
    this.tID = userResponse.tID;
    this.tName= userResponse.tName;
  }
}

class PaymentData {
  id: number;
  name: string;
  price: any;
  constructor(userResponse: any) {
    this.id = userResponse.id;
    this.name = userResponse.name;
    this.price = userResponse.price;
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selected1:any;
  selected2:any;
  selectedUser='';
  reportType:any=[];
  user_no=1;
  orgRegUserLimit:number=1;
  userResponseData:any;
  firstFormGroup = this._formBuilder.group({
    uOrgName: ['', Validators.required],
    orgCode: ['', Validators.required],
    orgAdStreetNo: ['', Validators.required],
    orgAdStreetName: ['', Validators.required],
    orgMainPhone: ['', Validators.required],
    orgRegUserLimit: ['', Validators.required],
    orgUserType: ['', Validators.required],

    uUserEmail: ['', Validators.required],
    password: ['', Validators.required],
    uUsername: ['', Validators.required],
    uType: ['', Validators.required],
    uIpAddress: ['', Validators.required],
    uCreatedOn:['', Validators.required],
    uPayment:['', Validators.required],
  });


  secondFormGroup = this._formBuilder.group({
    RID00000001: ['', Validators.required],
    RID00000002: ['', Validators.required],
    RID00000003: ['', Validators.required],
  });
  thirdFormGroup=this._formBuilder.group({
    pTxnNumber: ['', Validators.required],
    pAmount: ['', Validators.required],

  });
  price:any
  options: any = [];
  public cardType = [{ id:'RID00000001', name:'Career Assesement Report',price: '499'}, {id:'RID00000002', name:'Human potential Assesment report',price:'699'},{ id:'RID00000003',name:'Scout Assesement Report',price: '999'}]
  constructor(private _formBuilder: FormBuilder, private router: Router, private apiservice: PaymentServiceService) {
  }

  displayAmount = [];
  total=0;
  org :boolean=true;

  usergroups: UserDataModel[] = []

  async loadUsers() {
    this.usergroups=[]
      await this.apiservice.getUserTypeList().subscribe( data => {
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


fire_evnt(e:any){
  console.log(e)
  this.org = e;
}
firstNext() {
    if (this.org){
      this.firstFormGroup.value.uIpAddress= 122;
     
    }
   else{
    
    this.firstFormGroup.value.uIpAddress= "1.1.1.1";
    this.firstFormGroup.value.uPayment= true;
    this.total=0;
    console.log(this.firstFormGroup.value)
    this.apiservice.create_individual_user(this.firstFormGroup.value).subscribe((res)=>{
      this.userResponseData = res;
      sessionStorage.setItem('id',res.id)
      console.log(this.userResponseData)
    }, (error)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please check the detaisl. Somethin Wrong.!!',
        showConfirmButton: false,
        timer: 1800      })
    });
    this.firstFormGroup.reset()

   }
  }

secondNext(cards:any) {
    this.total=cards.price;
    this.reportType=[cards.id]
    if(this.firstFormGroup.value.orgRegUserLimit) {
     this.total=this.firstFormGroup.value.orgRegUserLimit*this.total
    }
    console.log(this.total)
   }

pay(){
    const formData = new FormData();
    this.thirdFormGroup.value.pTxnDate = new Date();
    this.thirdFormGroup.value.pTxnNumber = this.referenceId();
    this.thirdFormGroup.value.pAmount = this.total;
    var data = {"uReportType": this.reportType, "uPayment":true}
    this.apiservice.updateaccountbyId(sessionStorage.getItem('id'),data)
    console.log(this.thirdFormGroup.value)
  }

referenceId(){
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    return val.toString();
  }

loginpage() {
    this.router.navigate(['/']);
  }

selectionChange(){
  this.firstFormGroup.reset();
  this.total=0
}
ngOnInit(): void {

  this.loadUsers();
}

}
