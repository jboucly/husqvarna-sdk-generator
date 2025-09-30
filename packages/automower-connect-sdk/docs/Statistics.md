# Statistics

Information about the statistics. If a value is missing the mower does not support the value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cuttingBladeUsageTime** | **number** | The number of seconds since the last reset of the cutting blade usage counter. | [optional] [default to undefined]
**downTime** | **number** | The number of seconds the mower has been disconnected from the cloud. Not available on all models. | [optional] [default to undefined]
**numberOfChargingCycles** | **number** | Number of charging cycles. | [optional] [default to undefined]
**numberOfCollisions** | **number** | The total number of collisions. | [optional] [default to undefined]
**totalChargingTime** | **number** | Total charging time in seconds. | [optional] [default to undefined]
**totalCuttingTime** | **number** | Total cutting time in seconds. | [optional] [default to undefined]
**totalDriveDistance** | **number** | Total drive distance in meters. It\&#39;s a calculated value based on totalRunningTime multiply with average speed for the mower depending on the model. | [optional] [default to undefined]
**totalRunningTime** | **number** | The total running time in seconds. (the wheel motors have been running) | [optional] [default to undefined]
**totalSearchingTime** | **number** | The total searching time in seconds. | [optional] [default to undefined]
**upTime** | **number** | The number of seconds the mower has been connected to the cloud. | [optional] [default to undefined]

## Example

```typescript
import { Statistics } from 'automower-connect-sdk';

const instance: Statistics = {
    cuttingBladeUsageTime,
    downTime,
    numberOfChargingCycles,
    numberOfCollisions,
    totalChargingTime,
    totalCuttingTime,
    totalDriveDistance,
    totalRunningTime,
    totalSearchingTime,
    upTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
