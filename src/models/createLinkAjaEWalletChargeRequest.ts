/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, Schema, string } from '../schema';
import {
  ChannelProperties4,
  channelProperties4Schema,
} from './channelProperties4';
import { Metadata, metadataSchema } from './metadata';

export interface CreateLinkAjaEWalletChargeRequest {
  referenceId: string;
  currency: string;
  amount: number;
  checkoutMethod: string;
  channelCode: string;
  channelProperties: ChannelProperties4;
  metadata: Metadata;
}

export const createLinkAjaEWalletChargeRequestSchema: Schema<CreateLinkAjaEWalletChargeRequest> = object(
  {
    referenceId: ['reference_id', string()],
    currency: ['currency', string()],
    amount: ['amount', number()],
    checkoutMethod: ['checkout_method', string()],
    channelCode: ['channel_code', string()],
    channelProperties: [
      'channel_properties',
      lazy(() => channelProperties4Schema),
    ],
    metadata: ['metadata', lazy(() => metadataSchema)],
  }
);
