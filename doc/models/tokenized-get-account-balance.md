
# Tokenized Get Account Balance

## Structure

`TokenizedGetAccountBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `channelCode` | `string` | Required | - |
| `id` | `string` | Required | - |
| `type` | `string` | Required | - |
| `properties` | [`Properties6`](/doc/models/properties-6.md) | Required | - |

## Example (as JSON)

```json
{
  "channel_code": "PH_PAYMAYA",
  "id": "la-da3fe9eb-bc66-4e4e-b176-df08dd2b876f",
  "type": "EWALLET",
  "properties": {
    "account_details": "+63(2)123456XXXX",
    "account_type": "EWALLET",
    "balance": null,
    "currency": "PHP",
    "description": null,
    "name": "John Peter Doe",
    "point_balance": null
  }
}
```

