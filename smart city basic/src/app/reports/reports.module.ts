import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatFormFieldModule, } from '@angular/material/form-field';
import {MatTableModule } from '@angular/material/table' 
import {ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ReportsComponent } from './reports.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

export const routes = [
  {path:'reports',component:ReportsComponent},

];

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[DatePipe]
})
export class ReportsModule { }
