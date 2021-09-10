
# Create Paymaya E Wallet Charge Request

## Structure

`CreatePaymayaEWalletChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `checkoutMethod` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `channelProperties` | [`ChannelProperties14`](/doc/models/channel-properties-14.md) | Required | - |
| `metadata` | [`Metadata12`](/doc/models/metadata-12.md) | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "order-id-{{$timestamp}}",
  "currency": "PHP",
  "amount": 25000,
  "checkout_method": "ONE_TIME_PAYMENT",
  "channel_code": "PH_PAYMAYA",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/payment",
    "failure_redirect_url": "https://redirect.me/failed",
    "cancel_redirect_url": "https://redirect.me/cancel"
  },
  "metadata": {
    "branch_city": "MANILA"
  }
}
```

