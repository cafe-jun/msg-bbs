import _ from 'lodash';

export class DataValidation {
  public static isNotEmpty(value: any): boolean {
    return !_.isEmpty(value);
  }

  public static isEmpty(value: any): boolean {
    return _.isEmpty(value);
  }
  public static isTrue(value: boolean): boolean {
    return value === true;
  }
}
