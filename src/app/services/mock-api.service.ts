import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Company, TableType, Transaction } from '../model';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class MockApiService implements ApiService {

  constructor(private http: HttpClient) {
  }

  getTable(type: TableType, active: string, direction: SortDirection, pageIndex: number) {
    return this.getMockJson(`assets/mock/${type}.json`);
  }

  createCompany(company: Company) {
    return of(company);
  }

  createTransaction(transaction: Transaction) {
    return of(transaction);
  }

  private getMockJson(url) {
    return this.http.get(url)
      .pipe(
        delay(500),
        map((data: any[]) => ({total_count: data.length, items: data}))
      );
  }
}
