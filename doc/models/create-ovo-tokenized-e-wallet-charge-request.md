
# Create OVO Tokenized E Wallet Charge Request

## Structure

`CreateOVOTokenizedEWalletChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `checkoutMethod` | `string` | Required | - |
| `paymentMethodId` | `string` | Required | - |
| `channelProperties` | [`ChannelProperties2`](/doc/models/channel-properties-2.md) | Required | - |
| `metadata` | [`Metadata2`](/doc/models/metadata-2.md) | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "test_reference_id",
  "currency": "IDR",
  "amount": 123456,
  "checkout_method": "TOKENIZED_PAYMENT",
  "payment_method_id": "pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/payment",
    "failure_redirect_url": "https://redirect.me/failed",
    "redeem_points": "REDEEM_NONE"
  },
  "metadata": {
    "branch_code": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```

