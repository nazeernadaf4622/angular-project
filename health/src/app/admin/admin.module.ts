import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule,  } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonService } from "../common.service";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";

@NgModule({
    declarations:[AdminComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        AdminRoutingModule
        
    ],
    providers:[CommonService]
})
export class AdminModule {}