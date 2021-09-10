# Retail Outlets - ID

```ts
const retailOutletsIDController = new RetailOutletsIDController(client);
```

## Class Name

`RetailOutletsIDController`

## Methods

* [Create FPC Alfamart](/doc/controllers/retail-outlets-id.md#create-fpc-alfamart)
* [Create FPC Indomaret](/doc/controllers/retail-outlets-id.md#create-fpc-indomaret)
* [Update FPC](/doc/controllers/retail-outlets-id.md#update-fpc)
* [Get FPC Detail](/doc/controllers/retail-outlets-id.md#get-fpc-detail)


# Create FPC Alfamart

```ts
async createFPCAlfamart(
  contentType: string,
  body: CreateFPCAlfamartRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateFPCAlfamartRequest`](/doc/models/create-fpc-alfamart-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreateFPCAlfamartRequest = {
  externalId: 'FPC-{{$timestamp}}',
  retailOutletName: 'ALFAMART',
  name: 'JOHN DOE',
  expectedAmount: 25000,
};

try {
  const { result, ...httpResponse } = await retailOutletsIDController.createFPCAlfamart(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create FPC Indomaret

```ts
async createFPCIndomaret(
  contentType: string,
  body: CreateFPCIndomaretRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateFPCIndomaretRequest`](/doc/models/create-fpc-indomaret-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreateFPCIndomaretRequest = {
  externalId: 'FPC-{{$timestamp}}',
  retailOutletName: 'INDOMARET',
  name: 'JOHN DOE',
  expectedAmount: 25000,
};

try {
  const { result, ...httpResponse } = await retailOutletsIDController.createFPCIndomaret(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update FPC

```ts
async updateFPC(
  fixedPaymentCodeId: string,
  contentType: string,
  body: UpdateFPCRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixedPaymentCodeId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`UpdateFPCRequest`](/doc/models/update-fpc-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const fixedPaymentCodeId = 'fixed_payment_code_id4';
const contentType = 'application/json';
const body: UpdateFPCRequest = {
  name: 'JOHN DOE2',
  expectedAmount: 25000,
};

try {
  const { result, ...httpResponse } = await retailOutletsIDController.updateFPC(fixedPaymentCodeId, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get FPC Detail

```ts
async getFPCDetail(
  fixedPaymentCodeId: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixedPaymentCodeId` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const fixedPaymentCodeId = 'fixed_payment_code_id4';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await retailOutletsIDController.getFPCDetail(fixedPaymentCodeId, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

