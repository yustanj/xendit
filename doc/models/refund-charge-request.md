
# Refund Charge Request

## Structure

`RefundChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `externalId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "amount": 100000,
  "external_id": "card_refund-{{$timestamp}}"
}
```

