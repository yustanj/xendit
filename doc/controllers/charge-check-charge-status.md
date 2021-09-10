# Charge Check Charge Status

```ts
const chargeCheckChargeStatusController = new ChargeCheckChargeStatusController(client);
```

## Class Name

`ChargeCheckChargeStatusController`

## Methods

* [Create OVO E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-ovo-e-wallet-charge)
* [Create OVO Tokenized E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-ovo-tokenized-e-wallet-charge)
* [Create Shopeepay E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-shopeepay-e-wallet-charge)
* [Create Shopeepay Tokenized E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-shopeepay-tokenized-e-wallet-charge)
* [Create DANA E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-dana-e-wallet-charge)
* [Create Link Aja E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-link-aja-e-wallet-charge)
* [Create Gcash E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-gcash-e-wallet-charge)
* [Create Paymaya E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-paymaya-e-wallet-charge)
* [Create Paymaya Tokenized E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-paymaya-tokenized-e-wallet-charge)
* [Create Grabpay E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-grabpay-e-wallet-charge)
* [Create Grabpay Tokenized E Wallet Charge](/doc/controllers/charge-check-charge-status.md#create-grabpay-tokenized-e-wallet-charge)
* [Get Charge Status](/doc/controllers/charge-check-charge-status.md#get-charge-status)
* [Sample Payment Notification From Xendit](/doc/controllers/charge-check-charge-status.md#sample-payment-notification-from-xendit)


# Create OVO E Wallet Charge

This API will allow you to charge OVO eWallet in Indonesia through Xendit.

It will accept order information such as `reference_id`, `amount`, and will produce `PENDING` status in the response. `PENDING` status represent that a push notification has been pushed to your customer's OVO app and is waiting for them to authorize and complete the charge.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createOVOEWalletCharge(
  body: CreateOVOEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OVOOneTimePaymentSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOVOEWalletChargeRequest`](/doc/models/create-ovoe-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OVOOneTimePaymentSampleResponse`](/doc/models/ovo-one-time-payment-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties = {
  mobileNumber: '+628123123123',
};

const bodyMetadata: Metadata = {
  branchArea: 'PLUIT',
  branchCity: 'JAKARTA',
};

const body: CreateOVOEWalletChargeRequest = {
  referenceId: 'order-id-{{$timestamp}}',
  currency: 'IDR',
  amount: 25000,
  checkoutMethod: 'ONE_TIME_PAYMENT',
  channelCode: 'ID_OVO',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createOVOEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "IDR",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": null,
  "checkout_method": "ONE_TIME_PAYMENT",
  "channel_code": "ID_OVO",
  "channel_properties": {
    "mobile_number": "+628123123123"
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
    "branch_area": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```


# Create OVO Tokenized E Wallet Charge

This API will allow you to charge OVO eWallet
using tokens in Indonesia through Xendit.

Account linking has to be performed before using this endpoint to make a tokenized payment. It will accept order information such as `reference_id`, `amount`, `payment_method_id` and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createOVOTokenizedEWalletCharge(
  body: CreateOVOTokenizedEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OVOTokenizedPaymentSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOVOTokenizedEWalletChargeRequest`](/doc/models/create-ovo-tokenized-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OVOTokenizedPaymentSampleResponse`](/doc/models/ovo-tokenized-payment-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties2 = {
  successRedirectUrl: 'https://redirect.me/payment',
  failureRedirectUrl: 'https://redirect.me/failed',
  redeemPoints: 'REDEEM_NONE',
};

const bodyMetadata: Metadata2 = {
  branchCode: 'PLUIT',
  branchCity: 'JAKARTA',
};

const body: CreateOVOTokenizedEWalletChargeRequest = {
  referenceId: 'test_reference_id',
  currency: 'IDR',
  amount: 123456,
  checkoutMethod: 'TOKENIZED_PAYMENT',
  paymentMethodId: 'pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createOVOTokenizedEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "IDR",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": null,
  "checkout_method": "tokenized_payment",
  "channel_code": "ID_OVO",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/payment",
    "failure_redirect_url": "https://redirect.me/failed",
    "redeem_points": "REDEEM_NONE"
  },
  "actions": {
    "desktop_web_checkout_url": "https://webcheckout.this/",
    "mobile_web_checkout_url": "https://m.webcheckout.this/",
    "mobile_deeplink_checkout_url": null,
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
  "callback_url": "https://webhook.me/gethooked",
  "created": "2020-04-20T16:23:52Z",
  "updated": "2020-04-20T16:23:52Z",
  "void_status": null,
  "voided_at": null,
  "capture_now": true,
  "customer_id": "fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "payment_method_id": "pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "failure_code": null,
  "basket": null,
  "metadata": {
    "branch_code": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```


# Create Shopeepay E Wallet Charge

This API will allow you to charge Shopeepay eWallet in Indonesia through Xendit.

It will accept order information such as `reference_id`, `amount`, and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createShopeepayEWalletCharge(
  body: CreateShopeepayEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShopeepayOneTimePaymentSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateShopeepayEWalletChargeRequest`](/doc/models/create-shopeepay-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShopeepayOneTimePaymentSampleResponse`](/doc/models/shopeepay-one-time-payment-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties4 = {
  successRedirectUrl: 'https://redirect.me/payment',
};

const bodyMetadata: Metadata = {
  branchArea: 'PLUIT',
  branchCity: 'JAKARTA',
};

const body: CreateShopeepayEWalletChargeRequest = {
  referenceId: 'order-id-{{$timestamp}}',
  currency: 'IDR',
  amount: 25000,
  checkoutMethod: 'ONE_TIME_PAYMENT',
  channelCode: 'ID_SHOPEEPAY',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createShopeepayEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "IDR",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": null,
  "checkout_method": "one_time_payment",
  "channel_code": "ID_SHOPEEPAY",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff"
  },
  "actions": {
    "desktop_web_checkout_url": null,
    "mobile_web_checkout_url": null,
    "mobile_deeplink_checkout_url": "app://deeplinkcheckout.this/",
    "qr_checkout_string": "123132AJKHEEWHK2313KDJHAQRHERE312i3120987123"
  },
  "is_redirect_required": true,
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
    "branch_area": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```


# Create Shopeepay Tokenized E Wallet Charge

This API will allow you to charge OVO eWallet
using tokens in Indonesia through Xendit.

Account linking has to be performed before using this endpoint to make a tokenized payment. It will accept order information such as `reference_id`, `amount`, `payment_method_id` and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createShopeepayTokenizedEWalletCharge(
  body: CreateShopeepayTokenizedEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShopeepayTokenizedPaymentSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateShopeepayTokenizedEWalletChargeRequest`](/doc/models/create-shopeepay-tokenized-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShopeepayTokenizedPaymentSampleResponse`](/doc/models/shopeepay-tokenized-payment-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties6 = {
  successRedirectUrl: 'https://redirect.me/payment',
  redeemPoints: 'REDEEM_NONE',
};

const bodyMetadata: Metadata2 = {
  branchCode: 'PLUIT',
  branchCity: 'JAKARTA',
};

const body: CreateShopeepayTokenizedEWalletChargeRequest = {
  referenceId: 'test_reference_id',
  currency: 'IDR',
  amount: 123456,
  checkoutMethod: 'TOKENIZED_PAYMENT',
  paymentMethodId: 'pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createShopeepayTokenizedEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "IDR",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": null,
  "checkout_method": "tokenized_payment",
  "channel_code": "ID_SHOPEEPAY",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/payment",
    "redeem_points": "REDEEM_NONE"
  },
  "actions": {
    "desktop_web_checkout_url": "https://webcheckout.this/",
    "mobile_web_checkout_url": "https://m.webcheckout.this/",
    "mobile_deeplink_checkout_url": null,
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
  "callback_url": "https://webhook.me/gethooked",
  "created": "2020-04-20T16:23:52Z",
  "updated": "2020-04-20T16:23:52Z",
  "void_status": null,
  "voided_at": null,
  "capture_now": true,
  "customer_id": "fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "payment_method_id": "pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "failure_code": null,
  "basket": null,
  "metadata": {
    "branch_code": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```


# Create DANA E Wallet Charge

This API will allow you to charge DANA eWallet in Indonesia through Xendit.

It will accept order information such as `reference_id`, `amount`, and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createDANAEWalletCharge(
  body: CreateDANAEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DANAOneTimePaymentSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateDANAEWalletChargeRequest`](/doc/models/create-danae-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DANAOneTimePaymentSampleResponse`](/doc/models/dana-one-time-payment-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties4 = {
  successRedirectUrl: 'https://redirect.me/payment',
};

const bodyMetadata: Metadata = {
  branchArea: 'PLUIT',
  branchCity: 'JAKARTA',
};

const body: CreateDANAEWalletChargeRequest = {
  referenceId: 'order-id-{{$timestamp}}',
  currency: 'IDR',
  amount: 25000,
  checkoutMethod: 'ONE_TIME_PAYMENT',
  channelCode: 'ID_DANA',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createDANAEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "IDR",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": null,
  "checkout_method": "one_time_payment",
  "channel_code": "ID_DANA",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff"
  },
  "actions": {
    "desktop_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_deeplink_checkout_url": null,
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
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
    "branch_area": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```


# Create Link Aja E Wallet Charge

This API will allow you to charge LinkAja eWallet in Indonesia through Xendit.

It will accept order information such as `reference_id`, `amount`, and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createLinkAjaEWalletCharge(
  body: CreateLinkAjaEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkAjaOneTimePaymentSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateLinkAjaEWalletChargeRequest`](/doc/models/create-link-aja-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkAjaOneTimePaymentSampleResponse`](/doc/models/link-aja-one-time-payment-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties4 = {
  successRedirectUrl: 'https://redirect.me/payment',
};

const bodyMetadata: Metadata = {
  branchArea: 'PLUIT',
  branchCity: 'JAKARTA',
};

const body: CreateLinkAjaEWalletChargeRequest = {
  referenceId: 'order-id-{{$timestamp}}',
  currency: 'IDR',
  amount: 25000,
  checkoutMethod: 'ONE_TIME_PAYMENT',
  channelCode: 'ID_LINKAJA',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createLinkAjaEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "IDR",
  "charge_amount": 123456,
  "capture_amount": 123456,
  "refunded_amount": null,
  "checkout_method": "one_time_payment",
  "channel_code": "ID_LINKAJA",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff"
  },
  "actions": {
    "desktop_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_deeplink_checkout_url": null,
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
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
    "branch_area": "PLUIT",
    "branch_city": "JAKARTA"
  }
}
```


# Create Gcash E Wallet Charge

This API will allow you to charge Gcash eWallet in Philippines through Xendit.

It will accept order information such as `reference_id`, `amount`, and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createGcashEWalletCharge(
  body: CreateGcashEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GcashOneTimePaymentSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateGcashEWalletChargeRequest`](/doc/models/create-gcash-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GcashOneTimePaymentSampleResponse`](/doc/models/gcash-one-time-payment-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties12 = {
  successRedirectUrl: 'https://redirect.me/payment',
  failureRedirectUrl: 'https://redirect.me/failed',
};

const bodyMetadata: Metadata12 = {
  branchCity: 'MANILA',
};

const body: CreateGcashEWalletChargeRequest = {
  referenceId: 'order-id-{{$timestamp}}',
  currency: 'PHP',
  amount: 25000,
  checkoutMethod: 'ONE_TIME_PAYMENT',
  channelCode: 'PH_GCASH',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createGcashEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "PHP",
  "charge_amount": 25000,
  "capture_amount": 25000,
  "refunded_amount": null,
  "checkout_method": "one_time_payment",
  "channel_code": "PH_GCASH",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff",
    "failure_redirect_url": "https://redirect.me/failed"
  },
  "actions": {
    "desktop_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_deeplink_checkout_url": null,
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
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
    "branch_city": "MANILA"
  }
}
```


# Create Paymaya E Wallet Charge

This API will allow you to charge Paymaya eWallet in Philippines through Xendit.

It will accept order information such as `reference_id`, `amount`, and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createPaymayaEWalletCharge(
  body: CreatePaymayaEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymayaOneTimePaymentsSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePaymayaEWalletChargeRequest`](/doc/models/create-paymaya-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymayaOneTimePaymentsSampleResponse`](/doc/models/paymaya-one-time-payments-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties14 = {
  successRedirectUrl: 'https://redirect.me/payment',
  failureRedirectUrl: 'https://redirect.me/failed',
  cancelRedirectUrl: 'https://redirect.me/cancel',
};

const bodyMetadata: Metadata12 = {
  branchCity: 'MANILA',
};

const body: CreatePaymayaEWalletChargeRequest = {
  referenceId: 'order-id-{{$timestamp}}',
  currency: 'PHP',
  amount: 25000,
  checkoutMethod: 'ONE_TIME_PAYMENT',
  channelCode: 'PH_PAYMAYA',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createPaymayaEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "PHP",
  "charge_amount": 25000,
  "capture_amount": 25000,
  "refunded_amount": null,
  "checkout_method": "one_time_payment",
  "channel_code": "PH_PAYMAYA",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff",
    "failure_redirect_url": "https://redirect.me/failed",
    "cancel_redirect_url": "https://redirect.me/cancel"
  },
  "actions": {
    "desktop_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_deeplink_checkout_url": null,
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
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
    "branch_city": "MANILA"
  }
}
```


# Create Paymaya Tokenized E Wallet Charge

This API will allow you to charge Paymaya eWallet using tokens in Philippines through Xendit.

Account linking has to be performed before using this endpoint to make a tokenized payment. It will accept order information such as `reference_id`, `amount`, `payment_method_id` and will produce `is_redirect_required` = `false`.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createPaymayaTokenizedEWalletCharge(
  body: CreatePaymayaTokenizedEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymayaTokenizedPaymentsSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePaymayaTokenizedEWalletChargeRequest`](/doc/models/create-paymaya-tokenized-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymayaTokenizedPaymentsSampleResponse`](/doc/models/paymaya-tokenized-payments-sample-response.md)

## Example Usage

```ts
const bodyMetadata: Metadata2 = {
  branchCode: 'QUEZON',
  branchCity: 'MANILA',
};

const body: CreatePaymayaTokenizedEWalletChargeRequest = {
  referenceId: 'test_reference_id',
  currency: 'PHP',
  amount: 25000,
  checkoutMethod: 'TOKENIZED_PAYMENT',
  paymentMethodId: 'pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d',
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createPaymayaTokenizedEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "PHP",
  "charge_amount": 25000,
  "capture_amount": 25000,
  "refunded_amount": null,
  "checkout_method": "tokenized_payment",
  "channel_code": "PH_PAYMAYA",
  "channel_properties": null,
  "actions": null,
  "is_redirect_required": false,
  "callback_url": "https://webhook.me/gethooked",
  "created": "2020-04-20T16:23:52Z",
  "updated": "2020-04-20T16:23:52Z",
  "void_status": null,
  "voided_at": null,
  "capture_now": true,
  "customer_id": "fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "payment_method_id": "pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "failure_code": null,
  "basket": null,
  "metadata": {
    "branch_code": "QUEZON",
    "branch_city": "MANILA"
  }
}
```


# Create Grabpay E Wallet Charge

This API will allow you to charge Grabpay eWallet in Philippines through Xendit.

It will accept order information such as `reference_id`, `amount`, and will produce `is_redirect_required` = `true` and several `actions` items in the response.
These `actions` items will require you to redirect your customer to the designated checkout page to authorize and complete the charge.
You'll only need to select one of the action item depending on your customer's device.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createGrabpayEWalletCharge(
  body: CreateGrabpayEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GrabpayOneTimePaymentsSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateGrabpayEWalletChargeRequest`](/doc/models/create-grabpay-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GrabpayOneTimePaymentsSampleResponse`](/doc/models/grabpay-one-time-payments-sample-response.md)

## Example Usage

```ts
const bodyChannelProperties: ChannelProperties12 = {
  successRedirectUrl: 'https://redirect.me/payment',
  failureRedirectUrl: 'https://redirect.me/failed',
};

const bodyMetadata: Metadata2 = {
  branchCode: 'QUEZON',
  branchCity: 'MANILA',
};

const body: CreateGrabpayEWalletChargeRequest = {
  referenceId: 'order-id-{{$timestamp}}',
  currency: 'PHP',
  amount: 25000,
  checkoutMethod: 'ONE_TIME_PAYMENT',
  channelCode: 'PH_GRABPAY',
  channelProperties: bodyChannelProperties,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createGrabpayEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "PHP",
  "charge_amount": 25000,
  "capture_amount": 25000,
  "refunded_amount": null,
  "checkout_method": "one_time_payment",
  "channel_code": "PH_GRABPAY",
  "channel_properties": {
    "success_redirect_url": "https://redirect.me/goodstuff",
    "failure_redirect_url": "https://redirect.me/failed"
  },
  "actions": {
    "desktop_web_checkout_url": "https://ewalletcheckout.this/",
    "mobile_web_checkout_url": null,
    "mobile_deeplink_checkout_url": "https://ewalletcheckout.this/",
    "qr_checkout_string": null
  },
  "is_redirect_required": true,
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
    "branch_code": "QUEZON",
    "branch_city": "MANILA"
  }
}
```


# Create Grabpay Tokenized E Wallet Charge

This API will allow you to charge Grabpay eWallet using tokens in Philippines through Xendit.

Account linking has to be performed before using this endpoint to make a tokenized payment. It will accept order information such as `reference_id`, `amount`, `payment_method_id` and will produce `is_redirect_required` = `false`.

A webhook or callback will be sent to your system after payment has been completed or failed.

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#create-ewallet-charge)

```ts
async createGrabpayTokenizedEWalletCharge(
  body: CreateGrabpayTokenizedEWalletChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GrabpayTokenizedPaymentsSampleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateGrabpayTokenizedEWalletChargeRequest`](/doc/models/create-grabpay-tokenized-e-wallet-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GrabpayTokenizedPaymentsSampleResponse`](/doc/models/grabpay-tokenized-payments-sample-response.md)

## Example Usage

```ts
const bodyMetadata: Metadata2 = {
  branchCode: 'QUEZON',
  branchCity: 'MANILA',
};

const body: CreateGrabpayTokenizedEWalletChargeRequest = {
  referenceId: 'test_reference_id',
  currency: 'PHP',
  amount: 25000,
  checkoutMethod: 'TOKENIZED_PAYMENT',
  paymentMethodId: 'pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d',
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.createGrabpayTokenizedEWalletCharge(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "ewc_532as23lew2321id",
  "business_id": "5easfnn23aadlmnaa42",
  "reference_id": "test_reference_id",
  "status": "PENDING",
  "currency": "PHP",
  "charge_amount": 25000,
  "capture_amount": 25000,
  "refunded_amount": null,
  "checkout_method": "tokenized_payment",
  "channel_code": "PH_GRABPAY",
  "channel_properties": null,
  "actions": null,
  "is_redirect_required": false,
  "callback_url": "https://webhook.me/gethooked",
  "created": "2020-04-20T16:23:52Z",
  "updated": "2020-04-20T16:23:52Z",
  "void_status": null,
  "voided_at": null,
  "capture_now": true,
  "customer_id": "fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "payment_method_id": "pm-fea3b000-f9dc-41c5-9bfc-fdrui2b0d84d",
  "failure_code": null,
  "basket": null,
  "metadata": {
    "branch_code": "QUEZON",
    "branch_city": "MANILA"
  }
}
```


# Get Charge Status

Get Charge Status allow you to retrive charges you have made via Charge ID
You'll need to save Charge ID from POST eWallet API response

Learn more about eWallet API in [Xendit API Reference](https://developers.xendit.co/api-reference/#get-ewallet-charge-status)

:information_source: **Note** This endpoint does not require authentication.

```ts
async getChargeStatus(
  chargeId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | - |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const chargeId = 'charge_id8';
const authorization = '{{Authorization}}';
try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.getChargeStatus(chargeId, authorization);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Sample Payment Notification From Xendit

```ts
async samplePaymentNotificationFromXendit(
  body: SamplePaymentNotificationFromXenditRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SamplePaymentNotificationFromXenditRequest`](/doc/models/sample-payment-notification-from-xendit-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bodyDataChannelProperties: ChannelProperties = {
  mobileNumber: '+6287777771111',
};

const bodyDataMetadata: Metadata22 = {
  branchCode: 'senayan_372',
};

const bodyData: Data = {
  id: 'ewc_532as23lew2321id',
  referenceId: 'test_reference_id',
  status: 'SUCCEEDED',
  currency: 'IDR',
  checkoutMethod: 'ONE_TIME_PAYMENT',
  chargeAmount: 123456,
  captureAmount: 123456,
  refundedAmount: 0,
  channelCode: 'OVO',
  channelProperties: bodyDataChannelProperties,
  actions: 'actions8',
  isRedirectRequired: false,
  callbackUrl: 'https://webhook.me/gethooked',
  created: '2020-04-20T16:23:52Z',
  updated: '2020-04-20T16:23:52Z',
  voidStatus: 'void_status6',
  voidedAt: 'voided_at4',
  captureNow: true,
  customerId: 'customer_id4',
  paymentMethodId: 'payment_method_id6',
  failureCode: 'failure_code2',
  basket: 'basket2',
  metadata: bodyDataMetadata,
};

const body: SamplePaymentNotificationFromXenditRequest = {
  event: 'ewallet.capture',
  businessId: '5abe2389ewpejrt238',
  created: '2020-04-20T16:25:52Z',
  data: bodyData,
};

try {
  const { result, ...httpResponse } = await chargeCheckChargeStatusController.samplePaymentNotificationFromXendit(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

