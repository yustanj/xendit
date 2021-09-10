
# Data

## Structure

`Data`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `referenceId` | `string` | Required | - |
| `status` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `checkoutMethod` | `string` | Required | - |
| `chargeAmount` | `number` | Required | - |
| `captureAmount` | `number` | Required | - |
| `refundedAmount` | `number` | Required | - |
| `channelCode` | `string` | Required | - |
| `channelProperties` | [`ChannelProperties`](/doc/models/channel-properties.md) | Required | - |
| `actions` | `string \| null` | Required | - |
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
| `metadata` | [`Metadata22`](/doc/models/metadata-22.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "ewc_532as23lew2321id",
  "reference_id": "test_reference_id",
  "status": "SUCCEEDED",
  "currency": "IDR",
  "checkout_method": "ONE_TIME_PAYMENT",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": 0,
  "channel_code": "OVO",
  "channel_properties": {
    "mobile_number": "+6287777771111"
  },
  "actions": null,
  "is_redirect_required": false,
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
    "branch_code": "senayan_372"
  }
}
```

