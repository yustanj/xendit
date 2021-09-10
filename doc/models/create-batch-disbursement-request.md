
# Create Batch Disbursement Request

## Structure

`CreateBatchDisbursementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | `string` | Required | - |
| `disbursements` | [`Disbursement[]`](/doc/models/disbursement.md) | Required | - |

## Example (as JSON)

```json
{
  "reference": "disb_batch-{{$timestamp}}",
  "disbursements": [
    {
      "amount": 20000,
      "bank_code": "BCA",
      "bank_account_name": "Fadlan",
      "bank_account_number": "1234567890",
      "description": "Batch Disbursement",
      "external_id": "disbursement-1"
    },
    {
      "amount": 30000,
      "bank_code": "MANDIRI",
      "bank_account_name": "Lutfi",
      "bank_account_number": "1234567891",
      "description": "Batch Disbursement with email notifications",
      "external_id": "disbursement-2",
      "email_to": [
        "test+to@xendit.co"
      ],
      "email_cc": [
        "test+cc@xendit.co"
      ],
      "email_bcc": [
        "test+bcc1@xendit.co",
        "test+bcc2@xendit.co"
      ]
    }
  ]
}
```

