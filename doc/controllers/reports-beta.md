# Reports Beta

```ts
const reportsBetaController = new ReportsBetaController(client);
```

## Class Name

`ReportsBetaController`

## Methods

* [Get Report](/doc/controllers/reports-beta.md#get-report)
* [Generate Report](/doc/controllers/reports-beta.md#generate-report)


# Get Report

```ts
async getReport(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await reportsBetaController.getReport(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Report

```ts
async generateReport(
  body: GenerateReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GenerateReportRequest`](/doc/models/generate-report-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bodyFilter: Filter = {
  from: '2021-06-23T04:01:55.574Z',
  to: '2021-06-24T04:01:55.574Z',
};

const body: GenerateReportRequest = {
  type: 'BALANCE_HISTORY',
  filter: bodyFilter,
  format: 'CSV',
  currency: 'IDR',
};

try {
  const { result, ...httpResponse } = await reportsBetaController.generateReport(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

