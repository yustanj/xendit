# Account Linking - Step 2

```ts
const accountLinkingStep2Controller = new AccountLinkingStep2Controller(client);
```

## Class Name

`AccountLinkingStep2Controller`

## Methods

* [OVO Tokenized - Account Linking](/doc/controllers/account-linking-step-2.md#ovo-tokenized-account-linking)
* [Paymaya Tokenized - Account Linking](/doc/controllers/account-linking-step-2.md#paymaya-tokenized-account-linking)
* [Grabpay Tokenized - Account Linking](/doc/controllers/account-linking-step-2.md#grabpay-tokenized-account-linking)
* [Shopeepay Tokenized - Account Linking](/doc/controllers/account-linking-step-2.md#shopeepay-tokenized-account-linking)
* [Account Linking Callback Notification](/doc/controllers/account-linking-step-2.md#account-linking-callback-notification)


# OVO Tokenized - Account Linking

```ts
async oVOTokenizedAccountLinking(
  body: OVOTokenizedAccountLinkingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OVOTokenizedAccountLinking>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`OVOTokenizedAccountLinkingRequest`](/doc/models/ovo-tokenized-account-linking-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OVOTokenizedAccountLinking`](/doc/models/ovo-tokenized-account-linking.md)

## Example Usage

```ts
const bodyProperties: Properties = {
  successRedirectUrl: 'https://example.com',
  failureRedirectUrl: 'https://example.com',
  callbackUrl: 'https://callback-example.com',
};

const body: OVOTokenizedAccountLinkingRequest = {
  customerId: 'b7c308fe-2836-41c8-98ae-0d23ed4d8450',
  channelCode: 'ID_OVO',
  properties: bodyProperties,
};

try {
  const { result, ...httpResponse } = await accountLinkingStep2Controller.oVOTokenizedAccountLinking(body);
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
  "id": "lat-f3477189-2944-4e6c-bece-6640603fd805",
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "channel_code": "ID_OVO",
  "authorizer_url": "https://link-web-staging.xendit.co/auth/lat-f3477189-2944-4e6c-bece-6640603fd805/confirm",
  "status": "PENDING",
  "metadata": null
}
```


# Paymaya Tokenized - Account Linking

```ts
async paymayaTokenizedAccountLinking(
  body: PaymayaTokenizedAccountLinkingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PAYMAYATokenizedInitiateAccountLinking>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymayaTokenizedAccountLinkingRequest`](/doc/models/paymaya-tokenized-account-linking-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PAYMAYATokenizedInitiateAccountLinking`](/doc/models/paymaya-tokenized-initiate-account-linking.md)

## Example Usage

```ts
const bodyProperties: Properties1 = {
  successRedirectUrl: 'https://example.com',
  failureRedirectUrl: 'https://example.com',
  cancelRedirectUrl: 'https://example.com',
  callbackUrl: 'https://callback-example.com',
};

const body: PaymayaTokenizedAccountLinkingRequest = {
  customerId: 'b7c308fe-2836-41c8-98ae-0d23ed4d8450',
  channelCode: 'PH_PAYMAYA',
  properties: bodyProperties,
};

try {
  const { result, ...httpResponse } = await accountLinkingStep2Controller.paymayaTokenizedAccountLinking(body);
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
  "id": "lat-f3477189-2944-4e6c-bece-6640603fd805",
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "channel_code": "PH_PAYMAYA",
  "authorizer_url": "https://link-web-staging.xendit.co/auth/lat-f3477189-2944-4e6c-bece-6640603fd805/confirm",
  "status": "PENDING",
  "metadata": null
}
```


# Grabpay Tokenized - Account Linking

```ts
async grabpayTokenizedAccountLinking(
  body: GrabpayTokenizedAccountLinkingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GRABPAYTokenizedInitiateAccountLinkingCopy>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GrabpayTokenizedAccountLinkingRequest`](/doc/models/grabpay-tokenized-account-linking-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GRABPAYTokenizedInitiateAccountLinkingCopy`](/doc/models/grabpay-tokenized-initiate-account-linking-copy.md)

## Example Usage

```ts
const bodyProperties: Properties = {
  successRedirectUrl: 'https://example.com',
  failureRedirectUrl: 'https://example.com',
  callbackUrl: 'https://callback-example.com',
};

const body: GrabpayTokenizedAccountLinkingRequest = {
  customerId: 'b7c308fe-2836-41c8-98ae-0d23ed4d8450',
  channelCode: 'PH_GRABPAY',
  properties: bodyProperties,
};

try {
  const { result, ...httpResponse } = await accountLinkingStep2Controller.grabpayTokenizedAccountLinking(body);
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
  "id": "lat-f3477189-2944-4e6c-bece-6640603fd805",
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "channel_code": "PH_GRABPAY",
  "authorizer_url": "https://link-web-staging.xendit.co/auth/lat-f3477189-2944-4e6c-bece-6640603fd805/confirm",
  "status": "PENDING",
  "metadata": null
}
```


# Shopeepay Tokenized - Account Linking

```ts
async shopeepayTokenizedAccountLinking(
  body: ShopeepayTokenizedAccountLinkingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShopeepayTokenizedInitiateAccountLinking>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ShopeepayTokenizedAccountLinkingRequest`](/doc/models/shopeepay-tokenized-account-linking-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShopeepayTokenizedInitiateAccountLinking`](/doc/models/shopeepay-tokenized-initiate-account-linking.md)

## Example Usage

```ts
const bodyProperties: Properties = {
  successRedirectUrl: 'https://example.com',
  failureRedirectUrl: 'https://example.com',
  callbackUrl: 'https://callback-example.com',
};

const body: ShopeepayTokenizedAccountLinkingRequest = {
  customerId: 'b7c308fe-2836-41c8-98ae-0d23ed4d8450',
  channelCode: 'ID_SHOPEEPAY',
  properties: bodyProperties,
};

try {
  const { result, ...httpResponse } = await accountLinkingStep2Controller.shopeepayTokenizedAccountLinking(body);
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
  "id": "lat-ae1d49a4-4e46-4b00-8be0-16b2b1ccc159",
  "customer_id": "5d9a64c0-5f28-4962-801e-33fdbf2c97c5",
  "channel_code": "ID_SHOPEEPAY",
  "authorizer_url": "https://link-web-staging.xendit.co/oauth/lat-ae1d49a4-4e46-4b00-8be0-16b2b1ccc159/confirm",
  "status": "PENDING",
  "metadata": null
}
```


# Account Linking Callback Notification

```ts
async accountLinkingCallbackNotification(
  body: AccountLinkingCallbackNotificationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountLinkingCallbackNotificationRequest`](/doc/models/account-linking-callback-notification-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bodyAccounts: Account[] = [];

const bodyaccounts0: Account = {
  id: 'la-eddf88b1-312a-4f78-aca1-96e5ff4161b4',
  accountDetails: 'account_details0',
  accountType: 'EWALLET',
  balance: 1000000,
  currency: 'PHP',
  description: 'description4',
  name: 'name4',
  pointBalance: 'point_balance6',
};

bodyAccounts[0] = bodyaccounts0;

const body: AccountLinkingCallbackNotificationRequest = {
  event: 'linked_account_token.successful',
  timestamp: '2021-05-21T12:28:49.019Z',
  id: 'lat-d6876bf1-9722-47e3-8757-f74c7d7772b5',
  channelCode: 'PH_GRABPAY',
  type: 'EWALLET',
  accounts: bodyAccounts,
};

try {
  const { result, ...httpResponse } = await accountLinkingStep2Controller.accountLinkingCallbackNotification(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

