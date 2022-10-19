import { Component, ElementRef, OnInit, ViewChild,  EventEmitter,  Output  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { QuestionService } from '../services/question.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
 
  @ViewChild('name')nameKey!: ElementRef ;
  start = false;
  counter = 5;
  interval:any;
  constructor(public dialog: MatDialog,
               private router: Router,
               private qsnService:QuestionService) { }

  ngOnInit(): void {
    this.toggleSidebar()
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(CounterComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });

  // }

  startQuiz() {
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
  
  startCounter(){
    this.qsnService.get_user_attempt_limit(sessionStorage.getItem('uUserID')).subscribe((res: any) => {
      this.start = !this.start;    
    
      this.interval = setInterval(()=>{
         this.counter--;
         if(this.counter == 0){
           clearInterval(this.interval);
           this.router.navigate(['sidenav/dashboard/question']);
         }   
       }, 1000)
      },error =>{
        Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sorry.!! You have no more attempt left...!!!',
        showConfirmButton: false,
        timer: 2000      })
        this.router.navigate(['sidenav/dashboard/welcome'])
       
    });
  //     this.statements = res;
  //     this.pager.count = this.statements.length;
  //     console.log(this.pager.count);

  //     this.startTime = new Date();
  //     this.ellapsedTime = '00:00';
  //     this.timer = setInterval(() => { this.tick(); }, 1000);
  //     this.duration = this.parseTime(this.config.duration);
  //   }, error =>{
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'error',
  //       title: 'Sorry.!! You have no more attempt left...!!!',
  //       showConfirmButton: false,
  //       timer: 2000      })
  //       this.router.navigate(['sidenav/dashboard/welcome'])
       
  //   
   
  }


  toggleSidebar() {
    console.log("clicked")
    this.toggleSidebarForMe.emit();
  }
}
