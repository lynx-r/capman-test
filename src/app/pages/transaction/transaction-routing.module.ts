import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'add'
  },
  {
    path: 'add', component: TransactionEditComponent
  },
  {
    path: ':transactionId',
    children: [
      {
        path: '', component: TransactionDetailsComponent
      },
      {
        path: 'edit', component: TransactionEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {
}
