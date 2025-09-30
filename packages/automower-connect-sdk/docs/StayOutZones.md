# StayOutZones

Information about stay-out zones if supported by the Automower®. Stay-out zones are managed in the Automower® Connect app. To create a stay-out zone you need to use the Automower® Connect app.   You can create stay-out zones around areas of your lawn that you do not want the mower to enter: for example, if you have an area with newly sown grass or beautiful spring flowers. The stay-out zone can be activated or deactivated, but not scheduled. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dirty** | **boolean** | If the stay-out zones are synchronized with the Husqvarna cloud. If the map is dirty you can not enable or disable a stay-out zone. | [optional] [default to undefined]
**zones** | [**Array&lt;StayOutZone&gt;**](StayOutZone.md) | List of all stay-out zones for the Automower®. | [optional] [default to undefined]

## Example

```typescript
import { StayOutZones } from 'automower-connect-sdk';

const instance: StayOutZones = {
    dirty,
    zones,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
