
# Create DANAE Wallet Charge Request

## Structure

`CreateDANAEWalletChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `checkoutMethod` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `channelProperties` | [`ChannelProperties4`](/doc/models/channel-properties-4.md) | Required | - |
| `metadata` | [`Metadata`](/doc/models/metadata.md) | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "order-id-{{$timestamp}}",
  "currency": "IDR",
  "amount": 25000,
  "checkout_method": "ONE_TIME_PAYMENT",
  "channel_code": "ID_DANA",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/payment"
  },
  "metadata": {
    "branch_area": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```

