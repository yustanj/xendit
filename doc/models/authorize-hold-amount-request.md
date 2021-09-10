
# Authorize Hold Amount Request

## Structure

`AuthorizeHoldAmountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenId` | `string` | Required | - |
| `externalId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `cardCvn` | `string` | Required | - |
| `capture` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "token_id": "5c1105fe15dcfc7bc88b6ec7",
  "external_id": "card_preAuth-{{$timestamp}}",
  "amount": 800000,
  "card_cvn": "123",
  "capture": false
}
```

