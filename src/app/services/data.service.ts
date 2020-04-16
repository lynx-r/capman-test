import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Company, DataResponse, TableType, Transaction } from '../model';
import { ApiFactoryService } from './api-factory.service';
import { ApiService } from './api-service';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private api: ApiService;

  constructor(
    private apiFactory: ApiFactoryService,
    private notifyService: NotifyService
  ) {
    this.api = this.apiFactory.build();
  }

  getTable(type: TableType, active: string, direction: SortDirection, pageIndex: number): Observable<DataResponse> {
    return this.api.getTable(type, active, direction, pageIndex);
  }

  createCompany(company: Company): Observable<Company> {
    return this.api.createCompany(company)
      .pipe(
        tap(() => this.notifyService.success('Company is created')),
        catchError(err => {
          this.notifyService.error('An error occurred while creating a company');
          return of(err);
        })
      );
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.api.createTransaction(transaction)
      .pipe(
        tap(() => this.notifyService.success('Transaction is created')),
        catchError(err => {
          this.notifyService.error('An error occurred while creating a transaction');
          return of(err);
        })
      );
  }
}
