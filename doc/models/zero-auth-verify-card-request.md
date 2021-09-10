
# Zero Auth Verify Card Request

## Structure

`ZeroAuthVerifyCardRequest`

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
  "token_id": "5c1105fe15dcfc7bc88b6ec7",
  "external_id": "card_zeroAuth-{{$timestamp}}",
  "amount": 0,
  "card_cvn": "123"
}
```

