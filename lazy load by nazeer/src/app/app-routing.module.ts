import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';

const routes: Routes = [
  {path:"",redirectTo:"about",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"product",loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
  {path:"user",component:UsercomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
