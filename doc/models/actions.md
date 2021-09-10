
# Actions

## Structure

`Actions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `desktopWebCheckoutUrl` | `string` | Required | - |
| `mobileWebCheckoutUrl` | `string` | Required | - |
| `mobileDeeplinkCheckoutUrl` | `string \| null` | Required | - |
| `qrCheckoutString` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "desktop_web_checkout_url": "https://webcheckout.this/",
  "mobile_web_checkout_url": "https://m.webcheckout.this/",
  "mobile_deeplink_checkout_url": null,
  "qr_checkout_string": null
}
```

