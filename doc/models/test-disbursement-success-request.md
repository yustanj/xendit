
# TEST Disbursement Success Request

## Structure

`TESTDisbursementSuccessRequest`

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
  "external_id": "disb_test_success-{{$timestamp}}",
  "amount": 90000,
  "bank_code": "BCA",
  "account_holder_name": "Joe",
  "account_number": "1234567890",
  "description": "Test - Successful disbursement"
}
```

