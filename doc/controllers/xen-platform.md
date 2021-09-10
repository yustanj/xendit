# Xen Platform

```ts
const xenPlatformController = new XenPlatformController(client);
```

## Class Name

`XenPlatformController`

## Methods

* [Create Account](/doc/controllers/xen-platform.md#create-account)
* [Set Callback URL](/doc/controllers/xen-platform.md#set-callback-url)
* [V 2 - Create Account Async](/doc/controllers/xen-platform.md#v-2-create-account-async)
* [V 2 - Get Account](/doc/controllers/xen-platform.md#v-2-get-account)
* [V 2 - Update Account](/doc/controllers/xen-platform.md#v-2-update-account)
* [Create Transfer](/doc/controllers/xen-platform.md#create-transfer)
* [Create Fee Rule](/doc/controllers/xen-platform.md#create-fee-rule)
* [EXAMPLE Creating an Invoice for a Sub-Account](/doc/controllers/xen-platform.md#example-creating-an-invoice-for-a-sub-account)
* [EXAMPLE Create Disbursement for Sub-Account Request](/doc/controllers/xen-platform.md#example-create-disbursement-for-sub-account-request)
* [EXAMPLE Create Recurring Payment for Sub-Account Request](/doc/controllers/xen-platform.md#example-create-recurring-payment-for-sub-account-request)


# Create Account

Note: Accounts can only be created using your PRODUCTION API key. After your Accounts are created, you may create development transactions for them using your DEVELOPMENT API key.

The Create Account API allows your xenPlatform enabled account to create sub-accounts that are linked to your account. The response includes the corresponding `user_id` value that you should store in order to make transactions for that sub-account in the future.

There are two types of accounts that can be created: `MANAGED`, `OWNED`.

For `MANAGED` accounts:
When a successful POST request is made to the Create Account API with a valid email in the `account_email` field, a sub-account is immediately created and a sub-account invitation email is sent to that email for further registration. Via the sub-account invitation email, your third-party partners can complete registration in order to get access to their own Xendit dashboard.

For `OWNED` accounts:
Owned accounts do not get access to their own Xendit Dashboards. When a successful POST request is made to the Create Account API with a valid email in the `account_email` field, a sub-account is immediately created. No invitation email is sent to that email for further registration. The `business_name` parameter is mandatory for `OWNED` accounts.

```ts
async createAccount(
  contentType: string,
  body: CreateAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateAccountRequest`](/doc/models/create-account-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const bodyBusinessProfile: BusinessProfile = {
  businessName: 'Retail Business 1',
};

const body: CreateAccountRequest = {
  accountEmail: 'angie@pinkpanther.com',
  type: 'owned',
  businessProfile: bodyBusinessProfile,
};

try {
  const { result, ...httpResponse } = await xenPlatformController.createAccount(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Set Callback URL

The Set Callback URLs API allows you to set your sub-accounts' Callback URLs.

Use your production key to set production URLs; use your development key to set development URLs.

Note: Production callback URLs have to use the HTTPs protocol.

The following can be used in the `:type` query parameter.

1. `invoice`: When an invoice is paid, our systems will send a callback to the URL
2. `disbursement`: When a disbursement is sent, our systems will send a callback to the URL
3. `fva_status`: When a FVA is created or updated, our systems will send a callback to the URL
4. `fva_paid`: When a FVA is paid, our systems will send a callback to the URL

```ts
async setCallbackURL(
  type: string,
  contentType: string,
  forUserId: string,
  body: SetCallbackURLRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `forUserId` | `string` | Header, Required | - |
| `body` | [`SetCallbackURLRequest`](/doc/models/set-callback-url-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const type = 'type0';
const contentType = 'application/json';
const forUserId = '5d0c9bfa72667f2212d8f602';
const body: SetCallbackURLRequest = {
  url: 'https://www.xendit.co',
};

try {
  const { result, ...httpResponse } = await xenPlatformController.setCallbackURL(type, contentType, forUserId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# V 2 - Create Account Async

The Create Account API allows you to create Accounts for your Partners that are linked to your Platform. Once an Account is created, you may accept payments on its behalf. Additionally, you can route payments to/from the Account via the Transfers API or Platform fee API.

There are two types of Accounts that can be created: `MANAGED`, `OWNED`. Review our documentation for recommendations on which Account type to use for your business model.

`MANAGED` Accounts provide your Partners with full-fledged Xendit Accounts that your Platform can transact on behalf of. Your Partners may register their Account via an invitation email is sent to the `email`. Thereafter, your Partners login to their own Xendit dashboard to complete the onboarding process.

`OWNED` Accounts are invisible to your Partners and fully controlled by you. You may transact on behalf of an `OWNED` Account once they have been created using payment methods that have been enabled on your Platform.

Note for `OWNED` Accounts: Newly activated payment methods and changes made to Callback URLs on the Platform do not automatically change for existing `OWNED` accounts. We recommend activating all relevant payment methods and setting up your Callback URLs before creating `OWNED` Accounts. Alternatively, contact us when you need to make a change.

Store the returned account `id` value to make transactions for that Account in the future.

```ts
async v2CreateAccountAsync(
  contentType: string,
  body: V2CreateAccountAsyncRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`V2CreateAccountAsyncRequest`](/doc/models/v2-create-account-async-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const bodyPublicProfile: PublicProfile = {
  businessName: 'Retail Business 1',
};

const body: V2CreateAccountAsyncRequest = {
  email: 'angie@pinkpanther.com',
  type: 'OWNED',
  publicProfile: bodyPublicProfile,
};

try {
  const { result, ...httpResponse } = await xenPlatformController.v2CreateAccountAsync(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# V 2 - Get Account

Use the GET Account endpoint to retrieve the details of a single Account that has been created on or linked to your Platform.

You may poll this endpoint to get information like: i) the status of the Account and whether real-money payments can be created on its behalf, ii) the public information that is displayed when payments are created.

```ts
async v2GetAccount(
  id: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await xenPlatformController.v2GetAccount(id, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# V 2 - Update Account

Use the Update Account endpoint to update: i) `public_profile` information (e.g. `business_name`) that is displayed when payments are created on behalf of your Accounts', ii) Account identification labels (e.g. `email`)

This operation is currently only enabled for `OWNED` accounts.

```ts
async v2UpdateAccount(
  id: string,
  contentType: string,
  body: V2UpdateAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`V2UpdateAccountRequest`](/doc/models/v2-update-account-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = 'application/json';
const bodyPublicProfile: PublicProfile = {
  businessName: 'Retail Business 2',
};

const body: V2UpdateAccountRequest = {
  email: 'angie2@pinkpanther.com',
  publicProfile: bodyPublicProfile,
};

try {
  const { result, ...httpResponse } = await xenPlatformController.v2UpdateAccount(id, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Transfer

The Transfers API allows you to transfer balances from your sub-accounts to your master account and vice versa. Use this to manage, or split payments between your platform and your sub accounts within the Xendit ecosystem.

Visit your [xenPlatform dashboard](https://dashboard.xendit.co/login) in order to view the user_id of your account and sub-accounts.

```ts
async createTransfer(
  contentType: string,
  body: CreateTransferRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateTransferRequest`](/doc/models/create-transfer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreateTransferRequest = {
  reference: 'transfer_a0001',
  amount: 10000,
  sourceUserId: '5cafeb170a2b18519b1b8768',
  destinationUserId: '5cc00501fe2ea41db700c9c9',
};

try {
  const { result, ...httpResponse } = await xenPlatformController.createTransfer(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Fee Rule

The Platform Fee feature allows you to automatically charge a fee when creating a payment on behalf of your sub-account. Use this feature to collect fees for the transactions that you accept on behalf of your Partners.

A Fee Rule Object defines how payments accepted on behalf of a sub-account are routed by xenPlatform. Include the `fee_rule_id` returned in the response in supported transaction endpoints - Invoices, eWallets - to automatically charge a Platform fee once payments settle.

*Note: Fees are transferred from your sub-accounts at 15 minute intervals once your transaction has settled. As such, you may find that there is up to 15 minute delay from when settlement occurs, to when the Platform fee is deducted.*

```ts
async createFeeRule(
  body: CreateFeeRuleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateFeeRuleRequest`](/doc/models/create-fee-rule-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bodyRoutes: Route[] = [];

const bodyroutes0: Route = {
  unit: 'flat',
  amount: 3000,
  currency: 'IDR',
};

bodyRoutes[0] = bodyroutes0;

const body: CreateFeeRuleRequest = {
  name: 'Standard platform fee',
  description: 'Platform fee for all transactions accepted on behalf of vendors',
  routes: bodyRoutes,
};

try {
  const { result, ...httpResponse } = await xenPlatformController.createFeeRule(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# EXAMPLE Creating an Invoice for a Sub-Account

Once a sub-account has been created, you may make transactions for them by simply including a `for-user-id` field in the header of your request to any Xendit API.

The value in this field should include the full `user_id` of a sub-account that has previously been created by you.

This example demonstrates how to create an invoice for a sub-account using the Create Invoice API.

Note that for the Create Invoice API, the response will provide you with a confirmation that the invoice was created for the correct sub-account `user_id`.

Please refer to the [Xendit API reference](https://xendit.github.io/apireference/) for all supported APIs.

```ts
async eXAMPLECreatingAnInvoiceForASubAccount(
  contentType: string,
  forUserId: string,
  body: EXAMPLECreatingAnInvoiceForASubAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `forUserId` | `string` | Header, Required | - |
| `body` | [`EXAMPLECreatingAnInvoiceForASubAccountRequest`](/doc/models/example-creating-an-invoice-for-a-sub-account-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const forUserId = '5d0c9bfa72667f2212d8f602';
const body: EXAMPLECreatingAnInvoiceForASubAccountRequest = {
  externalId: 'invoice_on_behalf_of_shop1',
  description: 'For Shirt sold by Shop 1',
  amount: 10000,
  payerEmail: 'john_doe@xendit.co',
  shouldSendEmail: true,
};

try {
  const { result, ...httpResponse } = await xenPlatformController.eXAMPLECreatingAnInvoiceForASubAccount(contentType, forUserId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# EXAMPLE Create Disbursement for Sub-Account Request

You may also create a Disbursement request on behalf of your sub-accounts to send funds out from your sub-accounts' Cash balance.

The value in this field should include the full `user_id` of a sub-account that has previously been created by you.

This example demonstrates how to create a disbursement for a sub-account using the Create Disbursement API.

Note that for the Create Disbursement API, the response will provide you with a confirmation that the invoice was created for the correct sub-account `user_id`.

Please refer to the [Xendit API reference](https://xendit.github.io/apireference/) for all supported APIs.

```ts
async eXAMPLECreateDisbursementForSubAccountRequest(
  contentType: string,
  forUserId: string,
  body: EXAMPLECreateDisbursementForSubAccountRequestRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `forUserId` | `string` | Header, Required | - |
| `body` | [`EXAMPLECreateDisbursementForSubAccountRequestRequest`](/doc/models/example-create-disbursement-for-sub-account-request-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const forUserId = '5d0c9bfa72667f2212d8f602';
const body: EXAMPLECreateDisbursementForSubAccountRequestRequest = {
  externalId: 'disbursement_on_behalf_of_Shop1',
  bankCode: 'BNI',
  accountHolderName: 'John Doe',
  accountNumber: '12345678910',
  description: 'For 5d0c9bfa72667f2212d8f602',
};

try {
  const { result, ...httpResponse } = await xenPlatformController.eXAMPLECreateDisbursementForSubAccountRequest(contentType, forUserId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# EXAMPLE Create Recurring Payment for Sub-Account Request

You may also create a Recurring payment request on behalf of your sub-accounts.

The value in this field should include the full `user_id` of a sub-account that has previously been created by you.

This example demonstrates how to create a disbursement for a sub-account using the Create Recurring Payment API.

Note that for the Create Recurring Payment API, the response will provide you with a confirmation that the invoice was created for the correct sub-account `user_id`.

Please refer to the [Xendit API reference](https://xendit.github.io/apireference/) for all supported APIs.

```ts
async eXAMPLECreateRecurringPaymentForSubAccountRequest(
  contentType: string,
  forUserId: string,
  body: EXAMPLECreateRecurringPaymentForSubAccountRequestRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `forUserId` | `string` | Header, Required | - |
| `body` | [`EXAMPLECreateRecurringPaymentForSubAccountRequestRequest`](/doc/models/example-create-recurring-payment-for-sub-account-request-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const forUserId = '5cafed486b901f526e2ba04c';
const body: EXAMPLECreateRecurringPaymentForSubAccountRequestRequest = {
  externalId: 'recurring_on_behalf_of_Shop1',
  payerEmail: 'john_doe@xendit.co',
  description: 'Please pay your monthly subscription fee',
  amount: 100000,
  interval: 'MONTH',
  intervalCount: '1',
  shouldSendEmail: true,
};

try {
  const { result, ...httpResponse } = await xenPlatformController.eXAMPLECreateRecurringPaymentForSubAccountRequest(contentType, forUserId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

