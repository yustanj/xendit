
# Channel Properties 2

## Structure

`ChannelProperties2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `successRedirectUrl` | `string` | Required | - |
| `failureRedirectUrl` | `string` | Required | - |
| `redeemPoints` | `string` | Required | - |

## Example (as JSON)

```json
{
  "success_redirect_url": "https://redirect.me/payment",
  "failure_redirect_url": "https://redirect.me/failed",
  "redeem_points": "REDEEM_NONE"
}
```

