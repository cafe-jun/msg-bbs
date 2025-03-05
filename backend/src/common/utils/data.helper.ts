import _ from 'lodash';
import { IsEmpty } from './lodash.utils';

export class DataValidation {
  public static isNotEmpty(value: any): boolean {
    return !IsEmpty(value);
  }

  public static isEmpty(value: any): boolean {
    return _.isEmpty(value);
  }
  public static isTrue(value: boolean): boolean {
    return value === true;
  }
}
