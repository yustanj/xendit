
# Create OVOE Wallet Charge Request

## Structure

`CreateOVOEWalletChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `checkoutMethod` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `channelProperties` | [`ChannelProperties`](/doc/models/channel-properties.md) | Required | - |
| `metadata` | [`Metadata`](/doc/models/metadata.md) | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "order-id-{{$timestamp}}",
  "currency": "IDR",
  "amount": 25000,
  "checkout_method": "ONE_TIME_PAYMENT",
  "channel_code": "ID_OVO",
  "channel_properties": {
    "mobile_number": "+628123123123"
  },
  "metadata": {
    "branch_area": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```

