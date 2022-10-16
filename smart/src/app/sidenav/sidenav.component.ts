import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

// import data1 from './sidebar-super-admin.json'
// import data2 from './sidebar-client-admin.json'
// import data3 from './sidebar-admin-staff.json'
// import data4 from './sidebar-client-staff.json'
// import data5 from './sidebar-reg-user.json'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor(private router:Router){

  }
  ngOnInit(): void {

  }

  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  onClickOfHome(){
    // alert('text')
    this.showSubmenu =!this.showSubmenu ;
    this.router.navigate(['/home'])
    
  }

  onClickOfitms(){
    this.showSubmenu =!this.showSubmenu ;
    this.router.navigate(['/itms'])
  }
}
