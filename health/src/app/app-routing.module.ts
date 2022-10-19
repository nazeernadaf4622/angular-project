import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.loginModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'onboardingdetails', loadChildren: () => import('./onboardingdetails/onboardingdetails.module').then(m => m.OnboardingdetailsModule) },
  { path: 'education', loadChildren: () => import('./education/education.module').then(m => m.EducationModule) },
];

@NgModule({
  imports: [CommonModule,
    // LoginComponent,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
