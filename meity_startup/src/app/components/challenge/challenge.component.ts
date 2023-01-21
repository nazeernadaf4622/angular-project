import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  constructor(){}
  addEvent(event:any) {
    alert(event);
  }

  dayEvents(event:any) {
  }

  selectDay(event:any) {


  }
}
