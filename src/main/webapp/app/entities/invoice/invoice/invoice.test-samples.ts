import dayjs from 'dayjs/esm';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 10642,
  code: 'omit yawningly',
  date: dayjs('2024-04-08T05:46'),
  status: 'CANCELLED',
  paymentMethod: 'PAYPAL',
  paymentDate: dayjs('2024-04-08T07:30'),
  paymentAmount: 1044.92,
};

export const sampleWithPartialData: IInvoice = {
  id: 30904,
  code: 'internalize',
  date: dayjs('2024-04-08T17:24'),
  details: 'for searchingly',
  status: 'PAID',
  paymentMethod: 'PAYPAL',
  paymentDate: dayjs('2024-04-08T13:25'),
  paymentAmount: 5049,
};

export const sampleWithFullData: IInvoice = {
  id: 14546,
  code: 'extremely',
  date: dayjs('2024-04-08T04:51'),
  details: 'ha shovel',
  status: 'ISSUED',
  paymentMethod: 'CASH_ON_DELIVERY',
  paymentDate: dayjs('2024-04-08T07:47'),
  paymentAmount: 29492.91,
};

export const sampleWithNewData: NewInvoice = {
  code: 'distorted',
  date: dayjs('2024-04-08T00:09'),
  status: 'PAID',
  paymentMethod: 'CASH_ON_DELIVERY',
  paymentDate: dayjs('2024-04-08T17:07'),
  paymentAmount: 24284.27,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
