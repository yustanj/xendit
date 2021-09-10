
# Create FPC Alfamart Request

## Structure

`CreateFPCAlfamartRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `retailOutletName` | `string` | Required | - |
| `name` | `string` | Required | - |
| `expectedAmount` | `number` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "FPC-{{$timestamp}}",
  "retail_outlet_name": "ALFAMART",
  "name": "JOHN DOE",
  "expected_amount": 25000
}
```

