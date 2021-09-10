# Charge Refund

```ts
const chargeRefundController = new ChargeRefundController(client);
```

## Class Name

`ChargeRefundController`

## Methods

* [Charge Auth Capture](/doc/controllers/charge-refund.md#charge-auth-capture)
* [Refund Charge](/doc/controllers/charge-refund.md#refund-charge)
* [Refund Charge by External ID](/doc/controllers/charge-refund.md#refund-charge-by-external-id)
* [Get Charge](/doc/controllers/charge-refund.md#get-charge)
* [Get Charge by External ID](/doc/controllers/charge-refund.md#get-charge-by-external-id)


# Charge Auth Capture

Use the [Tokenization Demo](https://js.xendit.co/test_tokenize.html) to create a token & authentication ID

```ts
async chargeAuthCapture(
  contentType: string,
  body: ChargeAuthCaptureRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`ChargeAuthCaptureRequest`](/doc/models/charge-auth-capture-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: ChargeAuthCaptureRequest = {
  tokenId: '5caf28a2d3c9b11b9fa09c8b',
  externalId: 'card_charge-{{$timestamp}}',
  amount: 888000,
  cardCvn: '123',
};

try {
  const { result, ...httpResponse } = await chargeRefundController.chargeAuthCapture(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Refund Charge

```ts
async refundCharge(
  contentType: string,
  body: RefundChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`RefundChargeRequest`](/doc/models/refund-charge-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: RefundChargeRequest = {
  amount: 100000,
  externalId: 'card_refund-{{$timestamp}}',
};

try {
  const { result, ...httpResponse } = await chargeRefundController.refundCharge(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Refund Charge by External ID

```ts
async refundChargeByExternalID(
  idType: string,
  id: string,
  contentType: string,
  body: RefundChargeByExternalIDRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Success>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idType` | `string` | Query, Required | - |
| `id` | `string` | Template, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`RefundChargeByExternalIDRequest`](/doc/models/refund-charge-by-external-id-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Success`](/doc/models/success.md)

## Example Usage

```ts
const idType = 'external';
const id = 'card_charge-1543985147';
const contentType = 'application/json';
const body: RefundChargeByExternalIDRequest = {
  amount: 100000,
  externalId: 'card_refund-{{$timestamp}}',
};

try {
  const { result, ...httpResponse } = await chargeRefundController.refundChargeByExternalID(idType, id, contentType, body);
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
  "updated": "2018-12-06T04:22:11.978Z",
  "created": "2018-12-06T04:22:11.801Z",
  "credit_card_charge_id": "5c07580018a17323d667af55",
  "user_id": "5c04a792a4d5492fc034ac42",
  "amount": 100,
  "external_id": "card_refund-1544070137",
  "status": "PENDING",
  "id": "5c08a3f3ae343910b2835b59",
  "fee_refund_amount": 3
}
```


# Get Charge

```ts
async getCharge(
  creditCardChargeId: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Success1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditCardChargeId` | `string` | Template, Required | Xendit Charge ID |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Success1`](/doc/models/success-1.md)

## Example Usage

```ts
const creditCardChargeId = '5c11060415dcfc7bc88b6eca';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await chargeRefundController.getCharge(creditCardChargeId, contentType);
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
  "created": "2018-12-05T04:45:52.02Z",
  "business_id": "5c04a792a4d5492fc034ac42",
  "authorized_amount": 8000,
  "external_id": "card_charge-1543985147",
  "merchant_id": "xendit",
  "merchant_reference_code": "5c0757dd18a17323d667af4e",
  "masked_card_number": "400000XXXXXX0002",
  "charge_type": "SINGLE_USE_TOKEN",
  "card_brand": "VISA",
  "card_type": "CREDIT",
  "bank_reconciliation_id": "5439851446196244203010",
  "status": "CAPTURED",
  "eci": "05",
  "capture_amount": 8000,
  "id": "5c07580018a17323d667af55"
}
```


# Get Charge by External ID

```ts
async getChargeByExternalID(
  idType: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idType` | `string` | Query, Required | - |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const idType = 'external';
const id = 'test-123';
try {
  const { result, ...httpResponse } = await chargeRefundController.getChargeByExternalID(idType, id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

