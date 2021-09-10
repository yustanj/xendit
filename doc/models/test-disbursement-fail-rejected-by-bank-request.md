
# TEST Disbursement Fail Rejected by Bank Request

## Structure

`TESTDisbursementFailRejectedByBankRequest`

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
  "account_holder_name": "Budi",
  "account_number": "8787878",
  "description": "Test - Rejected by bank error"
}
```

