import dayjs from 'dayjs/esm';
import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

export interface IInvoice {
  id: number;
  code?: string | null;
  date?: dayjs.Dayjs | null;
  details?: string | null;
  status?: keyof typeof InvoiceStatus | null;
  paymentMethod?: keyof typeof PaymentMethod | null;
  paymentDate?: dayjs.Dayjs | null;
  paymentAmount?: number | null;
}

export type NewInvoice = Omit<IInvoice, 'id'> & { id: null };
