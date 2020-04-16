import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list', component: CompanyListComponent
  },
  {
    path: 'add', component: CompanyEditComponent
  },
  {
    path: ':id',
    children: [
      {
        path: '', component: CompanyDetailsComponent
      },
      {
        path: 'edit', component: CompanyEditComponent
      },
      {
        path: 'transaction', loadChildren: () => import('../transaction/transaction.module').then(m => m.TransactionModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
