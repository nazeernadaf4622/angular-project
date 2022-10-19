import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OnboardingdetailsRoutingModule } from "./onboardingdetails-routing.module";
import { OnboardingdetailsComponent } from "./onboardingdetails.component";

@NgModule({
    declarations: [OnboardingdetailsComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        OnboardingdetailsRoutingModule        
    ],
})
export class OnboardingdetailsModule { }