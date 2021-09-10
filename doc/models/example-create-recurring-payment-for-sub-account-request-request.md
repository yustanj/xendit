
# EXAMPLE Create Recurring Payment for Sub Account Request Request

## Structure

`EXAMPLECreateRecurringPaymentForSubAccountRequestRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `payerEmail` | `string` | Required | - |
| `description` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `interval` | `string` | Required | - |
| `intervalCount` | `string` | Required | - |
| `shouldSendEmail` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "recurring_on_behalf_of_Shop1",
  "payer_email": "john_doe@xendit.co",
  "description": "Please pay your monthly subscription fee",
  "amount": 100000,
  "interval": "MONTH",
  "interval_count": "1",
  "should_send_email": true
}
```

