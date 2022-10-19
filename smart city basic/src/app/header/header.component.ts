import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  username:any
  constructor(private router: Router, private apiserice: ApicallService) {}

  ngOnInit(): void {
    this.apiserice.getusername(sessionStorage.getItem('uUserID')).subscribe((res)=>{
      this.username=res.uUsername
    });
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
