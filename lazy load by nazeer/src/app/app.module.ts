import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    UsercomponentComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
