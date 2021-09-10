
# Create FVA Request

## Structure

`CreateFVARequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `bankCode` | `string` | Required | - |
| `name` | `string` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "VA_fixed-{{$timestamp}}",
  "bank_code": "MANDIRI",
  "name": "Steve Wozniak"
}
```

