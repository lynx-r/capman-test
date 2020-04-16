import { Amount } from 'amount-ts';
import { DEFAULT_CURRENCY_CODE } from 'app/config/constants';

export class Money {

  private formatter: Amount;
  private valueInternal: number;

  private constructor() {
    this.formatter = Amount.fromCurrencyString(DEFAULT_CURRENCY_CODE);
  }

  get value() {
    return this.valueInternal;
  }

  set value(value: number) {
    this.valueInternal = value;
  }

  static from(value: string | number) {
    const money = new Money();
    if (typeof value === 'string') {
      money.valueInternal = money.formatter.from(value);
    } else {
      money.valueInternal = value;
    }
    return money;
  }

  toString() {
    return this.formatter.to(this.valueInternal);
  }

  toJson() {
    return this.formatter.toJson(this.valueInternal);
  }

}
