import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 5725,
  name: 'woot',
};

export const sampleWithPartialData: IProductCategory = {
  id: 8,
  name: 'swimming nearly',
  description: 'transit engender exceed',
};

export const sampleWithFullData: IProductCategory = {
  id: 15671,
  name: 'supposing aw',
  description: 'nor',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'synthesise gee',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
