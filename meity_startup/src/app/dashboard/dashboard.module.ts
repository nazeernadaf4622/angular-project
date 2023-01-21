import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../common/components/footer/footer.component';
import { HeaderComponent } from '../common/components/header/header.component';
import { SidebarComponent } from '../common/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
