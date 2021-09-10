
# Create Fee Rule Request

## Structure

`CreateFeeRuleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `description` | `string` | Required | - |
| `routes` | [`Route[]`](/doc/models/route.md) | Required | - |

## Example (as JSON)

```json
{
  "name": "Standard platform fee",
  "description": "Platform fee for all transactions accepted on behalf of vendors",
  "routes": [
    {
      "unit": "flat",
      "amount": 3000,
      "currency": "IDR"
    }
  ]
}
```

