import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';
import { TransactionDetailsComponent } from '../transaction/transaction-details/transaction-details.component';
import { TransactionEditComponent } from '../transaction/transaction-edit/transaction-edit.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [CompanyComponent, CompanyListComponent, CompanyDetailsComponent, CompanyEditComponent, TransactionEditComponent, TransactionDetailsComponent],
  imports: [
    CompanyRoutingModule,

    SharedModule,

    ComponentsModule
  ]
})
export class CompanyModule {
}
