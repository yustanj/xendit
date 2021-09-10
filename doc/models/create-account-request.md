
# Create Account Request

## Structure

`CreateAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountEmail` | `string` | Required | - |
| `type` | `string` | Required | - |
| `businessProfile` | [`BusinessProfile`](/doc/models/business-profile.md) | Required | - |

## Example (as JSON)

```json
{
  "account_email": "angie@pinkpanther.com",
  "type": "owned",
  "business_profile": {
    "business_name": "Retail Business 1"
  }
}
```

