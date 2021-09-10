/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Filter {
  from: string;
  to: string;
}

export const filterSchema: Schema<Filter> = object({
  from: ['from', string()],
  to: ['to', string()],
});
