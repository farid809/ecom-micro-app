import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 15971,
  firstName: 'Mercedes',
  lastName: 'Gutkowski',
  gender: 'MALE',
  email: "0'\\E@Y0*#..^j",
  phone: '(212) 307-8263 x0267',
  addressLine1: 'gah furiously',
  city: 'North Sincerefort',
  country: 'Burkina Faso',
};

export const sampleWithPartialData: ICustomer = {
  id: 32157,
  firstName: 'Jaida',
  lastName: 'Turcotte',
  gender: 'FEMALE',
  email: 'd;P/Hm@5_h)&s.fDT1',
  phone: '1-777-292-5842 x79467',
  addressLine1: 'assessment fast',
  city: 'Ziemechester',
  country: 'China',
};

export const sampleWithFullData: ICustomer = {
  id: 9618,
  firstName: 'Allie',
  lastName: 'Heathcote-Stamm',
  gender: 'FEMALE',
  email: "~nU'@wwQk.qID{s",
  phone: '(966) 722-8904 x6585',
  addressLine1: 'mockingly courageously certificate',
  addressLine2: 'belated',
  city: 'Harbertown',
  country: 'New Caledonia',
};

export const sampleWithNewData: NewCustomer = {
  firstName: 'Blanche',
  lastName: 'Bayer',
  gender: 'MALE',
  email: 'aHH}@C2=..3',
  phone: '597.327.0731',
  addressLine1: 'sedately righteously growling',
  city: 'Hirtheside',
  country: 'Iceland',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
