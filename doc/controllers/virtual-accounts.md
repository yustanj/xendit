# Virtual Accounts

Fixed Virtual Accounts

```ts
const virtualAccountsController = new VirtualAccountsController(client);
```

## Class Name

`VirtualAccountsController`

## Methods

* [Create FVA](/doc/controllers/virtual-accounts.md#create-fva)
* [Create Specific FVA](/doc/controllers/virtual-accounts.md#create-specific-fva)
* [List Available FVA Banks](/doc/controllers/virtual-accounts.md#list-available-fva-banks)
* [Get Virtual Account](/doc/controllers/virtual-accounts.md#get-virtual-account)
* [Update Virtual Account](/doc/controllers/virtual-accounts.md#update-virtual-account)
* [Get Virtual Account Payment](/doc/controllers/virtual-accounts.md#get-virtual-account-payment)


# Create FVA

[[API Reference] - Create Fixed VA](https://xendit.github.io/apireference/#create-fixed-virtual-accounts)

[[Xendit Docs] - Fixed Virtual Accounts](https://docs.xendit.co/xenpayments/virtual-account/)

```ts
async createFVA(
  contentType: string,
  body: CreateFVARequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateFVARequest`](/doc/models/create-fva-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreateFVARequest = {
  externalId: 'VA_fixed-{{$timestamp}}',
  bankCode: 'MANDIRI',
  name: 'Steve Wozniak',
};

try {
  const { result, ...httpResponse } = await virtualAccountsController.createFVA(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Specific FVA

[[API Reference] - Create Fixed VA](https://xendit.github.io/apireference/#create-fixed-virtual-accounts)

[[Xendit Docs] - Fixed Virtual Accounts](https://docs.xendit.co/xenpayments/virtual-account/)

```ts
async createSpecificFVA(
  contentType: string,
  body: CreateSpecificFVARequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateSpecificFVARequest`](/doc/models/create-specific-fva-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreateSpecificFVARequest = {
  externalId: 'VA_fixed-{{$timestamp}}',
  bankCode: 'MANDIRI',
  name: 'Steve Wozniak',
  virtualAccountNumber: '9999000002',
};

try {
  const { result, ...httpResponse } = await virtualAccountsController.createSpecificFVA(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Available FVA Banks

[[API Reference] - Get banks for virtual accounts](https://xendit.github.io/apireference/#get-banks-for-virtual-accounts)

[[Xendit Docs] - Fixed Virtual Accounts](https://docs.xendit.co/xenpayments/virtual-account/)

:information_source: **Note** This endpoint does not require authentication.

```ts
async listAvailableFVABanks(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = '{{Authorization}}';
try {
  const { result, ...httpResponse } = await virtualAccountsController.listAvailableFVABanks(authorization);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Virtual Account

[[API Reference] - Get banks for virtual accounts](https://xendit.github.io/apireference/#get-banks-for-virtual-accounts)

[[Xendit Docs] - Fixed Virtual Accounts](https://docs.xendit.co/xenpayments/virtual-account/)

```ts
async getVirtualAccount(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await virtualAccountsController.getVirtualAccount(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Virtual Account

[[API Reference] - Create Fixed VA](https://xendit.github.io/apireference/#create-fixed-virtual-accounts)

[[Xendit Docs] - Fixed Virtual Accounts](https://docs.xendit.co/xenpayments/virtual-account/)

```ts
async updateVirtualAccount(
  id: string,
  contentType: string,
  body: UpdateVirtualAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`UpdateVirtualAccountRequest`](/doc/models/update-virtual-account-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = 'application/json';
const body: UpdateVirtualAccountRequest = {
  expectedAmount: '100000',
};

try {
  const { result, ...httpResponse } = await virtualAccountsController.updateVirtualAccount(id, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Virtual Account Payment

[[API Reference] - Get banks for virtual accounts](https://xendit.github.io/apireference/#get-banks-for-virtual-accounts)

[[Xendit Docs] - Fixed Virtual Accounts](https://docs.xendit.co/xenpayments/virtual-account/)

```ts
async getVirtualAccountPayment(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await virtualAccountsController.getVirtualAccountPayment();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

