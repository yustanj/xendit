
# Create Paymaya Tokenized E Wallet Charge Request

## Structure

`CreatePaymayaTokenizedEWalletChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `checkoutMethod` | `string` | Required | - |
| `paymentMethodId` | `string` | Required | - |
| `metadata` | [`Metadata2`](/doc/models/metadata-2.md) | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "test_reference_id",
  "currency": "PHP",
  "amount": 25000,
  "checkout_method": "TOKENIZED_PAYMENT",
  "payment_method_id": "pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "metadata": {
    "branch_code": "QUEZON",
    "branch_city": "MANILA"
  }
}
```

