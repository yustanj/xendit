
# OVO Tokenized Create Customer Request

## Structure

`OVOTokenizedCreateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | - |
| `mobileNumber` | `string` | Required | - |
| `givenNames` | `string` | Required | - |

## Example (as JSON)

```json
{
  "reference_id": "mock-reference-id-{{$timestamp}}",
  "mobile_number": "+6208774494404",
  "given_names": "John Doe"
}
```

