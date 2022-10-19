import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { UserdashComponent } from './userdash/userdash.component';
import { SuperadmindashComponent } from './superadmindash/superadmindash.component';
import { ClientadmindashComponent } from './clientadmindash/clientadmindash.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { SubmitComponent } from './submit/submit.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from '../home/home.component';
import { ItmsComponent } from '../itms/itms.component';

const routes: Routes = [
    
    {path:'home',component:HomeComponent},
    {path:'itms',component:ItmsComponent},
    {path:'userdash',component:UserdashComponent},
    {path:'admindash',component:AdmindashComponent},
    {path:'superadmindash',component:SuperadmindashComponent},
    {path:'clientadmindash',component:ClientadmindashComponent},
    // {path:'', redirectTo:'welcome',pathMatch:"full"},
    {path:'profile', component:ProfileComponent},
    {path: "welcome" , component:WelcomeComponent},
    {path: "question", component:QuestionComponent},
    {path: "submit", component:SubmitComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
