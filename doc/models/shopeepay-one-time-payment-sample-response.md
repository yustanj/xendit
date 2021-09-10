
# Shopeepay One Time Payment Sample Response

## Structure

`ShopeepayOneTimePaymentSampleResponse`

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
| `channelProperties` | [`ChannelProperties4`](/doc/models/channel-properties-4.md) | Required | - |
| `actions` | [`Actions1`](/doc/models/actions-1.md) | Required | - |
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
| `metadata` | [`Metadata`](/doc/models/metadata.md) | Required | - |

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
  "checkout_method": "one_time_payment",
  "channel_code": "ID_SHOPEEPAY",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff"
  },
  "actions": {
    "desktop_web_checkout_url": null,
    "mobile_web_checkout_url": null,
    "mobile_deeplink_checkout_url": "app://deeplinkcheckout.this/",
    "qr_checkout_string": "123132AJKHEEWHK2313KDJHAQRHERE312i3120987123"
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
    "branch_area": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```

