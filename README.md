
# Getting Started with API-Xendit

## Introduction

### Reference

- [Xendit API Reference](https://developers.xendit.co/)
- [Testing Scenarios](https://developers.xendit.co/api-reference/#test-scenarios)
- [Implementation Guide](https://xendit.github.io/xendit-dashboard-docs/postman-instructions.html)

### Getting Started

- [Signup](https://dashboard.xendit.co/register)
- [Get API Keys](https://dashboard.xendit.co/settings/developers#api-keys)

## Installation

The following section explains how to use the API-XenditLib library in a new project.

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `username` | `string` |  |
| `password` | `string` |  |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production
  username: 'username',
  password: 'password',
})
```

## Authorization

This API uses `Basic Authentication`.

## List of APIs

* [Payment Channels](/doc/controllers/payment-channels.md)
* [Authorization Capture](/doc/controllers/authorization-capture.md)
* [Charge Refund](/doc/controllers/charge-refund.md)
* [DEV Test Cases](/doc/controllers/dev-test-cases.md)
* [Charge Check Charge Status](/doc/controllers/charge-check-charge-status.md)
* [Create Customer - Step 1](/doc/controllers/create-customer-step-1.md)
* [Account Linking - Step 2](/doc/controllers/account-linking-step-2.md)
* [Create Payment Method - Step 3](/doc/controllers/create-payment-method-step-3.md)
* [Tokenized - Account Linking](/doc/controllers/tokenized-account-linking.md)
* [Cardless Credit](/doc/controllers/cardless-credit.md)
* [QR Codes](/doc/controllers/qr-codes.md)
* [Direct Debit](/doc/controllers/direct-debit.md)
* [Simulations Dev](/doc/controllers/simulations-dev.md)
* [Virtual Accounts](/doc/controllers/virtual-accounts.md)
* [Retail Outlets - ID](/doc/controllers/retail-outlets-id.md)
* [Retail Ouetlets - PH](/doc/controllers/retail-ouetlets-ph.md)
* [Invoices](/doc/controllers/invoices.md)
* [Disbursements](/doc/controllers/disbursements.md)
* [Xen Platform](/doc/controllers/xen-platform.md)
* [Transactions Beta](/doc/controllers/transactions-beta.md)
* [Reports Beta](/doc/controllers/reports-beta.md)
* [Misc](/doc/controllers/misc.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

