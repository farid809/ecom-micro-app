import dayjs from 'dayjs/esm';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 30477,
  date: dayjs('2024-04-08T19:11'),
  sentDate: dayjs('2024-04-08T05:58'),
  format: 'SMS',
  userId: 19674,
  productId: 24520,
};

export const sampleWithPartialData: INotification = {
  id: 12378,
  date: dayjs('2024-04-08T04:01'),
  details: 'opposite giving energetically',
  sentDate: dayjs('2024-04-08T16:03'),
  format: 'PARCEL',
  userId: 13999,
  productId: 28781,
};

export const sampleWithFullData: INotification = {
  id: 28138,
  date: dayjs('2024-04-08T07:34'),
  details: 'silently monasticism',
  sentDate: dayjs('2024-04-08T01:28'),
  format: 'SMS',
  userId: 14133,
  productId: 28481,
};

export const sampleWithNewData: NewNotification = {
  date: dayjs('2024-04-08T21:39'),
  sentDate: dayjs('2024-04-08T14:32'),
  format: 'SMS',
  userId: 12059,
  productId: 13385,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
