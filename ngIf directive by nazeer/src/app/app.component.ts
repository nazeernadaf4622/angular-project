import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  flag:boolean=true
  title = 'demo';
  flag=false;
  showData(){
    this.flag=!this.flag
  }

}
