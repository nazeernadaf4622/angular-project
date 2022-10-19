import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule,  } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonService } from "../common.service";
import { EducationRoutingModule } from "./education-routing.module";
import { EducationComponent } from "./education.component";

@NgModule({
    declarations:[EducationComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        EducationRoutingModule,
        
    ],
    providers:[CommonService]
})
export class EducationModule {}