# Tokenized - Account Linking

```ts
const tokenizedAccountLinkingController = new TokenizedAccountLinkingController(client);
```

## Class Name

`TokenizedAccountLinkingController`


# Tokenized - Get Account Balance

```ts
async tokenizedGetAccountBalance(
  linkedAccountTokenId: string,
  idempotencyKey: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TokenizedGetAccountBalance[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkedAccountTokenId` | `string` | Template, Required | - |
| `idempotencyKey` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TokenizedGetAccountBalance[]`](/doc/models/tokenized-get-account-balance.md)

## Example Usage

```ts
const linkedAccountTokenId = 'linked_account_token_id6';
const idempotencyKey = 'example-idepmtoncey-key';
try {
  const { result, ...httpResponse } = await tokenizedAccountLinkingController.tokenizedGetAccountBalance(linkedAccountTokenId, idempotencyKey);
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
[
  {
    "channel_code": "PH_PAYMAYA",
    "id": "la-da3fe9eb-bc66-4e4e-b176-df08dd2b876f",
    "type": "EWALLET",
    "properties": {
      "account_details": "+63(2)123456XXXX",
      "account_type": "EWALLET",
      "balance": null,
      "currency": "PHP",
      "description": null,
      "name": "John Peter Doe",
      "point_balance": null
    }
  }
]
```

