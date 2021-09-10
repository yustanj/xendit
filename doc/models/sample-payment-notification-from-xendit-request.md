
# Sample Payment Notification From Xendit Request

## Structure

`SamplePaymentNotificationFromXenditRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | `string` | Required | - |
| `businessId` | `string` | Required | - |
| `created` | `string` | Required | - |
| `data` | [`Data`](/doc/models/data.md) | Required | - |

## Example (as JSON)

```json
{
  "event": "ewallet.capture",
  "business_id": "5abe2389ewpejrt238",
  "created": "2020-04-20T16:25:52Z",
  "data": {
    "id": "ewc_532as23lew2321id",
    "reference_id": "test_reference_id",
    "status": "SUCCEEDED",
    "currency": "IDR",
    "checkout_method": "ONE_TIME_PAYMENT",
    "charge_amount": 123456,
    "capture_amount": 123456,
    "refunded_amount": 0,
    "channel_code": "OVO",
    "channel_properties": {
      "mobile_number": "+6287777771111"
    },
    "actions": null,
    "is_redirect_required": false,
    "callback_url": "https://webhook.me/gethooked",
    "created": "2020-04-20T16:23:52Z",
    "updated": "2020-04-20T16:23:52Z",
    "void_status": null,
    "voided_at": null,
    "capture_now": true,
    "customer_id": null,
    "payment_method_id": null,
    "failure_code": null,
    "basket": null,
    "metadata": {
      "branch_code": "senayan_372"
    }
  }
}
```

