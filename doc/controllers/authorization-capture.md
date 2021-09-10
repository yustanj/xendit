# Authorization Capture

```ts
const authorizationCaptureController = new AuthorizationCaptureController(client);
```

## Class Name

`AuthorizationCaptureController`

## Methods

* [Authorize Hold Amount](/doc/controllers/authorization-capture.md#authorize-hold-amount)
* [Capture Auth](/doc/controllers/authorization-capture.md#capture-auth)
* [Reverse Auth](/doc/controllers/authorization-capture.md#reverse-auth)
* [Zero-Auth Verify Card](/doc/controllers/authorization-capture.md#zero-auth-verify-card)


# Authorize Hold Amount

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async authorizeHoldAmount(
  contentType: string,
  body: AuthorizeHoldAmountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`AuthorizeHoldAmountRequest`](/doc/models/authorize-hold-amount-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: AuthorizeHoldAmountRequest = {
  tokenId: '5c1105fe15dcfc7bc88b6ec7',
  externalId: 'card_preAuth-{{$timestamp}}',
  amount: 800000,
  cardCvn: '123',
  capture: false,
};

try {
  const { result, ...httpResponse } = await authorizationCaptureController.authorizeHoldAmount(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Capture Auth

```ts
async captureAuth(
  contentType: string,
  body: CaptureAuthRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CaptureAuthRequest`](/doc/models/capture-auth-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CaptureAuthRequest = {
  amount: 88000,
};

try {
  const { result, ...httpResponse } = await authorizationCaptureController.captureAuth(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Reverse Auth

```ts
async reverseAuth(
  contentType: string,
  body: ReverseAuthRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`ReverseAuthRequest`](/doc/models/reverse-auth-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: ReverseAuthRequest = {
  externalId: 'card_revAuth-{{$timestamp}}',
};

try {
  const { result, ...httpResponse } = await authorizationCaptureController.reverseAuth(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Zero-Auth Verify Card

```ts
async zeroAuthVerifyCard(
  contentType: string,
  body: ZeroAuthVerifyCardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`ZeroAuthVerifyCardRequest`](/doc/models/zero-auth-verify-card-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: ZeroAuthVerifyCardRequest = {
  tokenId: '5c1105fe15dcfc7bc88b6ec7',
  externalId: 'card_zeroAuth-{{$timestamp}}',
  amount: 0,
  cardCvn: '123',
};

try {
  const { result, ...httpResponse } = await authorizationCaptureController.zeroAuthVerifyCard(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

