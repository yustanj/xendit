
# Channel Properties 14

## Structure

`ChannelProperties14`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `successRedirectUrl` | `string` | Required | - |
| `failureRedirectUrl` | `string` | Required | - |
| `cancelRedirectUrl` | `string` | Required | - |

## Example (as JSON)

```json
{
  "success_redirect_url": "https://redirect.me/payment",
  "failure_redirect_url": "https://redirect.me/failed",
  "cancel_redirect_url": "https://redirect.me/cancel"
}
```

