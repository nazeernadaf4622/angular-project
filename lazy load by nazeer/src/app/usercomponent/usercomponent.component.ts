import { Component, OnInit } from '@angular/core';
// import { timeStamp } from 'console';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
 result:any
  constructor(private user:ServiceService) { }

  ngOnInit(): void {
    this.user.getData().subscribe(data=>{
      this.result=data
    })

  }

}
