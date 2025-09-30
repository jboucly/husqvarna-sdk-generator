# Message

An error message with information when and where it occurred. Every message has a severity how much the error affect the Automower®.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Timestamp for the message in milliseconds since 1970-01-01T00:00:00 in local time. NOTE! This timestamp is in local time for the mower and is coming directly from the Automower®. | [default to undefined]
**code** | **number** | The error code. Please see https://developer.husqvarnagroup.cloud/apis/automower-connect-api?tab&#x3D;status%20description%20and%20error%20codes for details | [default to undefined]
**severity** | **string** | The severity of the error message. | [default to undefined]
**latitude** | **number** | Only available if the message has a position. | [optional] [default to undefined]
**longitude** | **number** | Only available if the message has a position. | [optional] [default to undefined]

## Example

```typescript
import { Message } from 'automower-connect-sdk';

const instance: Message = {
    time,
    code,
    severity,
    latitude,
    longitude,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
