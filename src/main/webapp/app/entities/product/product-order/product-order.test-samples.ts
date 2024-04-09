import dayjs from 'dayjs/esm';

import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 448,
  placedDate: dayjs('2024-04-08T03:58'),
  status: 'CANCELLED',
  code: 'audition',
  customer: 'yowza if undershoot',
};

export const sampleWithPartialData: IProductOrder = {
  id: 23497,
  placedDate: dayjs('2024-04-08T11:05'),
  status: 'COMPLETED',
  code: 'secrecy',
  invoiceId: 20063,
  customer: 'majestic than',
};

export const sampleWithFullData: IProductOrder = {
  id: 28692,
  placedDate: dayjs('2024-04-08T03:08'),
  status: 'COMPLETED',
  code: 'versus where goad',
  invoiceId: 16141,
  customer: 'because ill-informed',
};

export const sampleWithNewData: NewProductOrder = {
  placedDate: dayjs('2024-04-07T23:01'),
  status: 'COMPLETED',
  code: 'partially talkative or',
  customer: 'warmly gently',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
