
# Paymaya Tokenized Create Customer Request

## Structure

`PaymayaTokenizedCreateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `email` | `string` | Required | - |
| `givenNames` | `string` | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "mock-reference-id-{{$timestamp}}",
  "email": "testemail@email.com",
  "given_names": "John Doe"
}
```

