import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboardbel',
  templateUrl: './dashboardbel.component.html',
  styleUrls: ['./dashboardbel.component.css']
})
export class DashboardbelComponent implements OnInit {

  sideBarOpen = true;
  masterOpenState = false;
  utilitiesOpenState = false;
  url!: string;
  pageLoading!: boolean;
  routerSubscription!: Subscription ;
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavLinkSelected() {
    this.accordion.multi = true;
    this.accordion.closeAll();
  }

  onExpansionPanelSelection() {
    this.accordion.multi = false;
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
