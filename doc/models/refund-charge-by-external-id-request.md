
# Refund Charge by External ID Request

## Structure

`RefundChargeByExternalIDRequest`

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

