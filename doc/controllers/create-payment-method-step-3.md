# Create Payment Method - Step 3

```ts
const createPaymentMethodStep3Controller = new CreatePaymentMethodStep3Controller(client);
```

## Class Name

`CreatePaymentMethodStep3Controller`


# Tokenized - Create Payment Method

Payment methods enable you to abstract sources of funds and use them for making direct debit payments or recurring payments. Currently, only supports linked accounts.

```ts
async tokenizedCreatePaymentMethod(
  body: TokenizedCreatePaymentMethodRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TokenizedCreatePaymentMethod>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TokenizedCreatePaymentMethodRequest`](/doc/models/tokenized-create-payment-method-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TokenizedCreatePaymentMethod`](/doc/models/tokenized-create-payment-method.md)

## Example Usage

```ts
const bodyProperties: Properties4 = {
  id: '[linked account id from GET - prefix la-XXXX]',
};

const body: TokenizedCreatePaymentMethodRequest = {
  customerId: 'test_customer_reference_id',
  type: 'EWALLET',
  properties: bodyProperties,
};

try {
  const { result, ...httpResponse } = await createPaymentMethodStep3Controller.tokenizedCreatePaymentMethod(body);
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
  "customer_id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "type": "EWALLET",
  "properties": {
    "id": "la-da3fe9eb-bc66-4e4e-b176-df08dd2b876f"
  },
  "status": "ACTIVE",
  "metadata": {},
  "id": "pm-e69cbf2f-16f3-44e3-90cf-bc32b126313a",
  "created": "2021-04-06T06:25:07.831Z",
  "updated": "2021-04-06T06:25:07.831Z"
}
```

