
# Generate Report Request

## Structure

`GenerateReportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | - |
| `filter` | [`Filter`](/doc/models/filter.md) | Required | - |
| `format` | `string` | Required | - |
| `currency` | `string` | Required | - |

## Example (as JSON)

```json
{
  "type": "BALANCE_HISTORY",
  "filter": {
    "from": "2021-06-23T04:01:55.574Z",
    "to": "2021-06-24T04:01:55.574Z"
  },
  "format": "CSV",
  "currency": "IDR"
}
```

