import _, { values } from 'lodash';

export const IsEmpty = (value: any) => {
  return _.isEmpty(value);
};

export const IsNotEmpty = (value: any) => {
  return _.isEmpty(value);
};

export const IsTrue = (value: any) => {
  return value === true;
};
