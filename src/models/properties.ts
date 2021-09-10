/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Properties {
  successRedirectUrl: string;
  failureRedirectUrl: string;
  callbackUrl: string;
}

export const propertiesSchema: Schema<Properties> = object({
  successRedirectUrl: ['success_redirect_url', string()],
  failureRedirectUrl: ['failure_redirect_url', string()],
  callbackUrl: ['callback_url', string()],
});
