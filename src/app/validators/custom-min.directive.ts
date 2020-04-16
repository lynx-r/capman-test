import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomMin][formControlName],[appCustomMin][formControl],[appCustomMin][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true}]
})
export class CustomMinDirective implements Validator {
  @Input()
  appCustomMin: number;

  validate(c: FormControl): { [key: string]: any } {
    const v = c.value;
    return (v < this.appCustomMin) ? {appCustomMin: {requiredMin: this.appCustomMin, actual: v}} : null;
  }
}
