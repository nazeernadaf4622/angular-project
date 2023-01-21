import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  hideRequiredMarker = true;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  credentials: any;
  appservice: any;


  constructor(private router: Router,private http: HttpClient) 
  {}

  ngOnInit(): void {}

  login() {
    if (this.username.value && this.password.value) {
      let httpParams = new HttpParams().set('username', this.username.value);
      this.http.get('', { params: httpParams })
        .subscribe(
          (res) => {
            // console.log(res);
            this.credentials = res;
            if (this.credentials.password === this.password.value) {
              this.router.navigate(['/components']);
              this.appservice.setInfo(this.credentials.username);
            } else {
              window.alert('Incorrect Password');
            }
          },
          (error) => {
            window.alert('User Does Not Exist. Please Create Your Accont.');
            // console.log(error);
          }
        );
    }
  }
}
