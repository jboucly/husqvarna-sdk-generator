# JsonApiDataWorkArea

A primary data object compliant with the JSON API Specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of the data object. | [optional] [default to undefined]
**id** | **number** | The identity of the work area | [optional] [default to undefined]
**attributes** | [**WorkAreaData**](WorkAreaData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { JsonApiDataWorkArea } from 'automower-connect-sdk';

const instance: JsonApiDataWorkArea = {
    type,
    id,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
