import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { API_RESOURCES, API_RESOURCES_CONFIG } from './config/api-resources';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,

    LayoutModule,

  ],
  providers: [
    {
      provide: API_RESOURCES, useValue: API_RESOURCES_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
