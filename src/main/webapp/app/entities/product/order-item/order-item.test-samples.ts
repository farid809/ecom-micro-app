import { IOrderItem, NewOrderItem } from './order-item.model';

export const sampleWithRequiredData: IOrderItem = {
  id: 14406,
  quantity: 13955,
  totalPrice: 3186.62,
  status: 'OUT_OF_STOCK',
};

export const sampleWithPartialData: IOrderItem = {
  id: 10517,
  quantity: 3316,
  totalPrice: 2904.88,
  status: 'OUT_OF_STOCK',
};

export const sampleWithFullData: IOrderItem = {
  id: 18218,
  quantity: 31638,
  totalPrice: 16996.01,
  status: 'BACK_ORDER',
};

export const sampleWithNewData: NewOrderItem = {
  quantity: 30788,
  totalPrice: 30909.21,
  status: 'BACK_ORDER',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
