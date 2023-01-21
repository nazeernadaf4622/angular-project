import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {


  @Input() changeColourBg:any;
  constructor(private router:Router) {
  }
  
  ngOnInit() {

    const btn_menu = document.querySelector('.btn-menu');
    const side_bar = document.querySelector('.sidebar');

    side_bar?.addEventListener('mouseenter', function () {
      side_bar?.classList.toggle('expand');
      changebtn();
    });
    side_bar?.addEventListener('mouseleave', function () {
      side_bar?.classList.toggle('expand');
      changebtn();
    });

    function changebtn() {
      if (side_bar?.classList.contains('expand')) {
        btn_menu?.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        btn_menu?.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    }
  }
}
