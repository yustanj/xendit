
# Charge Auth Capture Request

## Structure

`ChargeAuthCaptureRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenId` | `string` | Required | - |
| `externalId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `cardCvn` | `string` | Required | - |

## Example (as JSON)

```json
{
  "token_id": "5caf28a2d3c9b11b9fa09c8b",
  "external_id": "card_charge-{{$timestamp}}",
  "amount": 888000,
  "card_cvn": "123"
}
```

