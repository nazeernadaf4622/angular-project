import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';



@NgModule({
  declarations: [
    UserPaymentComponent,
    AdminPaymentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }
