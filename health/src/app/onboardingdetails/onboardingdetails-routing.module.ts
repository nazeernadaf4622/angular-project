import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OnboardingdetailsComponent } from "./onboardingdetails.component";

const routes: Routes = [
    { path: '', component:  OnboardingdetailsComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnboardingdetailsRoutingModule { }