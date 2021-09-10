
# TEST Disbursement Fail Not Enough Balance Error Request

## Structure

`TESTDisbursementFailNotEnoughBalanceErrorRequest`

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
  "amount": 9999999999999999999,
  "bank_code": "BCA",
  "account_holder_name": "Jack",
  "account_number": "86868677",
  "description": "Test - Not enough balance error"
}
```

