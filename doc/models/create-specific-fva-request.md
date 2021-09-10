
# Create Specific FVA Request

## Structure

`CreateSpecificFVARequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `bankCode` | `string` | Required | - |
| `name` | `string` | Required | - |
| `virtualAccountNumber` | `string` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "VA_fixed-{{$timestamp}}",
  "bank_code": "MANDIRI",
  "name": "Steve Wozniak",
  "virtual_account_number": "9999000002"
}
```

