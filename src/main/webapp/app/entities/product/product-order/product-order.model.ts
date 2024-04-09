import dayjs from 'dayjs/esm';
import { OrderStatus } from 'app/entities/enumerations/order-status.model';

export interface IProductOrder {
  id: number;
  placedDate?: dayjs.Dayjs | null;
  status?: keyof typeof OrderStatus | null;
  code?: string | null;
  invoiceId?: number | null;
  customer?: string | null;
}

export type NewProductOrder = Omit<IProductOrder, 'id'> & { id: null };
