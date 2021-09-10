
# TEST Disbursement Fail Bank Maintenance Downtime Request

## Structure

`TESTDisbursementFailBankMaintenanceDowntimeRequest`

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
  "account_holder_name": "Yono",
  "account_number": "321321321",
  "description": "Test - Bank maintenance downtime error"
}
```

