# Transactions Beta

```ts
const transactionsBetaController = new TransactionsBetaController(client);
```

## Class Name

`TransactionsBetaController`

## Methods

* [Get Transaction](/doc/controllers/transactions-beta.md#get-transaction)
* [List Transactions](/doc/controllers/transactions-beta.md#list-transactions)


# Get Transaction

```ts
async getTransaction(
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
  const { result, ...httpResponse } = await transactionsBetaController.getTransaction(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Transactions

```ts
async listTransactions(
  types: string,
  statuses: string,
  channelCategories: string,
  referenceId: string,
  productId: string,
  accountIdentifier: string,
  amount: string,
  currency: string,
  createdGte: string,
  createdLte: string,
  updatedGte: string,
  updatedLte: string,
  limit: number,
  afterId: string,
  beforeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `types` | `string` | Query, Required | - |
| `statuses` | `string` | Query, Required | - |
| `channelCategories` | `string` | Query, Required | - |
| `referenceId` | `string` | Query, Required | - |
| `productId` | `string` | Query, Required | - |
| `accountIdentifier` | `string` | Query, Required | - |
| `amount` | `string` | Query, Required | - |
| `currency` | `string` | Query, Required | - |
| `createdGte` | `string` | Query, Required | - |
| `createdLte` | `string` | Query, Required | - |
| `updatedGte` | `string` | Query, Required | - |
| `updatedLte` | `string` | Query, Required | - |
| `limit` | `number` | Query, Required | - |
| `afterId` | `string` | Query, Required | - |
| `beforeId` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const types = '<string>';
const statuses = '<string>';
const channelCategories = '<string>';
const referenceId = '<string>';
const productId = '<string>';
const accountIdentifier = '<string>';
const amount = '<number>';
const currency = '<string>';
const createdGte = Liquid error: Value cannot be null. (Parameter 'key');
const createdLte = Liquid error: Value cannot be null. (Parameter 'key');
const updatedGte = Liquid error: Value cannot be null. (Parameter 'key');
const updatedLte = Liquid error: Value cannot be null. (Parameter 'key');
const limit = 10;
const afterId = '<string>';
const beforeId = '<string>';
try {
  const { result, ...httpResponse } = await transactionsBetaController.listTransactions(types, statuses, channelCategories, referenceId, productId, accountIdentifier, amount, currency, createdGte, createdLte, updatedGte, updatedLte, limit, afterId, beforeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

