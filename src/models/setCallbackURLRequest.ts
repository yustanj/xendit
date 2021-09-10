/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface SetCallbackURLRequest {
  url: string;
}

export const setCallbackURLRequestSchema: Schema<SetCallbackURLRequest> = object(
  { url: ['url', string()] }
);
