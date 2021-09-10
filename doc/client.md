
# Client Class Documentation

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

## API-Xendit Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| paymentChannels | Gets PaymentChannelsController |
| authorizationCapture | Gets AuthorizationCaptureController |
| chargeRefund | Gets ChargeRefundController |
| dEVTestCases | Gets DEVTestCasesController |
| chargeCheckChargeStatus | Gets ChargeCheckChargeStatusController |
| createCustomerStep1 | Gets CreateCustomerStep1Controller |
| accountLinkingStep2 | Gets AccountLinkingStep2Controller |
| createPaymentMethodStep3 | Gets CreatePaymentMethodStep3Controller |
| tokenizedAccountLinking | Gets TokenizedAccountLinkingController |
| cardlessCredit | Gets CardlessCreditController |
| qRCodes | Gets QRCodesController |
| directDebit | Gets DirectDebitController |
| simulationsDev | Gets SimulationsDevController |
| virtualAccounts | Gets VirtualAccountsController |
| retailOutletsID | Gets RetailOutletsIDController |
| retailOuetletsPH | Gets RetailOuetletsPHController |
| invoices | Gets InvoicesController |
| disbursements | Gets DisbursementsController |
| xenPlatform | Gets XenPlatformController |
| transactionsBeta | Gets TransactionsBetaController |
| reportsBeta | Gets ReportsBetaController |
| misc | Gets MiscController |

