/**
 * API-XenditLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, Schema, string } from '../schema';

export interface Actions7 {
  desktopWebCheckoutUrl: string;
  mobileWebCheckoutUrl: string | null;
  mobileDeeplinkCheckoutUrl: string;
  qrCheckoutString: string | null;
}

export const actions7Schema: Schema<Actions7> = object({
  desktopWebCheckoutUrl: ['desktop_web_checkout_url', string()],
  mobileWebCheckoutUrl: ['mobile_web_checkout_url', nullable(string())],
  mobileDeeplinkCheckoutUrl: ['mobile_deeplink_checkout_url', string()],
  qrCheckoutString: ['qr_checkout_string', nullable(string())],
});
