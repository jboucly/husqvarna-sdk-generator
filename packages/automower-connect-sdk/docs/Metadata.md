# Metadata

Information if the mower is connected to the cloud and when last status was reported by the mower to the cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected** | **boolean** | Is the mower currently connected to the cloud. The mower needs to be connected to send command to the mower. | [default to undefined]
**statusTimestamp** | **number** | Timestamp for the last status update in milliseconds since 1970-01-01T00:00:00 in UTC time. NOTE! This timestamp is generated in the backend and not from the Mower. | [default to undefined]

## Example

```typescript
import { Metadata } from 'automower-connect-sdk';

const instance: Metadata = {
    connected,
    statusTimestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
