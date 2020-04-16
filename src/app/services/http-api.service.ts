import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { API_RESOURCES, ApiResources } from '../config/api-resources';
import { Company, TableType, Transaction } from '../model';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService implements ApiService {

  constructor(private http: HttpClient, @Inject(API_RESOURCES) private apiResource: ApiResources) {
  }

  getTable(type: TableType, active: string, direction: SortDirection, pageIndex: number) {
    return this.httpGet(this.apiResource.FETCH_TABLE_BY_TYPE + type, {active, direction, pageIndex});
  }

  createCompany(company: Company) {
    return this.httpPost(this.apiResource.CREATE_COMPANY, company);
  }

  createTransaction(transaction: Transaction) {
    return this.httpPost(this.apiResource.CREATE_TRANSACTION, transaction);
  }

  private httpGet(url: string, params: any) {
    return this.http.get(url, {params});
  }

  private httpPost(url: string, data: any) {
    return this.http.post(url, data);
  }
}
