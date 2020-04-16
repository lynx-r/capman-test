import { Injectable, Injector } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpApiService } from './http-api.service';
import { MockApiService } from './mock-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {

  constructor(private injector: Injector) {
  }

  build() {
    if (environment.mockApi) {
      return this.injector.get(MockApiService);
    } else {
      return this.injector.get(HttpApiService);
    }
  }
}
