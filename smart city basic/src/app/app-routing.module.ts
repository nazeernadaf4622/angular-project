import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../app/sidenav/sidenav.component';



const routes: Routes = [
{path:'', loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
{path:'payment', loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
{path:'pay', loadChildren:()=> import('./payment-page/payment.module').then(m=>m.PaymentModule) },

// {path:'dashboard', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule) },
// {path:'dashboard', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AuthGuardGuard] }

{
  path: 'sidenav', component: SidenavComponent, children: [
    {path:'dashboard', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule) },
    {path:'virtues', loadChildren:()=> import('./virtues/virtues.module').then(m=>m.VirtuesModule) },
    {path:'dimensions', loadChildren:()=> import('./dimensions/dimensions.module').then(m=>m.DimensionsModule) },
    {path:'statements', loadChildren:()=> import('./statements/statements.module').then(m=>m.StatementsModule) },
    {path:'accounts', loadChildren:()=> import('./accounts/accounts.module').then(m=>m.AccountsModule) },
    {path:'reports', loadChildren:()=> import('./reports/reports.module').then(m=>m.ReportsModule) },
    

  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
