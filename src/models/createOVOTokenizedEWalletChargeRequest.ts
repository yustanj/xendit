/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, Schema, string } from '../schema';
import {
  ChannelProperties2,
  channelProperties2Schema,
} from './channelProperties2';
import { Metadata2, metadata2Schema } from './metadata2';

export interface CreateOVOTokenizedEWalletChargeRequest {
  referenceId: string;
  currency: string;
  amount: number;
  checkoutMethod: string;
  paymentMethodId: string;
  channelProperties: ChannelProperties2;
  metadata: Metadata2;
}

export const createOVOTokenizedEWalletChargeRequestSchema: Schema<CreateOVOTokenizedEWalletChargeRequest> = object(
  {
    referenceId: ['reference_id', string()],
    currency: ['currency', string()],
    amount: ['amount', number()],
    checkoutMethod: ['checkout_method', string()],
    paymentMethodId: ['payment_method_id', string()],
    channelProperties: [
      'channel_properties',
      lazy(() => channelProperties2Schema),
    ],
    metadata: ['metadata', lazy(() => metadata2Schema)],
  }
);
