import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // common: any;
  // totalAngularPackages: any;
  // subscribe:any;
  posts: any =[];
  showTable: boolean = true;
  hideTable: boolean = false;
  
  constructor(private router: Router,private routerac: ActivatedRoute, public common:CommonService) { }

  ngOnInit(): void {
    this.fnGetEmpInfo();
  }

  employee: any;

  fnGetEmpInfo() {

    this.common.getData().subscribe((resp: any) => {
      
          this.employee = resp;
          console.log(resp);
      },
      )
  }
  getThetable(){
    this.showTable =false;
    // this.fnGetEmpInfo();
    this.hideTable =true;
  }
  
}
