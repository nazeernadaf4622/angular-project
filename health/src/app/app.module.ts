import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DxButtonModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
// import { EducationComponent } from './education/education.component';
// import { OnboardingdetailsComponent } from './onboardingdetails/onboardingdetails.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // EducationComponent,
    // OnboardingdetailsComponent,
    // AdminComponent,
    // DashboardComponent,
    // LoginComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    DxButtonModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
