# JsonApiDataMessages

A primary data object compliant with the JSON API Specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of the data object. | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**attributes** | [**Messages**](Messages.md) |  | [optional] [default to undefined]

## Example

```typescript
import { JsonApiDataMessages } from '@jboucly/automower-connect-sdk';

const instance: JsonApiDataMessages = {
    type,
    id,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
