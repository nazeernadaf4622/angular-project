import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password: any;
  model: any= {};

  constructor(private router: Router,private routerac: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(Form:NgForm){
    this.router.navigate(['/dashboard']);
    
  }
  fnOpen(){
    
  }

}
