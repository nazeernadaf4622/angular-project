import { Component, OnInit } from '@angular/core';


import data1 from './sidebar-super-admin.json'
import data2 from './sidebar-client-admin.json'
import data3 from './sidebar-admin-staff.json'
import data4 from './sidebar-client-staff.json'
import data5 from './sidebar-reg-user.json'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit {
  data:any ;
  result: any = [];
  isExpanded:boolean=true;

  constructor() {
    if (sessionStorage.getItem('is_registered_user') === 'true'){
      for (let key in data5.navitems) {
        if (data5.navitems.hasOwnProperty(key)) {
          this.result.push(data5.navitems[key]);
        }
      }
    }
    if (sessionStorage.getItem('is_super_admin') === 'true'){
      for (let key in data1.navitems) {
        if (data1.navitems.hasOwnProperty(key)) {
          this.result.push(data1.navitems[key]);
        }
      }
    }
    if (sessionStorage.getItem('is_client_admin') === 'true'){
      for (let key in data2.navitems) {
        if (data2.navitems.hasOwnProperty(key)) {
          this.result.push(data2.navitems[key]);
        }
      }
    }

    if (sessionStorage.getItem('is_client_staff') === 'true'){
      for (let key in data1.navitems) {
        if (data1.navitems.hasOwnProperty(key)) {
          this.result.push(data1.navitems[key]);
        }
      }
    }

    if (sessionStorage.getItem('is_admin_staff') === 'true'){
      for (let key in data3.navitems) {
        if (data3.navitems.hasOwnProperty(key)) {
          this.result.push(data3.navitems[key]);
        }
      }
    }
  }

  ngOnInit() {}

  ddToggle(i: string | number) {
    this.result[i].menu = !this.result[i].menu;
  }
  sideBarOpen = true;

  sideBarToggler(event:any) {
    console.log(event)
    this.sideBarOpen = !this.sideBarOpen;
  }


}
