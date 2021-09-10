
# Paymaya Tokenized Account Linking Request

## Structure

`PaymayaTokenizedAccountLinkingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `properties` | [`Properties1`](/doc/models/properties-1.md) | Required | - |

## Example (as JSON)

```json
{
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "channel_code": "PH_PAYMAYA",
  "properties": {
    "success_redirect_url": "https://example.com",
    "failure_redirect_url": "https://example.com",
    "cancel_redirect_url": "https://example.com",
    "callback_url": "https://callback-example.com"
  }
}
```

