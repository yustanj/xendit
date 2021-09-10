
# Binding Initiate Account Authorization Request

## Structure

`BindingInitiateAccountAuthorizationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `properties` | [`Properties7`](/doc/models/properties-7.md) | Required | - |

## Example (as JSON)

```json
{
  "customer_id": "test_customer_reference_id",
  "channel_code": "DC_BRI",
  "properties": {
    "account_mobile_number": "+6287779944444",
    "card_last_four": "8888",
    "card_expiry": "11/23",
    "account_email": "test.email@xendit.co"
  }
}
```

