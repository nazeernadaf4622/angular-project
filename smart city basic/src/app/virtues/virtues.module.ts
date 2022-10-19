import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { VirtuesComponent } from './virtues.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule } from '@angular/material/table' 
import {ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


export const routes = [
  {path:'virtue',component:VirtuesComponent},

];

@NgModule({
  declarations: [VirtuesComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatProgressBarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule 
    
    
  
    
  ],

})
export class VirtuesModule { }
