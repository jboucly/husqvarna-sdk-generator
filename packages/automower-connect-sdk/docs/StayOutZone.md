# StayOutZone

A stay-out zone is an area that you can use to protect an area on you lawn. The Automower® will not access the are when the zone is enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** | Name of stay-out zone | [optional] [default to undefined]
**enabled** | **boolean** | If the stay-out zone is enabled, the Automower® will not access the zone. | [optional] [default to undefined]

## Example

```typescript
import { StayOutZone } from 'automower-connect-sdk';

const instance: StayOutZone = {
    id,
    name,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
