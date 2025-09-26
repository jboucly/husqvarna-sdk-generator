# JsonApiError

A primary error object compliant with the JSON API Specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | A unique identifier for this particular occurrence of the problem. | [optional] [default to undefined]
**status** | **string** | The HTTP status code applicable to this problem, expressed as a string value. | [optional] [default to undefined]
**code** | **string** | An application specific error code, expressed as a string value. | [optional] [default to undefined]
**title** | **string** | A short, human readable summary of the problem that should not change from occurrence to occurrence of the problem, except for purposes of localization. | [optional] [default to undefined]
**detail** | **string** | A human readable explanation specific to this occurrence of the problem. Like title, this value can be localized. | [optional] [default to undefined]

## Example

```typescript
import { JsonApiError } from '@jboucly/automower-connect-sdk';

const instance: JsonApiError = {
    id,
    status,
    code,
    title,
    detail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
