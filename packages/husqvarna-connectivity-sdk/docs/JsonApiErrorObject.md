# JsonApiErrorObject

A {JSON:API} error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**detail** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { JsonApiErrorObject } from '@jboucly/husqvarna-connectivity-sdk';

const instance: JsonApiErrorObject = {
    status,
    code,
    title,
    detail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
