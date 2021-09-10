# Retail Ouetlets - PH

```ts
const retailOuetletsPHController = new RetailOuetletsPHController(client);
```

## Class Name

`RetailOuetletsPHController`

## Methods

* [Create Payment Code 7 ELEVEN](/doc/controllers/retail-ouetlets-ph.md#create-payment-code-7-eleven)
* [Create Payment Code 7 ELEVEN CLIQQ](/doc/controllers/retail-ouetlets-ph.md#create-payment-code-7-eleven-cliqq)
* [Create Payment Code CEBUANA](/doc/controllers/retail-ouetlets-ph.md#create-payment-code-cebuana)
* [Update Payment Code](/doc/controllers/retail-ouetlets-ph.md#update-payment-code)
* [Get Payment Code by ID](/doc/controllers/retail-ouetlets-ph.md#get-payment-code-by-id)
* [Get Payments](/doc/controllers/retail-ouetlets-ph.md#get-payments)


# Create Payment Code 7 ELEVEN

```ts
async createPaymentCode7ELEVEN(
  contentType: string,
  body: CreatePaymentCode7ELEVENRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreatePaymentCode7ELEVENRequest`](/doc/models/create-payment-code-7-eleven-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreatePaymentCode7ELEVENRequest = {
  referenceId: 'payment-code-{{$timestamp}}',
  channelCode: '7ELEVEN',
  customerName: 'JOHN DOE',
  amount: 100,
  currency: 'PHP',
  market: 'PH',
};

try {
  const { result, ...httpResponse } = await retailOuetletsPHController.createPaymentCode7ELEVEN(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Payment Code 7 ELEVEN CLIQQ

```ts
async createPaymentCode7ELEVENCLIQQ(
  contentType: string,
  body: CreatePaymentCode7ELEVENCLIQQRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreatePaymentCode7ELEVENCLIQQRequest`](/doc/models/create-payment-code-7-elevencliqq-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreatePaymentCode7ELEVENCLIQQRequest = {
  referenceId: 'payment-code-{{$timestamp}}',
  channelCode: '7ELEVEN_CLIQQ',
  customerName: 'JOHN DOE',
  amount: 100,
  currency: 'PHP',
  market: 'PH',
};

try {
  const { result, ...httpResponse } = await retailOuetletsPHController.createPaymentCode7ELEVENCLIQQ(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Payment Code CEBUANA

```ts
async createPaymentCodeCEBUANA(
  contentType: string,
  body: CreatePaymentCodeCEBUANARequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreatePaymentCodeCEBUANARequest`](/doc/models/create-payment-code-cebuana-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreatePaymentCodeCEBUANARequest = {
  referenceId: 'payment-code-{{$timestamp}}',
  channelCode: 'CEBUANA',
  customerName: 'JOHN DOE',
  amount: 100,
  currency: 'PHP',
  market: 'PH',
};

try {
  const { result, ...httpResponse } = await retailOuetletsPHController.createPaymentCodeCEBUANA(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Payment Code

```ts
async updatePaymentCode(
  paymentCodeId: string,
  contentType: string,
  body: UpdatePaymentCodeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentCodeId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`UpdatePaymentCodeRequest`](/doc/models/update-payment-code-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const paymentCodeId = 'payment_code_id0';
const contentType = 'application/json';
const body: UpdatePaymentCodeRequest = {
  customerName: 'JOHN DOE',
  amount: 100,
  currency: 'PHP',
};

try {
  const { result, ...httpResponse } = await retailOuetletsPHController.updatePaymentCode(paymentCodeId, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Payment Code by ID

```ts
async getPaymentCodeByID(
  paymentCodeId: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentCodeId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const paymentCodeId = 'payment_code_id0';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await retailOuetletsPHController.getPaymentCodeByID(paymentCodeId, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Payments

```ts
async getPayments(
  paymentCodeId: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentCodeId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const paymentCodeId = 'payment_code_id0';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await retailOuetletsPHController.getPayments(paymentCodeId, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

