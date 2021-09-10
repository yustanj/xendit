
# Successfully Retrieved Accessible Accounts for a Linked Account Token Copy

## Structure

`SuccessfullyRetrievedAccessibleAccountsForALinkedAccountTokenCopy`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `channelCode` | `string` | Required | - |
| `type` | `string` | Required | - |
| `properties` | [`Properties8`](/doc/models/properties-8.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "la-aa620619-124f-41db-995b-66a52abe036a",
  "channel_code": "DC_BRI",
  "type": "DEBIT_CARD",
  "properties": {
    "card_last_four": "1234",
    "card_expiry": "06/24",
    "currency": "IDR",
    "description": ""
  }
}
```

