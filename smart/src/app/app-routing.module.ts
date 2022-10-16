import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardbelComponent } from './dashboardbel/dashboardbel.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ItmsComponent } from './itms/itms.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  // {path:'dashboard',component:DashboardbelComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'home',component:HomeComponent},
  {path:'itms',component:ItmsComponent},
  // {path:'header',component:HeaderComponent},
  // {path:'dashboard',loadChildren: () => import('./dashboard/home.module').then(m => m.AuthModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
