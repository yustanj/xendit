
# Shopeepay Tokenized Account Linking Request

## Structure

`ShopeepayTokenizedAccountLinkingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `properties` | [`Properties`](/doc/models/properties.md) | Required | - |

## Example (as JSON)

```json
{
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "channel_code": "ID_SHOPEEPAY",
  "properties": {
    "success_redirect_url": "https://example.com",
    "failure_redirect_url": "https://example.com",
    "callback_url": "https://callback-example.com"
  }
}
```

