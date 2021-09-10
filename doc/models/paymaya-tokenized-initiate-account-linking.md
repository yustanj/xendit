
# PAYMAYA Tokenized Initiate Account Linking

## Structure

`PAYMAYATokenizedInitiateAccountLinking`

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
  "id": "lat-f3477189-2944-4e6c-bece-6640603fd805",
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "channel_code": "PH_PAYMAYA",
  "authorizer_url": "https://link-web-staging.xendit.co/auth/lat-f3477189-2944-4e6c-bece-6640603fd805/confirm",
  "status": "PENDING",
  "metadata": null
}
```

