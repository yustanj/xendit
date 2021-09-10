
# Disbursement

## Structure

`Disbursement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `bankCode` | `string` | Required | - |
| `bankAccountName` | `string` | Required | - |
| `bankAccountNumber` | `string` | Required | - |
| `description` | `string` | Required | - |
| `externalId` | `string` | Required | - |
| `emailTo` | `string[] \| undefined` | Optional | - |
| `emailCc` | `string[] \| undefined` | Optional | - |
| `emailBcc` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "amount": 20000,
  "bank_code": "BCA",
  "bank_account_name": "Fadlan",
  "bank_account_number": "1234567890",
  "description": "Batch Disbursement",
  "external_id": "disbursement-1"
}
```

