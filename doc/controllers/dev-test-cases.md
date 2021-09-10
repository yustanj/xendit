# DEV Test Cases

```ts
const dEVTestCasesController = new DEVTestCasesController(client);
```

## Class Name

`DEVTestCasesController`

## Methods

* [EXPIRED CARD](/doc/controllers/dev-test-cases.md#expired-card)
* [CARD DECLINED](/doc/controllers/dev-test-cases.md#card-declined)
* [INSUFFICIENT BALANCE](/doc/controllers/dev-test-cases.md#insufficient-balance)
* [STOLEN CARD](/doc/controllers/dev-test-cases.md#stolen-card)
* [INACTIVE CARD](/doc/controllers/dev-test-cases.md#inactive-card)
* [PROCESSOR ERROR](/doc/controllers/dev-test-cases.md#processor-error)


# EXPIRED CARD

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async eXPIREDCARD(
  contentType: string,
  body: EXPIREDCARDREQUEST,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`EXPIREDCARDREQUEST`](/doc/models/expiredcardrequest.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: EXPIREDCARDREQUEST = {
  tokenId: '5caf29f7d3c9b11b9fa09c96',
  externalId: 'card_charge-{{$timestamp}}',
  amount: 5001,
};

try {
  const { result, ...httpResponse } = await dEVTestCasesController.eXPIREDCARD(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# CARD DECLINED

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async cARDDECLINED(
  contentType: string,
  body: CARDDECLINEDREQUEST,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CARDDECLINEDREQUEST`](/doc/models/carddeclinedrequest.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CARDDECLINEDREQUEST = {
  tokenId: '5caf29f7d3c9b11b9fa09c96',
  externalId: 'card_charge-{{$timestamp}}',
  amount: 5002,
};

try {
  const { result, ...httpResponse } = await dEVTestCasesController.cARDDECLINED(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# INSUFFICIENT BALANCE

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async iNSUFFICIENTBALANCE(
  contentType: string,
  body: INSUFFICIENTBALANCEREQUEST,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`INSUFFICIENTBALANCEREQUEST`](/doc/models/insufficientbalancerequest.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: INSUFFICIENTBALANCEREQUEST = {
  tokenId: '5caf29f7d3c9b11b9fa09c96',
  externalId: 'card_charge-{{$timestamp}}',
  amount: 5004,
};

try {
  const { result, ...httpResponse } = await dEVTestCasesController.iNSUFFICIENTBALANCE(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# STOLEN CARD

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async sTOLENCARD(
  contentType: string,
  body: STOLENCARDREQUEST,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`STOLENCARDREQUEST`](/doc/models/stolencardrequest.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: STOLENCARDREQUEST = {
  tokenId: '5caf29f7d3c9b11b9fa09c96',
  externalId: 'card_charge-{{$timestamp}}',
  amount: 5005,
};

try {
  const { result, ...httpResponse } = await dEVTestCasesController.sTOLENCARD(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# INACTIVE CARD

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async iNACTIVECARD(
  contentType: string,
  body: INACTIVECARDREQUEST,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`INACTIVECARDREQUEST`](/doc/models/inactivecardrequest.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: INACTIVECARDREQUEST = {
  tokenId: '5caf29f7d3c9b11b9fa09c96',
  externalId: 'card_charge-{{$timestamp}}',
  amount: 5006,
};

try {
  const { result, ...httpResponse } = await dEVTestCasesController.iNACTIVECARD(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# PROCESSOR ERROR

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async pROCESSORERROR(
  contentType: string,
  body: PROCESSORERRORREQUEST,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`PROCESSORERRORREQUEST`](/doc/models/processorerrorrequest.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: PROCESSORERRORREQUEST = {
  tokenId: '5caf29f7d3c9b11b9fa09c96',
  externalId: 'card_charge-{{$timestamp}}',
  amount: 5003,
};

try {
  const { result, ...httpResponse } = await dEVTestCasesController.pROCESSORERROR(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

