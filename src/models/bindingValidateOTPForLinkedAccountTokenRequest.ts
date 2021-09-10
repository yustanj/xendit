/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface BindingValidateOTPForLinkedAccountTokenRequest {
  otpCode: string;
}

export const bindingValidateOTPForLinkedAccountTokenRequestSchema: Schema<BindingValidateOTPForLinkedAccountTokenRequest> = object(
  { otpCode: ['otp_code', string()] }
);
