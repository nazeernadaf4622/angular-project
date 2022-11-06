import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  selectedCity:string='';

  citychange(event:any){
    this.selectedCity=event.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
