
# EXAMPLE Create Disbursement for Sub Account Request Request

## Structure

`EXAMPLECreateDisbursementForSubAccountRequestRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `bankCode` | `string` | Required | - |
| `accountHolderName` | `string` | Required | - |
| `accountNumber` | `string` | Required | - |
| `description` | `string` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "disbursement_on_behalf_of_Shop1",
  "bank_code": "BNI",
  "account_holder_name": "John Doe",
  "account_number": "12345678910",
  "description": "For 5d0c9bfa72667f2212d8f602"
}
```

