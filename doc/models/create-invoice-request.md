
# Create Invoice Request

## Structure

`CreateInvoiceRequest`

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
  "external_id": "invoice-{{$timestamp}}",
  "amount": 1800000,
  "payer_email": "customer@domain.com",
  "description": "Invoice Demo #123"
}
```

