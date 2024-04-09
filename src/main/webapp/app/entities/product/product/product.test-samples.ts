import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 26040,
  name: 'winter',
  price: 3293.05,
  productSize: 'L',
};

export const sampleWithPartialData: IProduct = {
  id: 3637,
  name: 'salivate netbook',
  description: 'unnerve',
  price: 17852.49,
  productSize: 'XL',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: IProduct = {
  id: 22633,
  name: 'blah',
  description: 'concrete',
  price: 9307.54,
  productSize: 'S',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'sari',
  price: 15858.45,
  productSize: 'M',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
