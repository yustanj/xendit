
# Tokenized Create Payment Method Request

## Structure

`TokenizedCreatePaymentMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | - |
| `type` | `string` | Required | - |
| `properties` | [`Properties4`](/doc/models/properties-4.md) | Required | - |

## Example (as JSON)

```json
{
  "customer_id": "test_customer_reference_id",
  "type": "EWALLET",
  "properties": {
    "id": "[linked account id from GET - prefix la-XXXX]"
  }
}
```

