/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface CreatePaymentCodeCEBUANARequest {
  referenceId: string;
  channelCode: string;
  customerName: string;
  amount: number;
  currency: string;
  market: string;
}

export const createPaymentCodeCEBUANARequestSchema: Schema<CreatePaymentCodeCEBUANARequest> = object(
  {
    referenceId: ['reference_id', string()],
    channelCode: ['channel_code', string()],
    customerName: ['customer_name', string()],
    amount: ['amount', number()],
    currency: ['currency', string()],
    market: ['market', string()],
  }
);
