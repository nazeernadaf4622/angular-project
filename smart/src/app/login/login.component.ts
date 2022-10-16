import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted!:false

  constructor(private route:Router, private fb:FormBuilder) {
    this.loginForm = new FormGroup({
      name:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
   
  }

  get f() {
     return this.loginForm.controls; 
    }

  loginFormSubmit(){
    console.log(this.loginForm.value);
    this.route.navigate(['sidenav'])    
  }

}
