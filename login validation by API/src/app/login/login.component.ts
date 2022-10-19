import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginResponse: any;

  constructor(private route: Router, private commonservice: CommonserviceService) { }

  ngOnInit(): void {

  }
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  login() {
    var obj = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    this.commonservice.login(obj).subscribe((res: any) => {
      console.log(res.status);

      this.loginResponse = res;

      if (this.loginResponse.token != undefined) {
        this.route.navigate(['dashboard']);
      }
    },
      (error) => {
        if (error.status = 400) {
          alert("invalid login")
        }
      })
  }
}

