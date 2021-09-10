
# Gcash One Time Payment Sample Response

## Structure

`GcashOneTimePaymentSampleResponse`

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
| `channelProperties` | [`ChannelProperties12`](/doc/models/channel-properties-12.md) | Required | - |
| `actions` | [`Actions`](/doc/models/actions.md) | Required | - |
| `isRedirectRequired` | `boolean` | Required | - |
| `callbackUrl` | `string` | Required | - |
| `created` | `string` | Required | - |
| `updated` | `string` | Required | - |
| `voidStatus` | `string \| null` | Required | - |
| `voidedAt` | `string \| null` | Required | - |
| `captureNow` | `boolean` | Required | - |
| `customerId` | `string \| null` | Required | - |
| `paymentMethodId` | `string \| null` | Required | - |
| `failureCode` | `string \| null` | Required | - |
| `basket` | `string \| null` | Required | - |
| `metadata` | [`Metadata12`](/doc/models/metadata-12.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "PHP",
  "charge_amount": 25000,
  "capture_amount": 25000,
  "refunded_amount": null,
  "checkout_method": "one_time_payment",
  "channel_code": "PH_GCASH",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff",
    "failure_redirect_url": "https://redirect.me/failed"
  },
  "actions": {
    "desktop_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_web_checkout_url": "https://ewalletcheckout.this/",
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
  "customer_id": null,
  "payment_method_id": null,
  "failure_code": null,
  "basket": null,
  "metadata": {
    "branch_city": "MANILA"
  }
}
```

