
# Create Transfer Request

## Structure

`CreateTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `sourceUserId` | `string` | Required | - |
| `destinationUserId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "reference": "transfer_a0001",
  "amount": 10000,
  "source_user_id": "5cafeb170a2b18519b1b8768",
  "destination_user_id": "5cc00501fe2ea41db700c9c9"
}
```

