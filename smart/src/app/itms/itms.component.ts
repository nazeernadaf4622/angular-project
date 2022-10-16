import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itms',
  templateUrl: './itms.component.html',
  styleUrls: ['./itms.component.css']
})
export class ItmsComponent implements OnInit {

  
  constructor(private router:Router) { }

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
}
