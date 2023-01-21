import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../common/components/header/header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  changeColour: string = 'pink';

  constructor(){

  }
    ngOnInit(): void {
    
  }
  changeColor(event:any){
    this.changeColour = event;
  }

}
