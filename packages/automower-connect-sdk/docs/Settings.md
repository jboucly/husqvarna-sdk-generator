# Settings

Information about the settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cuttingHeight** | **number** | Selected cutting height, Range:1-9 | [optional] [default to undefined]
**headlight** | [**HeadlightHeadlight**](HeadlightHeadlight.md) |  | [optional] [default to undefined]
**dateTime** | **number** | Timestamp in seconds from 1970-01-01. The timestamp needs to be in 24 hours from UTC time. | [optional] [default to undefined]
**timeZone** | **string** | Time zone needed for mowers that don\&#39;t support work areas. The time zone can be a time zone or GMT +- offset i.e. GMT+2. It\&#39;s recommended to use a time zone to auto adjust for daylight saving time (DST). | [optional] [default to undefined]

## Example

```typescript
import { Settings } from 'automower-connect-sdk';

const instance: Settings = {
    cuttingHeight,
    headlight,
    dateTime,
    timeZone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
