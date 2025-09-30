# JsonApiDataStayOutZones

A primary data object compliant with the JSON API Specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of the data object. | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**attributes** | [**StayOutZones**](StayOutZones.md) |  | [optional] [default to undefined]

## Example

```typescript
import { JsonApiDataStayOutZones } from 'automower-connect-sdk';

const instance: JsonApiDataStayOutZones = {
    type,
    id,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
