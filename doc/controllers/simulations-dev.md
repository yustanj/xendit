# Simulations Dev

```ts
const simulationsDevController = new SimulationsDevController(client);
```

## Class Name

`SimulationsDevController`

## Methods

* [TEST Pay FVA](/doc/controllers/simulations-dev.md#test-pay-fva)
* [TEST Pay Alfamart FPC](/doc/controllers/simulations-dev.md#test-pay-alfamart-fpc)
* [TEST Pay Indomaret FPC](/doc/controllers/simulations-dev.md#test-pay-indomaret-fpc)
* [TEST Invoice Paid Virtual Account](/doc/controllers/simulations-dev.md#test-invoice-paid-virtual-account)
* [TEST Payment Invoice VA](/doc/controllers/simulations-dev.md#test-payment-invoice-va)
* [TEST Alfamart Payment](/doc/controllers/simulations-dev.md#test-alfamart-payment)
* [TEST Disbursement Fail Not Enough Balance Error](/doc/controllers/simulations-dev.md#test-disbursement-fail-not-enough-balance-error)
* [TEST Disbursement Fail Switching Network Downtime](/doc/controllers/simulations-dev.md#test-disbursement-fail-switching-network-downtime)
* [TEST Disbursement Fail Rejected by Bank](/doc/controllers/simulations-dev.md#test-disbursement-fail-rejected-by-bank)
* [TEST Disbursement Success](/doc/controllers/simulations-dev.md#test-disbursement-success)
* [TEST Disbursement Fail Rejected Because Temporary Unknown Error](/doc/controllers/simulations-dev.md#test-disbursement-fail-rejected-because-temporary-unknown-error)
* [TEST Disbursement Fail Rejected Because Fatal Error](/doc/controllers/simulations-dev.md#test-disbursement-fail-rejected-because-fatal-error)
* [TEST Disbursement Fail Unknown Bank Network Error](/doc/controllers/simulations-dev.md#test-disbursement-fail-unknown-bank-network-error)
* [TEST Disbursement Fail Bank Maintenance Downtime](/doc/controllers/simulations-dev.md#test-disbursement-fail-bank-maintenance-downtime)
* [TEST Disbursement Fail Invalid Bank Account](/doc/controllers/simulations-dev.md#test-disbursement-fail-invalid-bank-account)


# TEST Pay FVA

Fixed Virtual Account (FVA) payment simulation by `external_id`

```ts
async tESTPayFVA(
  contentType: string,
  body: TESTPayFVARequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTPayFVARequest`](/doc/models/test-pay-fva-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTPayFVARequest = {
  amount: 50000,
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTPayFVA(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Pay Alfamart FPC

```ts
async tESTPayAlfamartFPC(
  contentType: string,
  body: TESTPayAlfamartFPCRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTPayAlfamartFPCRequest`](/doc/models/test-pay-alfamart-fpc-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTPayAlfamartFPCRequest = {
  retailOutletName: 'ALFAMART',
  paymentCode: 'JOE1',
  transferAmount: 25000,
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTPayAlfamartFPC(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Pay Indomaret FPC

```ts
async tESTPayIndomaretFPC(
  contentType: string,
  body: TESTPayIndomaretFPCRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTPayIndomaretFPCRequest`](/doc/models/test-pay-indomaret-fpc-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTPayIndomaretFPCRequest = {
  retailOutletName: 'INDOMARET',
  paymentCode: 'JOE1',
  transferAmount: 25000,
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTPayIndomaretFPC(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Invoice Paid Virtual Account

```ts
async tESTInvoicePaidVirtualAccount(
  contentType: string,
  body: TESTInvoicePaidVirtualAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTInvoicePaidVirtualAccountRequest`](/doc/models/test-invoice-paid-virtual-account-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTInvoicePaidVirtualAccountRequest = {
  externalId: 'test-va-success-{{$timestamp}}',
  amount: 3000000,
  payerEmail: 'customer@domain.com',
  description: 'Test - VA Successful invoice payment',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTInvoicePaidVirtualAccount(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Payment Invoice VA

Invoice Virtual Account (IVA) payment simulation by `bank_account_number`

```ts
async tESTPaymentInvoiceVA(
  contentType: string,
  body: TESTPaymentInvoiceVARequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTPaymentInvoiceVARequest`](/doc/models/test-payment-invoice-va-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTPaymentInvoiceVARequest = {
  bankCode: 'MANDIRI',
  bankAccountNumber: '886089999706981',
  transferAmount: 50000,
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTPaymentInvoiceVA(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Alfamart Payment

```ts
async tESTAlfamartPayment(
  contentType: string,
  body: TESTAlfamartPaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTAlfamartPaymentRequest`](/doc/models/test-alfamart-payment-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTAlfamartPaymentRequest = {
  retailOutletName: 'ALFAMART',
  paymentCode: 'JOE1',
  transferAmount: 80000,
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTAlfamartPayment(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Not Enough Balance Error

Will return not enough balance error

```ts
async tESTDisbursementFailNotEnoughBalanceError(
  contentType: string,
  body: TESTDisbursementFailNotEnoughBalanceErrorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailNotEnoughBalanceErrorRequest`](/doc/models/test-disbursement-fail-not-enough-balance-error-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailNotEnoughBalanceErrorRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 42,
  bankCode: 'BCA',
  accountHolderName: 'Jack',
  accountNumber: '86868677',
  description: 'Test - Not enough balance error',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailNotEnoughBalanceError(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Switching Network Downtime

Will return error for switching network error

```ts
async tESTDisbursementFailSwitchingNetworkDowntime(
  contentType: string,
  body: TESTDisbursementFailSwitchingNetworkDowntimeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailSwitchingNetworkDowntimeRequest`](/doc/models/test-disbursement-fail-switching-network-downtime-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailSwitchingNetworkDowntimeRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 15000,
  bankCode: 'MANDIRI',
  accountHolderName: 'Siti',
  accountNumber: '12121212',
  description: 'Test - Switching network error',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailSwitchingNetworkDowntime(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Rejected by Bank

Will return error for rejected by bank error

```ts
async tESTDisbursementFailRejectedByBank(
  contentType: string,
  body: TESTDisbursementFailRejectedByBankRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailRejectedByBankRequest`](/doc/models/test-disbursement-fail-rejected-by-bank-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailRejectedByBankRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 15000,
  bankCode: 'MANDIRI',
  accountHolderName: 'Budi',
  accountNumber: '8787878',
  description: 'Test - Rejected by bank error',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailRejectedByBank(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Success

Will complete payment and initiate callback API to your URL

```ts
async tESTDisbursementSuccess(
  contentType: string,
  body: TESTDisbursementSuccessRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementSuccessRequest`](/doc/models/test-disbursement-success-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementSuccessRequest = {
  externalId: 'disb_test_success-{{$timestamp}}',
  amount: 90000,
  bankCode: 'BCA',
  accountHolderName: 'Joe',
  accountNumber: '1234567890',
  description: 'Test - Successful disbursement',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementSuccess(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Rejected Because Temporary Unknown Error

Will return temporary transfer error

```ts
async tESTDisbursementFailRejectedBecauseTemporaryUnknownError(
  contentType: string,
  body: TESTDisbursementFailRejectedBecauseTemporaryUnknownErrorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailRejectedBecauseTemporaryUnknownErrorRequest`](/doc/models/test-disbursement-fail-rejected-because-temporary-unknown-error-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailRejectedBecauseTemporaryUnknownErrorRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 15000,
  bankCode: 'MANDIRI',
  accountHolderName: 'Sutiono',
  accountNumber: '868686',
  description: 'Test - Temporary unknown error',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailRejectedBecauseTemporaryUnknownError(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Rejected Because Fatal Error

Will return transfer error

```ts
async tESTDisbursementFailRejectedBecauseFatalError(
  contentType: string,
  body: TESTDisbursementFailRejectedBecauseFatalErrorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailRejectedBecauseFatalErrorRequest`](/doc/models/test-disbursement-fail-rejected-because-fatal-error-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailRejectedBecauseFatalErrorRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 15000,
  bankCode: 'MANDIRI',
  accountHolderName: 'Adnin',
  accountNumber: '1351357',
  description: 'Test - Fatal error',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailRejectedBecauseFatalError(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Unknown Bank Network Error

Will return error for unknown bank network error

```ts
async tESTDisbursementFailUnknownBankNetworkError(
  contentType: string,
  body: TESTDisbursementFailUnknownBankNetworkErrorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailUnknownBankNetworkErrorRequest`](/doc/models/test-disbursement-fail-unknown-bank-network-error-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailUnknownBankNetworkErrorRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 15000,
  bankCode: 'MANDIRI',
  accountHolderName: 'Andri',
  accountNumber: '987654321',
  description: 'Test - Unknown bank network error',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailUnknownBankNetworkError(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Bank Maintenance Downtime

Will return error for temporary bank network error

```ts
async tESTDisbursementFailBankMaintenanceDowntime(
  contentType: string,
  body: TESTDisbursementFailBankMaintenanceDowntimeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailBankMaintenanceDowntimeRequest`](/doc/models/test-disbursement-fail-bank-maintenance-downtime-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailBankMaintenanceDowntimeRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 15000,
  bankCode: 'MANDIRI',
  accountHolderName: 'Yono',
  accountNumber: '321321321',
  description: 'Test - Bank maintenance downtime error',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailBankMaintenanceDowntime(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST Disbursement Fail Invalid Bank Account

Will return error for invalid bank account

```ts
async tESTDisbursementFailInvalidBankAccount(
  contentType: string,
  body: TESTDisbursementFailInvalidBankAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`TESTDisbursementFailInvalidBankAccountRequest`](/doc/models/test-disbursement-fail-invalid-bank-account-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const body: TESTDisbursementFailInvalidBankAccountRequest = {
  externalId: 'disb_test_fail-{{$timestamp}}',
  amount: 15000,
  bankCode: 'MANDIRI',
  accountHolderName: 'Rizky',
  accountNumber: '7654321',
  description: 'Test - Bank account does not exist',
};

try {
  const { result, ...httpResponse } = await simulationsDevController.tESTDisbursementFailInvalidBankAccount(contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

