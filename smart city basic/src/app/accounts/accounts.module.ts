import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { AccountRoutingModule } from './accounts-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AccountComponent } from './account/account.component';

import { RouterModule } from "@angular/router";
import {ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientsComponent } from './clients/clients.component';
import { MatTableModule } from '@angular/material/table';
import { UploadUsersComponent } from './upload-users/upload-users.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailsComponent,
    ClientsComponent,
    UploadUsersComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTabsModule, 
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    AccountRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatTableModule

    
  ]
})
export class AccountsModule { }
