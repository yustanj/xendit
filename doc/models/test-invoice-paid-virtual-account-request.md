
# TEST Invoice Paid Virtual Account Request

## Structure

`TESTInvoicePaidVirtualAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `payerEmail` | `string` | Required | - |
| `description` | `string` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "test-va-success-{{$timestamp}}",
  "amount": 3000000,
  "payer_email": "customer@domain.com",
  "description": "Test - VA Successful invoice payment"
}
```

