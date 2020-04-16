import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const LAYOUTS = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [...LAYOUTS],
  exports: [...LAYOUTS],
  imports: [
    RouterModule,

    SharedModule,

    ComponentsModule
  ]
})
export class LayoutModule {
}
