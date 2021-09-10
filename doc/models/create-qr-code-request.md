
# Create QR Code Request

## Structure

`CreateQRCodeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Required | - |
| `type` | `string` | Required | - |
| `callbackUrl` | `string` | Required | - |
| `amount` | `number` | Required | - |

## Example (as JSON)

```json
{
  "external_id": "testing_id_{{$timestamp}}",
  "type": "DYNAMIC",
  "callback_url": "https://my-shop.com/callbacks",
  "amount": 1000
}
```

