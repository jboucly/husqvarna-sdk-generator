# Timer

Date and time in seconds from 1970-01-01 in the mower. Time zone is used to format the date and time correctly in the cloud before sending the date and time to the mower. Time zone is only required for some mowers. If your mower supports work areas the time zone will be ignored, since its not is neccassary. The timestamp is used by the mower to trigger the schedule. At the moment you can not get the timestamp from the mower.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateTime** | **number** | Timestamp in seconds from 1970-01-01. The timestamp needs to be in 24 hours from UTC time. | [optional] [default to undefined]
**timeZone** | **string** | Time zone needed for mowers that don\&#39;t support work areas. The time zone can be a time zone or GMT +- offset i.e. GMT+2. It\&#39;s recommended to use a time zone to auto adjust for daylight saving time (DST). | [optional] [default to undefined]

## Example

```typescript
import { Timer } from 'automower-connect-sdk';

const instance: Timer = {
    dateTime,
    timeZone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
