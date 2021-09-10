/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, Schema, string } from '../schema';

export interface ShopeepayTokenizedInitiateAccountLinking {
  id: string;
  customerId: string;
  channelCode: string;
  authorizerUrl: string;
  status: string;
  metadata: string | null;
}

export const shopeepayTokenizedInitiateAccountLinkingSchema: Schema<ShopeepayTokenizedInitiateAccountLinking> = object(
  {
    id: ['id', string()],
    customerId: ['customer_id', string()],
    channelCode: ['channel_code', string()],
    authorizerUrl: ['authorizer_url', string()],
    status: ['status', string()],
    metadata: ['metadata', nullable(string())],
  }
);
