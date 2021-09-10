/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface EXPIREDCARDREQUEST {
  tokenId: string;
  externalId: string;
  amount: number;
}

export const eXPIREDCARDREQUESTSchema: Schema<EXPIREDCARDREQUEST> = object({
  tokenId: ['token_id', string()],
  externalId: ['external_id', string()],
  amount: ['amount', number()],
});
