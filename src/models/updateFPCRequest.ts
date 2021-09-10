/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface UpdateFPCRequest {
  name: string;
  expectedAmount: number;
}

export const updateFPCRequestSchema: Schema<UpdateFPCRequest> = object({
  name: ['name', string()],
  expectedAmount: ['expected_amount', number()],
});
