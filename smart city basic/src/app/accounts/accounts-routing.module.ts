import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ClientsComponent } from './clients/clients.component';
import { UploadUsersComponent } from './upload-users/upload-users.component';




const routes: Routes = [
    {path:'account',component:AccountComponent},
    {path:'clients',component:ClientsComponent},
    {path:'upload_users',component:UploadUsersComponent},
    // {path:'superadmindash',component:SuperadmindashComponent},
    // {path:'clientadmindash',component:ClientadmindashComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
