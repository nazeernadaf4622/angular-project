import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';

import { HeaderComponent } from './header/header.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { StatementsComponent } from './statements/statements.component';
import { SideToggleComponent } from './side-toggle/side-toggle.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { InterceptorService } from './loader/interceptor.service';
import { MatTableModule } from '@angular/material/table';
import { DimensionsComponent } from './dimensions/dimensions.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { ReactiveFormsModule} from '@angular/forms';
import { AppSettings } from "./app.settings";


import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { ReportsComponent } from './reports/reports.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import { ItmsComponent } from './itms/itms.component';

@NgModule({
  declarations: [
    AppComponent,
    DimensionsComponent,
    SidenavComponent,
    StatementsComponent,
    SideToggleComponent,
    HeaderComponent,
    ReportsComponent,
    HomeComponent,
    ItmsComponent,
    
    

   
  ],
  imports: [
    
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,

    
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MdbCheckboxModule,
    MatStepperModule
  ],
  
  providers: [
    
    AppSettings,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},
    
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
