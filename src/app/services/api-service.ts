import { SortDirection } from '@angular/material/sort';
import { Company, TableType, Transaction } from '../model';

export interface ApiService {

  getTable(type: TableType, active: string, direction: SortDirection, pageIndex: number);

  createCompany(company: Company);

  createTransaction(transaction: Transaction);
}
