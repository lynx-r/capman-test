import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomMax][formControlName],[appCustomMax][formControl],[appCustomMax][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMaxDirective, multi: true}]
})
export class CustomMaxDirective implements Validator {
  @Input()
  appCustomMax: number;

  validate(c: FormControl): { [key: string]: any } {
    const v = c.value;
    return (v > this.appCustomMax) ? {appCustomMax: {requiredMax: this.appCustomMax, actual: v}} : null;
  }
}
