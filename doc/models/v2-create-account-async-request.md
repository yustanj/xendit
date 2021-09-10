
# V2 Create Account Async Request

## Structure

`V2CreateAccountAsyncRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | - |
| `type` | `string` | Required | - |
| `publicProfile` | [`PublicProfile`](/doc/models/public-profile.md) | Required | - |

## Example (as JSON)

```json
{
  "email": "angie@pinkpanther.com",
  "type": "OWNED",
  "public_profile": {
    "business_name": "Retail Business 1"
  }
}
```

