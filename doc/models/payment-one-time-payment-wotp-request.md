
# Payment One Time Payment WOTP Request

## Structure

`PaymentOneTimePaymentWOTPRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `paymentMethodId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `enableOtp` | `boolean` | Required | - |
| `callbackUrl` | `string` | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "{{normal_direct_debit_reference_id}}",
  "payment_method_id": "{{debit_card_payment_method_id}}",
  "currency": "IDR",
  "amount": 1688,
  "enable_otp": true,
  "callback_url": "https://yourwebhooksite"
}
```

