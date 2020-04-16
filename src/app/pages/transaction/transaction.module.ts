import { NgModule } from '@angular/core';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';


@NgModule({
  declarations: [TransactionComponent],
  imports: [
    TransactionRoutingModule
  ]
})
export class TransactionModule {
}
