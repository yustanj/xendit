# QR Codes

```ts
const qRCodesController = new QRCodesController(client);
```

## Class Name

`QRCodesController`

## Methods

* [Create QR Code](/doc/controllers/qr-codes.md#create-qr-code)
* [Get QR Code Status](/doc/controllers/qr-codes.md#get-qr-code-status)
* [Simulate Payments Dev Mode](/doc/controllers/qr-codes.md#simulate-payments-dev-mode)


# Create QR Code

```ts
async createQRCode(
  body: CreateQRCodeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateQRCodeRequest`](/doc/models/create-qr-code-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: CreateQRCodeRequest = {
  externalId: 'testing_id_{{$timestamp}}',
  type: 'DYNAMIC',
  callbackUrl: 'https://my-shop.com/callbacks',
  amount: 1000,
};

try {
  const { result, ...httpResponse } = await qRCodesController.createQRCode(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get QR Code Status

```ts
async getQRCodeStatus(
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
  const { result, ...httpResponse } = await qRCodesController.getQRCodeStatus();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Simulate Payments Dev Mode

```ts
async simulatePaymentsDevMode(
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
  const { result, ...httpResponse } = await qRCodesController.simulatePaymentsDevMode();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

