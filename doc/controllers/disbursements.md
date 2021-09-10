# Disbursements

```ts
const disbursementsController = new DisbursementsController(client);
```

## Class Name

`DisbursementsController`

## Methods

* [Create Disbursement](/doc/controllers/disbursements.md#create-disbursement)
* [Create Batch Disbursement](/doc/controllers/disbursements.md#create-batch-disbursement)
* [Get Disbursement](/doc/controllers/disbursements.md#get-disbursement)
* [List Disbursement Banks](/doc/controllers/disbursements.md#list-disbursement-banks)


# Create Disbursement

```ts
async createDisbursement(
  contentType: string,
  xIDEMPOTENCYKEY: string,
  body: CreateDisbursementRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `xIDEMPOTENCYKEY` | `string` | Header, Required | - |
| `body` | [`CreateDisbursementRequest`](/doc/models/create-disbursement-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const xIDEMPOTENCYKEY = '{{$timestamp}}';
const body: CreateDisbursementRequest = {
  externalId: 'disb-{{$timestamp}}',
  amount: 15000,
  bankCode: 'BCA',
  accountHolderName: 'Joe',
  accountNumber: '1234567890',
  description: 'Disbursement from Postman',
};

try {
  const { result, ...httpResponse } = await disbursementsController.createDisbursement(contentType, xIDEMPOTENCYKEY, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Batch Disbursement

Batch disbursements are a set of instructions containing multiple commands to disburse funds to any bank in Indonesia.

```ts
async createBatchDisbursement(
  contentType: string,
  xIDEMPOTENCYKEY: string,
  body: CreateBatchDisbursementRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `xIDEMPOTENCYKEY` | `string` | Header, Required | - |
| `body` | [`CreateBatchDisbursementRequest`](/doc/models/create-batch-disbursement-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = 'application/json';
const xIDEMPOTENCYKEY = '{{$timestamp}}';
const bodyDisbursements: Disbursement[] = [];

const bodydisbursements0: Disbursement = {
  amount: 20000,
  bankCode: 'BCA',
  bankAccountName: 'Fadlan',
  bankAccountNumber: '1234567890',
  description: 'Batch Disbursement',
  externalId: 'disbursement-1',
};

bodyDisbursements[0] = bodydisbursements0;

const bodydisbursements1EmailTo: string[] = ['test+to@xendit.co'];
const bodydisbursements1EmailCc: string[] = ['test+cc@xendit.co'];
const bodydisbursements1EmailBcc: string[] = ['test+bcc1@xendit.co', 'test+bcc2@xendit.co'];
const bodydisbursements1: Disbursement = {
  amount: 30000,
  bankCode: 'MANDIRI',
  bankAccountName: 'Lutfi',
  bankAccountNumber: '1234567891',
  description: 'Batch Disbursement with email notifications',
  externalId: 'disbursement-2',
};
bodydisbursements1.emailTo = bodydisbursements1EmailTo;
bodydisbursements1.emailCc = bodydisbursements1EmailCc;
bodydisbursements1.emailBcc = bodydisbursements1EmailBcc;

bodyDisbursements[1] = bodydisbursements1;

const body: CreateBatchDisbursementRequest = {
  reference: 'disb_batch-{{$timestamp}}',
  disbursements: bodyDisbursements,
};

try {
  const { result, ...httpResponse } = await disbursementsController.createBatchDisbursement(contentType, xIDEMPOTENCYKEY, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Disbursement

```ts
async getDisbursement(
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
  const { result, ...httpResponse } = await disbursementsController.getDisbursement();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Disbursement Banks

```ts
async listDisbursementBanks(
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
  const { result, ...httpResponse } = await disbursementsController.listDisbursementBanks();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

