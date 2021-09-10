
# Account Linking Callback Notification Request

## Structure

`AccountLinkingCallbackNotificationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | `string` | Required | - |
| `timestamp` | `string` | Required | - |
| `id` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `type` | `string` | Required | - |
| `accounts` | [`Account[]`](/doc/models/account.md) | Required | - |

## Example (as JSON)

```json
{
  "event": "linked_account_token.successful",
  "timestamp": "2021-05-21T12:28:49.019Z",
  "id": "lat-d6876bf1-9722-47e3-8757-f74c7d7772b5",
  "channel_code": "PH_GRABPAY",
  "type": "EWALLET",
  "accounts": [
    {
      "id": "la-eddf88b1-312a-4f78-aca1-96e5ff4161b4",
      "account_details": null,
      "account_type": "EWALLET",
      "balance": 1000000,
      "currency": "PHP",
      "description": null,
      "name": null,
      "point_balance": null
    }
  ]
}
```

