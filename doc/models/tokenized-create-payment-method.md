
# Tokenized Create Payment Method

## Structure

`TokenizedCreatePaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | - |
| `type` | `string` | Required | - |
| `properties` | [`Properties4`](/doc/models/properties-4.md) | Required | - |
| `status` | `string` | Required | - |
| `metadata` | `unknown` | Required | - |
| `id` | `string` | Required | - |
| `created` | `string` | Required | - |
| `updated` | `string` | Required | - |

## Example (as JSON)

```json
{
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "type": "EWALLET",
  "properties": {
    "id": "la-da3fe9eb-bc66-4e4e-b176-df08dd2b876f"
  },
  "status": "ACTIVE",
  "metadata": {},
  "id": "pm-e69cbf2f-16f3-44e3-90cf-bc32b126313a",
  "created": "2021-04-06T06:25:07.831Z",
  "updated": "2021-04-06T06:25:07.831Z"
}
```

