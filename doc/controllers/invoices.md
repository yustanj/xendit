# Invoices

```ts
const invoicesController = new InvoicesController(client);
```

## Class Name

`InvoicesController`

## Methods

* [Create Invoice](/doc/controllers/invoices.md#create-invoice)
* [Create Invoice W FVA](/doc/controllers/invoices.md#create-invoice-w-fva)
* [Get Invoice](/doc/controllers/invoices.md#get-invoice)


# Create Invoice

[[API Reference] - Create Invoice](https://xendit.github.io/apireference/#create-invoices)

[[Xendit Docs] - Invoices](https://docs.xendit.co/xeninvoice/)

```ts
async createInvoice(
  contentType: string,
  body: CreateInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateInvoiceRequest`](/doc/models/create-invoice-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreateInvoiceRequest = {
  externalId: 'invoice-{{$timestamp}}',
  amount: 1800000,
  payerEmail: 'customer@domain.com',
  description: 'Invoice Demo #123',
};

try {
  const { result, ...httpResponse } = await invoicesController.createInvoice(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Invoice W FVA

[[API Reference] - Create Invoice](https://xendit.github.io/apireference/#create-invoices)

[[Xendit Docs] - Invoices](https://docs.xendit.co/xeninvoice/)

```ts
async createInvoiceWFVA(
  contentType: string,
  body: CreateInvoiceWFVARequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateInvoiceWFVARequest`](/doc/models/create-invoice-wfva-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: CreateInvoiceWFVARequest = {
  externalId: 'invoice_fva-{{$timestamp}}',
  amount: 50000,
  payerEmail: 'customer@domain.com',
  description: 'Invoice-{{$timestamp}}',
  callbackVirtualAccountId: '5bdaa2a8aec237552b1d547b',
};

try {
  const { result, ...httpResponse } = await invoicesController.createInvoiceWFVA(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Invoice

[[API Reference] - Get Invoice](https://xendit.github.io/apireference/#get-an-invoice)

[[Xendit Docs] - Invoices](https://docs.xendit.co/xeninvoice/)

```ts
async getInvoice(
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
  const { result, ...httpResponse } = await invoicesController.getInvoice();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

