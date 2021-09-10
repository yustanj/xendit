/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CreateSpecificFVARequest {
  externalId: string;
  bankCode: string;
  name: string;
  virtualAccountNumber: string;
}

export const createSpecificFVARequestSchema: Schema<CreateSpecificFVARequest> = object(
  {
    externalId: ['external_id', string()],
    bankCode: ['bank_code', string()],
    name: ['name', string()],
    virtualAccountNumber: ['virtual_account_number', string()],
  }
);
