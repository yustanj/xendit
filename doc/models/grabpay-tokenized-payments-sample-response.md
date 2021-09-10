
# Grabpay Tokenized Payments Sample Response

## Structure

`GrabpayTokenizedPaymentsSampleResponse`

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
| `channelProperties` | `string \| null` | Required | - |
| `actions` | `string \| null` | Required | - |
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
  "currency": "PHP",
  "charge_amount": 25000,
  "capture_amount": 25000,
  "refunded_amount": null,
  "checkout_method": "tokenized_payment",
  "channel_code": "PH_GRABPAY",
  "channel_properties": null,
  "actions": null,
  "is_redirect_required": false,
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
    "branch_code": "QUEZON",
    "branch_city": "MANILA"
  }
}
```

