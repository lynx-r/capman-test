import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CapTableLogComponent } from './cap-table-log/cap-table-log.component';
import { DefaultTableComponent } from './default-table/default-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RoundsComponent } from './rounds/rounds.component';
import { ShareholderComponent } from './shareholder/shareholder.component';
import { SpinnerComponent } from './spinner/spinner.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  CapTableLogComponent,
  RoundsComponent,
  ShareholderComponent,
  DefaultTableComponent,
  SpinnerComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    RouterModule,

    SharedModule
  ]
})
export class ComponentsModule {
}
