
# Create Disbursement Request

## Structure

`CreateDisbursementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `bankCode` | `string` | Required | - |
| `accountHolderName` | `string` | Required | - |
| `accountNumber` | `string` | Required | - |
| `description` | `string` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "disb-{{$timestamp}}",
  "amount": 15000,
  "bank_code": "BCA",
  "account_holder_name": "Joe",
  "account_number": "1234567890",
  "description": "Disbursement from Postman"
}
```

