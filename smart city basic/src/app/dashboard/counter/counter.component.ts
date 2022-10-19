import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  start = false;
  counter = 5;
  interval:any;

constructor(private router: Router){}


ngOnInit(): void {
}
  startCounter(){
    this.start = !this.start;    
    
   this.interval = setInterval(()=>{
      this.counter--;
      if(this.counter == 0){
        clearInterval(this.interval);
        this.router.navigate(['sidenav/dashboard/question']);
      }   
    }, 1000)
    
  }
}
