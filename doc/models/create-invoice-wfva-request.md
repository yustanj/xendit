
# Create Invoice WFVA Request

## Structure

`CreateInvoiceWFVARequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `payerEmail` | `string` | Required | - |
| `description` | `string` | Required | - |
| `callbackVirtualAccountId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "invoice_fva-{{$timestamp}}",
  "amount": 50000,
  "payer_email": "customer@domain.com",
  "description": "Invoice-{{$timestamp}}",
  "callback_virtual_account_id": "5bdaa2a8aec237552b1d547b"
}
```

