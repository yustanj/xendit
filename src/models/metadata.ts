/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Metadata {
  branchArea: string;
  branchCity: string;
}

export const metadataSchema: Schema<Metadata> = object({
  branchArea: ['branch_area', string()],
  branchCity: ['branch_city', string()],
});
