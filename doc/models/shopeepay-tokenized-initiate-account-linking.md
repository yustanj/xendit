
# Shopeepay Tokenized Initiate Account Linking

## Structure

`ShopeepayTokenizedInitiateAccountLinking`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `customerId` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `authorizerUrl` | `string` | Required | - |
| `status` | `string` | Required | - |
| `metadata` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "id": "lat-ae1d49a4-4e46-4b00-8be0-16b2b1ccc159",
  "customer_id": "5d9a64c0-5f28-4962-801e-33fdbf2c97c5",
  "channel_code": "ID_SHOPEEPAY",
  "authorizer_url": "https://link-web-staging.xendit.co/oauth/lat-ae1d49a4-4e46-4b00-8be0-16b2b1ccc159/confirm",
  "status": "PENDING",
  "metadata": null
}
```

