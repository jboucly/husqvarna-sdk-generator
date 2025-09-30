# WorkArea

A work area is part of your lawn that can be scheduled separately and assigned its own cutting height. The schedule and cutting height set for the work area only applies to this area and only when the mower is operating according to the work area schedule. Work areas are created and managed in the Automower® Connect app. In the app you add, edit or delete a work area. You can also name the area, set schedule and cutting height.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workAreaId** | **number** |  | [optional] [default to undefined]
**name** | **string** | Name of the work area | [optional] [default to undefined]
**cuttingHeight** | **number** | Cutting height in percent. 0-100 | [optional] [default to undefined]
**enabled** | **boolean** | If the work area is enabled or disabled. | [optional] [default to undefined]
**progress** | **number** | The progress on a work are. Only available for EPOS mowers and systematic mowing work areas. See https://www.husqvarna.com/uk/support/husqvarna-self-service/what-is-systematic-mowing-ka-70248/ | [optional] [default to undefined]
**lastTimeCompleted** | **number** | Timestamp in seconds from 1970-01-01 when the work area was last completed. The timestamp is in local time on the mower. Only available for EPOS mowers and systematic mowing work areas. See https://www.husqvarna.com/uk/support/husqvarna-self-service/what-is-systematic-mowing-ka-70248/ | [optional] [default to undefined]

## Example

```typescript
import { WorkArea } from 'automower-connect-sdk';

const instance: WorkArea = {
    workAreaId,
    name,
    cuttingHeight,
    enabled,
    progress,
    lastTimeCompleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
