# Create Customer - Step 1

```ts
const createCustomerStep1Controller = new CreateCustomerStep1Controller(client);
```

## Class Name

`CreateCustomerStep1Controller`

## Methods

* [OVO Tokenized - Create Customer](/doc/controllers/create-customer-step-1.md#ovo-tokenized-create-customer)
* [Grabpay Tokenized - Create Customer](/doc/controllers/create-customer-step-1.md#grabpay-tokenized-create-customer)
* [Paymaya Tokenized - Create Customer](/doc/controllers/create-customer-step-1.md#paymaya-tokenized-create-customer)
* [Shopeepay Tokenized - Create Customer Copy](/doc/controllers/create-customer-step-1.md#shopeepay-tokenized-create-customer-copy)


# OVO Tokenized - Create Customer

```ts
async oVOTokenizedCreateCustomer(
  body: OVOTokenizedCreateCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OVOTokenizedCreateCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`OVOTokenizedCreateCustomerRequest`](/doc/models/ovo-tokenized-create-customer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OVOTokenizedCreateCustomer`](/doc/models/ovo-tokenized-create-customer.md)

## Example Usage

```ts
const body: OVOTokenizedCreateCustomerRequest = {
  referenceId: 'mock-reference-id-{{$timestamp}}',
  mobileNumber: '+6208774494404',
  givenNames: 'John Doe',
};

try {
  const { result, ...httpResponse } = await createCustomerStep1Controller.oVOTokenizedCreateCustomer(body);
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
  "id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "reference_id": "mock-reference-id-1617690072",
  "given_names": "John Doe",
  "email": null,
  "mobile_number": "+6208774494404",
  "description": null,
  "middle_name": null,
  "surname": null,
  "phone_number": null,
  "nationality": null,
  "date_of_birth": null,
  "metadata": null,
  "employment": null,
  "addresses": null,
  "source_of_wealth": null
}
```


# Grabpay Tokenized - Create Customer

```ts
async grabpayTokenizedCreateCustomer(
  body: GrabpayTokenizedCreateCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GRABPAYTokenizedCreateCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GrabpayTokenizedCreateCustomerRequest`](/doc/models/grabpay-tokenized-create-customer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GRABPAYTokenizedCreateCustomer`](/doc/models/grabpay-tokenized-create-customer.md)

## Example Usage

```ts
const body: GrabpayTokenizedCreateCustomerRequest = {
  referenceId: 'mock-reference-id-{{$timestamp}}',
  email: 'testemail@email.com',
  givenNames: 'John Doe',
};

try {
  const { result, ...httpResponse } = await createCustomerStep1Controller.grabpayTokenizedCreateCustomer(body);
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
  "id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "reference_id": "mock-reference-id-1617690072",
  "given_names": "John Doe",
  "email": "testemail@email.com",
  "mobile_number": null,
  "description": null,
  "middle_name": null,
  "surname": null,
  "phone_number": null,
  "nationality": null,
  "date_of_birth": null,
  "metadata": null,
  "employment": null,
  "addresses": null,
  "source_of_wealth": null
}
```


# Paymaya Tokenized - Create Customer

```ts
async paymayaTokenizedCreateCustomer(
  body: PaymayaTokenizedCreateCustomerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PAYMAYACreateCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymayaTokenizedCreateCustomerRequest`](/doc/models/paymaya-tokenized-create-customer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PAYMAYACreateCustomer`](/doc/models/paymaya-create-customer.md)

## Example Usage

```ts
const body: PaymayaTokenizedCreateCustomerRequest = {
  referenceId: 'mock-reference-id-{{$timestamp}}',
  email: 'testemail@email.com',
  givenNames: 'John Doe',
};

try {
  const { result, ...httpResponse } = await createCustomerStep1Controller.paymayaTokenizedCreateCustomer(body);
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
  "id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "reference_id": "mock-reference-id-1617690072",
  "given_names": "John Doe",
  "email": "testemail@email.com",
  "mobile_number": null,
  "description": null,
  "middle_name": null,
  "surname": null,
  "phone_number": null,
  "nationality": null,
  "date_of_birth": null,
  "metadata": null,
  "employment": null,
  "addresses": null,
  "source_of_wealth": null
}
```


# Shopeepay Tokenized - Create Customer Copy

```ts
async shopeepayTokenizedCreateCustomerCopy(
  body: ShopeepayTokenizedCreateCustomerCopyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShopeepayCreateCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ShopeepayTokenizedCreateCustomerCopyRequest`](/doc/models/shopeepay-tokenized-create-customer-copy-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShopeepayCreateCustomer`](/doc/models/shopeepay-create-customer.md)

## Example Usage

```ts
const body: ShopeepayTokenizedCreateCustomerCopyRequest = {
  referenceId: 'mock-reference-id-{{$timestamp}}',
  email: 'testemail@email.com',
  givenNames: 'John Doe',
};

try {
  const { result, ...httpResponse } = await createCustomerStep1Controller.shopeepayTokenizedCreateCustomerCopy(body);
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
  "id": "b7c308fe-2836-41c8-98ae-0d23ed4d8450",
  "reference_id": "mock-reference-id-1617690072",
  "given_names": "John Doe",
  "email": "testemail@email.com",
  "mobile_number": null,
  "description": null,
  "middle_name": null,
  "surname": null,
  "phone_number": null,
  "nationality": null,
  "date_of_birth": null,
  "metadata": null,
  "employment": null,
  "addresses": null,
  "source_of_wealth": null
}
```

