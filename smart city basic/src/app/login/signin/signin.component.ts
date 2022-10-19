import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/apicall.service';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { OtpComponent } from '../otp/otp.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public examid="EXAMID00000001"
  public title="Login"
  selectedIndex=0
  constructor(private dialog: MatDialog,private router: Router,private loginapi:ApicallService ) { }
  login_data ={
    email:"",
    password:"",
    ipaddress:""
  }
  signin_data ={
    email:"",
    password:"",
    fname:""
  }

  myTabSelectedIndexChange(index:any){
    if (this.selectedIndex!=index){
      this.login_data ={
        email:"",
        password:"",
        ipaddress:""
      }
      this.signin_data ={
        email:"",
        password:"",
        fname:""
      }
    
    }
  }


  loginapicall(data:any){
    this.login_data["ipaddress"]="1.1.1.1"
    // console.log(data)
      var variable= this.loginapi.login(this.login_data).subscribe((res)=>{
    //   const dialogConfig = new MatDialogConfig();
    //   dialogConfig.width="100%";
    //   const dialogRef = this.dialog.open(OtpComponent,dialogConfig );
    //     console.log("Login REsponse",res)
        let myObj = res
        sessionStorage.clear();
        sessionStorage.setItem('is_admin', res.is_admin);
        sessionStorage.setItem('is_super_admin', res.is_super_admin);
        sessionStorage.setItem('is_client_admin', res.is_client_admin);
        sessionStorage.setItem('is_admin_staff', res.is_admin_staff);
        sessionStorage.setItem('is_client_staff', res.is_client_staff);
        sessionStorage.setItem('is_registered_user', res.is_registered_user);
        sessionStorage.setItem('is_active', res.is_active);
        sessionStorage.setItem('uUserID', res.id);
        sessionStorage.setItem('orgID', res.orgid);


        if (sessionStorage.getItem('is_registered_user') === 'true' ){

          // this.router.navigate(['sidenav'],{replaceUrl:true});
          this.navigate_to_reg_user()
          }
        if (sessionStorage.getItem('is_super_admin') === 'true' || sessionStorage.getItem('is_admin_staff') === 'true'){

          // this.router.navigate(['sidenav'],{replaceUrl:true});
          this.navigate_to_superadmin()
          }

        if (sessionStorage.getItem('is_client_admin') === 'true' || sessionStorage.getItem('is_client_staff') === 'true'){

              // this.router.navigate(['sidenav'],{replaceUrl:true});
              this.navigate_to_clientadmin()
              }
        
  
      },
      error =>{
        console.log(error.error.error)
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.error.error,
          showConfirmButton: false,
          timer: 2200      })
        
      });
      
        
     
  }

    OnSubmit(){
    console.log("Submitted")
  }

  navigate_to_superadmin(){
    // this.router.navigate(['sidenav/dashboard/userdash']);
    this.router.navigate(['sidenav/dashboard/superadmindash']);
  }
  navigate_to_clientadmin(){
    this.router.navigate(['sidenav/dashboard/clientadmindash']);
  }
  navigate_to_reg_user(){
    this.router.navigate(['sidenav/dashboard/userdash']);
  }
  ngOnInit(): void {
  }
  crreateuserapi(data:any){
    data['password']= data.uPassword
    console.log("Sign up data",data)
      this.loginapi.createuser(data).subscribe((result)=>{
        console.warn()
        
      })
  }

}