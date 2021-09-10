
# TEST Disbursement Fail Invalid Bank Account Request

## Structure

`TESTDisbursementFailInvalidBankAccountRequest`

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
  "external_id": "disb_test_fail-{{$timestamp}}",
  "amount": 15000,
  "bank_code": "MANDIRI",
  "account_holder_name": "Rizky",
  "account_number": "7654321",
  "description": "Test - Bank account does not exist"
}
```

