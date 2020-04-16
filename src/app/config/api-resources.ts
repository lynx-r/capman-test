import { InjectionToken } from '@angular/core';

export const API_RESOURCES = new InjectionToken<ApiResources>('api.resources');

export interface ApiResources {
  CREATE_COMPANY: string;
  CREATE_TRANSACTION: string;
  FETCH_TABLE_BY_TYPE: string;
}

export const API_RESOURCES_CONFIG: ApiResources = {
  CREATE_COMPANY: 'create company path',
  CREATE_TRANSACTION: 'create transaction path',
  FETCH_TABLE_BY_TYPE: 'fetch table path/'
};
