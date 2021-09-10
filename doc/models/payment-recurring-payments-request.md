
# Payment Recurring Payments Request

## Structure

`PaymentRecurringPaymentsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `payerEmail` | `string` | Required | - |
| `description` | `string` | Required | - |
| `paymentMethodId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `interval` | `string` | Required | - |
| `intervalCount` | `number` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "albert",
  "payer_email": "albert@xendit.co",
  "description": "description",
  "payment_method_id": "{{debit_card_payment_method_id}}",
  "amount": 15000,
  "interval": "DAY",
  "interval_count": 1
}
```

