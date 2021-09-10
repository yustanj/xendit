/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface TESTAlfamartPaymentRequest {
  retailOutletName: string;
  paymentCode: string;
  transferAmount: number;
}

export const tESTAlfamartPaymentRequestSchema: Schema<TESTAlfamartPaymentRequest> = object(
  {
    retailOutletName: ['retail_outlet_name', string()],
    paymentCode: ['payment_code', string()],
    transferAmount: ['transfer_amount', number()],
  }
);
