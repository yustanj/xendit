
# EXAMPLE Creating an Invoice for a Sub Account Request

## Structure

`EXAMPLECreatingAnInvoiceForASubAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `description` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `payerEmail` | `string` | Required | - |
| `shouldSendEmail` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "invoice_on_behalf_of_shop1",
  "description": "For Shirt sold by Shop 1",
  "amount": 10000,
  "payer_email": "john_doe@xendit.co",
  "should_send_email": true
}
```

