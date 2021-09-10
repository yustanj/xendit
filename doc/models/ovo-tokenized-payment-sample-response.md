
# OVO Tokenized Payment Sample Response

## Structure

`OVOTokenizedPaymentSampleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `businessId` | `string` | Required | - |
| `referenceId` | `string` | Required | - |
| `status` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `chargeAmount` | `number` | Required | - |
| `captureAmount` | `number` | Required | - |
| `refundedAmount` | `string \| null` | Required | - |
| `checkoutMethod` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `channelProperties` | [`ChannelProperties2`](/doc/models/channel-properties-2.md) | Required | - |
| `actions` | [`Actions`](/doc/models/actions.md) | Required | - |
| `isRedirectRequired` | `boolean` | Required | - |
| `callbackUrl` | `string` | Required | - |
| `created` | `string` | Required | - |
| `updated` | `string` | Required | - |
| `voidStatus` | `string \| null` | Required | - |
| `voidedAt` | `string \| null` | Required | - |
| `captureNow` | `boolean` | Required | - |
| `customerId` | `string` | Required | - |
| `paymentMethodId` | `string` | Required | - |
| `failureCode` | `string \| null` | Required | - |
| `basket` | `string \| null` | Required | - |
| `metadata` | [`Metadata2`](/doc/models/metadata-2.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "IDR",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": null,
  "checkout_method": "tokenized_payment",
  "channel_code": "ID_OVO",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/payment",
    "failure_redirect_url": "https://redirect.me/failed",
    "redeem_points": "REDEEM_NONE"
  },
  "actions": {
    "desktop_web_checkout_url": "https://webcheckout.this/",
    "mobile_web_checkout_url": "https://m.webcheckout.this/",
    "mobile_deeplink_checkout_url": null,
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
  "callback_url": "https://webhook.me/gethooked",
  "created": "2020-04-20T16:23:52Z",
  "updated": "2020-04-20T16:23:52Z",
  "void_status": null,
  "voided_at": null,
  "capture_now": true,
  "customer_id": "fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "payment_method_id": "pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "failure_code": null,
  "basket": null,
  "metadata": {
    "branch_code": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```

