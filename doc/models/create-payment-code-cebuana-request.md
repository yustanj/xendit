
# Create Payment Code CEBUANA Request

## Structure

`CreatePaymentCodeCEBUANARequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `customerName` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `currency` | `string` | Required | - |
| `market` | `string` | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "payment-code-{{$timestamp}}",
  "channel_code": "CEBUANA",
  "customer_name": "JOHN DOE",
  "amount": 100,
  "currency": "PHP",
  "market": "PH"
}
```

