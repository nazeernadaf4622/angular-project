import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule,  } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
    declarations:[],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        DashboardRoutingModule,
        
    ],
})
export class DashboardModule {}