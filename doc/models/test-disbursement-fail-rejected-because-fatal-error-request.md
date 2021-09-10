
# TEST Disbursement Fail Rejected Because Fatal Error Request

## Structure

`TESTDisbursementFailRejectedBecauseFatalErrorRequest`

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
  "account_holder_name": "Adnin",
  "account_number": "1351357",
  "description": "Test - Fatal error"
}
```

