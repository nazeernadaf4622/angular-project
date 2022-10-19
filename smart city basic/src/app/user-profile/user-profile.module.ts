import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ExamsComponent } from './exams/exams.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ExamsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserProfileModule { }
