import dayjs from 'dayjs/esm';

import { IShipment, NewShipment } from './shipment.model';

export const sampleWithRequiredData: IShipment = {
  id: 7983,
  date: dayjs('2024-04-08T21:00'),
};

export const sampleWithPartialData: IShipment = {
  id: 5217,
  date: dayjs('2024-04-08T04:29'),
};

export const sampleWithFullData: IShipment = {
  id: 15668,
  trackingCode: 'infinite hungrily pug',
  date: dayjs('2024-04-08T07:20'),
  details: 'oh since',
};

export const sampleWithNewData: NewShipment = {
  date: dayjs('2024-04-08T18:20'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
