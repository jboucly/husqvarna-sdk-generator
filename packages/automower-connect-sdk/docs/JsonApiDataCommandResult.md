# JsonApiDataCommandResult

A primary data object compliant with the JSON API Specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of the data object. Depending on what action is sent to the mower. control is when sending an action (Start/Park). Timetable when updating calendar. | [optional] [default to undefined]
**id** | **string** | The command id generated when sending the command to the mower. | [optional] [default to undefined]

## Example

```typescript
import { JsonApiDataCommandResult } from 'automower-connect-sdk';

const instance: JsonApiDataCommandResult = {
    type,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
