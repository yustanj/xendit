
# TEST Disbursement Fail Unknown Bank Network Error Request

## Structure

`TESTDisbursementFailUnknownBankNetworkErrorRequest`

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
  "account_holder_name": "Andri",
  "account_number": "987654321",
  "description": "Test - Unknown bank network error"
}
```

