import { NgModule } from '@angular/core';
import { CustomMaxDirective } from './custom-max.directive';
import { CustomMinDirective } from './custom-min.directive';

const VALIDATORS = [
  CustomMinDirective,
  CustomMaxDirective
];

@NgModule({
  declarations: [...VALIDATORS],
  exports: [...VALIDATORS],
})
export class ValidatorsModule {
}
