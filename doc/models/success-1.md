
# Success 1

## Structure

`Success1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `created` | `string` | Required | - |
| `businessId` | `string` | Required | - |
| `authorizedAmount` | `number` | Required | - |
| `externalId` | `string` | Required | - |
| `merchantId` | `string` | Required | - |
| `merchantReferenceCode` | `string` | Required | - |
| `maskedCardNumber` | `string` | Required | - |
| `chargeType` | `string` | Required | - |
| `cardBrand` | `string` | Required | - |
| `cardType` | `string` | Required | - |
| `bankReconciliationId` | `string` | Required | - |
| `status` | `string` | Required | - |
| `eci` | `string` | Required | - |
| `captureAmount` | `number` | Required | - |
| `id` | `string` | Required | - |

## Example (as JSON)

```json
{
  "created": "2018-12-05T04:45:52.02Z",
  "business_id": "5c04a792a4d5492fc034ac42",
  "authorized_amount": 8000,
  "external_id": "card_charge-1543985147",
  "merchant_id": "xendit",
  "merchant_reference_code": "5c0757dd18a17323d667af4e",
  "masked_card_number": "400000XXXXXX0002",
  "charge_type": "SINGLE_USE_TOKEN",
  "card_brand": "VISA",
  "card_type": "CREDIT",
  "bank_reconciliation_id": "5439851446196244203010",
  "status": "CAPTURED",
  "eci": "05",
  "capture_amount": 8000,
  "id": "5c07580018a17323d667af55"
}
```

