import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  model: any = {};
  constructor(private router: Router,private routerac: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

  }
}
