# Direct Debit

Direct Debit enables merchants to pull payments directly from their end user’s account bank balance by linking their debit card or bank account access.

Currently supports BRI in Indonesia, and BPI and Unionbank in the Philippines.

Learn more in [Xendit API Reference](https://developers.xendit.co/api-reference/#direct-debit)

```ts
const directDebitController = new DirectDebitController(client);
```

## Class Name

`DirectDebitController`

## Methods

* [Binding - Create Customer](/doc/controllers/direct-debit.md#binding-create-customer)
* [Binding - Initiate Account Authorization](/doc/controllers/direct-debit.md#binding-initiate-account-authorization)
* [Binding - Validate OTP for Linked Account Token](/doc/controllers/direct-debit.md#binding-validate-otp-for-linked-account-token)
* [Binding - Retreive Accessible Accounts Copy](/doc/controllers/direct-debit.md#binding-retreive-accessible-accounts-copy)
* [Binding - Create Payment Method](/doc/controllers/direct-debit.md#binding-create-payment-method)
* [Payment - One Time Payment W O OTP](/doc/controllers/direct-debit.md#payment-one-time-payment-w-o-otp)
* [Payment - One Time Payment W OTP](/doc/controllers/direct-debit.md#payment-one-time-payment-w-otp)
* [Payment - Validate OTP One Time Payment W OTP](/doc/controllers/direct-debit.md#payment-validate-otp-one-time-payment-w-otp)
* [Payment - Recurring Payments](/doc/controllers/direct-debit.md#payment-recurring-payments)
* [Binding - Unlink Linked Account Token Copy](/doc/controllers/direct-debit.md#binding-unlink-linked-account-token-copy)


# Binding - Create Customer

A customer object is required in order to link a payment method for direct debit. This allows you to easily link and track payment methods and transactions.

```ts
async bindingCreateCustomer(
  body: BindingCreateCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BindingCreateCustomerRequest`](/doc/models/binding-create-customer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: BindingCreateCustomerRequest = {
  givenNames: 'postman_given_names',
  referenceId: 'test_customer_reference_id',
  email: 'testemail@email.com',
};

try {
  const { result, ...httpResponse } = await directDebitController.bindingCreateCustomer(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Binding - Initiate Account Authorization

Account linking is required before performing direct debits.

Account authorizations are represented by linked account tokens. This endpoint initializes the authorization process and linked account token creation.

```ts
async bindingInitiateAccountAuthorization(
  contentType: string,
  body: BindingInitiateAccountAuthorizationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessfullyInitiatedAnAuthorizationRequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`BindingInitiateAccountAuthorizationRequest`](/doc/models/binding-initiate-account-authorization-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessfullyInitiatedAnAuthorizationRequest`](/doc/models/successfully-initiated-an-authorization-request.md)

## Example Usage

```ts
const contentType = 'application/json';
const bodyProperties: Properties7 = {
  accountMobileNumber: '+6287779944444',
  cardLastFour: '8888',
  cardExpiry: '11/23',
  accountEmail: 'test.email@xendit.co',
};

const body: BindingInitiateAccountAuthorizationRequest = {
  customerId: 'test_customer_reference_id',
  channelCode: 'DC_BRI',
  properties: bodyProperties,
};

try {
  const { result, ...httpResponse } = await directDebitController.bindingInitiateAccountAuthorization(contentType, body);
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
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "customer_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "channel_code": "<string>",
  "status": "<string>",
  "type": "<string>",
  "authorizer_url": "<string>"
}
```


# Binding - Validate OTP for Linked Account Token

Account linking for BRI requires an OTP to proceed.

Upon successful initialization, the bank will send an OTP to the customer's registered mobile number directly. This endpoint validates the OTP with the bank.

```ts
async bindingValidateOTPForLinkedAccountToken(
  linkedAccountTokenId: string,
  contentType: string,
  body: BindingValidateOTPForLinkedAccountTokenRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessfullyInitiatedAnAuthorizationRequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkedAccountTokenId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`BindingValidateOTPForLinkedAccountTokenRequest`](/doc/models/binding-validate-otp-for-linked-account-token-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessfullyInitiatedAnAuthorizationRequest`](/doc/models/successfully-initiated-an-authorization-request.md)

## Example Usage

```ts
const linkedAccountTokenId = 'linked_account_token_id6';
const contentType = 'application/json';
const body: BindingValidateOTPForLinkedAccountTokenRequest = {
  otpCode: '460046',
};

try {
  const { result, ...httpResponse } = await directDebitController.bindingValidateOTPForLinkedAccountToken(linkedAccountTokenId, contentType, body);
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
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "customer_id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "channel_code": "<string>",
  "status": "<string>",
  "type": "<string>",
  "authorizer_url": "<string>"
}
```


# Binding - Retreive Accessible Accounts Copy

This endpoint returns a list of bank accounts accessible by the linked account token. The response information from this endpoint is required for creation of payment method.

For BPI, it is possible to have more than one accessible account.

```ts
async bindingRetreiveAccessibleAccountsCopy(
  linkedAccountTokenId: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessfullyRetrievedAccessibleAccountsForALinkedAccountTokenCopy[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkedAccountTokenId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessfullyRetrievedAccessibleAccountsForALinkedAccountTokenCopy[]`](/doc/models/successfully-retrieved-accessible-accounts-for-a-linked-account-token-copy.md)

## Example Usage

```ts
const linkedAccountTokenId = 'linked_account_token_id6';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await directDebitController.bindingRetreiveAccessibleAccountsCopy(linkedAccountTokenId, contentType);
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
[
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
]
```


# Binding - Create Payment Method

Payment methods enable you to abstract sources of funds and use them for making direct debit payments or recurring payments. Currently, only supports linked accounts.

```ts
async bindingCreatePaymentMethod(
  body: BindingCreatePaymentMethodRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BindingCreatePaymentMethodRequest`](/doc/models/binding-create-payment-method-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bodyProperties: Properties4 = {
  id: '[linked account id from GET - prefix la-XXXX]',
};

const body: BindingCreatePaymentMethodRequest = {
  customerId: 'test_customer_reference_id',
  type: 'DEBIT_CARD',
  properties: bodyProperties,
};

try {
  const { result, ...httpResponse } = await directDebitController.bindingCreatePaymentMethod(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Payment - One Time Payment W O OTP

Create a single debit to pull funds from the end customer's account using an active payment method without requiring an OTP.

```ts
async paymentOneTimePaymentWOOTP(
  idempotencyKey: string,
  body: PaymentOneTimePaymentWOOTPRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Header, Required | - |
| `body` | [`PaymentOneTimePaymentWOOTPRequest`](/doc/models/payment-one-time-payment-wootp-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const idempotencyKey = '{{normal_direct_debit_reference_id}}';
const body: PaymentOneTimePaymentWOOTPRequest = {
  referenceId: '{{normal_direct_debit_reference_id}}',
  paymentMethodId: '{{debit_card_payment_method_id}}',
  currency: 'IDR',
  amount: 1688,
  enableOtp: false,
  callbackUrl: 'https://yourwebhooksite',
};

try {
  const { result, ...httpResponse } = await directDebitController.paymentOneTimePaymentWOOTP(idempotencyKey, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Payment - One Time Payment W OTP

Create a single debit to pull funds from the end customer's account using an active payment method.

```ts
async paymentOneTimePaymentWOTP(
  idempotencyKey: string,
  body: PaymentOneTimePaymentWOTPRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Header, Required | - |
| `body` | [`PaymentOneTimePaymentWOTPRequest`](/doc/models/payment-one-time-payment-wotp-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const idempotencyKey = '{{normal_direct_debit_reference_id}}';
const body: PaymentOneTimePaymentWOTPRequest = {
  referenceId: '{{normal_direct_debit_reference_id}}',
  paymentMethodId: '{{debit_card_payment_method_id}}',
  currency: 'IDR',
  amount: 1688,
  enableOtp: true,
  callbackUrl: 'https://yourwebhooksite',
};

try {
  const { result, ...httpResponse } = await directDebitController.paymentOneTimePaymentWOTP(idempotencyKey, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Payment - Validate OTP One Time Payment W OTP

Validate the OTP provided by end customer via this endpoint to complete the transaction when OTP is enabled.

```ts
async paymentValidateOTPOneTimePaymentWOTP(
  directDebitId: string,
  body: PaymentValidateOTPOneTimePaymentWOTPRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `directDebitId` | `string` | Template, Required | - |
| `body` | [`PaymentValidateOTPOneTimePaymentWOTPRequest`](/doc/models/payment-validate-otp-one-time-payment-wotp-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const directDebitId = 'direct_debit_id2';
const body: PaymentValidateOTPOneTimePaymentWOTPRequest = {
  otpCode: '222333',
};

try {
  const { result, ...httpResponse } = await directDebitController.paymentValidateOTPOneTimePaymentWOTP(directDebitId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Payment - Recurring Payments

Recurring payments allow you to use the auto debit feature in direct debit to pull funds from your customers bank account on a scheduled basis.

Currently only supported for BRI Direct Debit.

```ts
async paymentRecurringPayments(
  idempotencyKey: string,
  body: PaymentRecurringPaymentsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Header, Required | - |
| `body` | [`PaymentRecurringPaymentsRequest`](/doc/models/payment-recurring-payments-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const idempotencyKey = '{{dd_payment_with_otp_reference_id}}';
const body: PaymentRecurringPaymentsRequest = {
  externalId: 'albert',
  payerEmail: 'albert@xendit.co',
  description: 'description',
  paymentMethodId: '{{debit_card_payment_method_id}}',
  amount: 15000,
  interval: 'DAY',
  intervalCount: 1,
};

try {
  const { result, ...httpResponse } = await directDebitController.paymentRecurringPayments(idempotencyKey, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Binding - Unlink Linked Account Token Copy

Unlinks or unbinds a successfully linked account token.

```ts
async bindingUnlinkLinkedAccountTokenCopy(
  linkedAccountTokenId: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessfullyDeletedALinkedAccountToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkedAccountTokenId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessfullyDeletedALinkedAccountToken`](/doc/models/successfully-deleted-a-linked-account-token.md)

## Example Usage

```ts
const linkedAccountTokenId = 'linked_account_token_id6';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await directDebitController.bindingUnlinkLinkedAccountTokenCopy(linkedAccountTokenId, contentType);
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
  "id": "lat-d290f1ee-6c54-4b01-90e6-d701748f0851",
  "is_deleted": true
}
```

