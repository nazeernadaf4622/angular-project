import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  hide = true;
  hideRequiredMarker = true;
  mobileNumber = new FormControl('', [Validators.required]);
  OTP = new FormControl('', [Validators.required]);
  // credentials: any;
  // appservice: any;

  constructor(
    private router: Router,
    // private http: HttpClient,
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.mobileNumber.value && this.OTP.value) {
     
      // let httpParams = new HttpParams().set('username', this.username.value);
      // this.http
      //   .get('', { params: httpParams })
      //   .subscribe(
      //     (res) => {
      //       // console.log(res);
      //       this.credentials = res;
      //       if (this.credentials.password === this.password.value) {
      //         this.router.navigate(['/components']);
      //         this.appservice.setInfo(this.credentials.username);
      //       } else {
      //         window.alert('Incorrect Password');
      //       }
      //     },
      //     (error) => {
      //       window.alert('User Does Not Exist. Please Create Your Accont.');
      //       // console.log(error);
      //     }
      //   );
    }
  }


}
