import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router,private routerac: ActivatedRoute) { }

  ngOnInit(): void {
  }

  fnactions(){
    this.router.navigate(['/admin'])
  }
}
