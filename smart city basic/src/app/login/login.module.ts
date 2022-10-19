import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { LoginRoutingModule } from './login-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { OtpComponent } from './otp/otp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

@NgModule({
  declarations: [
    SigninComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTabsModule, MatIconModule,MatSelectModule,
    MatDialogModule,
    MdbCheckboxModule
    
  ],
  exports:[
    MdbCheckboxModule
  ]

})
export class LoginModule { }
