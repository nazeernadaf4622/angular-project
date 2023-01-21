import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ConnectComponent } from './components/connect/connect.component';
import { GrantManagementComponent } from './components/grant-management/grant-management.component';
import { IncubatorComponent } from './components/incubator/incubator.component';
import { QueryHandlingComponent } from './components/query-handling/query-handling.component';
import { StartupComponent } from './components/startup/startup.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'management', component: GrantManagementComponent },
  { path: 'incubator', component: IncubatorComponent },
  { path: 'queryHandling', component: QueryHandlingComponent },
  { path: 'startup', component: StartupComponent },
  { path: 'calendar', component: CalendarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
